// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 饿了吗ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
// 公共样式
import './assets/css/reset.css'
// 路由组件
import router from './router'
// axios 使用方法继承到 Vue原型链上 使用： this.$http.xxx
// import axios from 'axios'
// store 是 vuex 全局状态管理 使用: this.$store.xxx
import {store} from './store'
import VueI18n from 'vue-i18n'
import api from './server/server'
// 自定义全局过滤器
import myFilter from './util/myFilter'
// 自定义指令
import myDirective from './util/myDirective'
// md5加密
import md5 from 'js-md5';

Vue.prototype.$md5 = md5;

// 添加过滤器
for(let key in myFilter){
	Vue.filter(key,myFilter[key]);
}
// 添加全局指令
for(let key in myDirective){
	Vue.directive(key,myDirective[key]);
}
Vue.use(VueI18n)
// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
// Vue.prototype.$http = axios
Vue.use(ElementUI);
// 取消 Vue 所有的日志与警告。
// Vue.config.silent = true
Vue.prototype.$api = api;

// 国际化所需
// const messages = {
// 	'zh': require('./lang/zh'),
// 	'en': require('./lang/en')
// }
// const i18n = new VueI18n({
//     locale: 'en', // 语言标识
//     messages
// })

/* eslint-disable no-new */

// eventBus 组件间通讯
window.Bus = new Vue();


new Vue({
	el: '#app',
	router,
	// i18n,
	components: { App },
	template: '<App/>',
	store:store
})
// 全局路由守卫
// router.beforeEach((to, from, next) => {
// 	console.log('navigation-guards');
// 	console.log("to",to,"from",from);
// 	router.push({name: '/home'})
// 	next();
// });
// router.afterEach((to,from) => {
//     console.log(to);
//     console.log(from);
//     // next();如果使用next()添加形参next
// });
