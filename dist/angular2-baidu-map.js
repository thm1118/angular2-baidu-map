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
var core_1 = require('angular2/core');
var BaiduMap = (function () {
    function BaiduMap(el) {
        this.el = el;
        this.defaultOpts = {
            navCtrl: true,
            scaleCtrl: true,
            overviewCtrl: true,
            enableScrollWheelZoom: true,
            zoom: 10
        };
        this.win = window;
        this.previousMarkers = [];
    }
    BaiduMap.prototype.ngOnInit = function () {
        this._drawBaiduMap();
    };
    BaiduMap.prototype.ngOnChanges = function (changes) {
        var baiduMap = this.win.baiduMap;
        if (!baiduMap || baiduMap.status !== 'loaded') {
            return;
        }
        var opts = changes['options'].currentValue;
        this._center(opts);
        this._zoom(opts);
        this._mark();
    };
    BaiduMap.prototype._drawBaiduMap = function () {
        var _this = this;
        var MAP_URL = "http://api.map.baidu.com/api?v=2.0&ak=" + this.mapKey + "&callback=baidumapinit";
        var baiduMap = this.win.baiduMap;
        if (baiduMap && baiduMap.status === 'loading') {
            baiduMap.callbacks.push(function () {
                _this._generateMap(_this.el);
            });
            return;
        }
        if (baiduMap && baiduMap.status === 'loaded') {
            this._generateMap(this.el);
            return;
        }
        this.win.baiduMap = { status: 'loading', callbacks: [] };
        this.win.baidumapinit = this._getBaiduScriptLoaded(this.el);
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = MAP_URL;
        document.body.appendChild(script);
    };
    BaiduMap.prototype._getBaiduScriptLoaded = function (el) {
        var _this = this;
        return function () {
            _this.win.baiduMap.status = 'loaded';
            _this._generateMap(el);
            _this.win.baiduMap.callbacks.forEach(function (cb) {
                cb();
            });
            _this.win.baiduMap.callbacks = [];
        };
    };
    BaiduMap.prototype._generateMap = function (el) {
        var BMap = this.BMap = this.win.BMap;
        var map = this.map = new BMap.Map(el.nativeElement);
        var opts = Object.assign({}, this.defaultOpts, this.options);
        map.centerAndZoom(new BMap.Point(opts.center.longitude, opts.center.latitude), opts.zoom);
        if (opts.navCtrl) {
            map.addControl(new BMap.NavigationControl());
        }
        if (opts.scaleCtrl) {
            map.addControl(new BMap.ScaleControl());
        }
        if (opts.overviewCtrl) {
            map.addControl(new BMap.OverviewMapControl());
        }
        if (opts.enableScrollWheelZoom) {
            map.enableScrollWheelZoom();
        }
        map.setCurrentCity(opts.city);
        this._mark();
    };
    BaiduMap.prototype._center = function (opts) {
        var _a = this, BMap = _a.BMap, map = _a.map;
        if (opts.center) {
            map.setCenter(new BMap.Point(opts.center.longitude, opts.center.latitude));
        }
    };
    BaiduMap.prototype._zoom = function (opts) {
        var map = this.map;
        if (opts.zoom) {
            map.setZoom(opts.zoom);
        }
    };
    BaiduMap.prototype._mark = function () {
        var _a = this, BMap = _a.BMap, map = _a.map, options = _a.options;
        for (var _i = 0, _b = this.previousMarkers; _i < _b.length; _i++) {
            var _c = _b[_i], marker = _c.marker, listener = _c.listener;
            marker.removeEventListener('click', listener);
            map.removeOverlay(marker);
        }
        this.previousMarkers.length = 0;
        if (!options.markers) {
            return;
        }
        for (var _d = 0, _e = options.markers; _d < _e.length; _d++) {
            var marker = _e[_d];
            var pt = new BMap.Point(marker.longitude, marker.latitude);
            var marker2;
            if (marker.icon) {
                var icon = new BMap.Icon(marker.icon, new BMap.Size(marker.width, marker.height));
                marker2 = new BMap.Marker(pt, {
                    icon: icon
                });
            }
            else {
                marker2 = new BMap.Marker(pt);
            }
            map.addOverlay(marker2);
            var previousMarker = {
                marker: marker2,
                listener: null
            };
            this.previousMarkers.push(previousMarker);
            if (!marker.title && !marker.content) {
                continue;
            }
            var infoWindow2 = new BMap.InfoWindow('<p>' + (marker.title ? marker.title : '') + '</p><p>' + (marker.content ? marker.content : '') + '</p>', {
                enableMessage: !!marker.enableMessage
            });
            previousMarker.listener = function () {
                this.openInfoWindow(infoWindow2);
            };
            marker2.addEventListener('click', previousMarker.listener);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BaiduMap.prototype, "mapKey", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BaiduMap.prototype, "options", void 0);
    BaiduMap = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.CheckAlways,
            selector: 'baidu-map',
            template: ''
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], BaiduMap);
    return BaiduMap;
}());
exports.BaiduMap = BaiduMap;
