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
/**
 * @description: 在表格的中添加平均值和总计
 * @param: {data} 原始的数组 Array
 * @param: {first} 数组对象中的第一项的键名 String
 * @return: resultData
 * @use: this.tableData = getTotalAverage(this.tableData, 'id')
 */
function getTotalAverage (data, first) {
    let resultData = JSON.parse(JSON.stringify(data))
    let totalObj = {} // 合计值
    let averageObj = {} // 平均值
    let len = resultData.length
    let columnKeys = Object.keys(resultData[0]) // 获得键名
    columnKeys.forEach((item, index) => {
      totalObj[item] = 0
      averageObj[item] = 0
  })
    resultData.forEach((item, index) => {
      for (let attr in item) {
        if (!isNaN(item[attr])) { // 数字
          totalObj[attr] += item[attr]
      }
    }
  })
    totalObj[first] = '总计'
    for (let attr in totalObj) {
      if (!isNaN(totalObj[attr])) {
        totalObj[attr] = totalObj[attr].toFixed(2)
    }
      if (totalObj[attr] === '0.00') {
        totalObj[attr] = '-'
    }
  }
    resultData.push(totalObj)
    averageObj = Object.assign({}, totalObj)
    for (let attr in averageObj) {
      if (!isNaN(averageObj[attr])) { // 数字
        averageObj[attr] = (averageObj[attr] / len).toFixed(2)
    }
      if (averageObj[attr] === '0.00') {
        averageObj[attr] = '-'
    }
  }
    averageObj[first] = '平均'
    resultData.push(averageObj)
    return resultData
}

export {
  storage,
  isNotBlank,
  equalsString,
  deletePage,
  getTotalAverage
}
