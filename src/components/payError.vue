<template>
	<div class="body-container">
		<div class="pay-status"></div>
		<p class="title">订购失败</p>
		<p class="txt">
			实在抱歉，<br/>
			您未能成功定制该流量包，<br/>
			 我们不会扣除您的费用，请您稍后再试试看。
		</p>
		<div class="btns">
			<router-link class="done" to="/">确认</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'payError',
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
		background: url(../assets/common/failed.png) no-repeat center;
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