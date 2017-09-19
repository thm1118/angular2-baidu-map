import { Injectable } from '@angular/core';

import { isNull } from '../helpers/object';
import { ScriptLoader } from './scriptLoader';
import { Map, MapOptions } from '../types/Map';
import { BMap } from '../types/BMap';

@Injectable()
export class MapService {

    private _map: Promise<Map>;
    private _mapResolver: (value: Map) => void;

    constructor(private _loader: ScriptLoader) {
        this._map = new Promise<Map>((resolve: () => void) => {
            this._mapResolver = resolve;
        });
    }

    createMap(el: HTMLElement, mapOptions: MapOptions): Promise<Map> {
        return new Promise(resolve => {
            this
                ._loader
                .load(() => {
                    const map = new (<BMap>window['BMap']).Map(el, mapOptions);
                    this.setOptions(mapOptions);
                    this._mapResolver(map);
                    resolve(map);
                });
        });
    }

    setOptions(opts: MapOptions): void {
        if (!isNull(opts.disableDragging)) {
            this._map.then(map => map[(opts.disableDragging ? 'disable' : 'enable') + 'Dragging']());
        }
        if (!isNull(opts.enableScrollWheelZoom)) {
            this._map.then(map => map[(opts.enableScrollWheelZoom ? 'enable' : 'disable') + 'ScrollWheelZoom']());
        }
        if (!isNull(opts.disableDoubleClickZoom)) {
            this._map.then(map => map[(opts.disableDoubleClickZoom ? 'disable' : 'enable') + 'DoubleClickZoom']());
        }
        if (!isNull(opts.enableKeyboard)) {
            this._map.then(map => map[(opts.enableKeyboard ? 'enable' : 'disable') + 'Keyboard']());
        }
        if (!isNull(opts.enableInertialDragging)) {
            this._map.then(map => map[(opts.enableInertialDragging ? 'enable' : 'disable') + 'InertialDragging']());
        }
        if (!isNull(opts.enableContinuousZoom)) {
            this._map.then(map => map[(opts.enableContinuousZoom ? 'enable' : 'disable') + 'ContinuousZoom']());
        }
        if (!isNull(opts.disablePinchToZoom)) {
            this._map.then(map => map[(opts.disablePinchToZoom ? 'disable' : 'enable') + 'PinchToZoom']());
        }
        if (!isNull(opts.cursor)) {
            this._map.then(map => map.setDefaultCursor(opts.cursor));
        }
        if (!isNull(opts.draggingCursor)) {
            this._map.then(map => map.setDraggingCursor(opts.draggingCursor));
        }
        if (!isNull(opts.currentCity)) {
            this._map.then(map => map.setCurrentCity(opts.currentCity));
        }
        if (!isNull(opts.centerAndZoom)) {
            this._map.then(map => {
                const point = new (<BMap>window['BMap']).Point(opts.centerAndZoom.lng, opts.centerAndZoom.lat);
                map.centerAndZoom(point, opts.centerAndZoom.zoom);
            });
        }
    }

    getNativeMap(): Promise<Map> {
        return this._map;
    }

}

