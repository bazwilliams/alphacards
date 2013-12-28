//Karma configuration

module.exports = function (config) {
    config.set({
        basePath: 'scripts/',
        frameworks: ['jasmine', 'requirejs'],
        files: [
            'tests/test-main.js',
            {pattern: 'src/**/*', included: false, served: true},
            {pattern: 'libs/*.js', included: false, served: true},
            {pattern: 'tests/**/*.js', included: false, served: true}
        ],
        reporters: ['dots'],
        autoWatch: true,
        browsers: ['PhantomJS']
    })
}
