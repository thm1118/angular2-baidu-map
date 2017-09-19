import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HighlightDirective } from './directives/highlight';

import { RouteModule } from './route.module';

import { DemoComponent } from './demo.component';
import { MenuComponent } from './components/menu.component';
import { HomeModule } from './components/home/index.module';

import { QuickstartComponent } from './components/quickstart/index.component';
import { InstallComponent } from './components/quickstart/install.component';
import { ImportComponent } from './components/quickstart/import.component';
import { UsageComponent } from './components/quickstart/usage.component';

@NgModule({
    imports: [
        BrowserModule,
        RouteModule,
        HomeModule
    ],
    declarations: [
        DemoComponent,
        MenuComponent,
        QuickstartComponent,
        InstallComponent,
        ImportComponent,
        UsageComponent,
        HighlightDirective
    ],
    bootstrap: [DemoComponent]
})
export class DemoModule { }
