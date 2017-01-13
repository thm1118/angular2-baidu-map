import { Component, OnInit } from '@angular/core';
import { MapOptions } from '../../../../../src/';

@Component({
    selector: 'home',
    template: `
    <h1 class="page-title">angular2-baidu-map</h1>
    <baidu-map [options]="opts">fucking you</baidu-map>
    <github></github>
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
export class Home implements OnInit {
    opts: MapOptions;
    ngOnInit() {
        this.opts = {
            centerAndZoom: {
                lng: 121.506191,
                lat: 31.245554,
                zoom: 15
            }
        };
    }
}