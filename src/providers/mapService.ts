import { Injectable } from '@angular/core'

import { isBoolean, isNull } from '../helpers/object'
import { BControl } from '../types/Control'
import { BMapInstance, MapOptions } from '../types/Map'
import { Overlay } from '../types/Overlay'

import { toPoint } from '../helpers/transformer'

import { ScriptLoader } from './scriptLoader'

@Injectable()
export class MapService {
  private _map: Promise<BMapInstance>
  private _mapResolver: (value: BMapInstance) => void

  constructor(private _loader: ScriptLoader) {
    this._map = new Promise<BMapInstance>((resolve: () => void) => {
      this._mapResolver = resolve
    })
  }

  public createMap(
    el: HTMLElement,
    mapOptions: MapOptions
  ): Promise<BMapInstance> {
    return new Promise(resolve => {
      this._loader.load(() => {
        const map = new window.BMap.Map(el, mapOptions)
        this.setOptions(mapOptions)
        this._mapResolver(map)
        resolve(map)
      })
    })
  }

  public setOptions(opts: MapOptions): void {
    const {
      disableDragging,
      enableScrollWheelZoom,
      disableDoubleClickZoom,
      enableKeyboard,
      enableInertialDragging,
      enableAutoResize,
      enableContinuousZoom,
      disablePinchToZoom
    } = opts

    if (isBoolean(disableDragging)) {
      this._map.then(map =>
        map[(disableDragging ? 'disable' : 'enable') + 'Dragging']()
      )
    }
    if (isBoolean(enableScrollWheelZoom)) {
      this._map.then(map =>
        map[
          (enableScrollWheelZoom ? 'enable' : 'disable') + 'ScrollWheelZoom'
        ]()
      )
    }
    if (isBoolean(enableAutoResize)) {
      this._map.then(map =>
        map[(enableAutoResize ? 'enable' : 'disable') + 'AutoResize']()
      )
    }
    if (isBoolean(disableDoubleClickZoom)) {
      this._map.then(map =>
        map[
          (disableDoubleClickZoom ? 'disable' : 'enable') + 'DoubleClickZoom'
        ]()
      )
    }
    if (isBoolean(enableKeyboard)) {
      this._map.then(map =>
        map[(enableKeyboard ? 'enable' : 'disable') + 'Keyboard']()
      )
    }
    if (isBoolean(enableInertialDragging)) {
      this._map.then(map =>
        map[
          (enableInertialDragging ? 'enable' : 'disable') + 'InertialDragging'
        ]()
      )
    }
    if (isBoolean(enableContinuousZoom)) {
      this._map.then(map =>
        map[(enableContinuousZoom ? 'enable' : 'disable') + 'ContinuousZoom']()
      )
    }
    if (isBoolean(disablePinchToZoom)) {
      this._map.then(map =>
        map[(disablePinchToZoom ? 'disable' : 'enable') + 'PinchToZoom']()
      )
    }
    if (!isNull(opts.cursor)) {
      this._map.then(map => map.setDefaultCursor(opts.cursor))
    }
    if (!isNull(opts.draggingCursor)) {
      this._map.then(map => map.setDraggingCursor(opts.draggingCursor))
    }
    if (!isNull(opts.currentCity)) {
      this._map.then(map => map.setCurrentCity(opts.currentCity))
    }
    if (!isNull(opts.centerAndZoom)) {
      this._map.then(map => {
        map.centerAndZoom(toPoint(opts.centerAndZoom), opts.centerAndZoom.zoom)
      })
    }
  }

  public addOverlay(
    cb: (map: BMapInstance) => Overlay
  ): Promise<{ map: BMapInstance; overlay: Overlay }> {
    return this._map.then((map: BMapInstance) => {
      const overlay = cb(map)
      map.addOverlay(overlay)
      return { map, overlay }
    })
  }

  public removeOverlay(overlay: Overlay): Promise<void> {
    return this._map.then((map: BMapInstance) => {
      map.removeOverlay(overlay)
    })
  }

  public addControl(
    cb: (map: BMapInstance) => BControl
  ): Promise<{ map: BMapInstance; control: BControl }> {
    return this._map.then((map: BMapInstance) => {
      const control = cb(map)
      map.addControl(control)
      return { map, control }
    })
  }

  public removeControl(control: BControl): Promise<void> {
    return this._map.then((map: BMapInstance) => {
      map.removeControl(control)
    })
  }

  public getNativeMap(): Promise<BMapInstance> {
    return this._map
  }
}
