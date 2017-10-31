import { Size } from './Size'

export interface IconConstructor {
  new (url: string, size: Size, opts: IconOptions): any
}

export interface Icon {
  anchor: Size
  size: Size
  imageOffset: Size
  imageSize: Size
  imageUrl: string
  infoWindowAnchor: Size
  printImageUrl: string
}

export interface IconOptions {
  anchor?: Size
  imageOffset?: Size
  infoWindowAnchor?: Size
  printImageUrl?: string
}
