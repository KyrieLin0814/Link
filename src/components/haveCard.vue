<template>
	<div class="body-container">
		<div class="common-title">
			<i></i>
			<span>{{$t("message.recharge")}}</span>
		</div>

		<a class="save" @click="scanQRCode" v-if="openidFlag">{{$t("message.scan")}}</a>

		<div class="content">
			<input type="number" v-model="deviceId" :placeholder="$t('message.placeholder')">
			<span>{{$t("message.enterTxt")}}</span>
			<p class='checkContent' :class="{'active': active}" @click="pickerFunc">{{ deviceTypeText }}</p>
			<span style="margin-top:60px;">{{$t("message.note")}}</span>
		</div>

		<div class="buy-box clearfix">
			<a @click="confirm">{{$t("message.confirm")}}</a>
			<a @click="cancel">{{$t("message.cancel")}}</a>
		</div>

		<cube-popup type="my-popup" :mask="false" ref="myPopup">{{ popupTxt }}</cube-popup>
	</div>
</template>

<script>
	export default {
		name: 'haveCard',
		data() {
			return {
				deviceId: '',
				deviceTypeText : '',
				deviceType : '',
				backRouter: this.$store.state.routerBack.haveCard,
				openidFlag:this.$store.state.openId ? true: false,
				popupTxt: '',
				active: false,
				langCn: this.$store.state.langType=='cn'? true:false
			}
		},
		created() {
			var that = this
			that.deviceId = that.$store.state.deviceId
			that.deviceType = that.$store.state.deviceType
			that.deviceTypeText = that.$store.state.deviceTypeText ? that.$store.state.deviceTypeText : (that.langCn ? '请选择deviceType' : 'Please select deviceType')
			
			var params = encodeURI(encodeURI(document.location.href))
			that.$http.get("/paypalpay/weixinsao?reqUrl=" + params).then((res) => {
				wx.config({
					debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。  
					appId: res.data.appId, // 必填，公众号的唯一标识  
					timestamp: res.data.timestamp, // 必填，生成签名的时间戳  
					nonceStr: res.data.nonceStr, // 必填，生成签名的随机串  
					signature: res.data.signature, // 必填，签名，见附录1  
					jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2  
				})
			})
			
			//下拉选数据
			that.$http.get("/paypalpay/selectDeviceType?lang=" + that.$store.state.langType).then(function(res){
				var result = res.data.data.tradeData
				that.picker = that.$createPicker({
		          	title:  that.langCn ? '请选择设备类型': 'Please select',
		          	data: [result],
		          	cancelTxt:that.langCn ? '取消': 'Cancel',
		          	confirmTxt:that.langCn ? '确认': 'Confirm',
		          	onSelect: (selectedVal, selectedIndex, selectedText) => {
		          		that.deviceType = selectedVal[0]
		          		that.deviceTypeText = selectedText[0]
						that.active = false
					},
		          	onCancel: () => {
						that.active = false
					}
		        })
			})
			
		},
		methods: {
			pickerFunc(){
				this.active = true
				this.picker.show()
			},
			scanQRCode() {
				var that = this
				wx.scanQRCode({
					needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，  
					scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有  
					success: function(res) {
						var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果  
						var deviceId = result.split(",")[1]
						that.deviceId = deviceId
						// code 在这里面写上扫描二维码之后需要做的内容 
					},
					error: function(err) {
						//alert(JSON.stringify(err))
					}
				})
			},
			confirm() {
				var that = this
				const toast = that.$createToast({
					type: 'loading',
					time: 0,
					txt: 'Loading'
				})
				toast.show()
				//绑定deviceId
				if(that.deviceId && that.deviceType) {
					that.$http.post("/paypalpay/userBound", {
						data: {
							connSeqNo: that.$store.state.connSeqNo,
							lang: that.$store.state.langType,
							partnerCode: that.$store.state.partnerCode,
							token: that.$store.state.token,
							tradeData: {
								company: "",
								deviceId: that.deviceId,
								deviceType: that.deviceType,
								email: "",
								expressPrice: "",
								expressType: "",
								openid: that.$store.state.openId ? that.$store.state.openId : "",
								receiveAddress: "",
								receivePhoneNumber: "",
								receiveUserName: "",
								userId: that.$store.state.userId ? that.$store.state.userId : "",
							},
							tradeTime: new Date(),
							tradeType: "F013",
						}
					}).then((res) => {
						if(res.data.data.tradeRstCode == "1000") {
							that.$store.state.deviceId = that.deviceId
							that.$store.state.deviceType = that.deviceType
							that.$store.state.deviceTypeText = that.deviceTypeText
							toast.hide()
							that.$router.push({
								name: that.backRouter
							})
//							that.popupTxt = res.data.data.tradeRstMessage
//							const component = that.$refs['myPopup']
//							component.show()
//							setTimeout(() => {
//								component.hide()
//								
//							}, 1000)
						} else {
							that.popupTxt = res.data.data.tradeRstMessage
							const component = that.$refs['myPopup']
							component.show()
							setTimeout(() => {
								component.hide()
							}, 1000)
						}
					})
				} else {
					that.popupTxt = that.langCn ? 'deviceId以及设备类型不能为空':'DeviceId and deviceType can not be empty'
					const component = that.$refs['myPopup']
					component.show()
					setTimeout(() => {
						component.hide()
					}, 1000)
				}

			},
			cancel() {
				var that = this
				that.$router.push({
					name: that.backRouter
				})
			}
		}
	}
</script>

<style scoped>
	.save {
		display: block;
		text-align: center;
		font-size: 0.7rem;
		color: #fff;
		border-radius: 5px;
		width: 60%;
		margin: 60px auto 0;
		line-height: 32px;
		background:#d7013f;
		background: -webkit-linear-gradient(left, #d7013f , #e47a62); /* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(right, #d7013f, #e47a62); /* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(right, #d7013f, #e47a62); /* Firefox 3.6 - 15 */
		background: linear-gradient(to right, #d7013f , #e47a62); /* 标准的语法 */
	}
	
	.content {
		margin-top: 40px;
		padding: 0 2.5rem;
	}
	
	.content input, .checkContent {
		display: block;
		width: calc(100% - 22px);
		font-size: 0.7rem;
		line-height: 28px;
		padding: 0 0.5rem;
		border: 1px solid #C9CACA;
		color: #3E3A39;
		outline: none;
	}
	
	.content span {
		display: block;
		color: #C9CACA;
		font-size: 0.6rem;
		line-height: 24px;
	}
	.checkContent{
		position: relative;
		color:#999;
		margin-top:15px;
		height:30px;
	}
	.checkContent:after{
		content:'';
		display: block;
		position: absolute;
		right:0;
		top:0;
		width:28px;
		height:28px;
		background: url(../assets/common/down.png) center no-repeat;
		background-size: 15px;
		transition: all 0.3s;
		-webkit-transition: all 0.3s;
		-moz-transition: all 0.3s;
		-ms-transition: all 0.3s;
		transform: rotate(180deg);
		-webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
	}
	.checkContent.active:after{
		transform: rotate(0deg);
		-webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
	}
</style>