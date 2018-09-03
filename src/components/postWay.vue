<template>
	<div class="body-container">

		<div class="more-info flexBox" @click="haveCard">
			<p>旅游卡信息：</p>
			<div class="flex-1">{{ iccid ? iccid : '请绑定您的旅游卡' }}</div>
		</div>
		<!--<p>{{dddd}}</p>
		<p>{{ffff}}</p>
		<p>{{gggg}}</p>-->

		<div class="buy-box clearfix">
			<p>合计： <span>{{ finalPrice.toFixed(2) }}</span> 元</p>
			<span class="slide" :class="{'active': slideFlage}" @click="slideFunc"></span>
			<a @click="payFunc">支付</a>
			<router-link to="/order">返回</router-link>
		</div>

		<transition name="fade" mode="out-in">
			<div class="cost-box" :class="{'active': slideFlage}">
				<p>费用详情</p>
				<ul>
					<li v-for="i in shopCarData">
						<div class="flexBox text-meal">
							<div class="text-meaL-content">{{i.meal.name}} ({{ i.text }})</div>
							<div class="flex-1"></div>
							<div class="price"><span>{{ i.finalPrice.toFixed(2) }}</span>元</div>
						</div>
					</li>
				</ul>

			</div>
		</transition>

		<cube-popup type="my-popup" :mask="false" ref="myPopup">{{ popupTxt }}</cube-popup>
	</div>
</template>

