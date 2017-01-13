import { Component } from '@angular/core';

@Component({
    selector: 'github',
    template: `
    <div id="github">
        <iframe src="https://ghbtns.com/github-btn.html?user=leftstick&repo=angular2-baidu-map&type=star&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="100" height="20"></iframe>
        <iframe src="https://ghbtns.com/github-btn.html?user=leftstick&repo=angular2-baidu-map&type=fork&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="100" height="20"></iframe>
    </div>
    `,
})
export class Github { }