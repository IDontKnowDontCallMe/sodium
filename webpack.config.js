const path = require('path');
const webpack = require('webpack');
//tree shaking plugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const  HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');


var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')

var webpackIsomorphicToolsPlugin =
    // webpack-isomorphic-tools settings reside in a separate .js file
    // (because they will be used in the web server code too).
    new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools-configuration'))
    // also enter development mode since it's a development webpack configuration
    // (see below for explanation)
        .development()


module.exports = {

    context: __dirname,


    entry: './src/index.js',
    //entry: './server/server.js',
    output: {
        filename: 'bundle.js',
        //filename: 'server.js',
        path: path.resolve(__dirname, 'dist'),
        //publicPath: path.resolve(__dirname, 'dist'),
    },

    devtool: 'eval-source-map',

    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        historyApiFallback: true,
    },

    module:{

        loaders:
            [
                {
                    test: webpackIsomorphicToolsPlugin.regularExpression('images'),
                    loader: 'url-loader?limit=10240', // any image below or equal to 10K will be converted to inline base64 instead
                }
            ],

        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new UglifyJSPlugin(),
        webpackIsomorphicToolsPlugin,
        //new HtmlWebpackPlugin(),
        //new HtmlWebpackHarddiskPlugin(),
    ]

}