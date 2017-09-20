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
                const marker = this.marker = new (<BMap>window['BMap']).Marker(null, this.options);
                map.addOverlay(marker);
                this.addListener(marker, map);
                return marker;
            })
            .then(marker => {
                //workaround: it's weird that postion is set while constructing phase will make click event not working
                marker.setPosition(new (<BMap>window['BMap']).Point(this.point.lng, this.point.lat));
            });
    }

    addListener(marker: Marker, map: Map) {
        marker.addEventListener('click', (e: any) => {
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
