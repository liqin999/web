/*
 * @Author: liqin
 * @Date: 2019-01-25 11:07:49
 * @Description:将请求的接口进行拆分，便于多人开发
 *  common可以写公共请求的接口
 *  当前文件的同级文件夹的命名和pages文件夹的名字一致
 */
import req from "../util/serviceUtil"
import * as common from './common/index.js'
import * as columnsLayout from './columnsLayout/index.js'
import * as dataService from './dataService/index.js'
import * as groupManuscript from './groupManuscript/index.js'
import * as invalidManuscript from './invalidManuscript/index.js'
import * as login from './login/index.js'
import * as manuscriptFlow from './manuscriptFlow/index.js'
import * as manuscriptSetting from './manuscriptSetting/index.js'
import * as mediaManuscript from './mediaManuscript/index.js'
import * as myManuscript from './myManuscript/index.js'
import * as newsCalendar from './newsCalendar/index.js'
import * as otherManuscript from './otherManuscript/index.js'
import * as reviewDetail from './reviewDetail/index.js'
import * as searchManuscript from './searchManuscript/index.js'
import * as sendManuscript from './sendManuscript/index.js'
import * as signedManuscript from './signedManuscript/index.js'
import * as specialManuscript from './specialManuscript/index.js'
import * as writeManuscript from './writeManuscript/index.js'

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
    <<
    <<
    << < HEAD
    loginuser,
    groupMap,
    getColumnsList,
    columnsListMerge,
    columnsListSplit

    ===
    ===
    =
    ...common,
    ...columnsLayout,
    ...dataService,
    ...groupManuscript,
    ...invalidManuscript,
    ...login,
    ...manuscriptFlow,
    ...manuscriptSetting,
    ...mediaManuscript,
    ...myManuscript,
    ...newsCalendar,
    ...otherManuscript,
    ...reviewDetail,
    ...searchManuscript,
    ...sendManuscript,
    ...signedManuscript,
    ...specialManuscript,
    ...writeManuscript >>>
    >>>
    > origin / develop
}
