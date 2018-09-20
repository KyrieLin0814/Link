<template>
	<div class="body-container">
		<div class="common-title">
			<i></i>
			<span>{{$t("message.buyCard")}}</span>
		</div>

		<div class="num-box flexBox">
			<p class="flex-1 text-1">{{mealName}}</p>
			<div :class="{'disabled': !btnFlag }">
				<a class="del" @click="delFunc">-</a>
				<a class="number">{{ finalNum }}</a>
				<a class="add" @click="addFunc">+</a>
			</div>
		</div>
		<div class="agree pay-box">
			<cube-checkbox v-model="checked" shape="square">
				<p class="agreeTxt">{{$t("message.agree")}}<span class="fontColor">{{$t("message.txt1")}}</span>{{$t("message.and")}}<span class="fontColor">{{$t("message.txt2")}}</span></p>
			</cube-checkbox>
		</div>
		
		<div class="buy-box clearfix">
			<p>{{$t("message.total")}}：<span>{{ finalPrice.toFixed(2) }}</span> {{$t("message.yuan")}}</p>
			<span class="slide" :class="{'active': slideFlage}" @click="slideFunc"></span>
			<a @click="nextFunc">{{$t("message.addCar")}}</a>
			<router-link to="/detail">{{$t("message.back")}}</router-link>
			
			
			<transition name="fade" mode="out-in">
				<div class="cost-box" :class="{'active': slideFlage}">
					<div class="tle">{{$t("message.costDetail")}}</div>
					<div class="flexBox">
						<div>{{$t("message.mealCost")}} ({{ mealCost }})</div>
						<div class="flex-1"></div>
						<div class="price"><span>{{ mealPrice.toFixed(2) }}</span>元</div>
					</div>
				</div>
			</transition>
		</div>

		<cube-popup type="my-popup" :mask="false" ref="myPopup">{{popupTxt}}</cube-popup>
	</div>
</template>

<script>
	export default {
		name: 'payPage',
		data() {
			return {
				langCn: this.$store.state.langType=='cn'? true:false,
				btnFlag: true,
				judgeData: {},
				mealName: this.$store.state.langType=='cn'? "领科物联网卡套餐" : '',
				page: 1,
				finalNum: 1,
				perPrice: 0.00,
				finalPrice: 0.00,
				checked: this.$store.state.agreeFlag,
				slideFlage: true,
				mealCost: '',
				mealPrice: 0.00,
				popupTxt: {}
			}
		},
		watch: {
			finalNum: function() {
				this.finalPrice = (this.perPrice * this.finalNum)
			}
		},
		created() {
			var that = this
			that.perPrice = that.$store.state.perPrice
			that.finalPrice = that.$store.state.finalPrice
			that.finalNum = that.$store.state.finalNum
			that.judgeData = that.$store.state.finalMeal
			that.mealName = that.judgeData.obj.packageName
			
			if(that.judgeData.obj.orderPeriod){
				that.btnFlag = false
			}
			
			that.cost()
		},
		methods: {
			cost() {
				console.log(this.judgeData)
				this.mealCost = this.perPrice + (this.$store.state.langType == "cn" ? "元/" : 'yuan/') + this.judgeData.typeStr + " x " + this.finalNum 
				this.mealPrice = this.perPrice * this.finalNum
			},
			addFunc() {
				var that = this
				if(!that.judgeData.obj.orderPeriod){
					that.finalNum++
				}
				that.cost()
			},
			delFunc() {
				var that = this
				if(!that.judgeData.obj.orderPeriod){
					if(that.finalNum > 1) {
						that.finalNum--
						that.cost()
					} else {
						that.popupTxt = "不能再少了"
						const component = this.$refs['myPopup']
						component.show()
						setTimeout(() => {
							component.hide()
						}, 1000)
					}
				}
			},
			slideFunc() {
				if(this.slideFlage) {
					this.slideFlage = false
				} else {
					this.slideFlage = true
				}
			},
			nextFunc() {
				var that = this
				if(that.checked) {
					//加入到购物车
					that.$store.state.agreeFlag = that.checked
					that.$store.state.shopCar.push({
						meal:that.$store.state.finalMeal,
						finalNum: that.finalNum,
						perPrice: that.perPrice,
						finalPrice : that.finalPrice
					})
					that.$router.push({name:"order",params:{addFlag:true}})
				} else {
					that.popupTxt = "请同意用户协议再进行下一步操作"
					const component = this.$refs['myPopup']
					component.show()
					setTimeout(() => {
						component.hide()
					}, 1000)
				}
			}
		}
	}
</script>

<style scoped>
	.body-container {
		background: #f5f5f5;
	}
	
	.common-title i {
		background: url(../assets/common/shoppingcar.png)no-repeat center;
		background-size: 16px 16px;
	}
	
	.num-box {
		padding: 15px 1.2rem;
		height: 30px;
		border-top: 1px solid #D4D5D5;
		background: #fff;
		font-size: 0;
	}
	
	.num-box p {
		font-size: 0.7rem;
		color: #3E3A39;
		line-height: 30px;
		padding-right:10px;
	}
	
	.num-box>div {
		float: right;
	}
	
	.num-box>div>a {
		display: inline-block;
		vertical-align: middle;
		font-size: 0.7rem;
		border: 1px solid #D4D5D5;
		line-height: 24px;
		height: 24px;
	}
	
	.num-box>div>a.number {
		padding: 2px 16px;
		border-left: none;
		border-right: none;
	}
	
	.num-box>div>a.add,
	.num-box>div>a.del {
		padding: 2px 10px;
		font-size: 0.8rem;
	}
	
	.num-box>div>a.del {
		padding: 2px 12px;
	}
	
	.agree .agreeTxt {
		font-size: 0.6rem;
		color: #9FA0A0;
	}
	
	.agree .agreeTxt span {
		display: inline-block;
		color: #e23768;
	}
	.num-box .disabled{
		background-color: #f1f1f1;
	}
</style>