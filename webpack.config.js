let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
let Happypack = require('happypack'); // 多线程来打包
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
                // use:{
                //     loader:'babel-loader',
                //     options:{
                //         presets:[
                //             '@babel/preset-env',
                //             '@babel/preset-react'
                //         ]
                //     }
                // }
                use:'Happypack/loader?id=js'
            }
        ]
    },
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new Happypack({
            id:'js',
            use:[{
                loader:'babel-loader',
                options:{
                    presets:[
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ]
                }
            }]
        }),
        new webpack.IgnorePlugin(/\.\/locale/,/moment/), // 忽略moment包里的对locale引入
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}