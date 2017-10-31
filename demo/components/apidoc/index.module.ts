import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BaiduMapModule } from '../../../src';

import { ApidocRouteModule } from './route.module';

import { ApidocComponent } from './index.component';

@NgModule({
  declarations: [ApidocComponent],
  exports: [RouterModule],
  imports: [
    CommonModule,
    BaiduMapModule.forRoot({ ak: 'gd0GyxGUxSCoAbmdyQBhyhrZ' }),
    ApidocRouteModule
  ]
})
export class ApidocModule {}
