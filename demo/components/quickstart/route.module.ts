import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuickstartComponent } from './index.component';

const routes: Routes = [
    {
        path: 'quickstart',
        component: QuickstartComponent
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
export class QuickstartRouteModule { }
