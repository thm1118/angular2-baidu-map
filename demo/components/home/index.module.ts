import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BaiduMapModule } from '../../../src';

import { HomeRouteModule } from './route.module';

import { HomeComponent } from './index.component';
import { GithubComponent } from './github.component';
import { VersionComponent } from './version.component';
import { ContributeComponent } from './contribute.component';
import { AboutComponent } from './about.component';


@NgModule({
    imports: [
        CommonModule,
        BaiduMapModule.forRoot({ ak: 'gd0GyxGUxSCoAbmdyQBhyhrZ' }),
        HomeRouteModule
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        HomeComponent,
        GithubComponent,
        VersionComponent,
        ContributeComponent,
        AboutComponent
    ]
})
export class HomeModule { }
