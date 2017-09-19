import { Directive, EventEmitter, OnInit, OnDestroy, Input, Output } from '@angular/core';

import { nullCheck } from '../helpers/validate';
import { BMap } from '../types/BMap';
import { Map } from '../types/Map';
import { Marker, MarkerOptions } from '../types/Marker';
import { Point } from '../types/Point';
import { MapService } from '../providers/mapService';

@Directive({
    selector: 'marker'
})
export class MarkerComponent implements OnInit, OnDestroy {
    @Input() point: Point;
    @Input() options: MarkerOptions;

    @Output() clicked = new EventEmitter();

    marker: Marker;

    constructor(private _service: MapService) { }

    ngOnInit() {
        nullCheck(this.point, 'point is required for <marker>');

        this
            ._service
            .getNativeMap()
            .then(map => {
                const marker = this.marker = new (<BMap>window['BMap']).Marker(this.point, this.options);
                map.addOverlay(marker);
                this.addListener(marker, map);
            });
    }

    addListener(marker: Marker, map: Map) {
        console.log('addeventlistener', marker);

        marker.addEventListener('click', (e: any) => {
            console.log('asdfadsfsa');
            this.clicked.emit({
                e,
                marker,
                map
            });
        });
    }

    ngOnDestroy() {
        this
            ._service
            .getNativeMap()
            .then(map => {
                map.removeOverlay(this.marker);
            });
    }
}
