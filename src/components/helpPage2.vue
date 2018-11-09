<template>
	<div class="body-container">
		<div class="banner">
			<img src="../assets/common/banner.png" />
		</div>
		
		<div class="common-trouble">
			<ul>
				<li>
					<p><span class="bgColor">常见问题</span></p>
					<ul>
						<li>
							<a href="https://mp.weixin.qq.com/s/zgxdZzaHWvY7jWyWj3W68g">{{langCn ? '日韩设置方法' : 'Setting method in Japan and Korea'}}</a>
						</li>
						<li>
							<a href="http://mp.weixin.qq.com/s?__biz=MzU5NjM5ODkxNA==&mid=100000015&idx=1&sn=3f2a03abf35d14f6cd3d05a0acd381a4&chksm=7e62072249158e343a515e3eced86d9abe1b31d9062f1982bff3d803a78cdaf2d8fbb9172f00&scene=18#wechat_redirect">{{langCn ? '台湾设置方法' : 'Setting method in Taiwan'}}</a>
						</li>
						<li>
							<a href="http://mp.weixin.qq.com/s?__biz=MzU5NjM5ODkxNA==&mid=100000020&idx=1&sn=db818a56b8c1d6bf2f98032d868807b4&chksm=7e62073949158e2f053c6e7eb8304b5e368537559e1b85abd99f0f8cb8e8676d34bc6652b017&scene=18#wechat_redirect">{{langCn ? '新马泰设置方法' : 'Setting method in Singapore, Malaysia, Tailand'}}</a>
						</li>
						<li>
							<a href="https://mp.weixin.qq.com/s/cibrzkzSsTfrMqvWFEu14A">{{langCn ? '印尼设置方法' : 'Setting method in Indonesia'}}</a>
						</li>
						
					</ul>
				</li>
			</ul>
		</div>

		<!--<div class="alert-btn" @click="clickFunc()">
			<div>意见反馈</div>
			<div>在线客服</div>
		</div>-->
	</div>
</template>

<script>
	export default {
		name: 'helpPage',
		data() {
			return {
				alert: null,
				flag: true,
				langCn: this.$store.state.langType == 'cn' ? true : false,
			}
		},
		props:{
			helpFlag:{
				type:Number,
				default:2
			}
		}
//		mounted() {
//			this.alert = this.$createDialog({
//				type: 'confirm',
//				title: '您可以尝试以下方式解决',
//				confirmBtn: {
//					text: '意见反馈',
//					active: false,
//					disabled: false,
//					href: 'javascript:;'
//				},
//				cancelBtn: {
//					text: '在线客服',
//					active: false,
//					disabled: false,
//					href: 'javascript:;'
//				},
//				onConfirm: () => {
//
//				},
//				onCancel: () => {}
//			})
//		},
//		methods: {
//			clickFunc() {
//				var that = this
//				that.alert.show()
//				if(that.flag) {
//					document.querySelector(".cube-popup-mask").addEventListener("click", function() {
//						that.alert.hide()
//					})
//					that.flag = false
//				}
//			}
//		}
	}
</script>

<style scoped>
	.banner {
		position: relative;
	}
	
	.banner img {
		width: 100%;
	}
	
	.common-trouble {
		margin-top: 20px;
	}
	
	.common-trouble>ul p {
		font-size: 0;
		border-bottom: 1px solid #d7013f;
		margin:0 0.8rem;
	}
	
	.common-trouble ul p span {
		font-size: 0.7rem;
		padding: 2px 2.5rem 0 0.5rem;
		color: #fff;
	}
	
	.common-trouble ul ul li {
		border-bottom:1px solid #D4D5D5;
	}
	.common-trouble ul ul li a{
		display: block;
		color:#3E3A39;
		line-height:30px;
		font-size:0.7rem;
		padding:8px 1.2rem;
		background: url(../assets/common/more.png) right no-repeat;
		background-position: 95% center;
		background-size: 10px;
	}
	
	.alert-btn {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 0 1.2rem;
		padding-bottom: 20px;
		background-color: #fff;
	}
	
	.alert-btn div {
		font-size: 0.7rem;
		color: #3E3A39;
		line-height: 20px;
		padding-left: 10px;
		border: 1px solid #9FA0A0;
	}
	
	.alert-btn div:after {
		content: "";
		float: right;
		display: block;
		margin-right: 5px;
		width: 6px;
		height: 20px;
		background: url(../assets/common/more.png)no-repeat center;
		background-size: 6px 10px;
	}
	
	.alert-btn div:first-child {
		border-bottom: none;
	}
</style>