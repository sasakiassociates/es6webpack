var path = require('path');

var webpack = require('webpack');

var dir_js = path.resolve(__dirname, '../src');
var dir_build = path.resolve(__dirname, '../build');

module.exports = {
    entry: path.resolve(dir_js, 'main.js'),
    output: {
        path: dir_build,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: dir_build
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: dir_js
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map'
};
