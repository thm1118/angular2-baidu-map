import { Inject, Injectable } from '@angular/core'
import { nullCheck } from '../helpers/validate'

export enum LOADING_STATE {
  'NON',
  'LOADED',
  'LOADING'
}

export class ScriptLoaderConfig {
  public ak: string = ''
}

window._scriptLoadState = LOADING_STATE.NON
window._loadingCallbacks = []

@Injectable()
export class ScriptLoader {
  private _config: ScriptLoaderConfig

  constructor(@Inject(ScriptLoaderConfig) config: ScriptLoaderConfig) {
    nullCheck(config.ak, 'ak must be provided')

    this._config = config
  }

  public load(cb: () => void): void {
    if (window._scriptLoadState === LOADING_STATE.LOADED) {
      switchDisplay('baidu-map .baidu-map-instance', 'block')
      switchDisplay('baidu-map .baidu-map-offline', 'none')
      return cb()
    }
    if (window._scriptLoadState === LOADING_STATE.LOADING) {
      window._loadingCallbacks.push(cb)
      return
    }
    window._scriptLoadState = LOADING_STATE.LOADING
    window._loadingCallbacks.push(cb)
    const MAP_URL = `//api.map.baidu.com/api?v=2.0&ak=${this._config
      .ak}&callback=baidumapinit&s=${window.location.protocol === 'https:'
      ? 1
      : 0}`

    window.baidumapinit = () => {
      window._scriptLoadState = LOADING_STATE.LOADED
      switchDisplay('baidu-map .baidu-map-instance', 'block')
      switchDisplay('baidu-map .baidu-map-offline', 'none')
      window._loadingCallbacks.forEach((c: () => void) => {
        c()
      })
    }
    appendScriptTag(MAP_URL)
  }
}

function appendScriptTag(url: string) {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  script.onerror = () => {
    switchDisplay('baidu-map .baidu-map-offline', 'block')
    switchDisplay('baidu-map .baidu-map-instance', 'none')
    document.body.removeChild(script)

    setTimeout(() => {
      appendScriptTag(url)
    }, 30000)
  }
  document.body.appendChild(script)
}

function switchDisplay(selector: string, state: string) {
  Array.prototype.slice
    .call(document.querySelectorAll(selector))
    .forEach((node: HTMLElement) => {
      node.style.display = state
    })
}
