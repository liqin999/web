import Vue from 'vue'
import Vuex from 'vuex'
// 引入当前开发者的状态管理.js
import {
  Loading
} from 'element-ui'
import {
  storage
} from '../util/common.js'
Vue.use(Vuex)

export const store = new Vuex.Store({
  // 储存数据 state
  state: {
    is_show: true, // 默认显示，点击的时候再隐藏
    showTable: -1, // 表格显示数据
    loading: '', // 等待状态
    userName: '' // 默认用户
  },
  // 获取数据 getters
  // 这个相当于是 state的计算属性 的意思  跟computed差不多  获取状态值
  getters: {
    id1: function (state) {
      return state.showTable
    },
    is_show: function (state) {
      return state.is_show
    }
  },
  // 修改数据/严格模式 mutations
  // 管理方法函数
  mutations: {
    show_1 (state) {
      state.is_show = !state.is_show
    },
    // 改变vuex 中数据
    changeTab (state, id) {
      state.showTable = id
      storage('sessionStorage').set('showTable', state.showTable)
    },
    setTab (state) {
      // sessionStorage
      // localStorage
      // 缓存封装 可根据使用如上两个，具体函数可看common.js
      if (storage('sessionStorage').get('showTable') !== null) {
        state.showTable = storage('sessionStorage').get('showTable')
      }
    },
    // 等待相关
    showLoading (state) {
      // 出等待效果
      state.loading = Loading.service({
        lock: true,
        text: '加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
    },
    cloaseLoading (state) {
      if (state.loading !== '') {
        state.loading.close()
      }
    },
    // 设置用户
    setUser (state, userName) {
      state.userName = userName
      // storage('sessionStorage').set('userId', userName);
    }
  },
  // Actions （类似于mutations，支持任何的异步操作）
  // 异步的mutations ，Action 通过 store.dispatch 方法触发  store.dispatch('increment')
  actions: {
    show_2 (store, id) {
      // console.log(id);
      store.commit('show_2', id) // 然后再提交到mutations  id传过来的是个对象
    },
    changeTab (store, id) {
      store.commit('changeTab', id)
    },
    // 展示等待
    showLoading (store) {
      store.commit('showLoading')
    },
    // 关闭等待
    cloaseLoading (store) {
      store.commit('cloaseLoading')
    }
  }
})
