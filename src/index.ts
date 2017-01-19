import { NgModule, ModuleWithProviders } from '@angular/core';
import { ScriptLoaderConfig, ScriptLoader } from './providers/scriptLoader';

import { BaiduMapComponent } from './components/map.co';
import { MarkerComponent } from './components/marker.co';

@NgModule({
    declarations: [
        BaiduMapComponent,
        MarkerComponent
    ],
    exports: [
        BaiduMapComponent,
        MarkerComponent
    ]
})
export class BaiduMapModule {
    static forRoot(_config?: ScriptLoaderConfig): ModuleWithProviders {
        return {
            ngModule: BaiduMapModule,
            providers: [
                { provide: ScriptLoaderConfig, useValue: _config }
            ]
        };
    }
}

export { Map, MapOptions } from './types/Map';
export * from './types/Point';
export { MarkerOptions } from './types/Marker';
