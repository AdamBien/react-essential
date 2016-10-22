module.exports = function karmaConfig(config) {
    config.set({
        frameworks: ['mocha'],
        reporters: ['spec'],
        files: ['test/**/*.*'],
        preprocessors: {
            'test/**/*.*':['webpack','sourcemap']
        },
        browsers: [
            'PhantomJS'
        ],
        singleRun: true,
        webpack: require('./webpack.config')
    });
}