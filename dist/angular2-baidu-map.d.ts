import { SimpleChange, OnInit, OnChanges, ElementRef } from 'angular2/core';
export declare class BaiduMap implements OnInit, OnChanges {
    private el;
    mapKey: string;
    options: MapOptions;
    defaultOpts: MapDefaultOptions;
    win: any;
    previousMarkers: PreviousMarker[];
    BMap: any;
    map: any;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    _drawBaiduMap(): void;
    _getBaiduScriptLoaded(el: ElementRef): () => void;
    _generateMap(el: ElementRef): void;
    _center(opts: MapOptions): void;
    _zoom(opts: MapOptions): void;
    _mark(opts: MapOptions): void;
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
    center: {
        longitude: number;
        latitude: number;
    };
    city?: string;
    markers?: {
        longitude: number;
        latitude: number;
        icon?: string;
        width?: number;
        height?: number;
        title?: string;
        content?: string;
        enableMessage?: boolean;
    }[];
}
