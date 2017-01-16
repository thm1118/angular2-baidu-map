import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { isNull } from '../helpers/object';
import { ScriptLoader } from './scriptLoader';
import { Map, MapOptions } from '../types/Map';
import { BMap } from '../types/BMap';

@Injectable()
export class MapService {

    private _map: Promise<Map>;
    private _mapResolver: (value: Map) => void;

    constructor(private _loader: ScriptLoader, private _zone: NgZone) {
        this._map = new Promise<Map>((resolve: () => void) => {
            this._mapResolver = resolve;
        });
    }

    createMap(el: HTMLElement, mapOptions: MapOptions): Promise<Map> {
        return this
            ._loader
            .load()
            .then(() => {
                const map = new (<BMap>window['BMap']).Map(el, mapOptions);
                this.setOptions(mapOptions);
                this._mapResolver(map);
                return this._map;
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


    createObservable<T>(target: any, event: String): Observable<T> {
        return Observable.create((observer: Observer<T>) => {
            target.addEventListener(event, (e: T) => {
                return this._zone.run(() => observer.next(e));
            });
        });
    }

    getNativeMap(): Promise<Map> {
        return this._map;
    }

}

