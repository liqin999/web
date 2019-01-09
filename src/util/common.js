// 判断是否为空
function isNotBlank (s) {
    if (s === undefined || s === null) {
        return false
    }
    if (typeof s !== 'string') {
        return true
    }
    if (s.length === 0) {
        return false
    }
    s = s.replace(/(^\s*)/g, '')
    if (s.length === 0) {
        return false
    }
    return true
}
// 判断是否相等
function equalsString (str1, str2) {
    if (str1 === str2) {
        return true
    }
    let str1Length = window.EditCommonUtil.isBlank(str1) ? 0 : str1.length
    let str2Length = window.EditCommonUtil.isBlank(str2) ? 0 : str2.length
    if (str1Length === 0 && str2Length === 0) {
        return true
    }
    return false
}

//  封装 storage
const storage = (storage) => {
    let mystorage = window[storage]
    if (!mystorage) {
        // Message({
        //   message: '浏览器不支持缓存',
        //   type: 'warning'
        // })
        return false
    }
    // 存储
    let set = (key, value) => {
        mystorage.setItem(key, JSON.stringify(value))
    }
    // 读取
    let get = (key) => {
        let getData = mystorage.getItem(key)
        getData = JSON.parse(getData)
        return getData
    }
    // 删除
    let clear = (key) => {
        mystorage.removeItem(key)
    }
    return {
        set: set,
        get: get,
        clear: clear
    }
}
// 去掉分页参数
function deletePage (data) {
    if (data.page !== undefined) {
        delete data.page
    }
    if (data.size !== undefined) {
        delete data.size
    }
    return data
}
export {
    storage,
    isNotBlank,
    equalsString,
    deletePage
}
