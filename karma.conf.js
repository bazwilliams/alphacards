//Karma configuration

module.exports = function (config) {
    config.set({
        basePath: 'scripts',
        frameworks: ['jasmine', 'requirejs'],
        files: [
            'libs/jquery-2.0.3.min.js',
            'libs/underscore-min.js',
            'libs/handlebars-v1.2.0.js',
            'libs/backbone-min.js',
            'tests/test-main.js',
            {pattern: 'src/**/*', included: false},
            {pattern: 'libs/*.js', included: false},
            {pattern: 'tests/**/*.js', included: false}],
        reporters: ['dots'],
        autoWatch: true,
        browsers: ['PhantomJS']
    })
}
