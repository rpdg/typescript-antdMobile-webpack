const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		ventor: ['react', 'react-dom'],
		index: './src/index.tsx',
	},
	output: {
		filename: "[name].js",
		path: path.join(__dirname, '/dist'),
	},

	devtool: "source-map",

	devServer: {
		disableHostCheck: true
	},


	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"]
	},
	module: {
		rules: [
			// 建议不使用 awesome-typescript-loader，否则自己设置
			// { test: /\.tsx?$/, loader: "babel-loader!awesome-typescript-loader?instance=ts-loader" },
			{test: /\.tsx?$/, loaders: [require.resolve('babel-loader'), require.resolve('ts-loader')]},
			{test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap!postcss-loader')},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract('css?sourceMap!postcss-loader!less?sourceMap')
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					//resolve-url-loader may be chained before sass-loader if necessary
					use: ['css-loader', 'sass-loader']
				})
			},
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
		]
	},
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin(),
		/*new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'common.js'
		}),*/

		//new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
		//new ExtractTextPlugin('bundle.css', { disable: false, allChunks: true }),
		//new webpack.optimize.OccurenceOrderPlugin(),
	]
};