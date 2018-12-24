import req from '../util/serviceUtil'
import {
  deletePage
} from '../util/common.js'
// 查询权限
export const searchPerm = param => {
  return req.post('/rbac/permission/search?page=' + param.page + '&size=' + param.size, deletePage(param))
}
// 获取模板
export const groupMap = param => {
  return req.get('/api/getTemplates', param)
}

// 登录
export const loginuser = param => {
  return req.post('/user/loginuser', param)
}

export default {
  loginuser,
  groupMap
}
