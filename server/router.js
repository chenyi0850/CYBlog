const express = require("express")
const router = express.Router()
// 处理路由请求
/**
 * send()方法相对于end()的好处：
 * 1.send方法内部会检测响应内容的类型
 * 2.send方法会自动设置http状态码
 * 3.send方法会帮我们自动设置响应的内容类型及编码
 */
router.get('/', (req, res) => {
    res.send('Hello Express!')
})
router.get('/list', (req, res) => {
    res.send({ name: '陈益', age: 18 })
})



// 用户模型相关接口
const user = require("./models/users")

// 注册
router.post('/register', (req, res) => {
    console.log(req.body)
    user.create(req.body).then(result => {
        console.log(result)
        res.send("注册成功")
    }).catch(err => {
        console.log(err)
        res.status(500).json(err)
        res.send("注册失败，请稍后重试")
    })
})

// 登录
router.post('/login', (req, res) => {
    console.log(req.body)
    user.findOne({username: req.body.username}).then((result) => {
        if(result) {
            if(result.password !== req.body.password) {
                res.send("密码输入错误")
            } else {
                res.send("登录成功")
            }
        } else {
            res.send("用户名输入错误")
        }
    }).catch(err => {
        console.log(err)
        res.status(500).json(err)
        res.send("登录失败，请稍后重试")
    })
})


// 博客模型相关接口
const article = require("./models/articles")

// 添加博客
router.post('/addArticle', async (req, res) => {
    console.log(req.body)
    const result = await article.create(req.body)
    console.log(result)
    res.send("保存成功")
})
// 获取博客内容
router.get('/getArticleDetail', async (req, res) => {
    console.log(req.query.id)
    const result = await article.findOne({_id: req.query.id})
    console.log(result)
    res.send(result.content)
})

module.exports = router