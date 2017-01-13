import { NgModule, ModuleWithProviders } from '@angular/core';
import { LAZY_MAP_API_CONFIG, LazyMapAPILoaderConfig } from './providers/mapLoader';
import { BaiduMapComponent } from './components/map.co';

@NgModule({
    declarations: [
        BaiduMapComponent
    ],
    exports: [BaiduMapComponent]
})
export class BaiduMapModule {
    static forRoot(_config?: LazyMapAPILoaderConfig): ModuleWithProviders {
        return {
            ngModule: BaiduMapModule,
            providers: [
                { provide: LAZY_MAP_API_CONFIG, useValue: _config }
            ],
        };
    }
}

export { Map, MapOptions } from './types/Map';
export * from './types/Point';
