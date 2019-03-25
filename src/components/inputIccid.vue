<template>
	<div class="body-container">
		<div class="inputIccid">
			<h2>{{langCn ? '欢迎您！' : 'Welcome！'}}</h2>
			<input class="iccidInput" type="text" :placeholder="placeholder" v-model="deviceId">
			<a class="button bgColor" @click="click">{{langCn ? "查 询" : "Query"}}</a>
		</div>
		<cube-popup type="my-popup" :mask="false" ref="myPopup">{{ popupTxt }}</cube-popup>
	</div>
</template>

<script>
	export default {
		name: 'inputIccid',
		data() {
			return {
				langCn: this.$store.state.langType == 'cn' ? true : false,
				deviceId: '',
				placeholder: '',
				flag: true,
				popupTxt: ''
			}
		},
		created() {

		},
		mounted() {
			this.placeholder = this.langCn ? "请输入19/20位的deviceId卡号" : "Please enter the deviceId card number of 19/20 bits"

			this.cookieFunc()
		},
		methods: {
			click() {
				var that = this
				if(!that.deviceId) {
					that.popupTxt = that.langCn ? "请输入卡号" : "Please enter the deviceId card number"
					const component1 = this.$refs['myPopup']
					component1.show()
					setTimeout(function() {
						component1.hide()
					}, 1500)
					return
				}

				if(that.flag) {
					that.flag = false
					that.$http.post("/paypalpay/getDeviceHomepage", {
						data: {
							connSeqNo: that.$store.state.connSeqNo,
							deviceId: that.deviceId,
							lang: that.$store.state.langType,
							partnerCode: that.$store.state.partnerCode,
							token: that.$store.state.token,
							tradeTime: new Date(),
							tradeType: "T0001"
						}
					}).then((res) => {
						var result = res.data.data
						console.log(res.data.data)
						if(result.tradeData.length) {
							console.log(result)
							that.$store.state.deviceId = result.tradeData[0].deviceId
							that.$store.state.deviceType = result.tradeData[0].deviceType
							that.$store.state.deviceTypeText = result.tradeData[0].deviceTypeText
							that.$store.state.partnerCode = result.tradeData[0].partnerCode

							that.popupTxt = that.langCn ? "验证成功" : "Success"
							const component3 = this.$refs['myPopup']
							component3.show()
							setTimeout(function() {
								component3.hide()
								that.$router.replace("/")
							}, 1000)
						} else {
							that.popupTxt = that.langCn ? "请输入正确的卡号" : "Please enter the correct deviceId card number"
							const component2 = this.$refs['myPopup']
							component2.show()
							setTimeout(function() {
								component2.hide()
							}, 1500)
						}
						that.flag = true
					})
				} else {
					return
				}

			},
			cookieFunc() {
				var that = this

				function getCookie(cookieName) {
					var strCookie = document.cookie;
					var arrCookie = strCookie.split("; ");
					for(var i = 0; i < arrCookie.length; i++) {
						var arr = arrCookie[i].split("=");
						if(cookieName == arr[0]) {
							return arr[1];
						}
					}
					return "";
				}

				function getQuery(paramName) {
					return that.$route.query[paramName]
				}
				var user_deviceId = getCookie("deviceId") ? getCookie("deviceId") : getQuery("deviceId");
				var user_deviceType = getCookie("deviceType") ? getCookie("deviceType") : getQuery("deviceType");
				var user_partnerCode = getCookie("partnerCode") ? getCookie("partnerCode") : getQuery("partnerCode");
				var user_requestOrderId = getCookie("requestOrderId") ? getCookie("requestOrderId") : getQuery("requestOrderId");

				if(user_deviceId) {
					that.deviceId = user_deviceId
					that.$store.state.deviceId = user_deviceId
				}

				if(user_partnerCode) {
					that.$store.state.partnerCode = user_partnerCode
				}

				if(user_requestOrderId) {
					that.$store.state.requestOrderId = user_requestOrderId
				}

				if(user_deviceType) {
					that.$store.state.deviceType = user_deviceType
					switch(user_deviceType) {
						case '1':
							that.$store.state.deviceTypeText = that.CnFlag ? 'MIFI设备' : 'MIFI'
							break;
						case '2':
							that.$store.state.deviceTypeText = that.CnFlag ? '模块' : 'MODAL'
							break;
						case '3':
							that.$store.state.deviceTypeText = that.CnFlag ? '旅游卡' : 'CARD'
							break;
						case '4':
							that.$store.state.deviceTypeText = that.CnFlag ? '物联网卡' : 'M2M'
							break;
						case '5':
							that.$store.state.deviceTypeText = that.CnFlag ? 'SOC' : 'SOC'
							break;
					}
				}

			},
		}
	}
</script>

<style scoped>
	.inputIccid {
		padding: 40% 10% 0;
		width: 80%;
	}
	
	h2 {
		text-align: center;
		font-size: 1.3rem;
		margin-bottom: 50px;
	}
	
	.iccidInput {
		display: inline-block;
		width: calc(100% - 1rem);
		border: 1px solid #ccc;
		outline: none;
		padding: 0 0.4rem;
		font-size: 0.8rem;
		line-height: 40px;
		color: #000;
		border-radius: 5px;
	}
	
	.button {
		margin-top: 100px;
		display: block;
		width: 100%;
		height: 40px;
		border-radius: 20px;
		text-align: center;
		line-height: 40px;
		font-size: 0.8rem;
		color: #fff;
	}
</style>