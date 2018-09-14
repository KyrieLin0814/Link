<template>
	<div class="body-container">
		<div class="pay-status"></div>
		<p class="title">{{$t("message.paySuccess")}}</p>
		<!--<p class="txt">
			累计使用流量包满25天免卡费，30天内激活使用，<br/> 未使用随时退款，过期自动退款
			<br/> 更多资讯，可前往【领科物联网全球电话卡】公众号号查看哦！
		</p>-->
		<div class="btns">
			<router-link to="/text">{{$t("message.overseas")}}</router-link>
			<div></div>
			<router-link class="done" to="/">{{$t("message.confirm")}}</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'paySuccess',
		data() {
			return {

			}
		},
		created() {
			//返回路由
			this.$store.state.routerBack.text = '/'
		},
		methods: {

		}
	}
</script>

<style scoped>
	.pay-status {
		height: 200px;
		background: url(../assets/common/success.png) no-repeat center;
		background-size: 80px 80px;
	}
	
	.title {
		text-align: center;
		font-size: 1rem;
		color: #3E3A39;
		line-height: 30px;
	}
	
	.txt {
		padding: 0 0.7rem;
		margin-top: 10px;
		text-align: center;
		font-size: 0.7rem;
		color: #9FA0A0;
		line-height: 20px;
	}
	
	.btns {
		margin-top: 80px;
		text-align: center;
	}
</style>