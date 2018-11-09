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
			<!--<li class="ocean" :class="{'active': payFlag == 2}" @click="choose(2)">Ocean</li>-->
			<li class="wxPay" :class="{'active': payFlag == 3}" @click="choose(3)">{{$t("message.WxPay")}}</li>
		</ul>

		<div class="btns">
			<a>{{$t("message.payment")}}</a>
			<router-link class="done" to="/">{{$t("message.back")}}</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'payResult',
		data() {
			return {
				amount: '0.00',
				payFlag: 3,
				paymentOrderId: '',
				langCn: localStorage.getItem('lang') == 'cn' ? true : false
			}
		},
		created() {
			var that = this
			var paramsObj = that.$route.query
			that.paymentOrderId = paramsObj.paymentOrderId
			that.amount = Number(paramsObj.amount).toFixed(2)
			that.payFlag = paramsObj.payFlag
		},
		mounted() {
			var that = this
			this.$createDialog({
				type: 'confirm',
				title: '是否完成支付？',
				confirmBtn: {
					text: '已支付',
					active: true,
					disabled: false,
					href: 'javascript:;'
				},
				cancelBtn: {
					text: '未支付',
					active: false,
					disabled: false,
					href: 'javascript:;'
				},
				onConfirm: () => {
					that.comfirmFunc()
				},
				onCancel: () => {
					that.$router.replace("/payError")
				}
			}).show()
		},
		methods: {
			comfirmFunc() {
				var that = this
				const toast = this.$createToast({
					time: 0,
					mask: true,
					txt: that.langCn ? '正在确认支付状态' : 'Confirming your payment status'
				})
				toast.show()
				that.$http.get('/paypalpay/wxH5orderQuery?paymentOrderId=' + that.paymentOrderId).then(function(res) {
					console.log(res)
					toast.hide()
					if(res.data.trade_state == "0") {
						that.$router.replace("/paySuccess")
					} else {
						that.$router.replace("/payError")
					}
				})
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