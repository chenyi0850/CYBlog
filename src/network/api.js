import { request } from "./request"

export const register = data => {
    console.log("进入注册请求api")
    return request({
        url: "/register",
        method: "post",
        data
    })
}

export const login = data => {
    console.log("进入登录请求api")
    return request({
        url: "/login",
        method: "post",
        data
    })
}

export const addArticle = data => {
    console.log("进入添加文章api")
    return request({
        url: "/addArticle",
        method: "post",
        data
    })
}

export const getArticleDetail = data => {
    console.log("进入获取文章详情api")
    return request({
        url: "/getArticleDetail",
        method: "get",
        params: data
    })
}

export const getArticles = data => {
    console.log("进入获取文章列表api")
    return request({
        url: "/getArticles",
        method: "get",
        params: data
    })
}

export const addMessage = data => {
    console.log("进入添加留言api")
    return request({
        url: "/addMessage",
        method: "post",
        data
    })
}

export const getMessages = data => {
    console.log("进入获取留言列表api")
    return request({
        url: "/getMessages",
        method: "get",
        params: data
    })
}

export const zan = data => {
    console.log("进入点赞api")
    return request({
        url: "/zan",
        method: "post",
        data
    })
}

export const cai = data => {
    console.log("进入点灭api")
    return request({
        url: "/cai",
        method: "post",
        data
    })
}

export const alreadyZanOrCai = data => {
    console.log("进入判断用户是否点过赞或灭api")
    return request({
        url: "/alreadyZanOrCai",
        method: "post",
        data
    })
}

export const reply = data => {
    console.log("进入回复api")
    return request({
        url: "/reply",
        method: "post",
        data
    })
}

export const getReplies = data => {
    console.log("进入获取回复列表api")
    return request({
        url: "/getReplies",
        method: "get",
        params: data
    })
}

export const replyZan = data => {
    console.log("进入回复点赞api")
    return request({
        url: "/replyZan",
        method: "post",
        data
    })
}

export const replyCai = data => {
    console.log("进入回复点灭api")
    return request({
        url: "/replyCai",
        method: "post",
        data
    })
}

export const replyAlreadyZanOrCai = data => {
    console.log("进入判断用户是否对留言的回复点过赞或灭api")
    return request({
        url: "/replyAlreadyZanOrCai",
        method: "post",
        data
    })
}

export const addComment = data => {
    console.log("进入添加评论api")
    return request({
        url: "/addComment",
        method: "post",
        data
    })
}

export const getComments = data => {
    return request({
        url: "/getComments",
        method: "get",
        params: data
    })
}

export const commentZan = data => {
    console.log("进入评论点赞api")
    return request({
        url: "/commentZan",
        method: "post",
        data
    })
}

export const commentCai = data => {
    console.log("进入评论点灭api")
    return request({
        url: "/commentCai",
        method: "post",
        data
    })
}

export const commentAlreadyZanOrCai = data => {
    console.log("进入判断用户是否对文章的评论点过赞或灭api")
    return request({
        url: "/commentAlreadyZanOrCai",
        method: "post",
        data
    })
}

export const uploadImg = data => {
    console.log("进入上传图片api")
    return request({
        url: "/uploadImg",
        method: "post",
        data,
        headers: { "Content-Type": "multipart/form-data" },
    })
}

export const collectArticle = data => {
    console.log("进去收藏文章api")
    return request({
        url: "/collectArticle",
        method: "post",
        data
    })
}

export const getTimeline = data => {
    console.log("进入获取时间轴api")
    return request({
        url: "/getTimeline",
        method: "get",
        params: data
    })
} 

export const getMyArticles = data => {
    console.log("进入获取用户文章列表")
    return request({
        url: "/getMyArticles",
        method: "get",
        params: data
    })
}