import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { QuickstartRouteModule } from './route.module';

import { QuickstartComponent } from './index.component';
import { InstallComponent } from './install.component';
import { ImportComponent } from './import.component';
import { UsageComponent } from './usage.component';


@NgModule({
    imports: [
        CommonModule,
        QuickstartRouteModule
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        QuickstartComponent,
        InstallComponent,
        ImportComponent,
        UsageComponent
    ]
})
export class QuickstartModule { }
