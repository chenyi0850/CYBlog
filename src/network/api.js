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