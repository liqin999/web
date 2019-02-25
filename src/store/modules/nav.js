const nav = {
    // 储存数据 state
    state: {
        dataResourceName: 'finishedDraft' // 导航的资源库名字
    },
    // 这个相当于是 state的计算属性 的意思  跟computed差不多  获取状态值
    getters: {

    },
    // 切换资源库下的数据
    mutations: {
        changeResourceName: function (state, data) {
            state.dataResourceName = data
        }
    }

}
export default nav
