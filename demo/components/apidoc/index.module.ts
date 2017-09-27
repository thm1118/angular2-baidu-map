import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BaiduMapModule } from '../../../src';

import { ApidocRouteModule } from './route.module';

import { ApidocComponent } from './index.component';


@NgModule({
    imports: [
        CommonModule,
        BaiduMapModule.forRoot({ ak: 'gd0GyxGUxSCoAbmdyQBhyhrZ' }),
        ApidocRouteModule
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        ApidocComponent
    ]
})
export class ApidocModule { }
