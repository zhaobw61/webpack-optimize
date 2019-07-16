# webpack-optimize
学习webpack 优化
 
- noParse: packageName
> 对于没有依赖的包，不进行解析，可以提高效率。前提是这个包是独立的。

- ignorePlugin(flieName,moduleName)
> 忽略包里一些没有用的应用，可以提升效率

- dllPlugin
> 把一些包提前打包好，引入html。可以节省空间。

- happyPack
> 实现多线程打包

- import 在生产环境下 会自动去除掉没用的代码
- tree-shaking 把没有用到的代码 自动删除掉。
- 在webpack会自动帮忙省略一些代码

- 抽离公共代码：splitChunks

```
optimization:{
    splitChunks:{ // 分割代码块
        cacheGroups:{ // 缓存组
            common:{ // 公共模块
                chunks:'initial',
                minSize:0,
                minChunks:2 // 引用次数
            },
            vendor:{
                priority:1,
                test:/node_modules/,
                chunks:'initial',
                minSize:0,
                minChunks:2 // 引用次数
            }
        }    
    }
}
```

- 热更新：只是更新组件一部分。
> 插件：NameModulesPlugin、HotModuleReplacementPlugin
