const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            hash: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }, {
                test: /\.(jpg|png|svg|gif)$/,
                loader: 'file-loader',
                options: {
                    outputPath: path.join('static', 'img')
                }
            }, {
                test: /\.(woff|woff2|otf|eot|ttf)$/,
                loader: 'file-loader',
                options: {
                    outputPath: path.join('static', 'fonts')
                }
            }
        ]
    }
}