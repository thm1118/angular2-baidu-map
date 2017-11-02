import {
  BNavigationControlOptions,
  BOverviewMapControlOptions,
  NavigationControlOptions,
  OverviewMapControlOptions
} from '../types/Control'
import { BIconConstructor, IconOptions } from '../types/Icon'
import { BMarkerOptions, MarkerOptions } from '../types/Marker'
import { BPointConstructor, Point } from '../types/Point'
import { BSizeConstructor, Size } from '../types/Size'

import { isNull } from './object'

export function toPoint(opts: Point): BPointConstructor {
  if (!opts) {
    return new window.BMap.Point()
  }
  return new window.BMap.Point(opts.lng, opts.lat)
}

export function toSize(opts: Size): BSizeConstructor {
  if (!opts) {
    return new window.BMap.Size()
  }
  return new window.BMap.Size(opts.width, opts.height)
}

export function toIcon(
  url: string,
  size: Size,
  options: IconOptions
): BIconConstructor {
  if (!size && !options) {
    return new window.BMap.Icon(url)
  }
  if (!size) {
    return new window.BMap.Icon(url, toSize(size))
  }
  const iconOptions: any = {
    anchor: toSize(options.anchor),
    imageOffset: toSize(options.imageOffset),
    infoWindowAnchor: toSize(options.infoWindowAnchor),
    printImageUrl: options.printImageUrl
  }
  return new window.BMap.Icon(url, toSize(size), iconOptions)
}

export function toMarkerOptions(options: MarkerOptions): BMarkerOptions {
  const opts: BMarkerOptions = {}

  if (!options) {
    return opts
  }

  if (options.offset) {
    opts.offset = toSize(options.offset)
  }

  if (options.icon) {
    opts.icon = toIcon(options.icon.imageUrl, options.icon.size, options.icon)
  }
  if (!isNull(options.enableMassClear)) {
    opts.enableMassClear = options.enableMassClear
  }
  if (!isNull(options.enableDragging)) {
    opts.enableDragging = options.enableDragging
  }
  if (!isNull(options.enableClicking)) {
    opts.enableClicking = options.enableClicking
  }
  if (!isNull(options.raiseOnDrag)) {
    opts.raiseOnDrag = options.raiseOnDrag
  }
  if (!isNull(options.draggingCursor)) {
    opts.draggingCursor = options.draggingCursor
  }
  if (!isNull(options.rotation)) {
    opts.rotation = options.rotation
  }
  if (!isNull(options.title)) {
    opts.title = options.title
  }
  if (!isNull(options.shadow)) {
    opts.shadow = toIcon(
      options.shadow.imageUrl,
      options.shadow.size,
      options.shadow
    )
  }

  return opts
}

export function toNavigationControlOptions(
  options: NavigationControlOptions
): BNavigationControlOptions {
  const opts: BNavigationControlOptions = {}

  if (!options) {
    return opts
  }

  if (!isNull(options.anchor)) {
    opts.anchor = options.anchor
  }
  if (!isNull(options.enableGeolocation)) {
    opts.enableGeolocation = options.enableGeolocation
  }
  if (!isNull(options.offset)) {
    opts.offset = toSize(options.offset)
  }
  if (!isNull(options.showZoomInfo)) {
    opts.showZoomInfo = options.showZoomInfo
  }

  if (!isNull(options.type)) {
    opts.type = options.type
  }
  return opts
}

export function toOverviewMapControlOptions(
  options: OverviewMapControlOptions
): BOverviewMapControlOptions {
  const opts: BOverviewMapControlOptions = {}

  if (!options) {
    return opts
  }

  if (!isNull(options.anchor)) {
    opts.anchor = options.anchor
  }
  if (!isNull(options.isOpen)) {
    opts.isOpen = options.isOpen
  }
  if (!isNull(options.offset)) {
    opts.offset = toSize(options.offset)
  }
  if (!isNull(options.size)) {
    opts.size = toSize(options.size)
  }
  return opts
}
