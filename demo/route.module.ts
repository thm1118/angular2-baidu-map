import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
            { enableTracing: false, useHash: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class RouteModule { }
