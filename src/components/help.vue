<template>
	<div class="body-container">
		<div class="banner">
			<img src="../assets/common/banner.png" />
		</div>
		
		<p class="helpTxt">
			<span>亲，感谢您使用【荔枝全球电话卡】！</span><br/>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【荔枝全球电话卡】是即插即用的三合一境外上网卡，它可以帮助您在任何时间、任何国家，只要有信号的地方就能上网。即插即用，是指在大多数情况下，您只需按照手机主卡槽尺寸，将三合一SIM卡从卡片中取出，然后插入到手机主卡槽内，静待3到5分钟后即可上网。不同于传统的境外上网卡，《荔枝全球电话卡》覆盖全球，您只需持有这一张卡即可，无需购买不同国家的不同上网卡，例如您这次为了去新加坡购买了本卡，下次您去印尼前，您只需从我们的微信在线商城里提前购买一个印尼的上网流量套餐即可，在线购买的过程中，您只需将去新加坡的那张荔枝卡绑定到印尼套餐上即可，同理，您下次去欧洲某个国家时，您也只需要提前将欧洲的上网流量套餐绑定到您的这张荔枝卡上即可。您到达目的国后，将卡插入手机后即激活上网流量套餐。
			请您在使用本卡前认真阅读以下内容：
			<br/>1. &nbsp;您在境内无法使用本SIM卡，只限在境外使用。
			<br/>2. &nbsp;若您的手机只有一个卡槽，则要把本卡作为主卡使用才能上网，再将手机作为WIFI热点以使得周边设备也能通过该热点上网。
			<br/>3. &nbsp;若您的手机支持多卡，那么推荐您将本卡作为卡1使用，并设置“移动数据”由卡1负责，卡2则是放置您最常用的那张境内手机号卡或存储卡。
			<br/>4. &nbsp;请您点击【荔枝全球电话卡】公众号主菜单的【设置卡】子菜单来获得如何设置。强烈建议您将设置卡的方法图片保存到手机里，以便在境外无法微信时能通过查看图片的方式来协助您设置。
			<br/>5. &nbsp;您达到境外后，随时插卡，即时生效。例如：您购买了3天流量包，您在当地时间2018年5月1日13点0分插卡后开机激活，则流量包开始生效计费，流量包会在当地时间2018年的5月4日13点0分到期失效。
			<br/>6. &nbsp;公众号主菜单的【常见问题】是您在正确设置手机后却无法上网时，我们提供的自助解决办法。若您通过自助方式还是无法解决，那就烦请您将卡片背面的ICCID编号告诉我们，我们会帮助您解决上网问题。
		</p>
		<div class="btns">
			<router-link class="done" to="/">返回</router-link>
		</div>
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
							<li>1.荔枝卡怎么激活？</li>
							<li>2.荔枝卡能在什么地区使用？</li>
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
				helpTxt: ''
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
		padding:15px 1rem 65px;
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
	
	.common-trouble {
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
		padding: 5px 0 8px 0;
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
	
</style>