<template>
	<div class="body-container">
		<div class="inputIccid">
			<h2>{{langCn ? '欢迎您！' : 'Welcome！'}}</h2>
			<input class="iccidInput" type="text" :placeholder="placeholder" v-model="deviceId">
			<a class="button bgColor" @click="click">{{langCn ? "查    询" : "Query"}}</a>
		</div>
		<cube-popup type="my-popup" :mask="false" ref="myPopup">{{ popupTxt }}</cube-popup>
	</div>
</template>

<script>
	export default {
		name: 'inputIccid',
		data() {
			return {
				langCn: this.$store.state.langType == 'cn' ? true : false,
				deviceId:'',
				placeholder:'',
				flag : true,
				popupTxt:''
			}
		},
		created() {
	
		},
		mounted() {
			this.placeholder  = this.langCn ? "请输入19/20位的deviceId卡号" : "Please enter the deviceId card number of 19/20 bits"
		},
		methods: {
			click(){
				var that = this
				if(!that.deviceId){
					that.popupTxt = that.langCn ? "请输入卡号" : "Please enter the deviceId card number"
					const component1 = this.$refs['myPopup']
					component1.show()
					setTimeout(function(){
						component1.hide()
					},1500)
					return
				}
				
				if(that.flag){
					that.flag = false
					that.$http.post("/paypalpay/getDeviceHomepage", {
						data: {
							connSeqNo: that.$store.state.connSeqNo,
							deviceId: that.deviceId,
							lang: that.$store.state.langType,
							partnerCode: that.$store.state.partnerCode,
							token: that.$store.state.token,
							tradeTime: new Date(),
							tradeType: "T0001"
						}
					}).then((res) => {
						var result = res.data.data
						console.log(res.data.data)
						if(result.tradeData.length){
							console.log(result)
							that.$store.state.deviceId = result.tradeData[0].deviceId
							that.$store.state.deviceType = result.tradeData[0].deviceType
							that.$store.state.deviceTypeText = result.tradeData[0].deviceTypeText
							that.$store.state.partnerCode = result.tradeData[0].partnerCode
							
							that.popupTxt = that.langCn ?  "验证成功" : "Success"
							const component3 = this.$refs['myPopup']
							component3.show()
							setTimeout(function(){
								component3.hide()
								that.$router.replace("/")
							},1000)
						}else{
							that.popupTxt = that.langCn ? "请输入正确的卡号" : "Please enter the correct deviceId card number"
							const component2 = this.$refs['myPopup']
							component2.show()
							setTimeout(function(){
								component2.hide()
							},1500)
						}
					    that.flag = true
					})
				}else{
					return
				}
				
			}
		}
	}
</script>

<style scoped>
	.inputIccid{
		padding:40% 10% 0;
		width:80%;
	}
	h2{
		text-align: center;
		font-size:1.3rem;
		margin-bottom:50px;
	}
	.iccidInput{
		display: inline-block;
		width:calc(100% - 1rem);
		border:1px solid #ccc;
		outline: none;
		padding:0 0.4rem;
		font-size:0.8rem;
		line-height:40px;
		color:#000;
		border-radius: 5px;
	}
	.button{
		margin-top:100px;
		display: block;
		width:100%;
		height:40px;
		border-radius: 20px;
		text-align: center;
		line-height:40px;
		font-size:0.8rem;
		color:#fff;
	}
</style>