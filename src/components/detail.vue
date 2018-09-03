<template>
	<div class="body-container">
		<div class="fullpage-container">
			<div class="fullpage-wp" v-fullpage="opts">
				<div class="page-1 page">
					<div class="banner" :style="{backgroundImage: 'url(' + obj.pictureDetails + ')', backgroundSize: '100% auto', backgroundPosition:'center'}">
						<p class="text-1">{{obj.packageDesc}}</p>
					</div>
					<div class="common-title flexBox">
						<i></i>
						<span>{{$t('message.chooseMeal')}}</span>
						<p class="flex-1">累计购买{{orderFullX}}元免卡费，30天内激活使用</p>
					</div>
					<div class="car-content">
						<div class="car-tab flexBox">
							<div class="flex-1" @click="tabFunc(i)" :class="{'active': (tabFlag==i.nameId)}" v-for="i in mealsList"><span>{{i.nameType}}</span></div>
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
											{{Number(meal.obj.price ? meal.obj.price : meal.obj.strategy_desc).toFixed(2)}}
											<span>元<i v-if="item.nameId == '0'">/天</i></span>
										</div>
									</div>
								</li>
							</ul>
						</div>
						<div class="scroll-btn">
							<div>
								<i></i><span>{{$t('message.pullup')}}</span>
							</div>

							<div class="num-box">
								<p>{{number}}</p>
								<div>
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
	export default {
		name: 'detail',
		data() {
			return {
				opts: {
					start: 0,
					dir: 'v',
					duration: 500,
					der: 0.4
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
				number:'天数',
				orderFullX:this.$store.state.cartData.orderFullX
			}
		},
		watch: {
			finalNum(a, b) {
				this.price = Number(this.judgeData.obj.price ? this.judgeData.obj.price : this.judgeData.obj.strategy_desc) * Number(this.finalNum)
			}
		},
		created() {
			var that = this
			that.obj = that.$store.state.routerData
			that.$http.post("/weixin/detailsPackages", {
				data: {
					connSeqNo: that.$store.state.connSeqNo,
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
				//定义类型  mcc数组
				var typeArr = [];
				for(var i = 0; i < result.tradeData.length; i++) {
					if(result.tradeData[i].maxDays == result.tradeData[i].minDays) {
						//插入天数包类别
						if(typeArr.indexOf(result.tradeData[i].maxDays) < 0){
							typeArr.push(result.tradeData[i].maxDays)
						}
					} else {
						//插入自选包类别
						typeArr.push("0")
					}
				}
				//从小到大排序
				typeArr.sort(that.compare())
				
				//创建基于类别数据结构
				for(var p = 0; p < typeArr.length; p++){
					if(typeArr[p] == "0"){
						that.mealsList.push({
							nameType: "自选天数包",
							nameId: typeArr[p],
							list:[]
						})
					}else{
						that.mealsList.push({
							nameType: typeArr[p] + "天包",
							nameId: typeArr[p],
							list:[]
						})
					}
				}
				
				//遍历填充分类
				for(var t = 0; t < result.tradeData.length; t++) {
					if(result.tradeData[t].maxDays == result.tradeData[t].minDays) {
						for(var e = 0; e < that.mealsList.length; e++){
							if(that.mealsList[e].nameId == result.tradeData[t].maxDays){
								that.mealsList[e].list.push({
									name: result.tradeData[t].packageName,
									obj: JSON.parse(JSON.stringify(result.tradeData[t]))
								})
							}
						}
					}else{
						for(var u = 0; u < that.mealsList.length; u++){
							if(that.mealsList[u].nameId == "0"){
								that.mealsList[u].list.push({
									name: result.tradeData[t].packageName,
									obj: JSON.parse(JSON.stringify(result.tradeData[t]))
								})
							}
						}
					}
				}
				console.log(that.mealsList)
				
				if(typeArr.indexOf("0") != -1) {
					that.tabFunc(that.mealsList[0])
					that.number = "天数"
				} else {
					that.tabFunc(that.mealsList[0])
					that.number = "个数"
				}
			})
		},
		mounted() {
			var that = this
			that.contentHeight = document.documentElement.clientHeight - 282

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

		},
		methods: {
			tabFunc(i) {
				this.tabFlag = i.nameId
				this.$store.state.tabFlag = i.nameId
				if(i.nameId != "0") {
					this.number = "个数"
				} else {
					this.number = "天数"
				}
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
				this.price = Number(this.judgeData.obj.price ? this.judgeData.obj.price : this.judgeData.obj.strategy_desc)
				this.finalPrice = this.finalNum * this.price
			},
			addFunc() {
				var that = this
				if(that.judgeData.obj.maxDays == that.judgeData.obj.minDays) {
					that.finalNum++
				} else {
					if(that.judgeData.obj.maxDays == "-1") {
						that.finalNum++
					} else {
						if(that.finalNum < Number(that.judgeData.obj.maxDays)) {
							that.finalNum++
						} else {
							that.popupTxt = "超出最大数量"
							const component = this.$refs['myPopup']
							component.show()
							setTimeout(() => {
								component.hide()
							}, 1000)
						}
					}
				}
			},
			delFunc() {
				var that = this
				if(that.finalNum > 1) {
					that.finalNum--
				} else {
					that.popupTxt = "不能再少了"
					const component = this.$refs['myPopup']
					component.show()
					setTimeout(() => {
						component.hide()
					}, 1000)
				}
			},
			addCar() {
				var that = this
				that.$store.state.finalMeal = that.judgeData
				that.$store.state.perPrice = Number(this.judgeData.obj.price ? this.judgeData.obj.price : this.judgeData.obj.strategy_desc)
				that.$store.state.finalNum = that.finalNum
				that.$store.state.finalPrice = that.finalPrice
				that.$router.push("/payPage")
			},
			compare() {
				return function(a, b) {
					var value1 = Number(a);
					var value2 = Number(b);
					return value1 - value2;
				}
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
		width:80%;
		margin:0 auto;
	}
	
	.common-title i {
		background: url(../assets/common/shoppingcar.png)no-repeat center;
		background-size: 16px 16px;
	}
	
	.car-tab {
		padding-top: 5px;
	}
	
	.car-tab>div {
		border-bottom: 5px solid #C9CACA;
	}
	
	.car-tab>div.active {
		border-bottom: 5px solid #F39800;
	}
	
	.car-tab>div.active span {
		color: #F39800;
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
		margin-top:-10px;
	}
	
	.title{
		margin-left: 2rem;
		width:calc(100% - 140px);
	}
	.title p.name{
		font-size:0.7rem;
	}
	.title p{
		position: relative;
		width:100%;
		color: #9FA0A0;
		word-wrap:break-word;
		font-size: 0.5rem;
		line-height: 20px;
		margin-bottom:1px;
	}
	.title p+p:before{
		content:"";
		width:4px;
		height:4px;
		border-radius:2px;
		background: #C9CACA;
		position: absolute;
		left:-12px;
		top:9px;
		font-size:20px;
	}
	
	.list-1 li.active p {
		color: #F39800;
	}
	.list-1 li.active p+p:before{
		background: #F39800;
	}
	
	.sale {
		position: absolute;
		top: 0;
		right: -0.8rem;
		display: block;
		font-size: 0.5rem;
		line-height: 15px;
		padding: 1px 5px 0;
		background-color: #F39800;
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
		height:20px;
	}
	
	.price-box .now {
		display: inline-block;
		font-size: 0.9rem;
		font-weight: bold;
		line-height:20px;
		color: #9FA0A0;
		vertical-align: middle;
	}
	li.active .price-box .now{
		color:#F39800;
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
		border-bottom: 1px solid #F39800
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
	.price-box .now span i{
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
		font-size:0;
		line-height:0;
		margin-top:5px;
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
	.num-box>div>a.add{
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
		border-bottom: 1px solid #F39800;
	}
	
	.detail-list ul p span {
		display: inline-block;
		font-size: 0.7rem;
		padding: 4px 0.5rem 2px 0.5rem;
		min-width:85px;
		background-color: #F39800;
		color: #fff;
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
		display:none;
		position: relative;
		font-size: 0.7rem;
		color: #3E3A39;
		line-height: 16px;
		margin-top: 10px;
	}
	.detail-list ul ul li.active{
		display: block;
	}
	/*.detail-list ul ul li:before {
		content: "";
		position: absolute;
		width: 8px;
		height: 8px;
		background-color: #F39800;
		border-radius: 4px;
		top: 4px;
		left: -15px;
	}*/
	.addCar{
		padding:12px 24px;
	}
	.common-title i{
		height:auto;
	}
	.common-title p{
		font-size:0.6rem;
		line-height:30px;
		color:#999;
		padding-left:5px;
	}
</style>