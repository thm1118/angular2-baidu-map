import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

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

const routes: Routes = [
  {
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'baidu-map'
      },
      {
        component: DocBaidumapComponent,
        path: 'baidu-map'
      },
      {
        component: DocMarkerComponent,
        path: 'marker'
      },
      {
        component: DocControlComponent,
        path: 'control'
      },
      {
        component: DocMapOptionsComponent,
        data: {
          name: 'MapOptions'
        },
        path: 'map-options'
      },
      {
        component: DocMarkerOptionsComponent,
        data: {
          name: 'MarkerOptions'
        },
        path: 'marker-options'
      },
      {
        component: DocNavigationControlOptionsComponent,
        data: {
          name: 'NavigationControlOptions'
        },
        path: 'navigation-control-options'
      },
      {
        component: DocCenterAndZoomComponent,
        data: {
          name: 'CenterAndZoom'
        },
        path: 'center-and-zoom'
      },
      {
        component: DocPointComponent,
        data: {
          name: 'Point'
        },
        path: 'point'
      },
      {
        component: DocSizeComponent,
        data: {
          name: 'Size'
        },
        path: 'size'
      },
      {
        component: DocIconComponent,
        data: {
          name: 'Icon'
        },
        path: 'icon'
      },
      {
        component: DocControlAnchorComponent,
        data: {
          name: 'ControlAnchor'
        },
        path: 'control-anchor'
      },
      {
        path: '**',
        redirectTo: 'baidu-map'
      }
    ],
    component: ApidocComponent,
    path: 'apidoc'
  }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ApidocRouteModule {}
