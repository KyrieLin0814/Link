<template>
	<div class="body-container">
		<div v-if="helpFlag == 1">
			<div v-if="langCn">
				<h4>关于我们</h4>
				<p>领科wx.linksfield.net是全球领先的 SoftSIM提供商，我们与主流的电信商合作，并提供整合性的全球连网服务、RSP (SM/SR)平台、以及CMP(Connectivity Management Platform)平台。我们能将带有IMSI的SoftSIM于设备制造过程中内嵌于设备内。我们的一站式SIM解决方案，让设备供货商无论在任何地点或各式的应用服务，都可以启用连网服务，并且根据使用情形以及网络可用性，最佳化的选出最合适的网络。领科的RSP平台在必要时可更改设定文档。同时，CMP平台提供图像化仪表板以及API，使得设备商可以时时对SIM和其数据使用做到管理、监测、和控制。除了SoftSIM和CMP平台之外，领科在不同的IOT硬件平台上提供丰富的固件开发经验。我们已经在主流的2G/3G/4G的通讯芯片和模块集成了SoftSIM/DUAL SIM/ESIM。藉由提供turnkey解决方案，让合作伙伴可在短时间内集成并启动全球连网。</p>
			</div>
			<div v-else>
				<h4>ABOUT US</h4>
				<p>Links Field Networks（wx.linksfield.net）, a global leading SoftSIM provider, cooperates with mainstream carries to offer global connectivity , RSP (SM/SR) platform and CMP (Connectivity Management Platform) in one solution. SoftSIM with IMSI is embedded to the device during manufacturing.  This one-stop SIM solution can enable connectivity for devices vendors to deploy devices regardless of location or application. Selection for the most appropriate network is optimised based on usage and availability.  Links Field's RSP platform enables change of profiles when necessary. While CMP platform provides graphical dashboard and APIs. Device vendors can manage , monitor, control SIM and data usage in real time.  Links Field Networks offers rich firmware development experience in different IoT hardware platform besides SoftSIM/DUAL SIM/ESIM and CMP platform. We have integrated SoftSIM into mainstream 2G/3G/4G cellular chipset and modules. It is a turnkey solution and we can offer partners short deployment time for global connectivity.</p>
			</div>
		</div>

		<div v-if="helpFlag == 2">
			<div v-if="langCn">
				<h4>联系我们</h4>
				<p>如果您有任何问题或疑虑，请随时与我们联系。</br>
					我们很乐意听取您的意见，请联系我们：</br>
					香港总部</br>
					香港铜锣湾谢斐道482号信诺环球保险中心1005室</br>
					深圳办事处</br>
					深圳福田泰然九路一号盛唐商务大厦西座九楼911室</br>
					北京办事处</br>
					北京朝阳区大望路现代城C座606</br>
					上海办事处</br>
					上海市徐汇区宜山路900号B栋853</br>
					其它办事处</br>
					新加坡和英国</br>
					</br>
					销售：sales@linksfield.net</br>
					技术支持：supports@linksfield.net</br>
					客服电话：010-84681018</p>
			</div>
			<div v-else>
				<h4>CONTACT US</h4>
				<p>If you have questions or concerns then please do not hesitate to get in contact with us. </br>
					We would love to hear from you, contact us on: </br>
					Hong Kong headquarters</br>
					Room 1005, CIGNA Global Insurance Centre, 482 Jaffe Road, Causeway Bay, Hong Kong</br>
					Shenzhen Office</br>
					Room 911, 9th Floor, West Block, Shengtang Business Building, No.1 Tairan 9th Road, Futian, Shenzhen</br>
					Beijing Office</br>
					606, Block C, Modern City, Dawang Road, Chaoyang District, Beijing</br>
					Shanghai office</br>
					Building 853, Building B, 900 Yishan Road, Xuhui District, Shanghai</br>
					Other offices</br>
					Singapore and the UK </br>
					</br>
					Sales: sales@linksfield.net</br>
					Technical support: supports@linksfield.net</p>
			</div>
		</div>

		<div v-if="helpFlag == 3">
			<div v-if="langCn">
				<h4>知识产权</h4>
				<p>如果对可能存在侵犯知识产权的行为有任何疑虑或投诉，请发送电子邮件至gary@linksfiled.net，明确说明被指控违反的权利和被控产品。</br>
					（此电子邮件地址仅用于知识产权和法律问题。 其他请求可能无法获得响应。）</p>
			</div>
			<div v-else>
				<h4>INTELLECTUAL PROPERTY</h4>
				<p>In the event of any concerns or complaints about possible violation of intellectual property rights, please send us an email at gary@linksfiled.net  , identifying with specificity the rights alleged to be violated and the accused product(s).</br>
					（This email address is just for intellectual property rights and legal issues. Other requests may not get respondence.）</p>
			</div>
		</div>

		<div v-if="helpFlag == 4">
			<div v-if="langCn">
				<h4>隐私政策</h4>
				<p>We take your privacy seriously and this privacy statement explains how http://wx.linksfield.net (collectively, “we,” “us,” or “our”) collect, use, share and process your information.</p>
			</div>
			<div v-else>
				<h4>PRIVACY POLICY</h4>
				<p>We take your privacy seriously and this privacy statement explains how http://wx.linksfield.net (collectively, “we,” “us,” or “our”) collect, use, share and process your information.</p>
			</div>
		</div>

		<div v-if="helpFlag == 5">
			<div v-if="langCn">
				<h4>退货政策</h4>
				<p>We accept order cancellation before the product is shipped or produced. If the order is cancelled you will get full refund. We cannot cancel the order if the product is already shipped out. </p>
			</div>
			<div v-else>
				<h4>Return Policy</h4>
				<p>We accept order cancellation before the product is shipped or produced. If the order is cancelled you will get full refund. We cannot cancel the order if the product is already shipped out. </p>
			</div>
		</div>

		<div v-if="helpFlag == 6">
			<div v-if="langCn">
				<h4>航运政策</h4>
				<p>Our goal is to offer you the best shipping options, no matter where you live. Every day, we deliver to hundreds of customers across the world, ensuring that we provide the highest levels of responsiveness to you at all times.</br>
					The time frame for order delivery is divided into two parts:</br>
					Processing time: 3DAYS</br>
					Shipping time: NONE</p>
			</div>
			<div v-else>
				<h4>SHIPPING INFORMATION</h4>
				<p>Our goal is to offer you the best shipping options, no matter where you live. Every day, we deliver to hundreds of customers across the world, ensuring that we provide the highest levels of responsiveness to you at all times.</br>
					The time frame for order delivery is divided into two parts:</br>
					Processing time: 3DAYS</br>
					Shipping time: NONE</p>
			</div>
		</div>

		<div v-if="helpFlag == 7">
			<div v-if="langCn">
				<h4>服务条款</h4>
				<p>Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.</p>
			</div>
			<div v-else>
				<h4>TERMS OF SERVICE</h4>
				<p>Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.</p>
			</div>
		</div>

		<div class="btns">
			<router-link class="done" to="/help">返回</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'helpText',
		data() {
			return {
				langCn: this.$store.state.langType == 'cn' ? true : false,
			}
		},
		props: {
			helpFlag: {
				type: Number,
				default: 1
			}
		},
		created() {

		},
		mounted() {

		},
		methods: {

		}
	}
</script>

<style scoped>
	h4 {
		margin: 30px 0 20px;
		font-size: 0.8rem;
		text-align: center;
	}
	
	p {
		font-size: 0.7rem;
		color: #3E3A39;
		line-height: 24px;
		padding: 0 1.2rem 82px;
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