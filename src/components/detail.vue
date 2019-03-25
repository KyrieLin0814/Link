<template>
	<div class="body-container">
		<div class="fullpage-container">
			<div class="fullpage-wp" v-fullpage="opts">
				<div class="page-1 page">
					<div class="banner" :style="{backgroundImage: 'url(' + obj.pictureDetails + ')', backgroundSize: '100% auto', backgroundPosition:'center'}">
						<p class="text-1">{{obj.packageDesc}}</p>
					</div>
					<div class="common-title" id="Title">
						<i></i>
						<span>{{$t('message.chooseMeal')}}</span>
						<!--<p class="flex-1" v-if="$store.state.langType == 'cn'">累计购买{{orderFullX}}元免卡费，30天内激活使用</p>-->
						<p class="" v-if="$store.state.langType == 'cn'"><span>建议三十天内激活使用，否则30天后将自动激活。使用时长为购买时长。逾期后套餐将自动清零。</span></p>
						<p class="title-en" v-if="$store.state.langType == 'en'"><span>It is recommended to activate it within 30 days, otherwise it will be activated automatically after 30 days. The length of use is the length of purchase. The package will be automatically cleared after the deadline.</span></p>
					</div>
					<div class="car-content">
						<div class="car-tab flexBox">
							<div class="flex-1" @click="tabFunc(i)" :class="{'active fontColor': (tabFlag==i.nameId)}" v-for="i in mealsList"><span>{{i.nameType}}</span></div>
						</div>
						<div class="car-list" :style="{height: contentHeight + 'px'}">

							<!--选项卡切换 开启-->
							<ul class="list-1" :class="{'active': (tabFlag==item.nameId)}" v-for="item in mealsList">
								<li @click="chooseFunc(meal)" :class="{'active': (chooseFlag == meal.obj.packageCode)}" v-for="meal in item.list">
									<cube-checkbox v-model="checkedObj['checked' + meal.obj.packageCode]" :option="option" :hollow-style="true" shape="circle" />
									<div class="title">
										<p class="name">{{meal.obj.packageName}}</p>
										<p v-if="meal.obj.packageDetailsDesc">{{meal.obj.packageDetailsDesc}}</p>
										<p v-if="meal.obj.packageDetailsAdd">{{meal.obj.packageDetailsAdd}}</p>
									</div>

									<div class="price-box">
										<div class="now">
											<!--单价-->
											{{Number(meal.obj.price ? meal.obj.price : meal.obj.strategyDesc).toFixed(2)}}
											<span>{{$t('message.yuan')}}<i v-if="item.nameId == '0'">/{{$t('message.day')}}</i></span>
										</div>
									</div>
								</li>
							</ul>
						</div>
						<div class="scroll-btn" @click="nextPage">
							<div>
								<i></i><span>{{$t('message.pullup')}}</span>
							</div>

							<div class="num-box">
								<p>{{$t('message.num')}}</p>
								<div :class="{'disabled': !btnFlag }">
									<a class="del" @click="delFunc">-</a>
									<a class="number">{{ finalNum }}</a>
									<a class="add" @click="addFunc">+</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="page-2 page">
					<div class="list-scroll-content">
						<div class="list-scroll">
							<div class="detail-list">
								<ul>
									<li>
										<p><span>{{$t('message.detailsMeal')}}</span></p>

										<!--下拉详情列表-->
										<ul v-for="i in mealsList" :class="{'active': (tabFlag==i.nameId)}">
											<li v-for="j in i.list" :class="{'active': (chooseFlag == j.obj.packageCode)}">
												<div v-if="j.obj.packageTextDesc">{{j.obj.packageTextDesc}}</div>
												<div v-if="j.obj.packageImgDesc">
													<img :src="j.obj.packageImgDesc">
												</div>
											</li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="toTop" @click="toTop" v-if="toTopShow">Top</div>
				</div>
			</div>
		</div>

		<div class="buy-box clearfix">
			<p>{{$t('message.total')}}: <span>{{ price.toFixed(2) }}</span> {{$t('message.yuan')}}</p>
			<a class="addCar" @click="addCar">{{$t('message.buyNow')}}</a>
			<!--<router-link to="/">{{$t('message.back')}}</router-link>-->
		</div>

		<cube-popup type="my-popup" :mask="false" ref="myPopup">{{popupTxt}}</cube-popup>
	</div>
</template>

