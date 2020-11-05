// 引入express框架
const express = require('express')
const bodyParser = require('body-parser') // 引入body-parser中间件
//引入路由模块
const router = require("./router")

// 创建网站服务器
const app = express()

//配置跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");//允许所有来源访问 
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");//允许访问的方式 
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});



/**

 * 配置body-parser:拦截所有请求

 * extended: false,方法内部使用querystring模块处理请求参数的格式

 * extended: true,方法内部使用第三方模块qs处理请求参数的格式

 */

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(router)

// 监听端口
app.listen(3000, () => console.log('服务器启动成功...'))