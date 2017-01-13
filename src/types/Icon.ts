import { Size } from './Size';

export interface IconConstructor {
    new (url: String, size: Size, opts: IconOptions): any;
}

export interface Icon {
    anchor: Size;
    size: Size;
    imageOffset: Size;
    imageSize: Size;
    imageUrl: String;
    infoWindowAnchor: Size;
    printImageUrl: String;
}

export interface IconOptions {
    anchor?: Size;
    imageOffset?: Size;
    infoWindowAnchor?: Size;
    printImageUrl?: String;
}
