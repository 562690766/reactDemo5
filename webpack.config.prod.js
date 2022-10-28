const merge = require('webpack-merge');
const base =require("./webpack.config.base")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports =merge(base,{
    mode: "production",
    plugins: [
        new MiniCssExtractPlugin({
            filename:'css/[name]-[hash].css',
            chunkFilename:'[id].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                // 是开发者模式吗？是就用style-loader，不是就不用--并打包成独立文件
                use: [
                    {
                        loader:MiniCssExtractPlugin.loader
                    },{
                        loader:'css-loader',
                        options:{
                            modules:true,
                        }
                    }]
            }, {
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader // creates style nodes from JS strings
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS
                    options: {
                        modules: true,
                    },
                }, {
                    loader: 'less-loader'// compiles Less to CSS
                }]
            }, {
                test: /\.scss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'sass-loader' // compiles sass to CSS
                }]
            },
        ]
    },
});