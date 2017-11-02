import { BIconConstructor, Icon } from './Icon'
import { BSizeConstructor, Size } from './Size'

export interface BControlConstructor {
  new (opts: any): BControl
}

export interface BControl {}

export interface BNavigationControlConstructor extends BControlConstructor {
  new (opts: BNavigationControlOptions): BNavigationControl
}

export interface BOverviewMapControlConstructor extends BControlConstructor {
  new (opts: BOverviewMapControlOptions): BOverviewMapControl
}

export interface BScaleControlConstructor extends BControlConstructor {
  new (opts: BScaleControlOptions): BScaleControl
}

export interface BMapTypeControlConstructor extends BControlConstructor {
  new (opts: BMapTypeControlOptions): BMapTypeControl
}

export interface BGeolocationConstructor extends BControlConstructor {
  new (opts: BGeolocationControlOptions): BGeolocationControl
}

export interface BNavigationControl extends BControl {}

export interface BOverviewMapControl extends BControl {}

export interface BScaleControl extends BControl {}

export interface BMapTypeControl extends BControl {}

export interface BGeolocationControl extends BControl {}

export interface ControlOptions {
  anchor?: ControlAnchor
  offset?: Size
}

export interface BControlOptions {
  anchor?: ControlAnchor
  offset?: BSizeConstructor
}

export interface NavigationControlOptions extends ControlOptions {
  type?: NavigationControlType
  showZoomInfo?: boolean
  enableGeolocation?: boolean
}

export interface BNavigationControlOptions extends BControlOptions {
  type?: NavigationControlType
  showZoomInfo?: boolean
  enableGeolocation?: boolean
}

export interface OverviewMapControlOptions extends ControlOptions {
  size?: Size
  isOpen?: boolean
}

export interface BOverviewMapControlOptions extends BControlOptions {
  size?: BSizeConstructor
  isOpen?: boolean
}

export interface ScaleControlOptions extends ControlOptions {}

export interface BScaleControlOptions extends BControlOptions {}

export interface MapTypeControlOptions {
  type?: MapTypeControlType
}

export interface BMapTypeControlOptions {
  type?: MapTypeControlType
}

export interface GeolocationControlOptions extends ControlOptions {
  showAddressBar?: boolean
  enableAutoLocation?: boolean
  locationIcon?: Icon
}

export interface BGeolocationControlOptions extends BControlOptions {
  showAddressBar?: boolean
  enableAutoLocation?: boolean
  locationIcon?: BIconConstructor
}

export enum ControlAnchor {
  BMAP_ANCHOR_TOP_LEFT = 0,
  BMAP_ANCHOR_TOP_RIGHT = 1,
  BMAP_ANCHOR_BOTTOM_LEFT = 2,
  BMAP_ANCHOR_BOTTOM_RIGHT = 3
}

export enum NavigationControlType {
  BMAP_NAVIGATION_CONTROL_LARGE = 0,
  BMAP_NAVIGATION_CONTROL_SMALL = 1,
  BMAP_NAVIGATION_CONTROL_PAN = 2,
  BMAP_NAVIGATION_CONTROL_ZOOM = 3
}

export enum MapTypeControlType {
  BMAP_MAPTYPE_CONTROL_HORIZONTAL = 0,
  BMAP_MAPTYPE_CONTROL_DROPDOWN = 1,
  BMAP_MAPTYPE_CONTROL_MAP = 2
}

export type ControlType =
  | 'navigation'
  | 'overviewmap'
  | 'scale'
  | 'maptype'
  | 'geolocation'
  | 'panorama'
