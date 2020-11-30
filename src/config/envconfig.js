// 全局配置

let baseURL = 'http://127.0.0.1:8001'
let imgURL
if (process.env.NODE_ENV === 'development') {
    imgURL = '/img/'
} else if (process.env.NODE_ENV === 'production') {
    baseURL = '//elm.cangdu.org'
    imgURL = '//elm.cangdu.org/img/'
}

export {
    baseURL,
    imgURL
}