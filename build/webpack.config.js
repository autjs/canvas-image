const path = require('path')
module.exports = {
	mode: 'production',
	entry: ['./src/index.js'],
	output: {
		library: 'cncoder',
		libraryTarget: 'umd',
		path: path.resolve(__dirname, '../dist'),
		filename: 'cncoder.js'
	},
	devtool: 'source-map', 
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [
					path.resolve(__dirname, 'src')
				],
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
}