<script>
	import VueFullpage from 'vue-fullpage'
	export default {
		name: 'detail',
		data() {
			return {
				opts: {
					start: 0,
					dir: 'v',
					duration: 500,
					der: 0.35
				},
				obj: {},
				mealsList: [],
				judgeData: {},
				contentHeight: 0,
				tabFlag: this.$store.state.tabFlag,
				option: {
					label: '',
					value: ''
				},
				checkedObj: {
					//					checkedid1: true
				},
				price: 0.00,
				finalNum: 1,
				chooseFlag: '',
				scrollDown: true,
				scrollUp: true,
				popupTxt: '',
				number: '个数',
				btnFlag: true,
				orderFullX: this.$store.state.cartData.orderFullX,
				toTopShow: false
			}
		},
		watch: {
			finalNum(a, b) {
				this.price = Number(this.judgeData.obj.price ? this.judgeData.obj.price : this.judgeData.obj.strategyDesc) * this.finalNum
			}
		},
		created() {
			var that = this
			that.obj = that.$store.state.routerData
			that.$http.post("/paypalpay/getDeviceDetails", {
				data: {
					connSeqNo: that.$store.state.connSeqNo,
					lang: that.$store.state.langType,
					partnerCode: that.$store.state.partnerCode,
					token: that.$store.state.token,
					tradeData: {
						mcc: that.$store.state.routerData.mcc
					},
					tradeTime: new Date(),
					tradeType: "F014"
				}
			}).then((res) => {
				console.log(res)
				var result = res.data.data
				var lang = that.$store.state.langType == 'cn' ? true : false

				//从小到大排序
				var dataArr = JSON.parse(JSON.stringify(result.tradeData))
				dataArr.sort(function(a, b) {
					return Number(a.orderUnit) - Number(b.orderUnit);
				})

				//定义类型  mcc数组
				var typeArr = [];
				for(var i = 0; i < dataArr.length; i++) {
					var orderUnit = result.tradeData[i].orderUnit
					//插入天数包类别
					var typeArrStr = JSON.stringify(typeArr)
					if(orderUnit == "1") {
						if(typeArrStr.indexOf("天") < 0 && typeArrStr.indexOf("Day") < 0) {
							typeArr.push({
								id: orderUnit,
								txt: lang ? "天" : 'Day'
							})
						}
					} else if(orderUnit == "2") {
						if(typeArrStr.indexOf("月") < 0 && typeArrStr.indexOf("Month") < 0) {
							typeArr.push({
								id: orderUnit,
								txt: lang ? "月" : 'Month'
							})
						}
					} else if(orderUnit == "3") {
						if(typeArrStr.indexOf("季度") < 0 && typeArrStr.indexOf("Quarter") < 0) {
							typeArr.push({
								id: orderUnit,
								txt: lang ? "季度" : 'Quarter'
							})
						}
					} else if(orderUnit == "4") {
						if(typeArrStr.indexOf("半年") < 0 && typeArrStr.indexOf("Half a year") < 0) {
							typeArr.push({
								id: orderUnit,
								txt: lang ? "半年" : 'Half a year'
							})
						}
					} else if(orderUnit == "5") {
						var typeArrStrClone = typeArrStr.split(lang ? "半年" : 'Half a year').join('');
						if(typeArrStrClone.indexOf("年") < 0 && typeArrStrClone.indexOf("Year") < 0) {
							typeArr.push({
								id: orderUnit,
								txt: lang ? "年" : 'Year'
							})
						}
					}
				}
				//console.log(typeArr)

				//创建基于类别数据结构
				for(var p = 0; p < typeArr.length; p++) {
					that.mealsList.push({
						nameType: typeArr[p].txt + (lang ? "包" : ''),
						nameId: typeArr[p].id,
						list: []
					})
				}

				//遍历填充分类
				for(var t = 0; t < result.tradeData.length; t++) {
					for(var e = 0; e < that.mealsList.length; e++) {
						if(that.mealsList[e].nameId == result.tradeData[t].orderUnit) {
							that.mealsList[e].list.push({
								name: result.tradeData[t].packageName,
								typeStr: lang ? that.mealsList[e].nameType.substring(0, that.mealsList[e].nameType.length - 1) : that.mealsList[e].nameType,
								obj: JSON.parse(JSON.stringify(result.tradeData[t]))
							})
						}
					}
				}
				//console.log(that.mealsList)

				that.tabFunc(that.mealsList[0])
				//				if(typeArr.indexOf("0") != -1) {
				//					that.tabFunc(that.mealsList[0])
				//					that.number = "天数"
				//				} else {
				//					that.tabFunc(that.mealsList[0])
				//					that.number = "个数"
				//				}
			})
		},
		mounted() {
			var that = this
//			console.log(document.getElementById("Title").offsetHeight)
			that.contentHeight = document.documentElement.clientHeight - 254 - document.getElementById("Title").offsetHeight
			var startX, startY, moveEndX, moveEndY, X, Y;

			var overscroll = function(el) {
				el.addEventListener('touchstart', function(e) {
					startY = e.touches[0].pageY;
					startX = e.touches[0].pageX;
					//var top = el.scrollTop,
					//totalScroll = el.scrollHeight,
					//currentScroll = top + el.offsetHeight;
					//if(top === 0) {
					//	el.scrollTop = 1;
					//} else if(currentScroll === totalScroll) {
					//	el.scrollTop = top - 1;
					//}
				});
				el.addEventListener('touchmove', function(evt) {
					moveEndX = evt.changedTouches[0].pageX;
					moveEndY = evt.changedTouches[0].pageY;
					Y = moveEndY - startY;
					X = moveEndX - startX;

					if(Math.abs(Y) > Math.abs(X) && Y > 0 && (document.querySelector('.list-scroll').scrollTop < 15)) {
						//console.log("向下");
						evt.preventDefault();
					}
					//if(Math.abs(Y) > Math.abs(X) && Y < 0) {
					//console.log("向上");
					//}
					//if(el.offsetHeight < el.scrollHeight)
					//evt._isScroller = true;
				});
			}
			overscroll(document.querySelector('.list-scroll'));
			
			//判断设备
			if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
				that.toTopShow = false
			} else {
				that.toTopShow = true
			}

		},
		methods: {
			tabFunc(i) {
				this.tabFlag = i.nameId
				this.$store.state.tabFlag = i.nameId

				this.finalNum = 1
				//默认选中第一个
				this.chooseFunc(i.list[0])
			},
			chooseFunc(meal) {
				//选中样式
				this.chooseFlag = meal.obj.packageCode
				this.checkedObj = {}
				this.checkedObj['checked' + meal.obj.packageCode] = true
				//当前套餐
				this.judgeData = meal
				this.price = Number(this.judgeData.obj.price ? this.judgeData.obj.price : this.judgeData.obj.strategyDesc)
				if(this.judgeData.obj.orderPeriod) {
					this.btnFlag = false
					this.finalNum = Number(this.judgeData.obj.orderPeriod)
					this.price = Number(this.judgeData.obj.price ? this.judgeData.obj.price : this.judgeData.obj.strategyDesc) * this.finalNum
				} else {
					this.btnFlag = true
					this.finalNum = 1
					this.price = Number(this.judgeData.obj.price ? this.judgeData.obj.price : this.judgeData.obj.strategyDesc) * this.finalNum
				}
				this.finalPrice = this.finalNum * this.price
			},
			addFunc() {
				var that = this
				if(!that.judgeData.obj.orderPeriod) {
					that.finalNum++
				}
			},
			delFunc() {
				var that = this
				if(!that.judgeData.obj.orderPeriod) {
					if(that.finalNum > 1) {
						that.finalNum--
					} else {
						that.popupTxt = this.$store.state.langType == "cn" ? "不能再少了" : "It can't be less than it is now"
						const component = this.$refs['myPopup']
						component.show()
						setTimeout(() => {
							component.hide()
						}, 1000)
					}
				}
			},
			addCar() {
				var that = this
				that.$store.state.finalMeal = that.judgeData
				that.$store.state.perPrice = Number(this.judgeData.obj.price ? this.judgeData.obj.price : this.judgeData.obj.strategyDesc)
				that.$store.state.finalNum = that.finalNum
				that.$store.state.finalPrice = that.finalPrice
				that.$router.push("/payPage")
			},
			nextPage() {
				VueFullpage.moveTo(1, true)
			},
			toTop() {
				VueFullpage.moveTo(0, true)
			}
		}
	}
