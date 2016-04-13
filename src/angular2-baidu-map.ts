import {Component, SimpleChange, Input, OnInit, OnChanges, ChangeDetectionStrategy, ElementRef} from 'angular2/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'baidu-map',
    template: ''
})
export class BaiduMap implements OnInit, OnChanges {

    @Input() mapKey: string;
    @Input() options: MapOptions;

    defaultOpts: MapDefaultOptions = {
        navCtrl: true,
        scaleCtrl: true,
        overviewCtrl: true,
        enableScrollWheelZoom: true,
        zoom: 10
    };

    win: any = window;
    previousMarkers: PreviousMarker[] = [];
    BMap: any;
    map: any;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        this._drawBaiduMap();
    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        var baiduMap = this.win.baiduMap;
        if (!baiduMap || baiduMap.status !== 'loaded') {
            return;
        }
        var opts = changes['options'].currentValue;
        this._center(opts);
        this._zoom(opts);
        this._mark(opts);
    }

    _drawBaiduMap() {
        var MAP_URL = `http://api.map.baidu.com/api?v=2.0&ak=${this.mapKey}&callback=baidumapinit`;

        var baiduMap = this.win.baiduMap;
        if (baiduMap && baiduMap.status === 'loading') {
            baiduMap.callbacks.push(() => {
                this._generateMap(this.el);
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
    }

    _getBaiduScriptLoaded(el: ElementRef) {
        return () => {
            this.win.baiduMap.status = 'loaded';
            this._generateMap(el);
            this.win.baiduMap.callbacks.forEach(function(cb: Function) {
                cb();
            });
            this.win.baiduMap.callbacks = [];
        };
    }

    _generateMap(el: ElementRef) {
        var BMap = this.BMap = this.win.BMap;
        var map = this.map = new BMap.Map(el.nativeElement);
        var opts = <MapOptions>Object.assign({}, this.defaultOpts, this.options);
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
        this._mark(opts);
    }

    _center(opts: MapOptions) {
        var {BMap, map} = this;
        if (opts.center) {
            map.setCenter(new BMap.Point(opts.center.longitude, opts.center.latitude));
        }
    }

    _zoom(opts: MapOptions) {
        var { map} = this;
        if (opts.zoom) {
            map.setZoom(opts.zoom);
        }
    }

    _mark(opts: MapOptions) {
        var {BMap, map} = this;

        if (!opts.markers) {
            return;
        }

        for (let {marker, listener} of this.previousMarkers) {
            marker.removeEventListener('click', listener);
            map.removeOverlay(marker);
        }
        this.previousMarkers.length = 0;

        for (let marker of opts.markers) {
            var pt = new BMap.Point(marker.longitude, marker.latitude);
            var marker2: any;
            if (marker.icon) {
                var icon = new BMap.Icon(marker.icon, new BMap.Size(marker.width, marker.height));
                marker2 = new BMap.Marker(pt, {
                    icon: icon
                });
            } else {
                marker2 = new BMap.Marker(pt);
            }
            map.addOverlay(marker2);
            var previousMarker: PreviousMarker = {
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
            previousMarker.listener = function() {
                this.openInfoWindow(infoWindow2);
            };
            marker2.addEventListener('click', previousMarker.listener);
        }
    }

}

export interface MapDefaultOptions {
    navCtrl?: boolean;
    scaleCtrl?: boolean;
    overviewCtrl?: boolean;
    enableScrollWheelZoom?: boolean;
    zoom?: number;
}

export interface PreviousMarker {
    marker: any;
    listener: Function;
}

export interface MapOptions extends MapDefaultOptions {
    center: { longitude: number, latitude: number };
    markers?: { longitude: number, latitude: number, icon?: string, width?: number, height?: number, title?: string, content?: string, enableMessage?: boolean }[];
}
