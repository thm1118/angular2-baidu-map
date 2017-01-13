import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

import { Apidoc } from './components/apidoc.co';


@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [
        Apidoc
    ],
    exports: [Apidoc]
})
export class ApidocModule { }

export { routes };
