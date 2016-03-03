///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
'use strict';

import {Component} from 'angular2/core';

@Component({
    selector: 'ng-baidu-map',
    styles: [`
       h1 {
            color: blue;
        }
    `],
    template: `<div>
                  <h1 (click)="onClick()">{{message}}</h1>
               </div>`
})
export class BaiduMap {

    message = "Click Me ...";

    onClick() {
        this.message = "Hello World!"
        console.log(this.message);

    }

}
