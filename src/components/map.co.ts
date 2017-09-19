import { ViewChild, Component, EventEmitter, ElementRef, OnInit, OnChanges, Input, Output, SimpleChange } from '@angular/core';

import { Map, MapOptions } from '../types/Map';
import { MapService } from '../providers/mapService';
import { ScriptLoader } from '../providers/scriptLoader';

@Component({
    selector: 'baidu-map',
    template: `
    <div #mapinstance class="baidu-map-instance"></div>
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
            background-color: #E6E6E6;
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
        MapService, ScriptLoader
    ]
})
export class BaiduMapComponent implements OnInit, OnChanges {
    @Input() options: MapOptions;

    @Output() loaded = new EventEmitter();
    @Output() clicked = new EventEmitter();

    @ViewChild('mapinstance') mapInstance: ElementRef;


    constructor(private _service: MapService) { }

    ngOnInit() {
        this
            ._service
            .createMap(this.mapInstance.nativeElement, this.options)
            .then(map => {
                this.loaded.emit(map);
                return map;
            })
            .then(map => {
                this.addListener(map);
            });
    }

    addListener(map: Map) {
        map.addEventListener('click', (e: any) => {
            this.clicked.emit(e);
        });
    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        const opts = <MapOptions>changes['options'].currentValue;
        this._service.setOptions(opts);
    }

    ngOnDestroy() {
    }
}