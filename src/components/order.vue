<template>
	<div class="body-container">
		<div class="common-title">
			<i></i>
			<span>{{$t("message.car")}}</span>
		</div>
		<div class="detail">{{$t("message.mealDetail")}}</div>
		<!--<div class="detail">SIM卡 ICCID：{{ deviceId }}</div>-->
		<p v-if="!carData.length" class="no-data">{{$t("message.empty")}}</p>
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
			<p>{{$t("message.cost")}}：<span>{{ price.toFixed(2) }}</span> {{$t("message.yuan")}}</p>
			<a @click="payFunc"> {{$t("message.pay")}} </a>
			<router-link to="/">{{$t("message.continue")}}</router-link>
		</div>

		<cube-popup type="my-popup" :mask="false" ref="myPopup">{{ popupTxt }}</cube-popup>
	</div>
</template>

<script>
	export default {
		name: 'order',
		data() {
			return {
				deviceId: this.$store.state.deviceId,
				carData: [],
				img: this.$store.state.finalMeal.obj.pictureDetails,
				areaTxt: this.$store.state.routerData.countryName,
				detailTxt: this.$store.state.finalMeal.obj.packageName,
				price: 0,
				popupTxt: '',
				langCn: this.$store.state.langType=='cn'? true:false
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
					that.popupTxt = that.langCn ? "请选择套餐后再进行下单" : "Please choose the order after the package"
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
					content: that.langCn ? '是否要删除该套餐？' : 'Do you want to delete the package?',
					confirmBtn: {
						text: that.langCn ? '确认': 'Confirm',
						active: false,
						disabled: false,
						href: 'javascript:;'
					},
					cancelBtn: {
						text: that.langCn ? '取消':'Cancel',
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