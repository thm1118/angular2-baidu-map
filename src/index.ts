import { ModuleWithProviders, NgModule } from '@angular/core'

import { MapComponent } from './components/map.component'
import { MarkerComponent } from './components/marker.component'
import { ScriptLoaderConfig } from './providers/scriptLoader'

@NgModule({
  declarations: [MapComponent, MarkerComponent],
  exports: [MapComponent, MarkerComponent]
})
export class BaiduMapModule {
  public static forRoot(_config?: ScriptLoaderConfig): ModuleWithProviders {
    return {
      ngModule: BaiduMapModule,
      providers: [{ provide: ScriptLoaderConfig, useValue: _config }]
    }
  }
}

export { Map, MapOptions } from './types/Map'
export * from './types/Point'
export { MarkerOptions } from './types/Marker'
