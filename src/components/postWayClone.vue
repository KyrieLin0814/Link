<template>
	<div class="body-container">
		<div class="common-title">
			<i></i>
			<span>选择荔枝卡收货方式</span>
		</div>
		
		<div class="choose-way car-list">
			<ul>
				<li @click="chooseWay(1)">
					<cube-checkbox v-model="checkedObj.type1" :option="option" :hollow-style="true" shape="circle" />
					<div class="post-txt"><span>普通快递</span></div>
					<p><span>{{norPost.toFixed(2)}}</span>元</p>
				</li>
				<li @click="chooseWay(2)">
					<cube-checkbox v-model="checkedObj.type2" :option="option" :hollow-style="true" shape="circle" />
					<div class="post-txt"><span>顺风快递</span></div>
					<p><span>{{SFPost.toFixed(2)}}</span>元</p>
				</li>
				<li @click="chooseWay(3)">
					<cube-checkbox v-model="checkedObj.type3" :option="option" :hollow-style="true" shape="circle" />
					<div class="have">已有卡片，直接充值到我的旅游卡</div>
				</li>
			</ul>
		</div>
		<div class="more-info" @click="setAddress">
			<p>收货地址</p>
			<div>{{ addressGet ? addressGet : '编辑' }}</div>
		</div>
		<div class="more-info" @click="haveCard">
			<p>已有旅游卡信息</p>
			<div>{{ iccid ? iccid : '编辑' }}</div>
		</div>

		<div class="buy-box clearfix">
			<p>合计：<span>{{ finalPrice.toFixed(2) }}</span> 元</p>
			<span class="slide" :class="{'active': slideFlage}" @click="slideFunc"></span>
			<a @click="payFunc">支付</a>
			<router-link to="/order">返回</router-link>
			
			<transition name="fade" mode="out-in">
				<div class="cost-box" :class="{'active': slideFlage}">
					<div class="tle">费用详情</div>
					<ul>
						<li v-for="i in shopCarData">
							<div class="flexBox text-meal">
								<div class="text-meaL-content">{{i.meal.name}} ({{ i.text }})</div>
								<div class="flex-1"></div>
								<div class="price"><span>{{ i.finalPrice.toFixed(2) }}</span>元</div>
							</div>
						</li>
					</ul>
					<div class="flexBox" v-if="expressType != 3">
						<div>快递费 </div>
						<div class="flex-1"></div>
						<div class="price"><span>{{ expressCost.toFixed(2) }}</span>元</div>
					</div>
					<div class="flexBox cardCost" :class="{cardFree: !cardCostFlag}" v-if="expressType != 3">
						<div>荔枝卡费
							<span class="cardFreeTxt" v-if="!cardCostFlag"> (单笔满{{orderFullX}}元，已免除)</span>
							<span class="cardFreeTxt" v-else> (单笔满{{orderFullX}}元，可免除)</span>
						</div>
						<div class="flex-1"></div>
						<div class="price"><span>{{ trafficCardfee.toFixed(2) }}</span>元</div>
					</div>
				</div>
			</transition>
		</div>

		<cube-popup type="my-popup" :mask="false" ref="myPopup">{{ popupTxt }}</cube-popup>
	</div>
</template>

