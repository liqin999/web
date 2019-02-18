import req from '../../util/serviceUtil'
// 获得左侧的树形的菜单
export const getLeftMenu = param => {
    return req.post('/user/menu', param)
}

// 获得媒体的下拉数据
export const getMedia = param => {
    return req.get('/user/medialist', param)
}
