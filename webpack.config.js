const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 如果等于development就是true，否则就是false。
const dev = process.env.NODE_ENV === "development";
module.exports = {
    entry: {
        index: "./src/index.js",
        one: './src/one.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].[contenthash].main.js"
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
            filename: devMode ? 'css/[name].[hash].css' : '[name].css',
            chunkFilename: devMode ? '[id].[hash].css' : '[id].css',
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
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
                    loader: dev ? 'style-loader' : MiniCssExtractPlugin.loader // creates style nodes from JS strings
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
                    loader: dev ? 'style-loader' : MiniCssExtractPlugin.loader // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'sass-loader' // compiles sass to CSS
                }]
            },
            //  {
            //      test: /\.(png|jpe?g|gif)$/,
            //      use: [
            //          {
            //              loader: 'file-loader',
            //              options: {
            //                  name: '[name].[ext]',
            //                  publicPath: './../img',  //该属性指明我们最终引用的文件路径（打包生成的index.html文件里面引用资源的前缀）
            //                  outputPath: 'img/'  //图片复制到的文件夹
            //              },
            //          },
            //          {
            //              loader:'image-webpack-loader',
            //          }
            //      ],
            //  },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            publicPath: './../img',
                            outputPath: 'img/'
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: './../fonts',
                    outputPath: 'fonts/'
                },
            },

        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),//contentBase网站根目录
        compress: true,//会 gzip(压缩) 和 serve(服务) 所有来自项目根路径下 dist/ 目录的文件
        port: 9000,
        proxy: {//代理服务器
            "/data": { //地址
                "target": "http://wz321.cp1j07.cnaaa3.com", //接口地址,跨域访问
                // secure: false,// 如果是https接口，需要配置这个参数
                "changeOrigin": true,//开启跨域
                "pathRewrite": { "^/data": "" }//如果接口本身没有/data需要通过pathRewrite来重写了地址
            }
        }
    },
    resolve:{
        extensions:['.jsx','.less','.js','.css']
      },
  
}