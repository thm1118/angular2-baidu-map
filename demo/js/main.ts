import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {MainApp} from './demo.app';
import {enableProdMode} from '@angular/core';
import {Splash} from 'splash-screen';

class App {

    constructor() {
        enableProdMode();
    }

    destroySplash(): void {
        var _this = this;
        Splash.destroy();
        (<any>require('splash-screen/dist/splash.min.css')).unuse();
        setTimeout(function() {
            if (Splash.isRunning()) {
                _this.destroySplash();
            }
        }, 100);
    }

    launch() {
        bootstrap(MainApp);
    }

    run(): void {
        this.destroySplash();
        this.launch();
    }
}

export default App;
