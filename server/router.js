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


const user = require("./models/users")
router.post('/register', (req, res) => {
    console.log(req.body)
    user.create(req.body, err => {
        if(!err) {
            console.log("保存成功")
        }
    })
    // const newUser = new user(req.body)
    // newUser.save(err => {
    //     if(!err) {
    //         console.log("保存成功")
    //     }
    // })
    res.send(req.body)
})

module.exports = router