const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
//tree shaking plugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const  HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });


module.exports = {
    entry: './server/server.js',
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist'),
        //publicPath: path.resolve(__dirname, 'dist'),
    },

    target: 'node',
    externals: nodeModules,

    devtool: 'eval-source-map',

    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        historyApiFallback: true,
    },

    module:{
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
        //new HtmlWebpackPlugin(),
        //new HtmlWebpackHarddiskPlugin(),
    ]

}