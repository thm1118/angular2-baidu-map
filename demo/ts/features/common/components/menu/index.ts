import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu.co';

@NgModule({
    imports: [RouterModule],
    declarations: [
        MenuComponent
    ],
    exports: [MenuComponent]
})
export class MenuModule { }