<script>
	export default {
		name: 'name',
		data() {
			return {
				shopCarData: [],
				slideFlage: true,
				finalPrice: 0.00,
				finalNum: 0,
				day: 1,
				page: 1,
				iccid: '',
				popupTxt: '',
				alert: null,
				orderList: [],
				codes: ""
				//				dddd: '',
				//				ffff: '',
				//				gggg:''
			}
		},
		created() {
			var that = this
			that.shopCarData = JSON.parse(JSON.stringify(that.$store.state.shopCar))
			//console.log(that.shopCarData)
			that.shopCarData.map(function(val, idx) {
				var day;
				if(val.meal.obj.maxDays == val.meal.obj.minDays) {
					day = Number(val.meal.obj.maxDays) * val.finalNum
				} else {
					day = val.finalNum
				}
				val.text = val.perPrice + "元 x " + day + "天 x " + "1张"
			})
			//console.log(that.shopCarData)
			that.iccid = that.$store.state.iccid
			that.finalPrice = that.$store.state.totalPrice
		},
		mounted() {
			var that = this
			//返回路由
			that.$store.state.routerBack.haveCard = "postWay"

			//初次进入页面  alert提示信息
			if(that.$store.state.alertCard) {
				//查询iccid
				that.$http.post("/weixin/getIccId", {
					data: {
						connSeqNo: that.$store.state.connSeqNo,
						partnerCode: that.$store.state.partnerCode,
						token: that.$store.state.token,
						tradeData: {
							openid: that.$store.state.openId
						},
						tradeTime: new Date(),
						tradeType: "F012",
					}
				}).then((res) => {
					console.log(res.data.data)
					var Num = res.data.data.tradeData.length
					if(Num) {
						if(Num > 1) {
							that.popupTxt = "检测到您有多张旅游卡，请绑定一张您需要充值的旅游卡"
							const component = that.$refs['myPopup']
							component.show()
							setTimeout(() => {
								component.hide()
							}, 1500)
						} else {
							that.iccid = res.data.data.tradeData[0].iccid
							that.$store.state.iccid = res.data.data.tradeData[0].iccid

							that.popupTxt = "检测到您已有一张旅游卡，请确认旅游卡ICCID"
							const component = that.$refs['myPopup']
							component.show()
							setTimeout(() => {
								component.hide()
							}, 1500)
						}
						//有卡，不再提示
						that.$store.state.alertCard = false
					} else {
						that.popupTxt = "请购买旅游卡后，再来选购荔枝卡套餐"
						const component = that.$refs['myPopup']
						component.show()
						setTimeout(() => {
							component.hide()
						}, 1500)
					}
				})
			}

			that.alert = that.$createDialog({
				type: 'confirm',
				content: '请您务必确认旅游卡ICCID后，再进行支付',
				confirmBtn: {
					text: '确认',
					active: false,
					disabled: false,
					href: 'javascript:;'
				},
				cancelBtn: {
					text: '取消',
					active: false,
					disabled: false,
					href: 'javascript:;'
				},
				onConfirm: () => {
					that.orderFunc()
				},
				onCancel: () => {}
			})
		},
		methods: {
			slideFunc() {
				if(this.slideFlage) {
					this.slideFlage = false
				} else {
					this.slideFlage = true
				}
			},
			haveCard() {
				this.$router.push("/haveCard")
			},
			payFunc() {
				var that = this
				if(that.iccid == "") {
					that.popupTxt = "您还未填写旅游卡ICCID，无法下单"
					const component = that.$refs['myPopup']
					component.show()
					setTimeout(() => {
						component.hide()
					}, 1000)
					return false
				}
				that.alert.show()
			},
			orderFunc() {
				var that = this
				const toast = that.$createToast({
					type: 'loading',
					time: 0,
					txt: 'Loading'
				})
				toast.show()
				//绑定接口
				that.$http.post("/weixin/userBound", {
					data: {
						connSeqNo: that.$store.state.connSeqNo,
						partnerCode: that.$store.state.partnerCode,
						token: that.$store.state.token,
						tradeData: {
							iccid: that.iccid.toString(),
							openid: that.$store.state.openId,
						},
						tradeTime: new Date(),
						tradeType: "F013",
					}
				}).then((res) => {
					//console.log(res)
					if(res.data.data.tradeRstCode == "1000") {
						//整理订单请求参数
						var orderList = []
						var codeList = []
						that.shopCarData.map(function(val, idx) {
							//orderlist遍历生成
							if(that.shopCarData[idx].meal.obj.maxDays == that.shopCarData[idx].meal.obj.minDays) {
								var arrD = []
								for(let b = 0; b < that.shopCarData[idx].finalNum; b++) {
									arrD[b] = {
										channelOrderID: (new Date().getTime() + Math.floor(Math.random() * 9999)).toString(),
										orderPeriod: that.shopCarData[idx].meal.obj.maxDays,
										packageCode: val.meal.obj.packageCode
									}
								}
								orderList = orderList.concat(arrD)
							} else {
								orderList.push({
									channelOrderID: (new Date().getTime() + Math.floor(Math.random() * 9999)).toString(),
									orderPeriod: val.finalNum.toString(),
									packageCode: val.meal.obj.packageCode
								})
							}
							//code拼接
							codeList.push(val.meal.obj.packageCode)
						})
						that.codes = codeList.join(",")
						//console.log(orderList)

						//订单接口
						that.$http.post("/SimGW/travelSimGW/busiService", {
							data: {
								connSeqNo: that.$store.state.connSeqNo,
								partnerCode: that.$store.state.partnerCode,
								token: that.$store.state.token,
								tradeData: {
									iccid: that.iccid.toString(),
									//iccid: "89234185686475549864",
									orderList: orderList
								},
								tradeTime: new Date(),
								tradeType: "F002",
							}
						}).then((res) => {
							toast.hide()
							//console.log(res)
							if(res.data.data.tradeRstCode == "1000") {
								toast.hide()
								//记录订单号
								that.orderList = []
								for(var j = 0; j < res.data.data.tradeData.length; j++) {
									that.orderList.push(res.data.data.tradeData[j].orderId)
								}
								that.$store.state.orderId = that.orderList.join(",")
								//调微信支付
								that.wxPay()
							} else {
								toast.hide()
								that.popupTxt = res.data.data.tradeRstMessage
								const component = that.$refs['myPopup']
								component.show()
								setTimeout(() => {
									component.hide()
								}, 1000)
							}
						}).catch((err) => {

						})
					} else {
						toast.hide()
						that.popupTxt = res.data.data.tradeRstMessage
						const component = that.$refs['myPopup']
						component.show()
						setTimeout(() => {
							component.hide()
						}, 1000)
					}
				})
			},
			wxPay() {
				//wx pay
				var that = this
				//var params = encodeURI(encodeURI(document.location.href))
				var date = new Date();
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

				var paymentOrderId = date.getFullYear().toString() + month + strDate + hour + minute + sec + Math.floor(Math.random() * 999).toString()
				var url = "/weixin/weixinpay?orderId=" + that.$store.state.orderId + "&openId=" + that.$store.state.openId + "&amount=" + that.finalPrice.toString() + "&paymentOrderId=" + paymentOrderId + "&packageCode=" + that.codes + "&partnerCode=" + that.$store.state.partnerCode
				//console.log(url)
				//console.log(that.orderList)
				that.$http.get(url).then((res) => {
					var appIdVal = res.data.appId;　　　　　　
					var timeStampVal = res.data.timeStamp;
					var nonceStrVal = res.data.nonceStr;　　　　　　
					var packageVal = res.data.package;　　　　　　
					var signTypeVal = res.data.signType;　　　　　　
					var paySignVal = res.data.paySign;　　
					//onBridgeReady();　　　　　　
					function onBridgeReady() {　　
						WeixinJSBridge.invoke('getBrandWCPayRequest', {　　　　　　　　　　
							appId: appIdVal, //公众号名称，由商户传入 
							timeStamp: timeStampVal, //时间戳，自1970年以来的秒数 
							nonceStr: nonceStrVal, //随机串 
							package: packageVal, //订单详情扩展字符串
							signType: signTypeVal, //微信签名方式： 
							paySign: paySignVal //微信签名 
						}, function(res) {
							//that.dddd = JSON.stringify(res)
							if(res.err_msg === 'get_brand_wcpay_request:ok') {
								that.payNotice()
							} else if(res.err_msg === 'get_brand_wcpay_request:cancel') {
								that.popupTxt = '支付已取消'
								const component = that.$refs['myPopup']
								component.show()
								setTimeout(() => {
									component.hide()
								}, 1000)
							} else if(res.err_msg === 'get_brand_wcpay_request:fail') {
								that.$router.replace("/payError")
							}

						});　　　　
					}　
					if(typeof WeixinJSBridge == "undefined") {　　　　　　　　
						if(document.addEventListener) {　　　　　　　　　　
							document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);　　　　　　　　
						} else if(document.attachEvent) {　　　　　　　　　　
							document.attachEvent('WeixinJSBridgeReady', onBridgeReady);　　　　　　　　　　
							document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);　　　　　　　　
						}　　　　
					} else {　　　　　　
						onBridgeReady();　　　　
					}
				}).catch((err) => {
					console.log(err)
				})
			},
			////支付结果通知
			payNotice() {　　
				var that = this
				//that.ffff = JSON.stringify(that.orderList)
				that.$store.state.finalMeal = {}
				that.$store.state.shopCar = []
				that.$store.state.perPrice = 0
				that.$store.state.finalNum = 0
				that.$store.state.finalPrice = 0
				that.$store.state.totalPrice = 0
				that.$store.state.orderId = ""

				that.$router.replace("/paySuccess")

				//				for(var i = 0; i < that.orderList.length; i++) {
				//					var j = that.orderList.length - 1
				//					that.payResult(that.orderList[i], i, j)
				//				}
			},
			payResult(oId, idx, idxLast) {
				//支付结果通知方法
				var that = this
				that.$http.post("/SimGW/travelSimGW/busiService", {
					data: {
						connSeqNo: that.$store.state.connSeqNo,
						partnerCode: that.$store.state.partnerCode,
						token: that.$store.state.token,
						tradeData: {
							orderId: oId,
							//payAmount: that.finalPrice.toString(),
							payRst: "0", //0成功  1 失败
							payType: "0", //微信支付
						},
						tradeTime: new Date(),
						tradeType: "F010",
					}
				}).then((res) => {
					//that.gggg = that.gggg + "//" + idx + "," + idxLast
					if(idx == idxLast) {
						that.$router.replace("/paySuccess")
						//that.gggg = 'Hey girl! Succeed!'
					}
				})
			}
		}
	}
</script>

<style scoped>
	.common-title i {
		background: url(../assets/common/sendWay.png)no-repeat center;
		background-size: 16px 16px;
	}
	
	.more-info {
		padding: 20px 1.2rem;
		font-size: 0.7rem;
		line-height: 20px;
		text-align: right;
		border-bottom: 1px solid #D4D5D5;
	}
	
	.more-info p {
		color: #3E3A39;
	}
	
	.more-info div {
		padding-right: 1rem;
		color: #9FA0A0;
		background: url(../assets/common/more.png)no-repeat center right;
		background-size: 6px 10px;
	}
	
	.text-meal {
		font-size: 14px;
		line-height: 18px;
	}
	
	.text-meaL-content {
		max-width: 74%;
		padding: 7px 0;
	}
	
	.price {
		line-height: 32px;
	}
</style>