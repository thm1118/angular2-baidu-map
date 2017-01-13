import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import configs from '../core/config';
import { features } from '../features';

import { Demo } from './demo.co';

@NgModule({
    imports: [
        BrowserModule,
        ...configs,
        ...features
    ],
    declarations: [
        Demo
    ],
    bootstrap: [Demo]
})
export class DemoModule { }
