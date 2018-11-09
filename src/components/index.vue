<template>
	<div class="body-container index">
		<div class="banner">
			<div class="language">
				<a class="CN" :class="{'active bgColor': (langType == 'cn')}" @click="langCn">中文</a>
				<a class="EN" :class="{'active bgColor': (langType == 'en')}" @click="langEn">English</a>
			</div>
			<img src="../assets/common/banner.png" />
		</div>
		<div class="content">
			<div class="item" v-for="(item,index) in result">
				<div class="title">
					<span class="area fontColor">{{item.continentName}}</span>
					<!--<span class="num">{{$t('message.covered')}} {{ item.list.length }} {{$t('message.regions')}}</span>-->
					<div class="btn" v-if="item.canMore">
						<a v-if="item.more" class="more" @click="moreFunc(index)">更多</a>
						<a v-else class="less" @click="lessFunc(index)">收起</a>
					</div>
				</div>
				<ul class="card-list clearfix" v-if="item.more">
					<li v-for="i in item.list.slice(0,4)">
						<a @click="routerFunc(i)">
							<div class="img" :style="{backgroundImage: 'url(' + i.pictureIndex + ')', backgroundSize: '100% 100%'}"></div>
							<div class="txt bgColor flexBox">
								<span class="text-1 flex-1">{{i.countryName}}</span>
								<!--<a class="flex-1 text-1" v-if="i.strategyCode == '2'">{{i.strategy_desc}}元/天</a>-->
							</div>
						</a>
					</li>
				</ul>

				<ul class="card-list clearfix" v-else>
					<li v-for="i in item.list">
						<a @click="routerFunc(i)">
							<div class="img" :style="{backgroundImage: 'url(' + i.pictureIndex + ')', backgroundSize: '100% 100%'}"></div>
							<div class="txt bgColor flexBox">
								<span class="text-1 flex-1">{{i.countryName}}</span>
								<!--<a class="flex-1 text-1" v-if="i.strategyCode == '2'">{{i.strategy_desc}}元/天</a>-->
							</div>
						</a>
					</li>
				</ul>
			</div>
			<ul class="footer-list flexBox bgColor" v-if="tabFlag">
				<li class="flex-1">
					<router-link :to="{name:'helpText',params:{helpFlag:1}}">{{CnFlag ? '关于我们' : 'ABOUT US'}}</router-link>
					<router-link :to="{name:'helpText',params:{helpFlag:2}}">{{CnFlag ? '联系我们' : 'CONTACT US'}}</router-link>
				</li>
				<li class="flex-1">
					<router-link :to="{name:'helpText',params:{helpFlag:4}}">{{CnFlag ? '隐私政策' : 'PRIVACY POLICY'}}</router-link>
					<router-link :to="{name:'helpText',params:{helpFlag:5}}">{{CnFlag ? '退货政策' : 'RETURN POLICY'}}</router-link>
					<router-link :to="{name:'helpText',params:{helpFlag:6}}">{{CnFlag ? '航运政策' : 'SHIPPING POLICY'}}</router-link>
					<router-link :to="{name:'helpText',params:{helpFlag:7}}">{{CnFlag ? '服务条款' : 'TERMS OF SERVICE'}}</router-link>
				</li>
				<li class="flex-1">
					<router-link :to="{name:'helpText',params:{helpFlag:3}}">{{CnFlag ? '知识产权' : 'INTELLECTUAL PROPERTY'}}</router-link>
				</li>

			</ul>
		</div>

		<div class="footer flexBox">
			<div class="flex-1 help" style="border-bottom:none;">
				<router-link :to="helpLink"><span>{{$t("message.help")}}</span></router-link>
				<div style="height:6px;" class="bgColor"></div>
			</div>
			<div class="flex-1 order">
				<router-link :to="orderLink">
					<span>{{$t("message.myOrder")}}</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'index',
		data() {
			return {
				langType: localStorage.getItem("lang") ? localStorage.getItem("lang") : "cn",
				CnFlag: true,
				tabFlag: true,
				meals: [],
				result: [],
				helpLink: "/help",
				orderLink: "/orderList"
			}
		},
		watch: {
			langType(a, b) {
				if(a == 'cn') {
					this.CnFlag = true
				} else {
					this.CnFlag = false
				}
				this.tabFlag = false
				this.tabFlag = true
				this.cookieFunc()
			}
		},
		created() {
			if(this.langType != 'cn') {
				this.CnFlag = false
			}
			this.cookieFunc()
			this.getData()
		},
		methods: {
			langCn() {
				this.$i18n.locale = "cn"
				this.$store.state.langType = "cn"
				this.langType = "cn"
				localStorage.setItem("lang", "cn")
				this.getData()
			},
			langEn() {
				this.$i18n.locale = "en"
				this.$store.state.langType = "en"
				this.langType = "en"
				localStorage.setItem("lang", "en")
				this.getData()
			},
			moreFunc(idx) {
				this.result[idx].more = false
				this.$forceUpdate()
			},
			lessFunc(idx) {
				this.result[idx].more = true
				this.$forceUpdate()
			},
			routerFunc(obj) {
				this.$store.state.routerData = obj
				this.$router.push("/detail")
			},
			compare() {
				return function(a, b) {
					var value1 = a.list.length;
					var value2 = b.list.length;
					return value2 - value1;
				}
			},
			cookieFunc() {
				var that = this
				function getCookie(cookieName) {
					var strCookie = document.cookie;
					var arrCookie = strCookie.split("; ");
					for(var i = 0; i < arrCookie.length; i++) {
						var arr = arrCookie[i].split("=");
						if(cookieName == arr[0]) {
							return arr[1];
						}
					}
					return "";
				}

				var user_deviceId = getCookie("deviceId")
				var user_deviceType = getCookie("deviceType")
				var user_partnerCode = getCookie("partnerCode")
				//alert('deviceId:' + user_deviceId  + 'deviceId:' + user_deviceType  + 'deviceId:' + user_partnerCode)
				
				if(user_deviceId && user_deviceType && user_partnerCode) {
					that.$store.state.deviceId = user_deviceId
					that.$store.state.deviceType = user_deviceType
					that.$store.state.partnerCode = user_partnerCode
					switch(user_deviceType) {
						case '1':
							that.$store.state.deviceTypeText = that.CnFlag ? 'MIFI设备' : 'MIFI'
							break;
						case '2':
							that.$store.state.deviceTypeText = that.CnFlag ? '模块' : 'MODAL'
							break;
						case '3':
							that.$store.state.deviceTypeText = that.CnFlag ? '旅游卡' : 'CARD'
							break;
						case '4':
							that.$store.state.deviceTypeText = that.CnFlag ? '物联网卡' : 'M2M'
							break;
						case '5':
							that.$store.state.deviceTypeText = that.CnFlag ? 'SOC' : 'SOC'
							break;
					}
				}
			},
			getData() {
				var that = this
				const toast = that.$createToast({
					type: 'loading',
					time: 0,
					mask: true,
					txt: 'Loading'
				})
				toast.show()

				//初始化
				that.result = []
				that.meals = []
				//获取套餐
				that.$http.post("/paypalpay/getDeviceHomepage", {
					data: {
						connSeqNo: that.$store.state.connSeqNo,
						lang: that.$store.state.langType,
						partnerCode: that.$store.state.partnerCode,
						token: that.$store.state.token,
						tradeTime: new Date(),
						tradeType: "F001"
					}
				}).then((res) => {
					var result = res.data.data
					console.log(res.data.data)

					//记录openId
					if(res.data.data.tradeData[0].openId) {
						that.$store.state.openId = res.data.data.tradeData[0].openId
					}
					//记录userId
					if(res.data.data.tradeData[0].userId) {
						that.$store.state.userId = res.data.data.tradeData[0].userId
					}
					//记录deviceId
					if(res.data.data.tradeData[0].deviceId) {
						that.$store.state.deviceId = res.data.data.tradeData[0].deviceId
					}
					//记录deviceType
					if(res.data.data.tradeData[0].deviceType) {
						that.$store.state.deviceType = res.data.data.tradeData[0].deviceType
						that.$store.state.deviceTypeText = res.data.data.tradeData[0].deviceTypeText
					}

					//记录partnerCode
					that.$store.state.partnerCode = res.data.data.partnerCode

					//记录各个价格
					that.$store.state.cartData.trafficCardfee = Number(res.data.data.trafficCardfee)
					that.$store.state.cartData.ordinaryExpressfee = Number(res.data.data.ordinaryExpressfee)
					that.$store.state.cartData.sFexpressfee = Number(res.data.data.sFexpressfee)
					that.$store.state.cartData.orderFullX = Number(res.data.data.orderFullX)
					//console.log(that.$store.state.cartData)

					//定义类型  mcc数组
					var typeArr = []
					var mccArr = []
					for(var i = 0; i < result.tradeData.length; i++) {
						for(var j = 0; j < result.tradeData[i].coverCountry.length; j++) {
							if(typeArr.indexOf(result.tradeData[i].coverCountry[j].continentName) < 0) {
								typeArr.push(result.tradeData[i].coverCountry[j].continentName)
							}

							if(mccArr.indexOf(result.tradeData[i].coverCountry[j].mcc) < 0) {
								mccArr.push(result.tradeData[i].coverCountry[j].mcc)
								that.meals.push(JSON.parse(JSON.stringify(result.tradeData[i])))
								that.meals[that.meals.length - 1].continentName = result.tradeData[i].coverCountry[j].continentName
								that.meals[that.meals.length - 1].countryName = result.tradeData[i].coverCountry[j].countryName
								that.meals[that.meals.length - 1].mcc = result.tradeData[i].coverCountry[j].mcc
							}
							//同一个mcc只显示一个
							//that.meals.push(JSON.parse(JSON.stringify(result.tradeData[i])))
							//that.meals[that.meals.length - 1].continentName = result.tradeData[i].coverCountry[j].continentName
							//that.meals[that.meals.length - 1].countryName = result.tradeData[i].coverCountry[j].countryName
							//that.meals[that.meals.length - 1].mcc = result.tradeData[i].coverCountry[j].mcc
						}
					}
					//					console.log(typeArr)
					//					console.log(mccArr)
					//					console.log(that.meals)

					for(var x = 0; x < typeArr.length; x++) {
						that.result[x] = {
							continentName: typeArr[x],
							list: []
						}
					}

					for(var x = 0; x < typeArr.length; x++) {
						for(var y = 0; y < that.meals.length; y++) {
							if(that.meals[y].continentName == typeArr[x]) {
								that.result[x].list.push(that.meals[y])
							}
						}
					}

					that.result.map(function(val, idx) {
						if(val.list.length > 4) {
							val.canMore = true
							val.more = false
						} else {
							val.canMore = false
							val.more = true
						}
					})

					//从大到小排序
					//console.log(that.result.sort(that.compare()))
					that.result.sort(that.compare());
					that.$store.state.mealsData = that.result
					that.$forceUpdate()
					toast.hide()

					//					//查询iccid
					//					that.$http.post("/weixin/getIccId", {
					//						data: {
					//							connSeqNo: that.$store.state.connSeqNo,
					//							lang: that.$store.state.langType,
					//							partnerCode: that.$store.state.partnerCode,
					//							token: that.$store.state.token,
					//							tradeData: {
					//								openid: that.$store.state.openId
					//								//openid: "oQrFc1sfUYxsApu_KV70-TRrw9AA1"
					//							},
					//							tradeTime: new Date(),
					//							tradeType: "F012",
					//						}
					//					}).then((res) => {
					//						if(res.data.data.tradeRstCode == "1000") {
					//							if(res.data.data.tradeData.length) {
					//								that.$store.state.iccid = res.data.data.tradeData[res.data.data.tradeData.length - 1].iccid
					//							}
					//						}
					//						toast.hide()
					//					})
				})
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
	
	.language {
		position: absolute;
		top: 9px;
		right: 15px;
		font-size: 0;
		border-radius: 5px;
		border: 1px solid #d7013f;
		overflow: hidden;
	}
	
	.language a {
		display: inline-block;
		padding: 0.15rem 0.12rem;
		font-size: 0.6rem;
		height: 12px;
		color: #d7013f;
		background-color: #fff;
		line-height: 1;
	}
	
	.language a.active {
		color: #fff;
	}
	
	.content {
		padding: 0 1.25rem 0px;
	}
	
	.title {
		height: 30px;
		font-size: 0;
		padding-top: 5px;
	}
	
	.area {
		font-size: 0.8rem;
		line-height: 30px;
		margin-right: .6rem;
		vertical-align: middle;
		font-weight: bold;
	}
	
	.num {
		padding-top: 3px;
		font-size: 0.7rem;
		line-height: 25px;
		color: #9FA0A0;
		vertical-align: middle;
	}
	
	.title .btn {
		float: right;
	}
	
	.title a {
		font-size: 0.7rem;
		line-height: 30px;
		color: #9FA0A0;
		padding-right: 1.25rem;
		vertical-align: middle;
		color: #3E3A39;
	}
	
	.title a.more {
		background: url(../assets/common/down.png)no-repeat;
		background-size: 18px 10px;
		background-position: right 2px;
	}
	
	.title a.less {
		background: url(../assets/common/up.png)no-repeat;
		background-size: 18px 10px;
		background-position: right 0px;
	}
	
	.card-list {
		font-size: 0;
	}
	
	.card-list li {
		width: calc(50% - .3rem);
		float: left;
		margin-top: 12px;
	}
	
	.card-list li:nth-child(1),
	.card-list li:nth-child(2) {
		margin-top: 0;
	}
	
	.card-list li:nth-child(odd) {
		margin-right: .3rem;
	}
	
	.card-list li:nth-child(even) {
		margin-left: .3rem;
	}
	
	.card-list li .img {
		padding-bottom: 64%;
	}
	
	.txt {
		color: #fff;
		height: 20px;
	}
	
	.txt span,
	.txt a {
		display: inline-block;
		line-height: 20px;
		vertical-align: middle;
	}
	
	.txt span {
		font-size: 0.7rem;
		padding-left: 0.2rem;
	}
	
	.txt a {
		padding: 0 0.3rem;
		text-align: right;
		font-size: 0.5rem;
		color: #fff;
	}
	
	.footer {
		position: fixed;
		background-color: rgba(204, 204, 204, 0.9);
		bottom: 0;
		width: 100%;
	}
	
	.help>a {
		display: block;
	}
	
	.footer span {
		padding: 6px 0;
		display: block;
		color: #3E3A39;
		font-size: 0.8rem;
		text-align: center;
		line-height: 22px;
	}
	
	.help {
		border-bottom: 6px solid #d7013f
	}
	
	.order {
		border-bottom: 6px solid #9FA0A0
	}
	
	.help>a {
		border-right: 1px solid #3E3A39;
	}
	
	.footer-list {
		margin: 15px -1.25rem 0;
		padding-top: 15px;
		padding-bottom: 50px;
	}
	
	.footer-list a {
		display: block;
		text-align: center;
		color: #fff;
		font-size: 0.5rem;
		line-height: 22px;
	}
</style>