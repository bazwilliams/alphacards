/*global require*/
require.config({
    baseUrl: 'scripts/src',
    paths: {
        jquery: '../libs/jquery-2.0.3.min',
        underscore: '../libs/underscore-min',
        handlebars: '../libs/handlebars-v1.2.0',
        backbone: '../libs/backbone-min',
        text: '../libs/text'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    }
});

require(['app'], function (app) {
    "use strict";
    app.initialize();
});