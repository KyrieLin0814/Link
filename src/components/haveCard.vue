<template>
	<div class="body-container">
		<div class="common-title">
			<i></i>
			<span>充值到已有旅游卡</span>
		</div>

		<a class="save" @click="scanQRCode">扫描卡片背面</a>

		<div class="content">
			<input type="number" v-model="iccid" placeholder="(输入文本框)">
			<span>或您手动输入旅游卡背面的ICCID编号</span>
			<span style="margin-top:60px;">注意：请您扫描您要绑定套餐的荔枝全球电话卡背面的ICCID条形码或输入这个ICCID编号，扫描不同的电话卡将以最后一次扫描为准。</span>
		</div>

		<div class="buy-box clearfix">
			<a @click="confirm">确定</a>
			<a @click="cancel">取消</a>
		</div>

		<cube-popup type="my-popup" :mask="false" ref="myPopup">{{ popupTxt }}</cube-popup>
	</div>
</template>

<script>
	export default {
		name: 'haveCard',
		data() {
			return {
				iccid: '',
				backRouter: this.$store.state.routerBack.haveCard,
				popupTxt: ''
			}
		},
		components: {},
		created() {
			this.iccid = this.$store.state.iccid
			var params = encodeURI(encodeURI(document.location.href))
			this.$http.get("/weixin/weixinsao?reqUrl=" + params).then((res) => {
				wx.config({
					debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。  
					appId: res.data.appId, // 必填，公众号的唯一标识  
					timestamp: res.data.timestamp, // 必填，生成签名的时间戳  
					nonceStr: res.data.nonceStr, // 必填，生成签名的随机串  
					signature: res.data.signature, // 必填，签名，见附录1  
					jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2  
				})
			})
		},
		mounted() {},
		methods: {
			scanQRCode() {
				var that = this
				wx.scanQRCode({
					needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，  
					scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有  
					success: function(res) {
						var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果  
						var iccid = result.split(",")[1]
						that.iccid = iccid
						// code 在这里面写上扫描二维码之后需要做的内容 
					},
					error: function(err) {
						//alert(JSON.stringify(err))
					}
				})
			},
			confirm() {
				var that = this
				//绑定iccid
				if(that.iccid) {
					that.$http.post("/weixin/userBound", {
						data: {
							connSeqNo: that.$store.state.connSeqNo,
							partnerCode: that.$store.state.partnerCode,
							token: that.$store.state.token,
							tradeData: {
								expressPrice: "",
								expressType: "",
								iccid: that.iccid,
								openid: that.$store.state.openId ? that.$store.state.openId : "",
								receiveAddress: "",
								receivePhoneNumber: "",
								receiveUserName: ""
							},
							tradeTime: new Date(),
							tradeType: "F013",
						}
					}).then((res) => {
						if(res.data.data.tradeRstCode == "1000") {
							that.$store.state.iccid = that.iccid
							that.$router.push({
								name: that.backRouter
							})
//							that.popupTxt = res.data.data.tradeRstMessage
//							const component = that.$refs['myPopup']
//							component.show()
//							setTimeout(() => {
//								component.hide()
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
					that.popupTxt = "ICCID不能为空"
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
		background-color: #F39800;
	}
	
	.content {
		margin-top: 40px;
		padding: 0 2.5rem;
	}
	
	.content input {
		display: block;
		width: calc(100% - 22px);
		font-size: 0.7rem;
		line-height: 28px;
		padding: 0 0.5rem;
		border: 1px solid #C9CACA;
		color: #3E3A39;
	}
	
	.content span {
		display: block;
		color: #C9CACA;
		font-size: 0.6rem;
		line-height: 24px;
	}
</style>