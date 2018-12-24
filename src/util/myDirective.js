// /**
//  * 全局自定义指令
//  */
const myDirective = {
    moveDirective: {
        inserted: function (el) {
            var oDiv = el
            oDiv.onmousedown = function (ev) {
                var disX = ev.clientX - oDiv.offsetLeft
                var disY = ev.clientY - oDiv.offsetTop

                document.onmousemove = function (ev) {
                    var l = ev.clientX - disX
                    var t = ev.clientY - disY
                    oDiv.style.left = l + 'px'
                    oDiv.style.top = t + 'px'
                }
                document.onmouseup = function () {
                    document.onmousemove = null
                    document.onmouseup = null
                }
            }
        }
    },
    focus: {
        inserted: function (el) {
            // 聚焦元素
            debugger
            el.focus()
        }
    }

}
export default myDirective
