import axios from 'axios'
import Qs from 'qs'
import store from '@/vuex/store'
import router from '@/router/'
import md5 from 'js-md5'

//axios配置全局参数
const baseURL = 'http://wx.lizhisim.com' // 配置请求路径的baseURL

const Axios = axios.create({
	transformRequest: [function(data) {
		//data = Qs.stringify(data)
		if(data) {
			data.data.tradeTime = getNowFormatDate()

			var sign = md5(JSON.stringify(data.data))
			data.sign = sign
			
			//console.log(data.data)
			//console.log(JSON.stringify(data.data))
			console.log(data)
			data = JSON.stringify(data)
		}
		return data;

		function getNowFormatDate() {
			var date = new Date();
			var seperator1 = "-";
			var seperator2 = ":";
			var month = date.getMonth() + 1;
			if(month >= 1 && month <= 9) {
				month = "0" + month;
			}
			var strDate = date.getDate();
			if(strDate >= 0 && strDate <= 9) {
				strDate = "0" + strDate;
			}
			var hour = date.getHours();
			if(hour >= 0 && hour <= 9) {
				hour = "0" + hour;
			}
			var minute = date.getMinutes();
			if(minute >= 0 && minute <= 9) {
				minute = "0" + minute;
			}
			var sec = date.getSeconds();
			if(sec >= 0 && sec <= 9) {
				sec = "0" + sec;
			}
			var currentdate = date.getFullYear() + seperator1 + month + seperator1 +
				strDate + " " + hour + seperator2 + minute +
				seperator2 + sec;

			return currentdate;
		}
	}],
	baseURL: baseURL,
	headers: {
		'Content-Type': 'application/json;charset=UTF-8'
	}
})
// http request 拦截器
Axios.interceptors.request.use(
	config => {
		if(store.state.token) {
			config.headers.Authorization = store.state.token;
		}
		return config;
	},
	err => {
		return Promise.reject(err);
	});

// http response 拦截器
Axios.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		//  	console.log(error.response)
		//      if (error.response.status == 403) {
		//			store.state.token=''
		//			store.state.role = ''
		//			store.state.userId = ''
		//			localStorage.removeItem("tokenStorage")
		//			localStorage.removeItem("role")
		//			localStorage.removeItem("userId")
		//			router.replace({
		//              path: 'login'
		//          })
		//      }
		return response;
	});
export default Axios