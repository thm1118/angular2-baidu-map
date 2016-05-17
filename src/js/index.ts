'use strict';

require.ensure(['splash-screen/dist/splash.min.css', 'splash-screen'], function(require) {
    (<any>require('splash-screen/dist/splash.min.css')).use();
    (<any>require('splash-screen')).Splash.enable('circular');
});

require.ensure(['../less/main.less', './main'], function(require) {

    require('../less/main.less');

    var App = (<any>require('./main')).default;
    (new App()).run();
});
