const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const styleLoader = {
    loader: 'style-loader',
    options: {
        sourceMap: true
    }
};

const cssLoader = {
    loader: 'css-loader',
    options: {
        sourceMap: true
    }
};

const resolveUrlLoader = {
    loader: 'resolve-url-loader',
    options: {
        sourceMap: true
    }
};

const sassLoader = {
    loader: 'sass-loader',
    options: {
        sourceMap: true
    }
};

const fileLoader = {
    loader: 'file-loader',
    options: {
        name: '[name]-[hash:6].[ext]'
    }
};

module.exports = {
    entry: {
        rep_log: './assets/js/rep_log.js',
        login: './assets/js/login.js',
        layout: './assets/js/layout.js'
    },
    output: {
        path: path.resolve(__dirname, 'web', 'build'),
        filename: '[name].js',
        publicPath: '/build/' // used by file rewrites by file-loader
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.css$/,
                // Read loaders from right to left,
                // i.e. bottom to top
                use: [
                    styleLoader,
                    cssLoader
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    styleLoader,
                    cssLoader,
                    resolveUrlLoader,
                    sassLoader
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|ico|jpeg)$/,
                use: [
                    fileLoader
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    fileLoader
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            // whenever some code uses jQuery.someMethod()
            // and jQuery is unknown, it hoists
            // const jQuery = require('jquery')
            jQuery: 'jquery',
            $: 'jquery',
            'window.jQuery': 'jquery', // same issue if legacy lib uses window.jQuery
            'window.$': 'jquery' // same issue if legacy lib uses window.$
            // GOTCHA: will rewrite any of you own code that tries to
            // expose jQuery globally via window.$ = $.
        }),

        new CopyWebpackPlugin([
            { from: './assets/static', to: './static' } ]
        )
    ],
    devtool: 'inline-source-map' // activate source maps for js
};