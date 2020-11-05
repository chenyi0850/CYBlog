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