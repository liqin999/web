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

// 版面和栏目获得列表数据
export const getColumnsList = param => {
    return req.post('doc/getList', param)
}

// 版面和栏目合并
export const columnsListMerge = param => {
    return req.post('doc/merge', param)
}

// 版面和栏目拆分
export const columnsListSplit = param => {
    return req.post('doc/split', param)
}

// 版面和栏目合并的操作  /api/v1/doc/merge  /api/v1/doc/split

export default {
    loginuser,
    groupMap,
    getColumnsList,
    columnsListMerge,
    columnsListSplit

}
