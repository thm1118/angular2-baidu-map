import { Directive, EventEmitter, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { nullCheck } from '../helpers/validate';
import { BMap } from '../types/BMap';
import { Marker, MarkerOptions } from '../types/Marker';
import { Point } from '../types/Point';
import { MapService } from '../providers/mapService';

@Directive({
    selector: 'marker'
})
export class MarkerComponent implements OnInit, OnDestroy {
    @Input() point: Point;
    @Input() options: MarkerOptions;

    @Output() click = new EventEmitter();

    marker: Marker;

    constructor(private _service: MapService) {

    }

    ngOnInit() {
        nullCheck(this.point, 'point is required for <marker>');
        this
            ._service
            .getNativeMap()
            .then(map => {
                const marker = this.marker = new (<BMap>window['BMap']).Marker(this.point, this.options);
                map.addOverlay(marker);
            });
    }

    ngOnDestroy() {
        this
            ._service
            .getNativeMap()
            .then(map => {
                map.removeOverlay(this.marker);
            })
    }
}
