import Vue from 'vue'
import Router from 'vue-router'
import store from '@/vuex/store'

import index from '@/components/index'
import detail from '@/components/detail'
import order from '@/components/order'
import payPage from '@/components/payPage'
import postWay from '@/components/postWayClone'
import adress from '@/components/adress'
import haveCard from '@/components/haveCard'
import paySuccess from '@/components/paySuccess'
import payError from '@/components/payError'
import status from '@/components/status'
import quit from '@/components/quit'
import quitSuccess from '@/components/quitSuccess'
import help from '@/components/help'
import helpPage from '@/components/helpPage'
import orderList from '@/components/orderList'
import text from '@/components/text'

Vue.use(Router)

//export default new Router({
const router = new Router({
	routes: [{
			path: '/',
			name: 'index',
			component: index
		},
		{
			path: '/detail',
			name: 'detail',
			component: detail,
			props: true
		},
		{
			path: '/order',
			name: 'order',
			component: order,
			props: true
		},
		{
			path: '/payPage',
			name: 'payPage',
			component: payPage,
			props: true
		},
		{
			path: '/postWay',
			name: 'postWay',
			component: postWay,
			props: true
		},
		{
			path: '/adress',
			name: 'adress',
			component: adress,
			props: true
		},
		{
			path: '/haveCard',
			name: 'haveCard',
			component: haveCard,
			props: true
		},
		{
			path: '/paySuccess',
			name: 'paySuccess',
			component: paySuccess,
			props: true
		},
		{
			path: '/payError',
			name: 'payError',
			component: payError,
			props: true
		},
		{
			path: '/status',
			name: 'status',
			component: status,
			props: true
		},
		{
			path: '/quit',
			name: 'quit',
			component: quit,
			props: true
		},
		{
			path: '/quitSuccess',
			name: 'quitSuccess',
			component: quitSuccess,
			props: true
		},
		{
			path: '/help',
			name: 'help',
			component: help,
			props: true
		},
		{
			path: '/helpPage',
			name: 'helpPage',
			component: helpPage,
			props: true
		},
		{
			path: '/orderList',
			name: 'orderList',
			component: orderList,
			props: true
		}, 
		{
			path: '/text',
			name: 'text',
			component: text,
			props: true
		}
	]
})

router.beforeEach((to, from, next) => {
	next();

	if(from.path == '/haveCard') {
		if(store.state.routerBack.haveCard) {
			console.log(store.state.routerBack.haveCard)
			next({
				name: store.state.routerBack.haveCard
			})
		} else {
			next();
		}
	} else {
		next();
	}

	//	if(localStorage.getItem("tokenStorage")) {
	//		store.state.token = localStorage.getItem("tokenStorage")
	//		store.state.role = localStorage.getItem("role")
	//		store.state.userId = localStorage.getItem("userId")
	//
	//		if(from.path == '/' && to.path == '/login') {
	//			return false
	//		} else {
	//			next();
	//		}
	//	} else {
	//		if(to.path == '/login' || to.path == '/registerNew' || to.path == '/registerStaff') { //如果是登录页面路径，就直接next()
	//			next();
	//		} else { //不然就跳转到登录
	//			next('/login');
	//		}
	//	}

});

export default router