'use strict';
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        index: './src/js/index.ts'
    },

    // devtool: 'source-map',//enable it while you need debug
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[hash].[name].bundle.js',
        chunkFilename: '[hash].[id].bundle.js',

        // sourceMapFilename: '[hash].[id].[name].map',//enable it while you need debug
        publicPath: 'dist/'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style/useable!css'
            },
            {
                test: /\.ts$/,
                loader: 'ts',
                exclude: /(typings)/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)\w*/,
                loader: 'file'
            },
            {
                test: /\.less$/,
                loader: 'style!css!postcss!less'
            },
            {
                test: /(\.tpl|\.style)$/,
                loader: 'raw'
            }
        ]
    },
    postcss: function() {
        return [
            autoprefixer({browsers: ['last 5 versions']})
        ];
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
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('[hash].common.bundle.js'),
        new HtmlWebpackPlugin({
            title: 'angular2-baidu-map',
            inject: 'body',
            template: 'src/index.ejs',
            hash: false,
            favicon: 'src/img/favicon.ico'
        })
    ]
};
