<template>
	<div class="body-container">
		<div class="banner">
			<img src="../assets/common/banner.png" />
		</div>
		
		<div class="common-trouble" v-if="helpFlag == 1">
			<ul>
				<li>
					<p><span class="bgColor">常见问题</span></p>
					<ul>
						<li>
							<router-link to="/helpRead">{{langCn ? '一直没信号' : 'There has been no signal'}}</router-link>
						</li>
						<li>
							<a href="https://mp.weixin.qq.com/s?__biz=MzU5NjM5ODkxNA==&mid=100000058&idx=1&sn=8184b17eccf77dec3d205f87887af363&chksm=7e62071749158e01ddb5f62a32e8d94ed16a0e2ac02bf32e3a41359e125f6a41dbdcba9b390e&scene=18#wechat_redirect">{{langCn ? '有信号无流量' : 'There are signals but no traffic'}}</a>
						</li>
						<li>
							<a href="http://mp.weixin.qq.com/s?__biz=MzU5NjM5ODkxNA==&mid=100000072&idx=1&sn=9a395176587186a403cc1cad4767388f&chksm=7e62076549158e734b17be6b4f32a486287ae2e98188df6c6038c583d1c741449973662e8b57&scene=18#wechat_redirect">{{langCn ? '查看可用机型' : 'View supported cell phone models'}}</a>
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
				default:1
			}
		},
		mounted(){
			console.log(this.helpFlag)
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