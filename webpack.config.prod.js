const path = require('path');
const webpack = require('webpack');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'angular2-baidu-map.min.js',
        library: 'BaiduMapModule',
        libraryTarget: 'umd'
    },
    target: 'node',
    module: {
        exprContextCritical: false,
        rules: [
            {
                test: /\.ts/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        configFileName: 'tsconfig.prod.json'
                    }
                }]
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname),
            path.resolve(__dirname, 'node_modules')
        ],
        extensions: [
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
