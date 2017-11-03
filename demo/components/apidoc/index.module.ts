import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { BaiduMapModule } from '../../../src'
import { SharedModule } from '../../shared/index.module'

import { ApidocRouteModule } from './route.module'

import { DocBaidumapComponent } from './docBaidumap.component'
import { DocCenterAndZoomComponent } from './docCenterAndZoom.component'
import { DocControlComponent } from './docControl.component'
import { DocControlAnchorComponent } from './docControlAnchor.component'
import { DocIconComponent } from './docIcon.component'
import { DocMapOptionsComponent } from './docMapOptions.component'
import { DocMarkerComponent } from './docMarker.component'
import { DocMarkerOptionsComponent } from './docMarkerOptions.component'
import { DocNavigationControlOptionsComponent } from './docNavigationControlOptions.component'
import { DocPointComponent } from './docPoint.component'
import { DocSizeComponent } from './docSize.component'
import { ApidocComponent } from './index.component'
import { SidebarComponent } from './sidebar.component'

@NgModule({
  declarations: [
    ApidocComponent,
    SidebarComponent,
    DocBaidumapComponent,
    DocCenterAndZoomComponent,
    DocControlAnchorComponent,
    DocIconComponent,
    DocPointComponent,
    DocMapOptionsComponent,
    DocMarkerOptionsComponent,
    DocNavigationControlOptionsComponent,
    DocSizeComponent,
    DocMarkerComponent,
    DocControlComponent
  ],
  exports: [RouterModule],
  imports: [
    CommonModule,
    SharedModule,
    BaiduMapModule.forRoot({ ak: 'gd0GyxGUxSCoAbmdyQBhyhrZ' }),
    ApidocRouteModule
  ]
})
export class ApidocModule {}
