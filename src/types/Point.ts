export interface PointConstructor {
    new (lng: Number, lat: Number): any;
}

export interface Point {
    lng: Number;
    lat: Number;
}
