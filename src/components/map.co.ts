import { Component, EventEmitter, ElementRef, OnInit, OnChanges, Input, Output, SimpleChange } from '@angular/core';
import { MapOptions } from '../types/Map';
import { MapService } from '../providers/mapService';
import { LazyMapAPILoader } from '../providers/mapLoader';

@Component({
    selector: 'baidu-map',
    template: `
    <div class="baidu-map-instance"></div>
    <div class="baidu-map-offline">
        <label>{{ 'NO_NETWORK' }}</label>
    </div>
    <ng-content></ng-content>
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
        `
    ],
    providers: [
        MapService, LazyMapAPILoader
    ],
})
export class BaiduMapComponent implements OnInit, OnChanges {
    @Input() options: MapOptions;
    @Output() loaded = new EventEmitter();
    constructor(private _el: ElementRef, private _service: MapService) { }

    ngOnInit() {
        this._service.createMap(this._el.nativeElement, this.options);
    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) { }
}