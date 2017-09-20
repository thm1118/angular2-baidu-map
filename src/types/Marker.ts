import { Point } from './Point';
import { Overlay } from './Overlay';
import { Size } from './Size';
import { Icon } from './Icon';

export interface MarkerConstructor {
    new(point: Point, options?: MarkerOptions): any;
}

export interface Marker extends Overlay {
    addEventListener(event: String, handler: Function): void;
    removeEventListener(event: String, handler: Function): void;
}


export interface MarkerOptions {
    offset?: Size;
    icon?: Icon;
    enableMassClear?: Boolean;
    enableDragging?: Boolean;
    enableClicking?: Boolean;
    raiseOnDrag?: Boolean;
    draggingCursor?: String;
    rotation?: Number;
    shadow?: Icon;
    title?: String;
}
