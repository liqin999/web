import req from '../../util/serviceUtil'
// 参考
export const text1 = param => {
    return req.post('/user/text1', param)
}
