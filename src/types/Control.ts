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

export interface BNavigationControl extends BControl {}

export interface BOverviewMapControl extends BControl {}

export interface NavigationControlOptions {
  anchor?: ControlAnchor
  offset?: Size
  type?: NavigationControlType
  showZoomInfo?: boolean
  enableGeolocation?: boolean
}

export interface BNavigationControlOptions {
  anchor?: ControlAnchor
  offset?: BSizeConstructor
  type?: NavigationControlType
  showZoomInfo?: boolean
  enableGeolocation?: boolean
}

export interface OverviewMapControlOptions {
  anchor?: ControlAnchor
  offset?: Size
  size?: Size
  isOpen?: boolean
}

export interface BOverviewMapControlOptions {
  anchor?: ControlAnchor
  offset?: BSizeConstructor
  size?: BSizeConstructor
  isOpen?: boolean
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

export type ControlType =
  | 'navigation'
  | 'overviewmap'
  | 'scale'
  | 'maptype'
  | 'copyright'
  | 'geolocation'
  | 'panorama'
