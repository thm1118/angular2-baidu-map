import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BaiduMapModule } from '../../../src';

import { HomeRouteModule } from './route.module';

import { AboutComponent } from './about.component';
import { ContributeComponent } from './contribute.component';
import { GithubComponent } from './github.component';
import { HomeComponent } from './index.component';
import { VersionComponent } from './version.component';

@NgModule({
  declarations: [
    HomeComponent,
    GithubComponent,
    VersionComponent,
    ContributeComponent,
    AboutComponent
  ],
  exports: [RouterModule],
  imports: [
    CommonModule,
    BaiduMapModule.forRoot({ ak: 'gd0GyxGUxSCoAbmdyQBhyhrZ' }),
    HomeRouteModule
  ]
})
export class HomeModule {}