</script>

<style scoped>
	.banner {
		height: 110px;
	}
	
	.banner p {
		font-size: 24px;
		color: #fff;
		text-align: center;
		line-height: 110px;
		width: 80%;
		margin: 0 auto;
	}
	
	.common-title {
		height: auto;
	}
	
	.common-title i {
		background: url(../assets/common/shoppingcar.png)no-repeat 5px 6px;
		background-size: 16px 16px;
	}
	
	.car-tab {
		padding-top: 5px;
	}
	
	.car-tab>div {
		border-bottom: 5px solid #C9CACA;
	}
	
	.car-tab>div.active {
		position: relative;
		border-bottom: none;
	}
	
	.car-tab>div.active span {
		color: inherit;
	}
	
	.car-tab>div.active:after {
		content: '';
		display: block;
		height: 5px;
		background: #d7013f;
		background: -webkit-linear-gradient(left, #d7013f, #e47a62);
		/* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(right, #d7013f, #e47a62);
		/* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(right, #d7013f, #e47a62);
		/* Firefox 3.6 - 15 */
		background: linear-gradient(to right, #d7013f, #e47a62);
		/* 标准的语法 */
	}
	
	.car-tab>div span {
		display: block;
		font-size: 0.7rem;
		line-height: 36px;
		height: 36px;
		text-align: center;
		color: #3E3A39;
		border-right: 1px solid #3E3A39;
		margin-bottom: 2px;
	}
	
	.car-tab>div:last-child span {
		border-right: none
	}
	
	.car-list {
		position: relative;
		overflow-y: scroll;
		background: #f5f5f5;
	}
	
	.car-list>ul {
		display: none;
		background: #fff;
	}
	
	.car-list>ul.active {
		display: block
	}
	
	.car-list li {
		position: relative;
		padding: 10px 0.8rem;
		border-bottom: 1px solid #D4D5D5;
	}
	
	.car-list .cube-checkbox {
		position: absolute;
		top: 50%;
		margin-top: -10px;
	}
	
	.title {
		margin-left: 2rem;
		width: calc(100% - 140px);
	}
	
	.title p.name {
		font-size: 0.7rem;
	}
	
	.title p {
		position: relative;
		width: 100%;
		color: #9FA0A0;
		word-wrap: break-word;
		font-size: 0.5rem;
		line-height: 20px;
		margin-bottom: 1px;
	}
	
	.title p+p:before {
		content: "";
		width: 4px;
		height: 4px;
		border-radius: 2px;
		background: #C9CACA;
		position: absolute;
		left: -12px;
		top: 9px;
		font-size: 20px;
	}
	
	.list-1 li.active p {
		color: #d7013f;
		background: -webkit-linear-gradient(left, #d7013f, #dc4731);
		/* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(right, #d7013f, #dc4731);
		/* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(right, #d7013f, #dc4731);
		/* Firefox 3.6 - 15 */
		background: linear-gradient(to right, #d7013f, #dc4731);
		/* 标准的语法 */
		-webkit-background-clip: text;
		color: transparent;
	}
	
	.list-1 li.active p+p:before {
		background: #d7013f;
		background: -webkit-linear-gradient(left, #d7013f, #e47a62);
		/* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(right, #d7013f, #e47a62);
		/* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(right, #d7013f, #e47a62);
		/* Firefox 3.6 - 15 */
		background: linear-gradient(to right, #d7013f, #e47a62);
		/* 标准的语法 */
	}
	
	.sale {
		position: absolute;
		top: 0;
		right: -0.8rem;
		display: block;
		font-size: 0.5rem;
		line-height: 15px;
		padding: 1px 5px 0;
		background-color: #d7013f;
		color: #fff;
		vertical-align: middle;
	}
	
	.price-box {
		position: absolute;
		height: 40px;
		top: 50%;
		margin-top: -14px;
		right: 0.7rem;
		/*vertical-align: middle;*/
		/*font-size:0;*/
		height: 20px;
	}
	
	.price-box .now {
		display: inline-block;
		font-size: 0.9rem;
		font-weight: bold;
		line-height: 20px;
		color: #9FA0A0;
		vertical-align: middle;
	}
	
	li.active .price-box .now {
		color: #d7013f;
		background: -webkit-linear-gradient(left, #d7013f, #dc4731);
		/* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(right, #d7013f, #dc4731);
		/* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(right, #d7013f, #dc4731);
		/* Firefox 3.6 - 15 */
		background: linear-gradient(to right, #d7013f, #dc4731);
		/* 标准的语法 */
		-webkit-background-clip: text;
		color: transparent;
	}
	
	.price-box .now span {
		margin-left: 1px;
	}
	
	.price-box .old span:before {
		position: absolute;
		display: block;
		content: '';
		width: 100%;
		padding: 0 3px;
		top: 7px;
		left: -3px;
		border-bottom: 1px solid #d7013f
	}
	
	.price-box .old {
		font-size: 0;
		margin-top: 3px;
		text-align: right;
	}
	
	.price-box .now span,
	.price-box .old span {
		position: relative;
		display: inline-block;
		font-size: 0.6rem;
		color: #C9CACA;
		line-height: 20px;
		height: 20px;
	}
	
	.price-box .now span i {
		font-style: normal;
	}
	
	.scroll-btn {
		position: relative;
		height: 34px;
		border-top: 1px solid #D4D5D5;
		border-bottom: 1px solid #D4D5D5;
		margin-bottom: -1px;
		text-align: center;
		font-size: 0;
		line-height: 34px;
	}
	
	.scroll-btn span {
		font-size: 0.7rem;
		height: 20px;
		color: #3E3A39;
		vertical-align: middle;
	}
	
	.scroll-btn i {
		display: inline-block;
		width: 24px;
		height: 20px;
		vertical-align: middle;
		background: url(../assets/common/up.png) no-repeat center 5px;
		background-size: 13px 8px;
	}
	
	.num-box {
		position: absolute;
		left: 0;
		right: 0;
		top: -40px;
		padding: 0 1.2rem;
		height: 38px;
		border-top: 1px solid #D4D5D5;
		background: #fff;
		font-size: 0;
	}
	
	.num-box p {
		float: left;
		font-size: 0.7rem;
		color: #3E3A39;
		line-height: 38px;
	}
	
	.num-box>div {
		float: right;
		font-size: 0;
		line-height: 0;
		margin-top: 5px;
	}
	
	.num-box>div>a {
		display: inline-block;
		vertical-align: middle;
		font-size: 0.7rem;
		border: 1px solid #D4D5D5;
		line-height: 18px;
		height: 18px;
	}
	
	.num-box>div>a.number {
		padding: 4px 14px;
		border-left: none;
		border-right: none;
	}
	
	.num-box>div>a.add,
	.num-box>div>a.del {
		font-size: 0.8rem;
	}
	
	.num-box>div>a.add {
		padding: 4px 6px;
	}
	
	.num-box>div>a.del {
		padding: 4px 8px;
	}
	
	.list-scroll-content {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
	}
	
	.list-scroll {
		height: 100%;
		overflow-y: scroll;
	}
	
	.detail-list {
		padding: 15px 0.8rem 60px;
	}
	
	.detail-list>ul {
		padding-top: 5px;
	}
	
	.detail-list ul p {
		font-size: 0;
		border-bottom: 1px solid #e47a62;
	}
	
	.detail-list ul p span {
		display: inline-block;
		font-size: 0.7rem;
		padding: 4px 0.5rem 2px 0.5rem;
		min-width: 85px;
		color: #fff;
		background: #d7013f;
		background: -webkit-linear-gradient(left, #d7013f, #e47a62);
		/* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(right, #d7013f, #e47a62);
		/* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(right, #d7013f, #e47a62);
		/* Firefox 3.6 - 15 */
		background: linear-gradient(to right, #d7013f, #e47a62);
		/* 标准的语法 */
	}
	
	.detail-list ul ul {
		display: none;
		padding: 5px 0 8px 0;
	}
	
	.detail-list ul ul.active {
		display: block
	}
	
	.detail-list ul ul img {
		width: 100%;
	}
	
	.detail-list ul ul li {
		display: none;
		position: relative;
		font-size: 0.7rem;
		color: #3E3A39;
		line-height: 16px;
		margin-top: 10px;
	}
	
	.detail-list ul ul li.active {
		display: block;
	}
	/*.detail-list ul ul li:before {
		content: "";
		position: absolute;
		width: 8px;
		height: 8px;
		background-color: #d7013f;
		border-radius: 4px;
		top: 4px;
		left: -15px;
	}*/
	
	.addCar {
		padding: 12px 24px;
	}
	
	.common-title i {
		min-height: 28px;
	}
	
	.common-title p {
		font-size:0;
		line-height: 30px;
		width: 100%;
	}
	.common-title p span{
		font-size: 0.6rem;
		line-height: 20px;
		color: #999;
		padding:0 5px;
	}
	
	.common-title p.title-en span{
		line-height:16px;
		padding:3px;
		font-size: 0.6rem;
	}

	.num-box .disabled {
		background-color: #f1f1f1;
	}
	
	.toTop {
		position: absolute;
		bottom: 80px;
		right: 30px;
		font-size: 16px;
		line-height: 60px;
		text-align: center;
		color: #fff;
		z-index: 99999;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background-color: rgba(0, 0, 0, 0.4);
	}
</style>