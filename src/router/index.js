import Vue from 'vue'
import Router from 'vue-router'

import home from '../pages/home/home.vue'
import login from '../pages/login/login.vue'
import logint from '../pages/login/loginAccount.vue'
import table from '../components/home/homeTable.vue'
import testTable from '../components/table/testTable.vue'
Vue.use(Router)
export default new Router({
	mode: "history",
	// base: '/dist-demo/',
	routes: [
		{ path: '*', component: login },
		{
			path: '/home',
			component: home,
			children: [
				{ path: 'hometable', name: '表格', component: table },
				{ path: 'testTable', name: '多级表头（万能）表格', component: testTable }
			]
		},
		{
			path: '/',
			component: login
		},
		{
			path: '/logint',
			component: logint
		}
	]
});







