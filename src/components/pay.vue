<template>
	<div class="body-container">
		<div class="common-title">
			<i></i>
			<span>{{$t("message.payType")}}</span>
		</div>
		<div class="payBox flexBox">
			<div class="amountTitle flex-1">{{$t("message.amount")}}</div>
			<div class="amount" v-if="payFlag == 3"><span class="fontColor">{{amount}}</span> {{langCn ? "元" : "CNY"}}</div>
			<div class="amount" v-if="payFlag == 1"><span class="fontColor">{{amount1}}</span>USD</div>
		</div>

		<ul class="payList">
			<li class="paypal" :class="{'active': payFlag == 1}" @click="choose(1)">Paypal</li>
			<!--<li class="ocean" :class="{'active': payFlag == 2}" @click="choose(2)">Ocean</li>-->
			<li class="wxPay" :class="{'active': payFlag == 3}" @click="choose(3)">{{$t("message.WxPay")}}</li>
		</ul>

		<div class="btns">
			<div id="paypal" v-show="payFlag == 1"></div>
			<a @click="payFunc" v-show="payFlag != 1">{{$t("message.payment")}}</a>
			<router-link class="done" to="/postWay">{{$t("message.back")}}</router-link>
		</div>

		<!--paypal form-->
		<!--<form action="https://www.paypal.com/cgi-bin/webscr" method="post" id="paypalForm">-->
		<!--<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" id="paypalForm">-->
		<!-- 支付金额-->
		<!--<input type="hidden" name="amount" :value="amount">-->
		<!-- 自己的参数 商品条目-->
		<!--<input type="hidden" name="item_number" :value="linksFlow">-->
		<!-- 表示立即支付-->
		<!--<input type="hidden" name="cmd" :value="cmd">-->
		<!-- 商品名称-->
		<!--<input type="hidden" name="item_name" :value="item_name">-->
		<!-- 商户订单唯一id 不可重复 -->
		<!--<input type="hidden" name="invoice" :value="invoice">-->

		<!--支付成功后台通知地址-->
		<!--<input type="hidden" name="notify_url" :value="notify_url">-->
		<!--支付成功返回地址-->
		<!--<input type="hidden" name="return" :value="success_return">-->
		<!--<input type="hidden" name="lc" id="lc" value="China">-->
		<!--支付取消返回地址-->
		<!--<input type="hidden" name="cancel_return" :value="cancel_return">-->

		<!--商户邮件-->
		<!--<input type="hidden" name="business" :value="business">-->

		<!--<input type="hidden" name="currency_code" :value="currency_code">-->

		<!--</form>-->

		<cube-popup type="my-popup" :mask="false" ref="myPopup">{{ popupTxt }}</cube-popup>

	</div>
</template>

