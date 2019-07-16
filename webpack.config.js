let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
module.exports = {
    mode:'development',
    entry:'./src/index.js',
    module:{
        noParse:/jquery/, // 不解析jquery这个包依赖关系 前提是这个包是独立的。
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                include:path.resolve('src'),
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    },
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new webpack.IgnorePlugin(/\.\/locale/,/moment/), // 忽略moment包里的对locale引入
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}