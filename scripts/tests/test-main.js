/*global require, window*/
var tests = Object.keys(window.__karma__.files).filter(function (file) {
    "use strict";
    return (/Specs\.js$/).test(file);
});

require({
    baseUrl: '/base/src/',
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
    },
    deps: tests,
    callback: window.__karma__.start
});
