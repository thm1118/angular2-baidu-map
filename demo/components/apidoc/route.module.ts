import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApidocComponent } from './index.component';

const routes: Routes = [
    {
        path: 'apidoc',
        component: ApidocComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ApidocRouteModule { }
