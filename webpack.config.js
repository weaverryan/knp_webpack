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