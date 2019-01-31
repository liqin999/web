import req from '../../util/serviceUtil'
// 登录信息
export const doLogin = param => {
    return req.post('/user/dologin', param)
}

// 退出按钮
export const doLoginOut = param => {
    return req.post('/user/logout', param)
}

// 获取密钥
export const getPublickKey = param => {
    return req.post('/user/getkeys', param)
}
