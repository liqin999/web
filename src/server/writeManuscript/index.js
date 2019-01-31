import req from '../../util/serviceUtil'
// 参考
export const text = param => {
    return req.post('/user/text', param)
}
