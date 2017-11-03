import { BControl } from './Control'
import { Overlay } from './Overlay'
import { BPointConstructor, Point } from './Point'

export interface BMapConstructor {
  new (el: HTMLElement | string, opts: MapOptions): BMapInstance
}

export interface BMapInstance {
  disableDragging(): void
  enableDragging(): void

  disableScrollWheelZoom(): void
  enableScrollWheelZoom(): void

  disableDoubleClickZoom(): void
  enableDoubleClickZoom(): void

  disableKeyboard(): void
  enableKeyboard(): void

  disableInertialDragging(): void
  enableInertialDragging(): void

  disableContinuousZoom(): void
  enableContinuousZoom(): void

  disablePinchToZoom(): void
  enablePinchToZoom(): void

  addControl(control: BControl): void
  removeControl(control: BControl): void

  addOverlay(control: Overlay): void
  removeOverlay(control: Overlay): void

  setDefaultCursor(cursor: string): void
  setDraggingCursor(draggingCursor: string): void
  setCurrentCity(city: string): void
  centerAndZoom(center: BPointConstructor, zoom: number): void

  addEventListener(event: string, handler: (e: any) => void): void
  removeEventListener(event: string, handler: () => void): void
}

export interface MapOptions {
  minZoom?: number
  maxZoom?: number
  enableHighResolution?: boolean
  enableAutoResize?: boolean
  enableMapClick?: boolean

  disableDragging?: boolean
  enableScrollWheelZoom?: boolean
  disableDoubleClickZoom?: boolean
  enableKeyboard?: boolean
  enableInertialDragging?: boolean
  enableContinuousZoom?: boolean
  disablePinchToZoom?: boolean

  cursor?: string
  draggingCursor?: string
  currentCity?: string
  centerAndZoom?: CenterAndZoom
}

export interface CenterAndZoom extends Point {
  zoom: number
}
