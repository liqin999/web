import {
  formatDate
} from './date'
// 自定义过滤器
const myFilter = {
  // 日期过滤器
  DateTime: function (time) {
    let date = new Date(Number(time))
    return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
  },
  // 数字放大
  Bigger: function (data) {
    return data * 10
  }
}
export default myFilter
