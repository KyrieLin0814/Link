<template>
	<div class="body-container">
		<h4>查看境外上网设置办法</h4>
		<p>在【荔枝全球电话卡】微信公众号里，您点击【设置卡】菜单，然后可以看到不同国家或地区的设置办法，点击您套餐对应的国家或地区，就能看到对应该国家或地区的详细设置方法了。</p>
	
		<div class="btns">
			<router-link class="done" :to="back">返回</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'name',
		data() {
			return {
				back:this.$store.state.routerBack.text
			}
		},
		components: {},
		created() {

		},
		mounted() {
		},
		methods: {

		}
	}
</script>

<style scoped>
	h4{
		margin:30px 0 20px; 
		font-size:0.8rem;
		text-align: center;
	}
	p{
		font-size:0.7rem;
		color:#3E3A39;
		line-height:20px;
		padding:0 1.2rem;
		text-indent: 2em;
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