var path = require('path');
var webpack = require("webpack")
var HtmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: [
        'babel-polyfill',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname,'..','app/main.js'),
    ],
    output: {
        path: path.resolve(__dirname,'..','build'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [new HtmlwebpackPlugin({
        title: '选择预约项目',
        template: path.resolve(__dirname,'..','app/index_template.html'),
        inject: 'body' // Inject all scripts into the body 
    }),new webpack.HotModuleReplacementPlugin()],
    module: {
        loaders: [{
            'loader': 'babel-loader',
            exclude: [
                //在node_modules的文件不被babel理会
                path.resolve(__dirname,'..','node_modules'),
            ],
            include: [
                //指定app这个文件里面的采用babel
                path.resolve(__dirname,'..','app'),
            ],
            test: /\.jsx?$/,
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'stage-0', 'react'],
                "env": {
                    "development": {
                        "presets": ["react-hmre"]
                    }
                }
            }
        },{ test: /\.less$/, loader: 'style!css?modules&localIdentName=[name]__[local]!less' },
        { test: /\.css$/, loader: 'style!css?modules&localIdentName=[name]__[local]' },
        { test: /\.(woff)$/, loader: 'url?limit=100000' },
        { test: /\.(png|jpg|jpeg|svg)$/, loader: 'url?limit=25000' },]
    },
    resolve: {
        alias: {
            app: path.join(__dirname,'..', "./app")
        }
    }

};
console.log('ssss');
console.log("HHHHHHHf");
console.log(__dirname);
