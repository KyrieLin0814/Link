<template>
	<div class="body-container">
		<p class="txt">
			本次退订即将扣除卡费，<br/>
			如已使用优惠券一并将扣除相应金额，<br/>
			您是否要继续退订？
		</p>
		<div class="btns">
			<router-link to="/status">再想想</router-link>
			<div></div>
			<a class="done" @click="quitFunc">继续退订</a>
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
			quitFunc(){
				this.$router.push("/quitSuccess")
			}
		}
	}
</script>

<style scoped>
	.txt {
		padding: 120px 0.7rem;
		margin-top: 10px;
		text-align: center;
		font-size: 0.7rem;
		color: #9FA0A0;
		line-height: 30px;
	}
	.btns{
		position: absolute;
		bottom: 15px;
		left: 0;
		right: 0;
		text-align: center;
	}
</style>