"use strict";
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
var BaiduMap = (function () {
    function BaiduMap(el) {
        this.el = el;
        this.onMapLoaded = new core_1.EventEmitter();
        this.onMarkerClicked = new core_1.EventEmitter();
        this.previousMarkers = [];
    }
    BaiduMap.prototype.ngOnInit = function () {
        var offlineOpts = Object.assign({}, defaultOfflineOpts, this.offlineOpts);
        this.offlineWords = offlineOpts.txt;
        loader(this.ak, offlineOpts, this._draw.bind(this));
    };
    BaiduMap.prototype.ngOnChanges = function (changes) {
        var baiduMap = window['baiduMap'];
        if (!baiduMap || baiduMap.status !== MapStatus.LOADED) {
            return;
        }
        var opts = changes['options'].currentValue;
        reCenter(this.map, opts);
        reZoom(this.map, opts);
        redrawMarkers.bind(this)(this.map, this.previousMarkers, opts);
    };
    BaiduMap.prototype._draw = function () {
        var options = Object.assign({}, defaultOpts, this.options);
        this.map = createInstance(options, this.el.nativeElement);
        this.onMapLoaded.emit(this.map);
        redrawMarkers.bind(this)(this.map, this.previousMarkers, options);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BaiduMap.prototype, "ak", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BaiduMap.prototype, "options", void 0);
    __decorate([
        core_1.Input('offline'), 
        __metadata('design:type', Object)
    ], BaiduMap.prototype, "offlineOpts", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BaiduMap.prototype, "onMapLoaded", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BaiduMap.prototype, "onMarkerClicked", void 0);
    BaiduMap = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'baidu-map',
            styles: ["\n        .offlinePanel{\n            width: 100%;\n            height: 100%;\n            background-color: #E6E6E6;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            opacity: 0;\n        }\n    ", "\n        .offlineLabel{\n            font-size: 30px;\n        }\n    "],
            template: "\n        <div class=\"offlinePanel\">\n            <label class=\"offlineLabel\">{{ offlineWords }}</label>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], BaiduMap);
    return BaiduMap;
}());
exports.BaiduMap = BaiduMap;
var defaultOpts = {
    navCtrl: true,
    scaleCtrl: true,
    overviewCtrl: true,
    enableScrollWheelZoom: true,
    geolocationCtrl: false,
    zoom: 10
};
var defaultOfflineOpts = {
    retryInterval: 30000,
    txt: 'OFFLINE'
};
(function (ControlAnchor) {
    ControlAnchor[ControlAnchor["BMAP_ANCHOR_TOP_LEFT"] = 0] = "BMAP_ANCHOR_TOP_LEFT";
    ControlAnchor[ControlAnchor["BMAP_ANCHOR_TOP_RIGHT"] = 1] = "BMAP_ANCHOR_TOP_RIGHT";
    ControlAnchor[ControlAnchor["BMAP_ANCHOR_BOTTOM_LEFT"] = 2] = "BMAP_ANCHOR_BOTTOM_LEFT";
    ControlAnchor[ControlAnchor["BMAP_ANCHOR_BOTTOM_RIGHT"] = 3] = "BMAP_ANCHOR_BOTTOM_RIGHT";
})(exports.ControlAnchor || (exports.ControlAnchor = {}));
var ControlAnchor = exports.ControlAnchor;
var MapStatus;
(function (MapStatus) {
    MapStatus[MapStatus["LOADING"] = 0] = "LOADING";
    MapStatus[MapStatus["LOADED"] = 1] = "LOADED";
})(MapStatus || (MapStatus = {}));
var loader = function (ak, offlineOpts, callback) {
    var MAP_URL = "http://api.map.baidu.com/api?v=2.0&ak=" + ak + "&callback=baidumapinit";
    var win = window;
    var baiduMap = win['baiduMap'];
    if (baiduMap && baiduMap.status === MapStatus.LOADING) {
        return baiduMap.callbacks.push(callback);
    }
    if (baiduMap && baiduMap.status === MapStatus.LOADED) {
        return callback();
    }
    win['baiduMap'] = { status: MapStatus.LOADING, callbacks: [] };
    win['baidumapinit'] = function () {
        win['baiduMap'].status = MapStatus.LOADED;
        callback();
        win['baiduMap'].callbacks.forEach(function (cb) { return cb(); });
        win['baiduMap'].callbacks = [];
    };
    var createTag = function () {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = MAP_URL;
        script.onerror = function () {
            Array.prototype
                .slice
                .call(document.querySelectorAll('baidu-map div'))
                .forEach(function (node) {
                node.style.opacity = 1;
            });
            document.body.removeChild(script);
            setTimeout(createTag, offlineOpts.retryInterval);
        };
        document.body.appendChild(script);
    };
    createTag();
};
var createInstance = function (opts, element) {
    var BMap = window['BMap'];
    var map = new BMap.Map(element);
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
    if (opts.geolocationCtrl) {
        var geoOpts = {};
        if (typeof opts.geolocationCtrl !== 'boolean') {
            var ctrl = opts.geolocationCtrl;
            if (ctrl.anchor) {
                geoOpts.anchor = ctrl.anchor;
            }
            if (ctrl.offset) {
                geoOpts.offset = new BMap.Size(ctrl.offset.width, ctrl.offset.height);
            }
            if (typeof geoOpts.showAddressBar === 'boolean') {
                geoOpts.showAddressBar = ctrl.showAddressBar;
            }
            if (typeof geoOpts.enableAutoLocation === 'boolean') {
                geoOpts.enableAutoLocation = ctrl.enableAutoLocation;
            }
            if (geoOpts.locationIcon) {
                geoOpts.locationIcon = new BMap.Size(ctrl.locationIcon.url, new BMap.Size(ctrl.locationIcon.size.width, ctrl.locationIcon.size.height));
            }
        }
        map.addControl(new BMap.GeolocationControl(geoOpts));
    }
    return map;
};
var createMarker = function (marker, pt) {
    var BMap = window['BMap'];
    if (marker.icon) {
        var icon = new BMap.Icon(marker.icon, new BMap.Size(marker.width, marker.height));
        return new BMap.Marker(pt, { icon: icon });
    }
    return new BMap.Marker(pt);
};
var redrawMarkers = function (map, previousMarkers, opts) {
    var BMap = window['BMap'];
    var self = this;
    previousMarkers.forEach(function (_a) {
        var marker = _a.marker, listeners = _a.listeners;
        listeners.forEach(function (listener) { marker.removeEventListener('click', listener); });
        map.removeOverlay(marker);
    });
    previousMarkers.length = 0;
    if (!opts.markers) {
        return;
    }
    opts.markers.forEach(function (marker) {
        var marker2 = createMarker(marker, new BMap.Point(marker.longitude, marker.latitude));
        map.addOverlay(marker2);
        var previousMarker = { marker: marker2, listeners: [] };
        previousMarkers.push(previousMarker);
        var onMarkerClickedListener = function () {
            self.onMarkerClicked.emit(marker2);
        };
        marker2.addEventListener('click', onMarkerClickedListener);
        previousMarker.listeners.push(onMarkerClickedListener);
        if (!marker.title && !marker.content) {
            return;
        }
        var msg = "<p>" + (marker.title || '') + "</p><p>" + (marker.content || '') + "</p>";
        var infoWindow2 = new BMap.InfoWindow(msg, {
            enableMessage: !!marker.enableMessage
        });
        var openInfoWindowListener = function () {
            this.openInfoWindow(infoWindow2);
        };
        previousMarker.listeners.push(openInfoWindowListener);
        marker2.addEventListener('click', openInfoWindowListener);
    });
};
var reCenter = function (map, opts) {
    var BMap = window['BMap'];
    if (opts.center) {
        map.setCenter(new BMap.Point(opts.center.longitude, opts.center.latitude));
    }
};
var reZoom = function (map, opts) {
    if (opts.zoom) {
        map.setZoom(opts.zoom);
    }
};
