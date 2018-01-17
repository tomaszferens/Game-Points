const path = require('path')

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
const DefinePlugin = webpack.DefinePlugin

const config = {
    entry: {
        app: './src/index.tsx',
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: '[name].js',
    },
    resolve: {
        modules: [path.resolve(__dirname), 'node_modules'],
        extensions: ['.ts', '.tsx', '.js', '.json', '.scss', '.css'],
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            {
                enforce: 'pre',
                exclude: [/node_modules/, /build/, /__test__/],
                test: /\.js$/,
                use: 'source-map-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
            },
            {
                test: /\.(eot|png|svg|ttf|woff|woff2)$/,
                exclude: /node_modules/,
                use: 'url-loader',
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new DefinePlugin({
            'process.env': {
                NODE_ENV: `'${process.env.NODE_ENV}'`,
            },
        }),
        new CopyWebpackPlugin([{ from: './static/favicon.png' }]),
    ],
}

switch (process.env.NODE_ENV) {
    case 'production':
        config.plugins = config.plugins.concat([
            new UglifyJsPlugin(),
            new CompressionPlugin({
                asset: '[path].gz[query]',
                algorithm: 'gzip',
                test: /\.js$|\.css$|\.html$/,
                threshold: 10240,
                minRatio: 0.8,
            }),
        ])
    case 'development':
        config.devtool = 'source-map'
        config.devServer = {
            historyApiFallback: true,
            disableHostCheck: true,
            host: '0.0.0.0',
            contentBase: './src',
        }
}

module.exports = config
