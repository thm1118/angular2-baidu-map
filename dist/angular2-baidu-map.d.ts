import { SimpleChange, EventEmitter, OnInit, OnChanges, ElementRef } from '@angular/core';
export declare class BaiduMap implements OnInit, OnChanges {
    private el;
    ak: string;
    options: MapOptions;
    offlineOpts: OfflineOptions;
    onMapLoaded: EventEmitter<{}>;
    onMarkerClicked: EventEmitter<{}>;
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
    geolocationCtrl?: boolean | GeolocationControlOptions;
    zoom?: number;
}
export declare enum ControlAnchor {
    BMAP_ANCHOR_TOP_LEFT = 0,
    BMAP_ANCHOR_TOP_RIGHT = 1,
    BMAP_ANCHOR_BOTTOM_LEFT = 2,
    BMAP_ANCHOR_BOTTOM_RIGHT = 3,
}
export interface Size {
    width: number;
    height: number;
}
export interface Icon {
    url: string;
    size: Size;
}
export interface GeolocationControlOptions {
    anchor?: ControlAnchor;
    offset?: Size;
    showAddressBar?: boolean;
    enableAutoLocation?: boolean;
    locationIcon?: Icon;
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
    listeners: Function[];
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
