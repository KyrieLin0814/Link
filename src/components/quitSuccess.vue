<template>
	<div class="body-container">
		<div class="pay-status"></div>
		<p class="title">退订申请成功</p>
		<p class="txt">
			更多资讯，<br/>
			可前往【荔枝全球电话卡】公众号号查看哦！
		</p>
		<div class="btns">
			<router-link to="/">完成</router-link>
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
		components: {},
		created() {

		},
		mounted() {},
		methods: {

		}
	}
</script>

<style scoped>
	.pay-status {
		height: 160px;
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
	.btns{
		margin-top:40px;
		text-align: center;
	}
</style>