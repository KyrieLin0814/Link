<template>
	<div class="body-container">
		<div class="common-title">
			<i></i>
			<span>填写荔枝卡收货地址</span>
		</div>

		<div class="adress-list">
			<div>
				<input type="text" v-model="name" placeholder="姓名">
			</div>
			<div>
				<input type="number" maxlength="11" v-model="phone" placeholder="电话">
			</div>
			<div class="picker-btn" @click="choosePrivince">
				<span>省</span>
				<p class="text-1">{{ province?province:'请选择' }}</p>
			</div>
			<div class="picker-btn" @click="chooseCity">
				<span>市</span>
				<p class="text-1">{{ city?city:'请选择' }}</p>
			</div>
			<div class="picker-btn" @click="chooseArea">
				<span>区</span>
				<p class="text-1">{{ area?area:'请选择' }}</p>
			</div>
			<div>
				<input type="text" maxlength="11" v-model="addressTxt" placeholder="详细地址">
			</div>
		</div>

		<div class="btns">
			<a class="save" @click="saveFunc">保存</a>
			<div></div>
			<router-link class="done" to="/postWay">返回</router-link>
		</div>
		

		<cube-popup type="my-popup" :mask="false" ref="myPopup">{{ popupTxt }}</cube-popup>
	</div>
</template>

<script>
	import { provinceList, cityList, areaList } from '@/assets/area.js'

	export default {
		name: 'adress',
		data() {
			return {
				name: '',
				phone: '',
				province: '',
				city: '',
				area: '',
				addressTxt: '',
				popupTxt: '',
				provinceVal: '',
				cityVal: '',
				defaultIndex:[0,0,0]
			}

		},
		created() {
			this.name = this.$store.state.address.name
			this.phone = this.$store.state.address.phone
			this.province = this.$store.state.address.province
			this.city = this.$store.state.address.city
			this.area = this.$store.state.address.area
			this.addressTxt = this.$store.state.address.addressTxt
			this.defaultIndex = this.$store.state.address.defaultIndex
			this.provinceVal = this.$store.state.address.provinceVal
			this.cityVal = this.$store.state.address.cityVal
		},
		mounted() {
			var that = this
			this.picker = this.$createPicker({
				title: '请选择省份',
				selectedIndex:[that.defaultIndex[0]],
				data: [provinceList],
				onSelect: (selectedVal, selectedIndex, selectedText) => {
					that.province = selectedText[0]
					that.provinceVal = selectedVal[0]
					that.defaultIndex[0] = selectedIndex[0]
				},
				onCancel: () => {}
			})

		},
		methods: {
			choosePrivince() {
				this.picker.show()
			},
			chooseCity() {
				var that = this
				if(that.provinceVal) {
					var cityArr = []
					for(var item in cityList) {
						if(cityList.hasOwnProperty(item)) {
							if(item == that.provinceVal) {
								cityArr = cityList[item]
							}
						}
					}
					that.picker2 = that.$createPicker({
						title: '请选择城市',
						data: [cityArr],
						selectedIndex:[that.defaultIndex[1]],
						onSelect: (selectedVal, selectedIndex, selectedText) => {
							that.city = selectedText[0]
							that.cityVal = selectedVal[0]
							that.defaultIndex[1] = selectedIndex[0]
						},
						onCancel: () => {}
					})
					that.picker2.show()
				} else {
					that.popupTxt = '请选择省份'
					const component = that.$refs['myPopup']
					component.show()
					setTimeout(() => {
						component.hide()
					}, 1000)
				}
			},
			chooseArea() {
				var that = this
				if(that.cityVal) {
					var areaArr = []
					for(var item in areaList) {
						if(areaList.hasOwnProperty(item)) {
							if(item == that.cityVal) {
								areaArr = areaList[item]
							}
						}
					}
					that.picker3 = that.$createPicker({
						title: '请选择地区',
						data: [areaArr],
						selectedIndex:[that.defaultIndex[2]],
						onSelect: (selectedVal, selectedIndex, selectedText) => {
							that.area = selectedText[0]
							that.areaVal = selectedVal[0]
							that.defaultIndex[2] = selectedIndex[0]
						},
						onCancel: () => {}
					})
					that.picker3.show()
				} else {
					that.popupTxt = '请选择城市和地区'
					const component = that.$refs['myPopup']
					component.show()
					setTimeout(() => {
						component.hide()
					}, 1000)
				}
			},
			saveFunc() {
				var that = this
				if(this.name && this.phone && this.province && this.city && this.area && this.addressTxt){
					this.$store.state.address.name = this.name
					this.$store.state.address.phone = this.phone
					this.$store.state.address.province = this.province
					this.$store.state.address.city = this.city
					this.$store.state.address.area = this.area
					this.$store.state.address.addressTxt = this.addressTxt
					this.$store.state.address.provinceVal = this.provinceVal
					this.$store.state.address.cityVal = this.cityVal
					
					this.$router.push({
						name: "postWay"
					})
				}else{
					that.popupTxt = '请将收货地址填写完整'
					const component = that.$refs['myPopup']
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
	.common-title i {
		background: url(../assets/common/sendWay.png)no-repeat center;
		background-size: 16px 16px;
	}
	
	.adress-list>div {
		padding: 0 1.2rem;
		border-bottom: 1px solid #D4D5D5;
		min-height: 40px;
		font-size: 0.7rem;
		color: #3E3A39;
	}
	
	.adress-list>div input {
		display: block;
		outline: none;
		line-height: 40px;
		width:100%;
	}
	
	.adress-list>div.picker-btn span {
		float: left;
		line-height: 40px;
	}
	
	.adress-list>div.picker-btn p {
		text-align: right;
		max-width: 70%;
		float: right;
		line-height: 40px;
		padding-right: 1rem;
		color: #9FA0A0;
		background: url(../assets/common/more.png)no-repeat center right;
		background-size: 6px 10px;
	}
	
	.btns{
		margin-top:40px;
		text-align: center;
	}
</style>