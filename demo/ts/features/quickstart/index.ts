import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './routes';

import { Quickstart } from './components/quickstart.co';


@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [
        Quickstart
    ],
    exports: [Quickstart]
})
export class QuickstartModule { }

export { routes };
