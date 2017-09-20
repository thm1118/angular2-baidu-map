import { Component } from '@angular/core';
import { Map, MapOptions, Point, MarkerOptions } from '../../../src';

@Component({
    template: `
    <h1 class="page-title">angular2-baidu-map</h1>
    <baidu-map [options]="opts" (loaded)="onMapLoad($event)">
        <marker [point]="point" (clicked)="onClickMarker($event)"></marker>
    </baidu-map>
    <github class="section"></github>
    <div class="home-desc">
        <about class="section"></about>
        <version class="section"></version>
        <contribute class="section"></contribute>
    </div>
    `,
    styles: [
        `
        :host {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        baidu-map {
            width: 800px;
            height: 290px;
            display: block;
        }
        .home-desc {
            width: 800px;
        }
        @media screen and (max-width: 800px) {
            baidu-map,
            .home-desc {
                width: 100%;
            }
        }
        `
    ]
})
export class HomeComponent {
    opts: MapOptions;
    point: Point;
    markerOpts: MarkerOptions;

    constructor() {
        this.opts = {
            centerAndZoom: {
                lng: 121.486668,
                lat: 31.230912,
                zoom: 15
            }
        };

        this.point = {
            lng: 121.486668,
            lat: 31.230912
        };
    }

    onMapLoad(map: Map) {
        console.log('map loaded', map);
    }

    onClickMarker(e: any) {
        console.log('e', e);
    }

    onClickMap(e: any) {
        console.log('map e', e);
    }
}
