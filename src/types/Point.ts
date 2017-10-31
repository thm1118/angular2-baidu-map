export interface PointConstructor {
  new (lng: number, lat: number): any;
}

export interface Point {
  lng: number;
  lat: number;
}
