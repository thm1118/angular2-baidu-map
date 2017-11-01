import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'doc-baidu-map',
  styles: [
    `
        `
  ],
  template: `
  <p>
    The <code>baidu-map</code> component is the core of this module. It is used to instantiate a Baidu Map object in your page. Every other component must be contained within a <code>baidu-map</code> for them to work.
  </p>
  <h2 class="title">Usage</h2>
  <div class="snippet" highlight>
    <pre><code class="html">&lt;baidu-map 
    [options]="opts"&gt;&lt;/baidu-map&gt;</code></pre>
  </div>
    `
})
export class DocBaidumapComponent {
  constructor() {}
}
