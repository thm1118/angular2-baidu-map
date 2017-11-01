import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DocBaidumapComponent } from './docBaidumap.component'
import { DocMarkerComponent } from './docMarker.component'
import { ApidocComponent } from './index.component'

const routes: Routes = [
  {
    children: [
      {
        component: DocBaidumapComponent,
        path: 'baidu-map'
      },
      {
        component: DocMarkerComponent,
        path: 'marker'
      }
    ],
    component: ApidocComponent,
    path: 'apidoc'
  },
  {
    path: 'apidoc',
    pathMatch: 'full',
    redirectTo: '/apidoc/baidu-map'
  }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ApidocRouteModule {}
