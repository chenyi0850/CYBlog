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