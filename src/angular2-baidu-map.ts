///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
'use strict';

import {Component} from 'angular2/core';

@Component({
    selector: 'ng-baidu-map',
    template: `<div>
                  <h1 (click)="onClick()">{{message}}</h1>
               </div>`
})
export class BaiduMap {

    MAP_URL = `http://api.map.baidu.com/api?v=2.0&ak=${key}&callback=baidumapinit`;

    constructor() {

    }


    onClick() {

    }

}
