var path = require('path');
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');

module.exports = {
    context: path.resolve('js'),
    //entry: ["./utils", "./app"],
    entry: {
        home: './home_page.js',
       contact: './contact_page.js',
        about: './about_page.js'
    },
    output: {
        path: path.resolve('build/'),
        publicPath: '/public/assets/',
        //filename: "bundle.js"
        filename: "[name].js"
    },
    watch: true,
    plugins: [commonsPlugin],
    devServer: {
        contentBase: 'public'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "jshint-loader"
            }
        ],
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: "url-loader?limit=100000"
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.es6']
    }
}