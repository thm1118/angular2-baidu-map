import { BSizeConstructor, Size } from './Size'

export interface BIconConstructor {
  new (url: string, size?: BSizeConstructor, opts?: BIconOptions): any
}

export interface Icon {
  anchor?: Size
  size?: Size
  imageOffset?: Size
  imageUrl?: string
  infoWindowAnchor?: Size
  printImageUrl?: string
}

export interface IconOptions {
  anchor?: Size
  imageOffset?: Size
  infoWindowAnchor?: Size
  printImageUrl?: string
}

export interface BIconOptions {
  anchor?: BSizeConstructor
  imageOffset?: BSizeConstructor
  infoWindowAnchor?: BSizeConstructor
  printImageUrl?: string
}
