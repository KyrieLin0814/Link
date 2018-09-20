<template>
	<div class="body-container">
		<div class="common-title">
			<i></i>
			<span>{{$t("message.payType")}}</span>
		</div>
		<div class="payBox flexBox">
			<div class="amountTitle flex-1">{{$t("message.amount")}}</div>
			<div class="amount"><span class="fontColor">{{amount}}</span>{{$t("message.yuan")}}</div>
		</div>

		<ul class="payList">
			<li class="paypal" :class="{'active': payFlag == 1}" @click="choose(1)">Paypal</li>
			<!--<li class="ocean" :class="{'active': payFlag == 2}" @click="choose(2)">Ocean</li>
			<li class="wxPay" :class="{'active': payFlag == 3}" @click="choose(3)">{{$t("message.WxPay")}}</li>-->
		</ul>

		<div class="btns">
			<a @click="payFunc">{{$t("message.payment")}}</a>
			<router-link class="done" to="/postWay">{{$t("message.back")}}</router-link>
		</div>

		<!--paypal form-->
		<form action="https://www.paypal.com/cgi-bin/webscr" method="post" id="paypalForm">
		<!--<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" id="paypalForm">-->
			<!-- 支付金额-->
			<input type="hidden" name="amount" :value="amount">
			<!-- 自己的参数 商品条目-->
			<input type="hidden" name="item_number" :value="linksFlow">
			<!-- 表示立即支付-->
			<input type="hidden" name="cmd" :value="cmd">
			<!-- 商品名称-->
			<input type="hidden" name="item_name" :value="item_name">
			<!-- 商户订单唯一id 不可重复 -->
			<input type="hidden" name="invoice" :value="invoice">

			<!--支付成功后台通知地址-->
			<input type="hidden" name="notify_url" :value="notify_url">
			<!--支付成功返回地址-->
			<input type="hidden" name="return" :value="success_return">
			<input type="hidden" name="lc" id="lc" value="China">
			<!--支付取消返回地址-->
			<input type="hidden" name="cancel_return" :value="cancel_return">

			<!--商户邮件-->
			<input type="hidden" name="business" :value="business">

			<input type="hidden" name="currency_code" :value="currency_code">

		</form>

		<cube-popup type="my-popup" :mask="false" ref="myPopup">{{ popupTxt }}</cube-popup>
	</div>
</template>

<script>
	export default {
		name: 'name',
		data() {
			return {
				amount: '0.00',
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
				langCn: this.$store.state.langType == 'cn' ? true : false
			}
		},
		created() {
			var that = this
			var url = that.$store.state.payParams.paypalUrl
			console.log(url)
			if(url) {
				that.$http.get(url).then(function(res) {
					console.log(res)
					that.amount = res.data.amount
					that.linksFlow = res.data.linksFlow
					that.cmd = res.data.cmd
					that.item_name = res.data.item_name
					that.invoice = res.data.invoice
					that.notify_url = res.data.notify_url
					that.success_return = res.data.return
					that.cancel_return = res.data.cancel_return
					that.business = res.data.business
					that.currency_code = res.data.currency_code
				})
			} else {
				that.$createDialog({
			        type: 'alert',
			        title: that.langCn ?'异常操作':'Abnormal operation',
			        content: that.langCn ? '您的订单已失效，请重新下单':'Your order is invalid, please re order it',
			        icon: 'cubeic-alert',
			        confirmBtn:{text: that.langCn ?'确认':'Confirm',href:"http://wx.linksfield.net:8080/#/"}
			    }).show()
			}
		},
		methods: {
			payFunc() {
				var type = this.payFlag
				if(type == 1) {
					var that = this
					const toast = that.$createToast({
						type: 'loading',
						time: 0,
						txt: 'Loading'
					})
					toast.show()
					console.log(document.getElementById('paypalForm'))
					
					document.getElementById('paypalForm').submit()
				} else {
					alert('暂不支持')
				}
			},
			choose(type) {
				console.log(type)
				this.payFlag = type
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
</style>