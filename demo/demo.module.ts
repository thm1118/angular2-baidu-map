import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouteModule } from './route.module';

import { DemoComponent } from './demo.component';
import { MenuComponent } from './components/menu.component';

import { HomeModule } from './components/home/index.module';
import { QuickstartModule } from './components/quickstart/index.module';
import { ApidocModule } from './components/apidoc/index.module';

@NgModule({
    imports: [
        BrowserModule,
        RouteModule,
        HomeModule,
        QuickstartModule,
        ApidocModule
    ],
    declarations: [
        DemoComponent,
        MenuComponent
    ],
    bootstrap: [DemoComponent]
})
export class DemoModule { }
