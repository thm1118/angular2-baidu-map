import { Injectable } from '@angular/core'

import { isBoolean, isNull } from '../helpers/object'
import { BMap } from '../types/BMap'
import { Map, MapOptions } from '../types/Map'
import { Overlay } from '../types/Overlay'
import { ScriptLoader } from './scriptLoader'

@Injectable()
export class MapService {
  private _map: Promise<Map>
  private _mapResolver: (value: Map) => void

  constructor(private _loader: ScriptLoader) {
    this._map = new Promise<Map>((resolve: () => void) => {
      this._mapResolver = resolve
    })
  }

  public createMap(el: HTMLElement, mapOptions: MapOptions): Promise<Map> {
    return new Promise(resolve => {
      this._loader.load(() => {
        const map = new (window.BMap as BMap).Map(el, mapOptions)
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
        const point = new (window.BMap as BMap).Point(
          opts.centerAndZoom.lng,
          opts.centerAndZoom.lat
        )
        map.centerAndZoom(point, opts.centerAndZoom.zoom)
      })
    }
  }

  public addOverlay(
    cb: (map: Map) => Overlay
  ): Promise<{ map: Map; overlay: Overlay }> {
    return this._map.then((map: Map) => {
      const overlay = cb(map)
      map.addOverlay(overlay)
      return { map, overlay }
    })
  }

  public removeOverlay(overlay: Overlay): Promise<void> {
    return this._map.then((map: Map) => {
      map.removeOverlay(overlay)
    })
  }

  public getNativeMap(): Promise<Map> {
    return this._map
  }
}
