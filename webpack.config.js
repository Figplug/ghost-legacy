const path = require("path");
const webpack = require("webpack");

module.exports = (env, argv) => ({
	mode: argv.mode === "production" ? "production" : "development",

	// This is necessary because Figma's 'eval' works differently than normal eval
	devtool: argv.mode === "production" ? false : "inline-source-map",

	entry: {
		code: "./src/code.ts", // The entry point for your plugin code
	},

	module: {
		rules: [
			// Converts TypeScript code to JavaScript
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},

			// Allows you to use "<%= require('./file.svg') %>" in your HTML code to get a data URI
			// { test: /\.(png|jpg|gif|webp|svg|zip)$/, loader: [{ loader: 'url-loader' }] }
			{
				test: /\.svg/,
				type: "asset/inline",
			},
		],
	},

	// Webpack tries these extensions for you if you omit the extension like "import './file'"
	resolve: { extensions: [".tsx", ".ts", ".jsx", ".js"] },

	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"), // Compile into a folder called "dist"
	},

	plugins: [
		new webpack.DefinePlugin({
			global: {}, // Fix missing symbol error when running in developer VM
		}),
	],
});
