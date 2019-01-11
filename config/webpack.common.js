const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            hash: true
        })
    ],
    module: {
        rules: [
            {
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