<script>
	export default {
		name: 'name',
		data() {
			return {
				option: {
					label: '',
					value: ''
				},
				popupTxt: '',
				checkedObj: {
					expressType: 1,
					type1: true
				},
				shopCarData: [],
				slideFlage: true,
				finalPrice: 0.00,
				finalNum: 0,
				day: 1,
				page: 1,
				mealPrice: 0,
				iccid: '',
				alert: null,
				temOrderIdList:[],
				orderList: [],
				codes: "",
				orderPeriods:"",
				cardCostFlag:true,
				expressCost:this.$store.state.cartData.ordinaryExpressfee,
				orderFullX:this.$store.state.cartData.orderFullX,
				//快递信息
				expressType: 1,
				trafficCardfee:this.$store.state.cartData.trafficCardfee,
				norPost: this.$store.state.cartData.ordinaryExpressfee,
				SFPost: this.$store.state.cartData.sFexpressfee,
				address: {},
				addressGet: '',
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
			that.iccid = that.$store.state.iccid
			that.finalPrice = that.$store.state.totalPrice
			that.mealPrice = that.$store.state.totalPrice
			if(that.mealPrice >= that.orderFullX){
				that.cardCostFlag = false
			}
			
			//地址
			that.address = that.$store.state.address
			that.addressGet = that.address.province + that.address.city + that.address.area + that.address.addressTxt
		},
		mounted() {
			var that = this
			//返回路由
			that.$store.state.routerBack.haveCard = "postWay"

			//默认选中
			if(that.$store.state.wayFlag) {
				that.chooseWay(that.$store.state.wayFlag)
			}
			
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
						that.chooseWay(3)
						//有卡，不再提示
						that.$store.state.alertCard = false
					} else {
						that.popupTxt = "检测到您还没有旅游卡，请填写收货信息并购卡"
						const component = that.$refs['myPopup']
						component.show()
						setTimeout(() => {
							component.hide()
						}, 1500)
						that.chooseWay(1)
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
			chooseWay(id) {
				this.checkedObj = {}
				this.checkedObj['type' + id] = true
				this.$store.state.expressType = ((id == 3)? "" : id.toString());
				this.expressType = id
				this.$store.state.wayFlag = id
				
				if(id == 1){
					this.expressCost = this.norPost
					if(this.cardCostFlag){
						this.finalPrice = this.mealPrice + this.norPost + this.trafficCardfee
					}else{
						this.finalPrice = this.mealPrice + this.norPost
					}
				}else if(id == 2) {
					this.expressCost = this.SFPost
					if(this.cardCostFlag){
						this.finalPrice = this.mealPrice + this.SFPost + this.trafficCardfee
					}else{
						this.finalPrice = this.mealPrice + this.SFPost
					}
				} else {
					this.finalPrice = this.mealPrice
				}
				this.$store.state.finalPrice = this.finalPrice
			},
			setAddress() {
				if(!this.checkedObj.type3) {
					this.$router.push("/adress")
				} else {
					this.popupTxt = "若选择您已有旅游卡，请编辑、确认旅游卡信息"
					const component = this.$refs['myPopup']
					component.show()
					setTimeout(() => {
						component.hide()
					}, 1000)
				}
			},
			haveCard() {
				if(this.checkedObj.type3) {
					this.$router.push("/haveCard")
				} else {
					this.popupTxt = "若需购卡，请填写快递信息"
					const component = this.$refs['myPopup']
					component.show()
					setTimeout(() => {
						component.hide()
					}, 1000)
				}
			},
			payFunc() {
				var that = this
				
				if(that.expressType == 3){
					if(that.iccid == "") {
						that.popupTxt = "您还未绑定旅游卡ICCID，无法下单"
						const component = that.$refs['myPopup']
						component.show()
						setTimeout(() => {
							component.hide()
						}, 1000)
					}else{
						that.alert.show()
					}
				}else{
					if(that.addressGet == "") {
						that.popupTxt = "您还未填写收卡快递信息，无法下单"
						const component = that.$refs['myPopup']
						component.show()
						setTimeout(() => {
							component.hide()
						}, 1000)
					}else{
						that.alert.show()
					}
				}
			},
			orderFunc() {
				var that = this
				const toast = that.$createToast({
					type: 'loading',
					time: 0,
					txt: 'Loading'
				})
				toast.show()
				var expressPrice = 0
				if(that.expressType == 1) {
					expressPrice = that.norPost
				} 
				if(that.expressType == 2){
					expressPrice = that.SFPost
				}
				//绑定接口
				that.$http.post("/weixin/userBound", {
					data: {
						connSeqNo: that.$store.state.connSeqNo,
						partnerCode: that.$store.state.partnerCode,
						token: that.$store.state.token,
						tradeData: {
							expressPrice: expressPrice.toString(),
							expressType: that.$store.state.expressType.toString(),
							iccid: that.$store.state.iccid ? that.$store.state.iccid : "",
							openid: that.$store.state.openId ? that.$store.state.openId : "",
							receiveAddress: encodeURI(encodeURI(that.addressGet)),
							receivePhoneNumber: that.$store.state.address.phone,
							receiveUserName: encodeURI(encodeURI(that.$store.state.address.name))
						},
						tradeTime: new Date(),
						tradeType: "F013",
					}
				}).then((res) => {
					if(res.data.data.tradeRstCode == "1000") {
						//整理订单请求参数
						var orderList = []
						var codeList = []
						var orderPeriodList = []
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
									//orderPeriod拼接
									orderPeriodList.push(that.shopCarData[idx].meal.obj.maxDays)
									//code拼接
									codeList.push(val.meal.obj.packageCode)
								}
								orderList = orderList.concat(arrD)
							} else {
								orderList.push({
									channelOrderID: (new Date().getTime() + Math.floor(Math.random() * 9999)).toString(),
									orderPeriod: val.finalNum.toString(),
									packageCode: val.meal.obj.packageCode
								})
								//orderPeriod拼接
								orderPeriodList.push(val.finalNum.toString())
								//code拼接
								codeList.push(val.meal.obj.packageCode)
							}
						})
						that.codes = codeList.join(",")
						that.orderPeriods = orderPeriodList.join(",")
						//console.log(orderList)
						//console.log(that.orderPeriods)
						//console.log(that.codes)
						
						//订单接口
						if(that.expressType == 3){
							//有卡情况
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
								//alert("error 订单接口" + JSON.stringify(err))
							})
						}else{
							//无卡情况
							that.$http.post("/weixin/orderNoCard", {
								data: {
									connSeqNo: that.$store.state.connSeqNo,
									partnerCode: that.$store.state.partnerCode,
									token: that.$store.state.token,
									tradeData: {
										orderList: orderList
									},
									tradeTime: new Date(),
									tradeType: "F015",
								}
							}).then((res) => {
								toast.hide()
								//console.log(res)
								if(res.data.data.tradeRstCode == "1000") {
									toast.hide()
									//记录订单号
									that.temOrderIdList = []
									for(var m = 0; m < res.data.data.tradeData.length; m++) {
										that.temOrderIdList.push(res.data.data.tradeData[m].temOrderId)
									}
									that.$store.state.temOrderIdList = that.temOrderIdList.join(",")
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
								//alert("error 无卡接口orderNoCard" + JSON.stringify(err))
							})
						}
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
					//alert("error" + JSON.stringify(err))
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
				var url = "/weixin/weixinpay?openId=" + that.$store.state.openId + "&partnerCode=" + that.$store.state.partnerCode + "&amount=" + that.finalPrice.toFixed(2) + "&paymentOrderId=" + paymentOrderId 
						  + "&orderId=" + that.$store.state.orderId + "&temOrderId=" + that.$store.state.temOrderIdList +  "&packageCode=" + that.codes + "&orderPeriod=" + that.orderPeriods
				//console.log(url)
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

						})　
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
			//支付结果通知
			payNotice() {　　
				var that = this
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
	
	.choose-way ul li {
		position: relative;
		padding: 14px 1.2rem;
		border-bottom: 1px solid #D4D5D5;
		font-size: 0;
	}
	
	.choose-way ul li .cube-checkbox {
		display: inline-block;
		position: inherit;
		margin-top: -1px;
	}
	
	.choose-way ul li div,
	.choose-way ul li p {
		display: inline-block;
		font-size: 0.7rem;
		line-height: 16px;
		height: 16px;
		vertical-align: middle;
	}
	
	.choose-way ul li span {
		display: inline-block;
		color: #F39800;
		line-height: 16px;
		height: 16px;
	}
	
	.post-txt {
		color: #C9CACA;
		vertical-align: middle;
		margin-left: 5px;
	}
	
	.choose-way ul li p {
		float: right;
	}
	
	.choose-way ul li p span {
		padding-right: 5px;
	}
	
	.have {
		color: #3E3A39;
		margin-left: 5px;
	}
	
	.more-info {
		padding: 10px 1.2rem;
		font-size: 0.7rem;
		text-align: right;
		border-bottom: 1px solid #D4D5D5;
	}
	
	.more-info p {
		color: #3E3A39;
	}
	
	.more-info div {
		padding-right: 1rem;
		color: #9FA0A0;
		margin-top: 10px;
		background: url(../assets/common/more.png)no-repeat center right;
		background-size: 6px 10px;
	}
	.text-meal{
		font-size:14px;
		line-height:18px;
	}
	.text-meaL-content{
		max-width:74%;
		padding:7px 0;
	}
	.price{
		line-height:32px;
		position: relative;
	}
	.cardCost.cardFree{
		color:#999;
	}
	.cardCost .cardFreeTxt{
		color:#999;
		font-size:0.6rem;
	}
	
	.cardCost.cardFree .price,
	.cardCost.cardFree .price span
	{
		color:#999;
	}
	.cardCost.cardFree .price:after{
		content: "";
		display: block;
		position: absolute;
		top:50%;
		left:-5px;
		width:calc(100% + 10px);
		border-top:1px solid #c5c5c5;
	}
</style>