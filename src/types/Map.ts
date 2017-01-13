import { Point } from './Point';
import { Control } from './Control';
import { Overlay } from './Overlay';

export interface MapConstructor {
    new (el: HTMLElement | String, opts: MapOptions): Map;
}

export interface Map {
    disableDragging(): void;
    enableDragging(): void;

    disableScrollWheelZoom(): void;
    enableScrollWheelZoom(): void;

    disableDoubleClickZoom(): void;
    enableDoubleClickZoom(): void;

    disableKeyboard(): void;
    enableKeyboard(): void;

    disableInertialDragging(): void;
    enableInertialDragging(): void;

    disableContinuousZoom(): void;
    enableContinuousZoom(): void;

    disablePinchToZoom(): void;
    enablePinchToZoom(): void;

    addControl(control: Control): void;
    removeControl(control: Control): void;

    addOverlay(control: Overlay): void;
    removeOverlay(control: Overlay): void;

    setDefaultCursor(cursor: String): void;
    setDraggingCursor(draggingCursor: String): void;
    setCurrentCity(city: String): void;
    centerAndZoom(center: Point, zoom: Number): void;
}

export interface MapOptions {
    minZoom?: Number;
    maxZoom?: Number;
    mapType?: Object;
    enableHighResolution?: Boolean;
    enableAutoResize?: Boolean;
    enableMapClick?: Boolean;

    disableDragging?: Boolean;
    enableScrollWheelZoom?: Boolean;
    disableDoubleClickZoom?: Boolean;
    enableKeyboard?: Boolean;
    enableInertialDragging?: Boolean;
    enableContinuousZoom?: Boolean;
    disablePinchToZoom?: Boolean;

    cursor?: String;
    draggingCursor?: String;
    currentCity?: String;
    centerAndZoom?: CenterAndZoom;
}

export interface CenterAndZoom extends Point {
    zoom: Number;
}