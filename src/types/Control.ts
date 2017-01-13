import { Size } from './Size';

export interface ControlConstructor {
    new (opts: ControlOptions): any;
}

export interface Control {
}

export interface NavigationControl extends Control {

}

export interface ControlOptions {
}
