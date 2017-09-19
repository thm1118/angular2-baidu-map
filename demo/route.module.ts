import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuickstartComponent } from './components/quickstart/index.component';

const routes: Routes = [
    {
        path: 'quickstart',
        component: QuickstartComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            { enableTracing: true, useHash: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class RouteModule { }
