var path = require('path');
var webpack = require('webpack');
var UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'angular2-baidu-map.min.js',
        library: true,
        libraryTarget: 'commonjs2'
    },
    target: 'node',
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts',
                exclude: /(node_modules)/
            }
        ]
    },
    ts: {
        configFileName: 'tsconfig.prod.json'
    },
    resolve: {
        root: [
            path.resolve(__dirname)
        ],
        extensions: [
            '',
            '.js',
            '.ts'
        ]
    },
    externals: {
        '@angular/core': '@angular/core'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            compress: {
                warnings: false
            }
        }),
        new UnminifiedWebpackPlugin()
    ]
};
