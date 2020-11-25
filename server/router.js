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


// 时间线模型
const timeline = require("./models/timeline")

// 获取时间轴
router.get('/getTimeline', async (req, res) => {
    console.log(req.query)
    const result = await timeline.find().sort({ _id: -1 }).limit(parseInt(req.query.limit)).skip(parseInt(req.query.skip))
    // const count = await article.countDocuments()
    // res.send({ articles, count })
    console.log(result)
    res.send(result)
})


// 用户模型相关接口
const user = require("./models/user")

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
    timeline.create({
        username: req.body.username,
        type: "注册成功",
        time: new Date()
    })
})

// 登录
router.post('/login', (req, res) => {
    console.log(req.body)
    user.findOne({ username: req.body.username }).then((result) => {
        if (result) {
            if (result.password !== req.body.password) {
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
const article = require("./models/article")

// 添加博客
router.post('/addArticle', async (req, res) => {
    console.log(req.body)
    const result = await article.create(req.body)
    console.log(result)
    res.send("保存成功")
    timeline.create({
        username: req.body.author,
        type: "发表了一篇博客",
        time: new Date()
    })
})

// 获取博客内容详情
router.get('/getArticleDetail', async (req, res) => {
    console.log(req.query.id)
    const doc = await article.findOne({ _id: req.query.id })
    usernameIndex = doc.collectedUsers.indexOf(req.query.username)
    if (usernameIndex !== -1) {
        res.send({
            content: doc.content,
            isCollected: true
        })
    } else {
        res.send({
            content: doc.content,
            isCollected: false
        })
    }

})

// 获取博客列表
router.get('/getArticles', async (req, res) => {
    console.log(req.query)
    const articles = await article.find().sort({ _id: -1 }).limit(parseInt(req.query.limit)).skip(parseInt(req.query.skip))
    const count = await article.countDocuments()
    articles.forEach(val => {
        val = val.content.substring(0, 330)
    })
    res.send({ articles, count })
    // console.log(result)
})

// 根据用户获取博客列表
router.get('/getMyArticles', async (req, res) => {
    console.log(req.query)
    const articles = await article.find({author: req.query.author}).sort({ _id: -1 }).limit(parseInt(req.query.limit)).skip(parseInt(req.query.skip))
    const count = await article.countDocuments()
    articles.forEach(val => {
        val = val.content.substring(0, 330)
    })
    res.send({ articles, count })
})

// 收藏博客
router.post('/collectArticle', async (req, res) => {
    console.log(req.body)
    const doc = await article.findOne({ _id: req.body._id })
    usernameIndex = doc.collectedUsers.indexOf(req.body.username)
    if (usernameIndex !== -1) {
        doc.collectedUsers.splice(usernameIndex, 1)
        doc.save()
        res.send("取消收藏成功")
    } else {
        doc.collectedUsers.push(req.body.username)
        doc.save()
        res.send("收藏成功")
    }
})


// 留言模型相关接口
const message = require("./models/message")

// 发表留言
router.post('/addMessage', async (req, res) => {
    console.log(req.body)
    const result = await message.create(req.body)
    console.log(result)
    res.send("保存成功")
    timeline.create({
        username: req.body.author,
        type: "留下了一条留言",
        time: new Date()
    })
})

// 获取留言刘表
router.get('/getMessages', async (req, res) => {
    console.log(req.query)
    const messages = await message.find().sort({ _id: -1 }).limit(parseInt(req.query.limit)).skip(parseInt(req.query.skip))
    const count = await message.countDocuments()
    res.send({ messages, count })
})

// 点赞
router.post('/zan', async (req, res) => {
    const doc = await message.findOne({ _id: req.body._id })
    usernameIndex = doc.zanUsernames.indexOf(req.body.username)
    if (usernameIndex !== -1) {
        const result = await message.updateOne({ _id: req.body._id }, { $inc: { zan: -1 } })
        doc.zanUsernames.splice(usernameIndex, 1)
        doc.save()
        res.send("取消点赞成功")
    } else {
        const result = await message.updateOne({ _id: req.body._id }, { $inc: { zan: 1 } })
        doc.zanUsernames.push(req.body.username)
        doc.save()
        res.send("点赞成功")
    }
})

// 点灭
router.post('/cai', async (req, res) => {
    const doc = await message.findOne({ _id: req.body._id })
    usernameIndex = doc.caiUsernames.indexOf(req.body.username)
    if (usernameIndex !== -1) {
        const result = await message.updateOne({ _id: req.body._id }, { $inc: { cai: -1 } })
        doc.caiUsernames.splice(usernameIndex, 1)
        doc.save()
        res.send("取消点灭成功")
    } else {
        const result = await message.updateOne({ _id: req.body._id }, { $inc: { cai: 1 } })
        doc.caiUsernames.push(req.body.username)
        doc.save()
        res.send("点灭成功")
    }
})

// 判断用户是否点过赞或灭
router.post('/alreadyZanOrCai', async (req, res) => {
    doc = await message.findOne({ _id: req.body._id })
    const result = {
        zanFlag: false,
        caiFlag: false
    }
    if (doc.zanUsernames.indexOf(req.body.username) !== -1) {
        result.zanFlag = true
    }
    if (doc.caiUsernames.indexOf(req.body.username) !== -1) {
        result.caiFlag = true
    }
    res.send(result)
})


// 回复模型相关接口
const reply = require("./models/reply")

// 回复留言或者文章
router.post('/reply', async (req, res) => {
    console.log(req.body)
    const result = await reply.create(req.body)
    console.log(result)
    res.send("保存成功")
})

// 获取回复列表
router.get('/getReplies', async (req, res) => {
    console.log(req.query)
    const replies = await reply.find({ id: req.query.id }).limit(parseInt(req.query.limit)).skip(parseInt(req.query.skip))
    const count = await reply.find({ id: req.query.id }).countDocuments()
    res.send({ replies, count })
})

// 回复的点赞
router.post('/replyZan', async (req, res) => {
    const doc = await reply.findOne({ _id: req.body._id })
    usernameIndex = doc.zanUsernames.indexOf(req.body.username)
    if (usernameIndex !== -1) {
        const result = await reply.updateOne({ _id: req.body._id }, { $inc: { zan: -1 } })
        doc.zanUsernames.splice(usernameIndex, 1)
        doc.save()
        res.send("取消点赞成功")
    } else {
        const result = await reply.updateOne({ _id: req.body._id }, { $inc: { zan: 1 } })
        doc.zanUsernames.push(req.body.username)
        doc.save()
        res.send("点赞成功")
    }
})

// 回复的点灭
router.post('/replyCai', async (req, res) => {
    const doc = await reply.findOne({ _id: req.body._id })
    usernameIndex = doc.caiUsernames.indexOf(req.body.username)
    if (usernameIndex !== -1) {
        const result = await reply.updateOne({ _id: req.body._id }, { $inc: { cai: -1 } })
        doc.caiUsernames.splice(usernameIndex, 1)
        doc.save()
        res.send("取消点灭成功")
    } else {
        const result = await reply.updateOne({ _id: req.body._id }, { $inc: { cai: 1 } })
        doc.caiUsernames.push(req.body.username)
        doc.save()
        res.send("点灭成功")
    }
})

// 进入判断用户是否对留言的回复点过赞或灭
router.post('/replyAlreadyZanOrCai', async (req, res) => {
    doc = await reply.findOne({ _id: req.body._id })
    const result = {
        zanFlag: false,
        caiFlag: false
    }
    if (doc.zanUsernames.indexOf(req.body.username) !== -1) {
        result.zanFlag = true
    }
    if (doc.caiUsernames.indexOf(req.body.username) !== -1) {
        result.caiFlag = true
    }
    res.send(result)
})


// 文章评论模型相关接口
const comment = require("./models/comment")

// 添加评论
router.post('/addComment', async (req, res) => {
    console.log(req.body)
    const result = await comment.create(req.body)
    console.log(result)
    res.send("保存成功")
    timeline.create({
        username: req.body.author,
        type: "评论了一篇文章",
        time: new Date()
    })
})

// 获取评论列表
router.get('/getComments', async (req, res) => {
    console.log(req.query)
    const comments = await comment.find({ articleId: req.query.articleId }).sort({ _id: -1 })
    // const count = await reply.find({id: req.query.id}).countDocuments()
    // res.send({ replies, count })
    res.send(comments)
})

// 点赞
router.post('/commentZan', async (req, res) => {
    const doc = await comment.findOne({ _id: req.body._id })
    usernameIndex = doc.zanUsernames.indexOf(req.body.username)
    if (usernameIndex !== -1) {
        const result = await comment.updateOne({ _id: req.body._id }, { $inc: { zan: -1 } })
        doc.zanUsernames.splice(usernameIndex, 1)
        doc.save()
        res.send("取消点赞成功")
    } else {
        const result = await comment.updateOne({ _id: req.body._id }, { $inc: { zan: 1 } })
        doc.zanUsernames.push(req.body.username)
        doc.save()
        res.send("点赞成功")
    }
})

// 点灭
router.post('/commentCai', async (req, res) => {
    const doc = await comment.findOne({ _id: req.body._id })
    usernameIndex = doc.caiUsernames.indexOf(req.body.username)
    if (usernameIndex !== -1) {
        const result = await comment.updateOne({ _id: req.body._id }, { $inc: { cai: -1 } })
        doc.caiUsernames.splice(usernameIndex, 1)
        doc.save()
        res.send("取消点灭成功")
    } else {
        const result = await comment.updateOne({ _id: req.body._id }, { $inc: { cai: 1 } })
        doc.caiUsernames.push(req.body.username)
        doc.save()
        res.send("点灭成功")
    }
})

// 判断用户是否点过赞或灭
router.post('/commentAlreadyZanOrCai', async (req, res) => {
    doc = await comment.findOne({ _id: req.body._id })
    const result = {
        zanFlag: false,
        caiFlag: false
    }
    if (doc.zanUsernames.indexOf(req.body.username) !== -1) {
        result.zanFlag = true
    }
    if (doc.caiUsernames.indexOf(req.body.username) !== -1) {
        result.caiFlag = true
    }
    res.send(result)
})


// 上传图片
const formidable = require("formidable")
const fs = require("fs")
const path = require("path")
router.post('/uploadImg', async (req, res) => {
    // console.log(req.body)
    const from = new formidable.IncomingForm()
    const targetDir = path.join(__dirname, './images')
    from.uploadDir = targetDir
    from.parse(req, (err, fields, files) => {
        if (err) {
            console.log(err)
        } else {
            console.log(files)
            const oldpath = files.image.path
            const newpath = path.join(path.dirname(oldpath), files.image.name)
            fs.rename(oldpath, newpath, err => {
                if (err) {
                    console.log(err)
                } else {
                    res.send(newpath)
                }
            })
        }
    })
})

module.exports = router