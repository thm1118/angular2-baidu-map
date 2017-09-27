import { Component } from '@angular/core';

@Component({
    selector: 'apidoc',
    template: `
    <div class="container">
        <h1 class="page-title">API Documentation</h1>
        <div class="doc">
            
            <router-outlet></router-outlet>
        </div>
    </div>
    `,
    styles: [
        `
        :host {
            width: 100%;
            display: flex;
            justify-content: center;
        }
        
        :host .container {
            width: 1200px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        :host .container .doc {
            display: flex;
            width: 100%;
            flex-grow: 2;
        }
        
        :host .container .doc api-sidebar {
            flex-shrink: 0;
        }
        
        @media screen and (max-width: 1200px) {
            :host .container {
                width: 100%;
            }
        }
        `
    ]
})
export class ApidocComponent {

    constructor() {

    }


}
