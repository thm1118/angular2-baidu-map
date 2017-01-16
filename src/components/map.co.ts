import { Component, EventEmitter, ElementRef, OnInit, OnChanges, Input, Output, SimpleChange } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Map, MapOptions } from '../types/Map';
import { MapService } from '../providers/mapService';

@Component({
    selector: 'baidu-map',
    template: `
    <div class="baidu-map-instance"></div>
    <div class="baidu-map-offline">
        <label>{{ 'NO_NETWORK' }}</label>
    </div>
    <div class="tranclude-content">
        <ng-content></ng-content>
    </div>
    `,
    styles: [
        `
        .baidu-map-instance {
            width: 100%;
            height: 100%;
            display: none;
        }
        .baidu-map-offline {
            width: 100%;
            height: 100%;
            backgroundColor: #E6E6E6;
            position: relative;
            display: none;
        }
        .baidu-map-offline label {
            fontSize: 30px;
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
        }
        .tranclude-content {
            display: none;
        }
        `
    ],
    providers: [
        MapService
    ]
})
export class BaiduMapComponent implements OnInit, OnChanges {
    @Input() options: MapOptions;

    @Output() loaded = new EventEmitter();
    @Output() clicked = new EventEmitter();

    _subscriber: Subscription;

    constructor(private _el: ElementRef, private _service: MapService) { }

    ngOnInit() {
        this
            ._service
            .createMap(this._el.nativeElement, this.options)
            .then(map => {
                this.loaded.emit(map);
                return map;
            })
            .then(map => {
                this.addListener(map);
            });
    }

    addListener(map: Map) {
        this._subscriber = this._service.createObservable(map, 'click')
            .subscribe(e => {
                this.clicked.emit(e);
            });
    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        const opts = <MapOptions>changes['options'].currentValue;
        this._service.setOptions(opts);
    }

    ngOnDestroy() {
        this._subscriber.unsubscribe();
    }
}