<template>
	<div class="body-container">
		<div class="common-title">
			<i></i>
			<span>购物车</span>
		</div>
		<div class="detail">商品详情</div>
		<!--<div class="detail">SIM卡 ICCID：{{ iccid }}</div>-->
		<p v-if="!carData.length" class="no-data">购物车为空</p>
		<ul>
			<li v-for="(i,index) in carData">
				<div class="img-content flexBox">
					<div class="img" :style="{backgroundImage: 'url(' + i.meal.obj.pictureDetails + ')', backgroundSize: '100% auto', backgroundPosition:'center'}">
						<p class="text-1">{{ i.meal.name }}</p>
					</div>
					<div class="text">
						<span>{{ i.meal.obj.packageName }}<i>x {{i.finalNum}}</i></span>
					</div>
					<div class="del">
						<a @click="delFunc(index)">x</a>
					</div>
				</div>
			</li>
		</ul>

		<div class="buy-box clearfix">
			<p>需支付：<span>{{ price.toFixed(2) }}</span> 元</p>
			<a @click="payFunc"> 付 款 </a>
			<router-link to="/">继续购买</router-link>
		</div>

		<cube-popup type="my-popup" :mask="false" ref="myPopup">{{ popupTxt }}</cube-popup>
	</div>
</template>

<script>
	export default {
		name: 'order',
		data() {
			return {
				iccid: this.$store.state.iccid,
				carData: [],
				img: this.$store.state.finalMeal.obj.pictureDetails,
				areaTxt: this.$store.state.routerData.countryName,
				detailTxt: this.$store.state.finalMeal.obj.packageName,
				price: 0,
				popupTxt: ''
			}
		},
		props: {
			addFlag: {
				type: Boolean,
				default: false
			}
		},
		watch:{
			price(){
				if(this.price < 0.001){
					this.price = 0
					this.$store.state.totalPrice = 0
				}
			}
		},
		created() {
			var that = this
			that.carData = JSON.parse(JSON.stringify(that.$store.state.shopCar))
			console.log(that.carData)
			//console.log(that.$store.state.totalPrice)
			if(that.addFlag) {
				that.price = that.$store.state.totalPrice + that.carData[that.carData.length - 1].finalPrice
				that.$store.state.totalPrice = that.price
			} else {
				that.price = that.$store.state.totalPrice
			}
		},
		methods: {
			payFunc() {
				var that = this
				if(that.carData.length) {
					that.$router.push("/postWay")
				} else {
					that.popupTxt = "请选择套餐后再进行下单"
					const component = that.$refs['myPopup']
					component.show()
					setTimeout(() => {
						component.hide()
					}, 1500)
				}
			},
			delFunc(idx) {
				var that = this
				var alert = that.$createDialog({
					type: 'confirm',
					content: '是否要删除该套餐？',
					confirmBtn: {
						text: '确认',
						active: false,
						disabled: false,
						href: 'javascript:;'
					},
					cancelBtn: {
						text: '取消',
						active: false,
						disabled: false,
						href: 'javascript:;'
					},
					onConfirm: () => {
						that.price = that.price - that.carData[idx].finalPrice
						that.$store.state.totalPrice = that.price
						that.carData.splice(idx, 1)
						that.$store.state.shopCar = that.carData
					},
					onCancel: () => {}
				}).show()
			}
		}
	}
</script>

<style scoped>
	.common-title i {
		background: url(../assets/common/shoppingcar.png)no-repeat center;
		background-size: 16px 16px;
	}
	
	.detail {
		height: 24px;
		padding-left: 32px;
		line-height: 24px;
		font-size: .7rem;
		border-bottom: 20px solid #E4E4E4;
	}
	
	.img-content {
		border-bottom: 1px solid #E4E4E4;
	}
	
	.img-content>div {
		overflow: hidden;
		height: 90px;
	}
	
	.img-content>div.img {
		width: 40%;
	}
	
	.img-content>div.img p {
		text-align: center;
		color: #fff;
		font-size: 0.8rem;
		line-height: 90px;
		width: calc(100% - 10px);
		margin: 0 5px;
	}
	
	.img-content>div.text {
		width: 60%;
	}
	
	.img-content>div.text {
		text-align: center;
		line-height: 100px;
		font-size: 0;
		vertical-align: middle;
	}
	
	.img-content>div.text span {
		display: inline-block;
		line-height: 18px;
		font-size: 0.7rem;
		text-align: left;
	}
	
	.del {
		width: 20px;
	}
	
	.del a {
		width: 20px;
		height: 20px;
		margin-top: 5px;
		display: block;
		font-size: 0.8rem;
		color: #CCCCCC;
	}
	
	ul{
		padding-bottom:52px;
	}
	.text span i{
		margin-left:10px;
		color:#999;
		font-style: normal;
	}
</style>