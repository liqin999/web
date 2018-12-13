import req from '../util/serviceUtil'
import {deletePage} from '../util/common.js';
// 查询权限
export const searchPerm = param => {
    return req.post('http://192.169.4.132:18081/rbac/permission/search?page='+param.page+'&size='+param.size,deletePage(param))
}
// 登陆
export const loginIn = param => {
    return req.post('http://localhost:8080/ht/servlet/loginIn',param)
}
// 获取模板
export const groupMap = param => {
    return req.get('/api/getTemplates',param)
}
export default{
    loginIn,
    groupMap
}