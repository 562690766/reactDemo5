const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const devMode=process.env.NODE_ENV!=='production';
// 如果等于development就是true，否则就是false。
const dev=process.env.NODE_ENV==="development";
module.exports = {
    entry: {
        index: "./src/index.js",
        one: './src/one.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].main.js"
    },
    mode: "development",
    // devtool: "source-map",
    plugins: [
        //配置多个应用
        new HtmlWebpackPlugin({ //假设是前台应用入口
            title: '首页',
            filename: "index.html",
            template: "./public/index.html",
            chunks: ["index"]    //chunks指定需要引入的入口模块的键名 index:"./src/index.js"
        }),
        new HtmlWebpackPlugin({//假设是后台应用入口one:"./src/one.js"
            title: 'One',
            filename: "one.html",
            template: "./public/one.html",
            chunks: ["one"] //chunks指定需要引入的入口模块的键名 one:"./src/one.js"
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename:devMode?'[name].[hash].css':'[name].css',
            chunkFilename: devMode?'[id].[hash].css':'[id].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    /* options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }*/
                }

            },
            {
                test: /\.css$/,
                // 是开发者模式吗？是就用style-loader，不是就不用--并打包成独立文件
                use: [dev?'style-loader':MiniCssExtractPlugin.loader, 'css-loader'],
            }, {
                test: /\.less$/,
                use: [{
                    loader:  dev?'style-loader':MiniCssExtractPlugin.loader // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader' // compiles Less to CSS
                }]
            }, {
                test: /\.scss$/,
                use: [{
                    loader:  dev?'style-loader':MiniCssExtractPlugin.loader // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'sass-loader' // compiles sass to CSS
                }]
            }
        ]
    }
}