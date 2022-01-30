const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.html$/i,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: false },
					}
				]
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
					{
						loader: 'sass-resources-loader',
						options: {
							resources: [
								'./src/styles/style.scss',
							]
						}
					}
				],
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
	devServer: {
		compress: true,
		port: 3000,
	},
}