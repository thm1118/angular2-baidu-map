import { ModuleWithProviders, NgModule } from '@angular/core'

import { ControlComponent } from './components/control.component'
import { MapComponent } from './components/map.component'
import { MarkerComponent } from './components/marker.component'
import { LOADING_STATE, ScriptLoaderConfig } from './providers/scriptLoader'

import { BMap } from './types/BMap'

@NgModule({
  declarations: [MapComponent, MarkerComponent, ControlComponent],
  exports: [MapComponent, MarkerComponent, ControlComponent]
})
export class BaiduMapModule {
  public static forRoot(_config?: ScriptLoaderConfig): ModuleWithProviders {
    return {
      ngModule: BaiduMapModule,
      providers: [{ provide: ScriptLoaderConfig, useValue: _config }]
    }
  }
}

export { BMapInstance, MapOptions } from './types/Map'
export * from './types/Point'
export { MarkerOptions } from './types/Marker'
export {
  ControlType,
  ControlAnchor,
  NavigationControlOptions,
  NavigationControlType
} from './types/Control'
export { BInfoWindowConstructor, BInfoWindowOptions } from './types/InfoWindow'

declare global {
  interface Window {
    _scriptLoadState: LOADING_STATE
    BMap: BMap
    _loadingCallbacks: Array<() => void>
    baidumapinit: () => void
  }
}
