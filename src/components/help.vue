<template>
	<div class="body-container">
		<div class="banner">
			<img src="../assets/common/banner.png" />
		</div>
		
		<ul class="help-ul">
			<li>
				<a href="http://mp.weixin.qq.com/s?__biz=MzU5NjM5ODkxNA==&mid=100000104&idx=1&sn=f758216d6d52c2a9bdfba4f6fed4dc0e&chksm=7e62074549158e53d50acaee62c0cd12040f2553524bc49f0ee6e9e3939a801ff1f45aa2510f&scene=18#wechat_redirect">{{langCn ? '使用前必读' : 'Read Before Use'}}</a>
			</li>
			<li>
				<router-link :to="{name:'helpPage',params:{helpFlag:1}}">{{langCn ? '常见问题' : 'Common problem'}}</router-link>
			</li>
			<li>
				<router-link :to="{name:'helpPage2',params:{helpFlag:2}}">{{langCn ? '使用说明以及设置' : 'Instructions and settings'}}</router-link>
			</li>
			<li>
				<router-link :to="{name:'helpText',params:{helpFlag:2,backRouoter:'help'}}">{{langCn ? '联系我们' : 'Contact Us'}}</router-link>
			</li>
		</ul>
		
		<div  v-if="0">
			<div class="help-title">
				<p>帮助中心</p>
				<input type="text" placeholder="您遇到了什么问题？" v-model="helpTxt">
			</div>
			<ul class="help-list clearfix">
				<li class="icon-1">
					<router-link to="/helpPage">
						<span>账户管理</span>
					</router-link>
				</li>
				<li class="icon-2">
					<router-link to="/helpPage">
						<span>基础操作</span>
					</router-link>
				</li>
				<li class="icon-3">
					<router-link to="/helpPage">
						<span>产品展示</span>
					</router-link>
				</li>
				<li class="icon-4">
					<router-link to="/helpPage">
						<span>资费说明</span>
					</router-link>
				</li>
				<li class="icon-5">
					<router-link to="/helpPage">
						<span>商务合作</span>
					</router-link>
				</li>
				<li class="icon-6">
					<router-link to="/helpPage">
						<span>支付安全</span>
					</router-link>
				</li>
			</ul>
	
			<div class="common-trouble">
				<ul>
					<li>
						<p><span>常见问题</span></p>
						<ul>
							<li>1.领科物联网卡怎么激活？</li>
							<li>2.领科物联网卡能在什么地区使用？</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'help',
		data() {
			return {
				helpTxt: '',
				langCn: this.$store.state.langType == 'cn' ? true : false,
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
	.btns {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 15px 0 0;
		text-align: center;
		background: #fff;
	}
	.helpTxt{
		font-size:0.7rem;
		color:#3E3A39;
		line-height:24px;
		padding:20px 1rem 65px;
	}
	.helpTxt.en a{
		float:inherit;
		width:100%;
	}
	.helpTxt a{
		color:#3E3A39;
		font-size:0.7rem;
		display: block;
		margin-top:15px;
		float:left;
		width:50%;
		text-align: center;
	}
	
	.banner {
		position: relative;
	}
	
	.banner img {
		width: 100%;
	}
	
	.help-title {
		text-align: center;
	}
	
	.help-title p {
		font-size: 0.8rem;
		color: #F39800;
		line-height: 30px;
	}
	
	.help-title input {
		display: inline-block;
		font-size: 0.7rem;
		width: 72%;
		padding: 0 10px 0 36px;
		border: 1px solid #F39800;
		line-height: 26px;
		height: 26px;
		border-radius: 15px;
		outline: none;
		color: #3E3A39;
		background: url(../assets/common/search.png)no-repeat;
		background-size:16px 17px;
		background-position: 10px center;
	}
	
	.help-list {
		padding: 36px 0.8rem;
	}
	
	.help-list li {
		width: 33.333%;
		float: left;
		text-align: center;
	}
	
	.help-list li a {
		display: block;
		padding-top: 40px;
		padding-bottom: 24px;
	}
	
	.help-list li.icon-1 a {
		background: url(../assets/common/icon1.png) no-repeat center 8px;
		background-size: 32px 23px;
	}
	
	.help-list li.icon-2 a {
		background: url(../assets/common/icon2.png) no-repeat center 6px;
		background-size: 21px 28px;
	}
	
	.help-list li.icon-3 a {
		background: url(../assets/common/icon3.png) no-repeat center 8px;
		background-size: 32px 23px;
	}
	
	.help-list li.icon-4 a {
		background: url(../assets/common/icon4.png) no-repeat center 5px;
		background-size: 30px 30px;
	}
	
	.help-list li.icon-5 a {
		background: url(../assets/common/icon5.png) no-repeat center 9px;
		background-size: 33px 19px;
	}
	
	.help-list li.icon-6 a {
		background: url(../assets/common/icon6.png) no-repeat center 4px;
		background-size: 21px 32px;
	}
	
	.help-list li a span {
		display: block;
		font-size: 0.7rem;
		color: #F39800;
	}
	
	.help-ul li{
		border-bottom:1px solid #D4D5D5;
	}
	.help-ul li a{
		display: block;
		color:#3E3A39;
		line-height:30px;
		font-size:0.7rem;
		padding:8px 0.8rem;
		background: url(../assets/common/more.png) right no-repeat;
		background-position: 97% center;
		background-size: 10px;
	}
</style>