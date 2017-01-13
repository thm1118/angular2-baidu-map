import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

import { Home } from './components/home.co';
import { About } from './components/subs/about.co';
import { Github } from './components/subs/github.co';

import { BaiduMapModule } from '../../../../src';

@NgModule({
    imports: [RouterModule.forChild(routes), BaiduMapModule.forRoot({
        ak: 'gd0GyxGUxSCoAbmdyQBhyhrZ'
    })],
    declarations: [
        Home,
        About,
        Github
    ],
    exports: [
        Home,
        About,
        Github
    ]
})
export class HomeModule { }

export { routes };
