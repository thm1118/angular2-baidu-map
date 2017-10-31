const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env = {}) {
  const isProd = !!env.isProd;

  return {
    entry: {
      polyfills: resolve(__dirname, 'demo', 'ext', 'polyfills.ts'),
      vendors: resolve(__dirname, 'demo', 'ext', 'vendors.ts'),
      demo: resolve(__dirname, 'demo', 'index.ts')
    },
    output: {
      path: resolve(__dirname, 'build'),
      filename: '[hash].[name].bundle.js',
      chunkFilename: '[hash].[id].bundle.js',
      publicPath: isProd ? '/angular2-baidu-map/' : '/'
    },
    devtool: '#source-map',
    devServer: {
      historyApiFallback: false,
      stats: 'minimal'
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      exprContextCritical: false,
      rules: [
        {
          test: /\.ts$/,
          use: [
            'ts-loader',
            {
              loader: 'tslint-loader',
              options: {
                typeCheck: true
              }
            }
          ],
          exclude: [resolve(__dirname, 'node_modules')]
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]'
              }
            }
          ],
          exclude: [resolve(__dirname, 'node_modules')]
        }
      ]
    },

    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: ['demo', 'vendor', 'polyfills']
      }),

      new HtmlWebpackPlugin({
        filename: 'index.html',
        inject: 'body',
        template: resolve(__dirname, 'demo', 'index.html'),
        favicon: resolve(__dirname, 'demo', 'img', 'favicon.ico'),
        hash: false,
        base: isProd ? '/angular2-baidu-map/' : '/'
      })
    ]
  };
};
