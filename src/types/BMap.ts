import { MapConstructor } from './Map';
import { MarkerConstructor } from './Marker';
import { PointConstructor } from './Point';
import { SizeConstructor } from './Size';
import { IconConstructor } from './Icon';
import { ControlConstructor } from './Control';
import { OverlayConstructor } from './Overlay';

export interface BMap {
    Map: MapConstructor;
    Marker: MarkerConstructor;
    Point: PointConstructor;
    Size: SizeConstructor;
    Icon: IconConstructor;
    NavigationControl: ControlConstructor;
}
