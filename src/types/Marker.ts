import { Icon } from './Icon'
import { Overlay } from './Overlay'
import { Point } from './Point'
import { Size } from './Size'

export interface MarkerConstructor {
  new (point: Point, options?: MarkerOptions): any
}

export interface Marker extends Overlay {
  addEventListener(event: string, handler: (e: any) => void): void
  removeEventListener(event: string, handler: () => void): void
  setPosition(position: Point): void
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
