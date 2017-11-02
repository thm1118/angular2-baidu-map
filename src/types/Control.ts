import { Size } from './Size'

export interface BControlConstructor {
  new (opts: NavigationControlOptions): any
}

export interface Control {}

export interface NavigationControl extends Control {}

export interface NavigationControlOptions {}
