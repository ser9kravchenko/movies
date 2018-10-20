const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        index:'./src/index.js',
        bootstrap:'./node_modules/bootstrap/dist/js/bootstrap.js'
    },
    output:{
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        publicPath:'/'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery/dist/jquery.min.js",
            jQuery: "jquery/dist/jquery.min.js",
            "window.jQuery": "jquery/dist/jquery.min.js",
            Popper: ['popper.js', 'default']
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        ['@babel/preset-env', { modules: false }],
                    ],
                },
            },
        ],
    },
};