import { Routes } from '@angular/router';

import common from './common';

import * as home from './home';
import * as quickstart from './quickstart';
import * as apidoc from './apidoc';

export const features: any[] = [...common, home.HomeModule, quickstart.QuickstartModule, apidoc.ApidocModule];

export const routes: Routes = [...home.routes, ...quickstart.routes, ...apidoc.routes];
