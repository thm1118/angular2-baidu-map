import { Injectable } from '@angular/core';
import { isNull } from '../helpers/object';
import { LazyMapAPILoader } from './mapLoader';
import { Map, MapOptions } from '../types/Map';
import { BMap } from '../types/BMap';

@Injectable()
export class MapService {
    private _map: Map;

    constructor(private _loader: LazyMapAPILoader) { }

    createMap(el: HTMLElement, mapOptions: MapOptions): Promise<Map> {
        return this
            ._loader
            .load()
            .then(() => {
                this._map = new (<BMap>window['BMap']).Map(el, mapOptions);
                this.setOptions(mapOptions);
                return this._map;
            });
    }

    setOptions(opts: MapOptions): void {
        if (!isNull(opts.disableDragging)) {
            this._map[(opts.disableDragging ? 'disable' : 'enable') + 'Dragging']();
        }
        if (!isNull(opts.enableScrollWheelZoom)) {
            this._map[(opts.enableScrollWheelZoom ? 'enable' : 'disable') + 'ScrollWheelZoom']();
        }
        if (!isNull(opts.disableDoubleClickZoom)) {
            this._map[(opts.disableDoubleClickZoom ? 'disable' : 'enable') + 'DoubleClickZoom']();
        }
        if (!isNull(opts.enableKeyboard)) {
            this._map[(opts.enableKeyboard ? 'enable' : 'disable') + 'Keyboard']();
        }
        if (!isNull(opts.enableInertialDragging)) {
            this._map[(opts.enableInertialDragging ? 'enable' : 'disable') + 'InertialDragging']();
        }
        if (!isNull(opts.enableContinuousZoom)) {
            this._map[(opts.enableContinuousZoom ? 'enable' : 'disable') + 'ContinuousZoom']();
        }
        if (!isNull(opts.disablePinchToZoom)) {
            this._map[(opts.disablePinchToZoom ? 'disable' : 'enable') + 'PinchToZoom']();
        }
        if (!isNull(opts.cursor)) {
            this._map.setDefaultCursor(opts.cursor);
        }
        if (!isNull(opts.draggingCursor)) {
            this._map.setDraggingCursor(opts.draggingCursor);
        }
        if (!isNull(opts.currentCity)) {
            this._map.setCurrentCity(opts.currentCity);
        }
        if (!isNull(opts.centerAndZoom)) {
            this._map.centerAndZoom(new (<BMap>window['BMap']).Point(opts.centerAndZoom.lng, opts.centerAndZoom.lat), opts.centerAndZoom.zoom);
        }
    }

    getNativeMap(): Map {
        return this._map;
    }

}

