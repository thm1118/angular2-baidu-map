import { SimpleChange, OnInit, OnChanges, ElementRef } from '@angular/core';
export declare class BaiduMap implements OnInit, OnChanges {
    private el;
    ak: string;
    options: MapOptions;
    offlineOpts: OfflineOptions;
    map: any;
    offlineWords: string;
    previousMarkers: PreviousMarker[];
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    _draw(): void;
}
export interface MapDefaultOptions {
    navCtrl?: boolean;
    scaleCtrl?: boolean;
    overviewCtrl?: boolean;
    enableScrollWheelZoom?: boolean;
    zoom?: number;
}
export interface MapOptions extends MapDefaultOptions {
    center: {
        longitude: number;
        latitude: number;
    };
    markers?: MarkerOptions[];
}
export interface OfflineOptions {
    retryInterval?: number;
    txt?: string;
}
export interface PreviousMarker {
    marker: any;
    listener: Function;
}
export interface MarkerOptions {
    longitude: number;
    latitude: number;
    icon?: string;
    width?: number;
    height?: number;
    title?: string;
    content?: string;
    enableMessage?: boolean;
}
