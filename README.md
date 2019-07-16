# webpack-optimize
学习webpack 优化
 
- noParse: packageName
> 对于没有依赖的包，不进行解析，可以提高效率。前提是这个包是独立的。
- ignorePlugin(flieName,moduleName)
> 忽略包里一些没有用的应用，可以提升效率

- dllPlugin
> 把一些包提前打包好，引入html。可以节省空间。