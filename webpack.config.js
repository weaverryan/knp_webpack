const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        rep_log: './web/assets/js/rep_log.js',
        login: './web/assets/js/login.js',
        layout: './web/assets/js/layout.js'
    },
    output: {
        path: path.resolve(__dirname, 'web', 'build'),
        filename: '[name].js'
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
                    'style-loader', // inject recieved js array data
                                    // on styles into <head> <style>
                                    // element of the document
                    'css-loader' // converts styles to js array
                                 // then send it to style-loader
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
            $: 'jquery'

        })
    ]
};