const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackBar = require('webpackbar');
const path = require("path");

module.exports = {
    output:{
        path:path.resolve(__dirname,"./dist"),
        filename:"main.[contenthash:8].js",
    },
    module: {
        rules: [
          {
            test: /\.(css|less)$/,
            use: [MiniCssExtractPlugin.loader, "css-loader","postcss-loader","less-loader"],
          },
          {
          // 导入字体图标/自定义字体
           test:/\.(woff | eot | ttf | otf | svg)$/,//字体的格式
           type:'asset/resource'
          },    
        ],
    },
    mode:process.env.NODE_ENV,
    resolve:{
        alias:{
            "@":path.resolve(__dirname,"./src")
        }
    },
    externals:{
        jquery:"jQuery",
        lodash:"_",  //改配置文件并打包
    },
    devServer:{
        open:true,
        //配置前端请求代理
        proxy:{
            //在开发环境下面代理的目标是http://127.0.0.1:3000
            // 在生产环境下面代理的目标是http://api.cc0820.top:3000
            "^/api":{
                target:
                process.env.NODE_ENV === "development"
                ? "http://127.0.0.1:3000"
                : process.env.NODE_ENV === "production"
                ? "http://api.cc0820.top:3000"
                : "",  //解决跨域问题
                pathRewrite:{"^/api":""},     //路径重启
            },
            "^/api1":{
                target:"http://127.0.0.1:3001",
                pathRewrite:{"^/api1":""},
            }
        },
        client:{
            overlay:false
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            cdn:{
                script:["https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.min.js","https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.core.min.js"],
                style:[]
            },
            title123:'2312'
        }),
        new MiniCssExtractPlugin({
            filename:'main.[contenthash:8].css',
        }),
        new WebpackBar(),
    ]
}

//CDN()