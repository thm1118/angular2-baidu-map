'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var angular2_baidu_map_1 = require('angular2-baidu-map');
var tpl = require('./map.app.tpl');
var style = require('./map.app.style');
var prism = require('./prism');
var center1 = {
    longitude: 121.506191,
    latitude: 31.245554
};
var center2 = {
    longitude: 121.500885,
    latitude: 31.190032
};
var markers1 = [{
        longitude: 121.506191,
        latitude: 31.245554,
        title: 'Where',
        content: 'Put description here'
    }];
var markers2 = [{
        longitude: 121.500885,
        latitude: 31.190032
    }];
var MainApp = (function () {
    function MainApp() {
        this.privousCenter = center1;
        this.privousMarkers = markers1;
    }
    MainApp.prototype.ngOnInit = function () {
        this.opts = {
            center: center1,
            zoom: 17,
            markers: markers1,
            geolocationCtrl: true
        };
        this.offlineOpts = {
            retryInterval: 5000,
            txt: 'NO-NETWORK'
        };
    };
    MainApp.prototype.ngAfterContentInit = function () {
        prism.highlightAll();
    };
    MainApp.prototype.updateCoordinate = function (e) {
        this.opts = this.privousCenter === center1 ? { center: center2 } : { center: center1 };
        this.privousCenter = this.opts.center;
    };
    MainApp.prototype.updateMarker = function (e) {
        this.opts = this.privousMarkers === markers1 ? { markers: markers2 } : { markers: markers1 };
        this.privousMarkers = this.opts.markers;
    };
    MainApp.prototype.updateZoom = function (e) {
        this.opts = {
            zoom: Math.floor(Math.random() * 16) + 3
        };
    };
    MainApp.prototype.loadMap = function (map) {
        console.log('The map instance is created', map);
    };
    MainApp.prototype.clickMarker = function (marker) {
        console.log('The clicked marker is', marker);
    };
    MainApp = __decorate([
        core_1.Component({
            selector: 'map-presentation',
            template: tpl,
            styles: [style],
            directives: [angular2_baidu_map_1.BaiduMap]
        }), 
        __metadata('design:paramtypes', [])
    ], MainApp);
    return MainApp;
}());
exports.MainApp = MainApp;
