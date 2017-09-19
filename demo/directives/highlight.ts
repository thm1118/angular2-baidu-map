import { Directive, OnInit, ElementRef } from '@angular/core';
import * as hljs from 'highlight.js';

@Directive({
    selector: '[highlight]',
})
export class HighlightDirective implements OnInit {

    constructor(private _el: ElementRef) { }

    ngOnInit() {
        const snippets = this._el.nativeElement.querySelectorAll('.snippet pre code');
        Array
            .prototype
            .slice
            .apply(snippets)
            .forEach((s: any) => {
                hljs.highlightBlock(s);
            });
    }
}
