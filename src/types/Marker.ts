import { BIconConstructor, Icon } from './Icon'
import { Overlay } from './Overlay'
import { BPointConstructor } from './Point'
import { BSizeConstructor, Size } from './Size'

export interface BMarkerConstructor {
  new (point: BPointConstructor, options?: BMarkerOptions): BMarker
}

export interface BMarker extends Overlay {
  addEventListener(event: string, handler: (e: any) => void): void
  removeEventListener(event: string, handler: () => void): void
  setPosition(position: BPointConstructor): void
  setOffset(offset: BSizeConstructor): void
  setIcon(icon: BIconConstructor): void
  enableMassClear(): void
  disableMassClear(): void

  enableDragging(): void
  disableDragging(): void

  setRotation(rotation: number): void
  setShadow(icon: BIconConstructor): void
  setTitle(title: string): void
}

export interface MarkerOptions {
  offset?: Size
  icon?: Icon
  enableMassClear?: boolean
  enableDragging?: boolean
  enableClicking?: boolean
  raiseOnDrag?: boolean
  draggingCursor?: string
  rotation?: number
  shadow?: Icon
  title?: string
}

export interface BMarkerOptions {
  offset?: BSizeConstructor
  icon?: BIconConstructor
  enableMassClear?: boolean
  enableDragging?: boolean
  enableClicking?: boolean
  raiseOnDrag?: boolean
  draggingCursor?: string
  rotation?: number
  shadow?: BIconConstructor
  title?: string
}
