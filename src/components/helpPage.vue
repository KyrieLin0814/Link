<template>
	<div class="body-container">
		<div class="banner">
			<img src="../assets/common/banner.png" />
		</div>

		<div class="common-trouble">
			<ul>
				<li>
					<p><span>常见问题</span></p>
					<ul>
						<li>1.荔枝卡怎么激活？</li>
						<li>2.荔枝卡能在什么地区使用？</li>
						<li>1.荔枝卡怎么激活？</li>
						<li>2.荔枝卡能在什么地区使用？</li>
						<li>1.荔枝卡怎么激活？</li>
						<li>2.荔枝卡能在什么地区使用？</li>
						<li>1.荔枝卡怎么激活？</li>
						<li>2.荔枝卡能在什么地区使用？</li>
					</ul>
				</li>
			</ul>
		</div>

		<div class="alert-btn" @click="clickFunc()">
			<div>意见反馈</div>
			<div>在线客服</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'helpPage',
		data() {
			return {
				alert: null,
				flag: true,
			}
		},
		components: {},
		created() {

		},
		mounted() {
			this.alert = this.$createDialog({
				type: 'confirm',
				title: '您可以尝试以下方式解决',
				confirmBtn: {
					text: '意见反馈',
					active: false,
					disabled: false,
					href: 'javascript:;'
				},
				cancelBtn: {
					text: '在线客服',
					active: false,
					disabled: false,
					href: 'javascript:;'
				},
				onConfirm: () => {

				},
				onCancel: () => {}
			})
		},
		methods: {
			clickFunc() {
				var that = this
				that.alert.show()
				if(that.flag) {
					document.querySelector(".cube-popup-mask").addEventListener("click", function() {
						that.alert.hide()
					})
					that.flag = false
				}
			}
		}
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
		padding: 0 1.2rem;
	}
	
	.common-trouble>ul p {
		font-size: 0;
		border-bottom: 1px solid #F39800;
	}
	
	.common-trouble ul p span {
		font-size: 0.7rem;
		padding: 2px 2.5rem 0 0.5rem;
		background-color: #F39800;
		color: #fff;
	}
	
	.common-trouble ul ul {
		padding: 5px 0 70px 0;
	}
	
	.common-trouble ul ul li {
		position: relative;
		font-size: 0.6rem;
		padding: 0 5px;
		border-bottom: 1.5px solid #E4E4E4;
		color: #9FA0A0;
		line-height: 30px;
	}
	
	.common-trouble ul ul li:last-child {
		border: none;
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