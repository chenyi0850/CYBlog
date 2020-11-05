import Axios from "axios"

export function request(config) {
    const instance = Axios.create({
        baseURL: "http://127.0.0.1:3000",
        timeout: 5000
    })
    return instance(config)
}