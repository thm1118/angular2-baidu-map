import { Component } from '@angular/core'

@Component({
  selector: 'doc-navigation-control-options',
  styles: [],
  template: `
  <p>
    The literal describes a <code>BMap.NavigationControl</code> instance.
  </p>
  <table class="matrix">
    <thead>
        <tr>
            <th style="width: 80px;">Property</th>
            <th>Type</th>
            <th>Details</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>anchor</td>
            <td><span class="label required">Object</span></td>
            <td>See: <a href="#/apidoc/control-anchor">ControlAnchor</a></td>
        </tr>
        <tr>
            <td>offset</td>
            <td><span class="label required">Number</span></td>
            <td>See: <a href="#/apidoc/size">Size</a></td>
        </tr>
    </tbody>
  </table>
  <blockquote>Required properties are in red</blockquote>
    `
})
export class DocNavigationControlOptionsComponent {
  constructor() {}
}
