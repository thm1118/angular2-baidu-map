import { Component, Input } from '@angular/core'

@Component({
  selector: 'api-sidebar',
  styles: [
    `
  :host {
      display: block;
      width: 210px;
      padding: 15px;
      border: 1px solid #cccccc;
      border-radius: 4px 0 0 4px;
  }
  
  :host .api-nav .api-nav-header {
      font-weight: bold;
  }
  
  :host .api-nav > .api-nav-item {
      padding: 3px 0 3px 10px;
  }
  
  :host .api-nav > .api-nav-item.active {
      background-color: #eee;
  }
  
  :host .api-nav > .api-nav-item > a {
      text-decoration: none;
  }
  
  @media screen and (max-width: 960px) {
      :host {
          display: none;
      }
  }
  `
  ],
  template: `
    <div class="api-nav">
        <div class="api-nav-header">Components</div>
        <div class="api-nav-item" [class.active]="api === 'baidu-map'"><a href="#/apidoc/baidu-map">baidu-map</a></div>
        <div class="api-nav-item" [class.active]="api === 'marker'"><a href="#/apidoc/marker">marker</a></div>
        <div class="api-nav-item" [class.active]="api === 'control'"><a href="#/apidoc/control">control</a></div>
        <div class="api-nav-header">Models</div>
        <div class="api-nav-item" [class.active]="api === 'map-options'"><a href="#/apidoc/map-options">MapOptions</a></div>
        <div class="api-nav-item" [class.active]="api === 'center-and-zoom'"><a href="#/apidoc/center-and-zoom">CenterAndZoom</a></div>
        <div class="api-nav-item" [class.active]="api === 'marker-options'"><a href="#/apidoc/marker-options">MarkerOptions</a></div>
        <div class="api-nav-item" [class.active]="api === 'point'"><a href="#/apidoc/point">Point</a></div>
        <div class="api-nav-item" [class.active]="api === 'size'"><a href="#/apidoc/size">Size</a></div>
        <div class="api-nav-item" [class.active]="api === 'icon'"><a href="#/apidoc/icon">Icon</a></div>
        <div class="api-nav-item" [class.active]="api === 'navigation-control-options'"><a href="#/apidoc/navigation-control-options">NavigationControlOptions</a></div>
        <div class="api-nav-item" [class.active]="api === 'control-anchor'"><a href="#/apidoc/control-anchor">ControlAnchor</a></div>
    </div>
    `
})
export class SidebarComponent {
  @Input() public api: string

  constructor() {}
}
