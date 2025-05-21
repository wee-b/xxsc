import axios from 'axios'

// 创建axios实例
const http = axios.create({
    baseURL: 'https://m1.apifoxmock.com/m1/6427506-6124905-default',
    timeout: 5000
})

// axios请求拦截器
// 一般会进行token身份验证等
http.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
// 一般进行错误的统一提示，token失效的处理等
http.interceptors.response.use(res => res.data, e => {
    return Promise.reject(e)
})


export default http