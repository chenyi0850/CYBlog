import { request } from "./request"

export const register = (data) => {
    console.log("进入请求api")
    return request({
        url: "/register",
        method: "post",
        data
    })
}