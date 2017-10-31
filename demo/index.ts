import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DemoModule } from './demo.module';

if (process.env.ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(DemoModule)
  .catch(err => console.log(err));

document.head.removeChild(document.querySelector('#splash-spinner'));
document.body.removeChild(document.querySelector('.spinner'));
