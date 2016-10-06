require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ 235:
/*!**********************************!*\
  !*** ./webpack.client.config.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var path = __webpack_require__(/*! path */ 9);
	var webpack = __webpack_require__(/*! webpack */ 6)
	var HtmlwebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ 10);
	module.exports = {
	    entry: [
	        'babel-polyfill',
	        //'webpack/hot/dev-server',
	        //'webpack-dev-server/client?http://localhost:8080',
	        path.resolve(__dirname,'..','app/main.js')
	    ],
	    output: {
	        path: path.resolve(__dirname,'..','build'),
	        filename: 'bundle.js',
	        publicPath: '/',
	    },
	    plugins: [
	        new HtmlwebpackPlugin({
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
	                plugins: ['transform-runtime',"transform-decorators-legacy"],
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


/***/ }

};
//# sourceMappingURL=0.4111585435f5b4c6bce6.hot-update.js.map