
import { Component } from '@angular/core';

@Component({
    selector: 'version',
    template: `
    <h1>Version</h1>
    <p>There are 3 major versions available, and each of them is not backwards compatible. Which means you should not writing codes at version 2's instruction, but with version 3 installed. Below are documentation references for previous versions:</p>
    <br/>
    <ul>
        <li><a href="https://github.com/leftstick/angular2-baidu-map/tree/3.x" target="_blank">version 2.x</a></li>
        <li><a href="https://github.com/leftstick/angular2-baidu-map/tree/3.x" target="_blank">version 3.x</a></li>
    </ul>
    `,
})
export class VersionComponent { }