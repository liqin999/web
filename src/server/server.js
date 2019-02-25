/*
 * @Author: liqin
 * @Date: 2019-01-25 11:07:49
 * @Description:根据后台文档书写前端接口文档
 *  common可以写公共请求的接口
 */
import req from '../util/serviceUtil'
import * as common from './common/index.js'
import * as login from './login/index.js'
// 建稿接口
export const draft = param => {
    return req.post('/process/draft', param)
}
// 稿件列表查询
export const manuscriptList = param => {
    return req.post('/doc/manuscriptList', param)
}

// 根据稿件id查询稿件详情
export const getDocInfo = param => {
    return req.post('/doc/getDocInfo', param)
}

// 更新稿件
export const update = param => {
    return req.post('doc/update', param)
}

// 传稿
export const pressManuscript = param => {
    return req.post('/doc/pressManuscript', param)
}

// 签发稿件
export const issue = param => {
    return req.post('/doc/issue', param)
}

// 已签稿改签
export const docEndorse = param => {
    return req.post('/finished/docEndorse', param)
}

// 淘汰稿件
export const eliminate = param => {
    return req.post('/doc/eliminate', param)
}

// 淘汰稿件恢复
export const restore = param => {
    return req.post('/doc/restore', param)
}

// 增加稿件版本信息
export const insertDocVersion = param => {
    return req.post('/doc/insertDocVersion', param)
}

// 查看稿件版本信息
export const checkDocVersion = param => {
    return req.get('/doc/checkDocVersion', param)
}

// 稿件恢复到指定版本
export const restoreDocVersion = param => {
    return req.post('/doc/restoreDocVersion', param)
}

// 稿件拆分
export const split = param => {
    return req.post('/api/v1/doc/split', param)
}

// 稿件合并接口
export const merge = param => {
    return req.post('/api/v1/doc/merge', param)
}

// 按条件查询稿件流向记录
export const searchDocProcess = param => {
    return req.post('/doc/searchDocProcess', param)
}

// 增加稿件流程记录
export const saveManuscriptProcess = param => {
    return req.post('/doc/saveManuscriptProcess', param)
}

// 查询稿件的历史记录
export const getDocHistory = param => {
    return req.get('/doc/getDocHistory', param)
}

// 新增稿件的历史记录
export const addDocHistory = param => {
    return req.post('/doc/addDocHistory', param)
}

// 撤稿
export const retreatDoc = param => {
    return req.get('/finished/retreatDoc', param)
}

// 查询稿件稿签详情
export const getDocSigned = param => {
    return req.get('/doc/getDocSigned', param)
}

// 稿件加锁
export const lock = param => {
    return req.post('/v1/docs/lock', param)
}

// 判断锁定状态
export const getLock = param => {
    return req.post('/v1/docs/getLock', param)
}

// 稿件解锁
export const unLock = param => {
    return req.post('/v1/docs/unLock', param)
}

// 稿件的大样调阅
export const detailsReview = param => {
    return req.post('/doc/detailsReview', param)
}

// 已签稿查错（文字稿)
export const docCheckWrong = param => {
    return req.post('/finished/docCheckWrong', param)
}

// 统计部门工作量
export const statisticsDeptWorkload = param => {
    return req.post('/doc/statisticsDeptWorkload', param)
}

// 统计个人工作量
export const statisticsPersonalWorkload = param => {
    return req.post('/doc/statisticsPersonalWorkload', param)
}

// 文件上传
export const upload = param => {
    return req.post('docs/files/upload', param)
}

// 文件下载
export const get = param => {
    return req.post('docs/files/get', param)
}

// 稿件全文检索
export const multisearch = param => {
    return req.post('searchService/multisearch', param)
}

// 获取相似稿件
export const getSimilarDocList = param => {
    return req.post('/data/dataService/getSimilarDocList', param)
}

// 获取单篇稿件详情
export const getResAll = param => {
    return req.post('/data/dataService/getResAll', param)
}

// 获取数据服务平台token
export const getToken = param => {
    return req.post('/data/base/getToken', param)
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
export default {
    ...common,
    ...login,
    draft,
    manuscriptList,
    getDocInfo,
    update,
    pressManuscript,
    issue,
    docEndorse,
    eliminate,
    restore,
    insertDocVersion,
    checkDocVersion,
    restoreDocVersion,
    split,
    merge,
    searchDocProcess,
    saveManuscriptProcess,
    getDocHistory,
    addDocHistory,
    retreatDoc,
    getDocSigned,
    lock,
    getLock,
    unLock,
    detailsReview,
    docCheckWrong,
    statisticsDeptWorkload,
    statisticsPersonalWorkload,
    upload,
    get,
    multisearch,
    getSimilarDocList,
    getResAll,
    getToken

}
