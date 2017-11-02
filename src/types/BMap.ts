import {
  BNavigationControlConstructor,
  BOverviewMapControlConstructor
} from './Control'
import { BIconConstructor } from './Icon'
import { BInfoWindowConstructor } from './InfoWindow'
import { BMapConstructor } from './Map'
import { BMarkerConstructor } from './Marker'
import { BPointConstructor } from './Point'
import { BSizeConstructor } from './Size'

export interface BMap {
  Map: BMapConstructor
  Marker: BMarkerConstructor
  Point: BPointConstructor
  Size: BSizeConstructor
  Icon: BIconConstructor
  InfoWindow: BInfoWindowConstructor
  NavigationControl: BNavigationControlConstructor
  OverviewMapControl: BOverviewMapControlConstructor
}
