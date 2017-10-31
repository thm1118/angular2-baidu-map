import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApidocComponent } from './index.component';

const routes: Routes = [
  {
    component: ApidocComponent,
    path: 'apidoc'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ApidocRouteModule {}