<script>
	export default {
		name: 'pay',
		data() {
			return {
				amount: '0.00',
				amount1:'0.00',
				linksFlow: '',
				cmd: '',
				item_name: '',
				invoice: '',
				notify_url: '',
				success_return: '',
				cancel_return: '',
				business: '',
				currency_code: '',
				payFlag: 1,
				popupTxt: '',
				langCn: this.$store.state.langType == 'cn' ? true : false,
				wxPayUrl: '',
			}
		},
		created() {
			this.amount =  (this.langCn ?  this.$store.state.totalPrice : this.$store.state.totalPrice * 6.5).toFixed(2);
			this.amount1 = (Number(this.amount) / 6.5).toFixed(2)
		},
		mounted() {
			var that = this

			//paypal pay
			var url1 = that.$store.state.payParams.paypalUrl
			//weixin pay
			var url2 = that.$store.state.payParams.weixinUrl
			//console.log(url1)

			if(url1 && url2) {
				//paypal pay
				that.$http.get(url1).then(function(res) {
					console.log(res)
					//					that.amount = res.data.amount
					//					that.linksFlow = res.data.linksFlow
					//					that.cmd = res.data.cmd
					//					that.item_name = res.data.item_name
					//					that.invoice = res.data.invoice
					//					that.notify_url = res.data.notify_url
					//					that.success_return = res.data.return
					//					that.cancel_return = res.data.cancel_return
					//					that.business = res.data.business
					//					that.currency_code = res.data.currency_code
				})

				// Render the PayPal button
				//				paypal.Button.render({
				//
				//					// Set your environment
				//					env: 'sandbox', // sandbox | production
				//
				//					// Show the buyer a 'Pay Now' button in the checkout flow
				//					commit: true,
				//
				//					style: {
				//						label: 'pay',
				//						size: 'small', // small | medium | large | responsive
				//						shape: 'rect', // pill | rect
				//						color: 'gold' // gold | blue | silver | black
				//					},
				//
				//					// payment() is called when the button is clicked
				//					payment: function() {
				//
				//						// Set up a url on your server to create the payment
				//						var CREATE_URL = 'http://wx.linksfield.net' + url1;
				//
				//						// Make a call to your server to set up the payment
				//						return paypal.request.get(CREATE_URL)
				//							.then(function(res) {
				//								console.log(res)
				//								return res.paymentID;
				//							});
				//					},
				//
				//					// onAuthorize() is called when the buyer approves the payment
				//					onAuthorize: function(data, actions) {
				//
				//						// Set up a url on your server to execute the payment
				//						var EXECUTE_URL = 'http://wx.linksfield.net/paypalpay/paypal/successPay';
				//
				//						// Set up the data you need to pass to your server
				//						var data = {
				//							paymentID: data.paymentID,
				//							payerID: data.payerID
				//						};
				//
				//						// Make a call to your server to execute the payment
				//						return paypal.request.post(EXECUTE_URL, data)
				//							.then(function(res) {
				//								that.$router.replace("/paySuccess")
				//							});
				//					}
				//				}, '#paypal');

				paypal.Button.render({

					env: 'production', // sandbox | production

					// PayPal Client IDs - replace with your own
					// Create a PayPal app: https://developer.paypal.com/developer/applications/create
					client: {
						production:'AbEyWcPb83UxHonisXATPdM_xWNWQtsEDuV13WX_pZFqQTI9I27p744uVV0Tdp9e516JeCbZ89_XzOth'
					},

					// Show the buyer a 'Pay Now' button in the checkout flow
					commit: true,

					style: {
						label: 'pay',
						size: 'small', // small | medium | large | responsive
						shape: 'rect', // pill | rect
						color: 'gold' // gold | blue | silver | black
					},

					// payment() is called when the button is clicked
					payment: function(data, actions) {
						// Make a call to the REST api to create the payment
						return actions.payment.create({
							payment: {
								transactions: [{
									amount: {
										total: that.amount,
										currency: 'USD'
									},
									"description": "领科订单",
      								"invoice_number": that.$store.state.payParams.paymentOrderId
								}]
							}
						});
					},

					// onAuthorize() is called when the buyer approves the payment
					onAuthorize: function(data, actions) {
						// Make a call to the REST api to execute the payment
						return actions.payment.execute().then(function() {
							that.$router.replace("/paySuccess")
						});
					}

				}, '#paypal');

				//weixin pay
				that.$http.get(url2).then(function(res) {
					//console.log(res)
					if(res.data.mweb_url) {
						that.wxPayUrl = res.data.mweb_url + '&redirect_url=' + encodeURIComponent('http://wx.linksfield.net:8080/#/payResult?paymentOrderId=' +
							that.$store.state.payParams.paymentOrderId + '&amount=' + that.amount + '&type=' + that.payFlag)
						console.log(that.wxPayUrl)
					}
				})
			} else {
				that.$createDialog({
					type: 'alert',
					title: that.langCn ? '异常操作' : 'Abnormal operation',
					content: that.langCn ? '您的订单已失效，请重新下单' : 'Your order is invalid, please re order it',
					icon: 'cubeic-alert',
					confirmBtn: {
						text: that.langCn ? '确认' : 'Confirm',
						href: "http://wx.linksfield.net:8080"
					}
				}).show()
			}
		},
		methods: {
			payFunc() {
				var that = this
				var type = this.payFlag
				if(type == 1) {
					//paypal pay
					const toast = that.$createToast({
						type: 'loading',
						time: 0,
						txt: 'Loading'
					})
					toast.show()
					//console.log(document.getElementById('paypalForm'))
					//document.getElementById('paypalForm').submit()

				} else if(type == 3) {
					//wx pay
					if(that.wxPayUrl) {
						window.location.href = that.wxPayUrl
					}
				} else {
					alert('暂不支持')
				}
			},
			choose(type) {
				this.payFlag = type
				console.log(this.$store.state.payParams.weixinUrl)
				console.log(this.$store.state.payParams.paypalUrl)
			}
		}
	}
</script>

<style scoped>
	.common-title i {
		background: url(../assets/common/payType.png)no-repeat center;
		background-size: 16px 16px;
	}
	
	.payBox {
		padding: 0 1rem;
		border-bottom: 1px solid #E4E4E4;
		line-height: 50px;
		font-size: 0.7rem;
	}
	
	.payBox .amount span {
		margin-right: 5px;
		font-size: 0.8rem;
		font-weight: bold;
	}
	
	.payList {
		margin: 24px 1rem;
		font-size: 0.7rem;
	}
	
	.payList li {
		border: 1px solid #E4E4E4;
		margin-bottom: 10px;
		line-height: 50px;
		padding: 0 1rem;
		text-align: right;
		border-radius: 10px;
		transition: all 0.3s;
		-moz-transition: all 0.3s;
		-webkit-transition: all 0.3s;
		-ms-transition: all 0.3s;
	}
	
	.payList li.active {
		border: 1px solid #d7013f;
	}
	
	.paypal {
		background: url(../assets/common/paypal.png) no-repeat 0.7rem center;
		background-size: 80px;
	}
	
	.ocean {
		background: url(../assets/common/ocean.png) no-repeat 0.7rem center;
		background-size: 125px;
	}
	
	.wxPay {
		background: url(../assets/common/weixin.png) no-repeat 0.7rem center;
		background-size: 34px;
	}
	
	.btns {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 15px;
		text-align: center;
		background: #fff;
	}
	
	#paypal {
		display: inline-block;
		min-width: 12rem;
		height: 32px;
		margin-bottom: 20px;
	}
</style>