const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const webpackCommon = require('./webpack.common')

const webpackDev = {
    mode: 'developement',
    devServer: {
        contentBase: './dist',
        open: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    }
}

module.exports = webpackMerge(webpackCommon, webpackDev)