import Axios from "axios"

export function request(config) {
    const instance = Axios.create({
        baseURL: "http://127.0.0.1:3000",
        timeout: 10000,
        // data: config.method === 'post' ? config.data : '',
        // params: config.method === 'get' ? config.params : ''
    })
    console.log(config)
    return instance(config)
}