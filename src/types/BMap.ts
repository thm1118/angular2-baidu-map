import { ControlConstructor } from './Control';
import { IconConstructor } from './Icon';
import { MapConstructor } from './Map';
import { MarkerConstructor } from './Marker';
import { OverlayConstructor } from './Overlay';
import { PointConstructor } from './Point';
import { SizeConstructor } from './Size';

export interface BMap {
  Map: MapConstructor;
  Marker: MarkerConstructor;
  Point: PointConstructor;
  Size: SizeConstructor;
  Icon: IconConstructor;
  NavigationControl: ControlConstructor;
}
