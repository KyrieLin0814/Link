// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueTouch from 'vue-touch'
import App from './App'
import router from './router'
import Axios from './axios'
import store from '@/vuex/store'
import md5 from 'js-md5'
import VueI18n from 'vue-i18n'
import langEn from '@/lang/en'
import langCn from '@/lang/cn'

import {
	Style,
	Button,
	Textarea,
	Upload,
	Input,
	Scroll,
	Slide,
	Dialog,
	Picker,
	DatePicker,
	CascadePicker,
	ActionSheet,
	Popup,
	Rate,
	Checkbox,
	Switch,
	IndexList,
	Toast,
	CheckboxGroup
} from 'cube-ui'

import '@/assets/common.css'

//fullpage滚动
import 'vue-fullpage/vue-fullpage.css'
import VueFullpage from 'vue-fullpage'
Vue.use(VueFullpage)

//语言切换
Vue.use(VueI18n)

const i18n = new VueI18n({
	locale: store.state.langType,
	messages: {	
		'en': langEn,
		'cn': langCn,
	}
})

Vue.config.productionTip = false
Vue.prototype.$http = Axios
Vue.prototype.$md5 = md5

Vue.use(VueTouch, {
	name: 'v-touch'
})
Vue.use(Button)
Vue.use(Textarea)
Vue.use(Upload)
Vue.use(Input)
Vue.use(Scroll)
Vue.use(Slide)
Vue.use(Dialog)
Vue.use(Picker)
Vue.use(DatePicker)
Vue.use(CascadePicker)
Vue.use(ActionSheet)
Vue.use(Popup)
Vue.use(Rate)
Vue.use(Checkbox)
Vue.use(Switch)
Vue.use(IndexList)
Vue.use(Toast)
Vue.use(CheckboxGroup)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	i18n,
	components: {
		App
	},
	template: '<App/>'
})