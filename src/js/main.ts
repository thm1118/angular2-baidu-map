'use strict';

import 'es6-shim';
import 'reflect-metadata';
import 'angular2/bundles/angular2-polyfills';
import {bootstrap} from 'angular2/platform/browser';
import {MainApp} from './map.app';
import {enableProdMode} from 'angular2/core';
import Splash = require('splash-screen');

class App {

    constructor() {
        enableProdMode();
    }

    destroySplash(): void {
        var _this = this;
        Splash.destroy();
        (<any>require('splash-screen/splash.min.css')).unuse();
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

export = App;
