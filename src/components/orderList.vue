<template>
	<div class="body-container">
		<ul class="list-content">
			<li v-for="i in result">
				<a @click="routerFunc(i)">
					<div class="order-list flexBox">
						<div class="flex-1">
							<p class="txt">{{i.packageName}}</p>
							<p class="time" v-if="i.orderStartDate">{{i.orderStartDate}}</p>
						</div>
						<!--<div class="price"><span>{{ price }}</span> 元</div>-->
					</div>

					<!--有卡-->
					<div class="card-num have-card flexBox">
						<p class="flex-1">{{$t("message.cardId")}}：{{ iccid }}</p>
						<a class="status">{{i.statusTxt}}</a>
					</div>
				</a>
			</li>
		</ul>
		<p v-if="!result.length" class="no-data">{{$t("message.noOrder")}}</p>

		<div class="btns">
			<router-link to="/haveCard">{{$t("message.Relation")}}</router-link>
			<router-link class="done" to="/text">{{$t("message.overseas")}}</router-link>
			<router-link class="done" to="/">{{$t("message.back")}}</router-link>
		</div>

		<cube-popup type="my-popup" :mask="false" ref="myPopup">{{ popupTxt }}</cube-popup>
	</div>
</template>

<script>
	export default {
		name: 'orderList',
		data() {
			return {
				time: "2018.6.8 12:12:11",
				price: "19.9",
				result: [],
				popupTxt: '',
				deviceId:'',
				deviceType:'',
				iccid: this.$store.state.iccid
			}
		},
		created() {
			var that = this
			that.deviceId = that.$store.state.deviceId
			that.deviceType = that.$store.state.deviceType
			
			//openid换deviceId
			if(that.$store.state.openId) {
				that.$http.post("/paypalpay/getDeviceId", {
					data: {
						connSeqNo: that.$store.state.connSeqNo,
						lang: that.$store.state.langType,
						partnerCode: that.$store.state.partnerCode,
						token: that.$store.state.token,
						tradeData: {
							openid: that.$store.state.openId
						},
						tradeTime: new Date(),
						tradeType: "F012",
					}
				}).then((res) => {
					if(res.data.data.tradeData.length) {
						that.deviceId = res.data.data.tradeData[0].deviceId
						that.deviceType = res.data.data.tradeData[0].deviceType
					}
					that.getData()
				})
			}else{
				that.getData()
			}

		},
		mounted() {
			this.$store.state.routerBack.haveCard = "orderList"
			this.$store.state.routerBack.text = "orderList"
		},
		methods: {
			getData() {
				var that = this
				const toast = that.$createToast({
					type: 'loading',
					time: 0,
					txt: 'Loading'
				})
				toast.show()
				that.$http.post("/paypalpay/queryPackageOrder", {
					data: {
						connSeqNo: that.$store.state.connSeqNo,
						lang: that.$store.state.langType,
						partnerCode: that.$store.state.partnerCode,
						token: that.$store.state.token,
						tradeData: {
							deviceId: that.deviceId,
							deviceType: that.deviceType
						},
						tradeTime: new Date(),
						tradeType: "F011"
					}
				}).then((res) => {
					toast.hide()
					console.log(res)
					if(res.data.data.tradeRstCode == "1000") {
						if(res.data.data.tradeData) {
							that.result = []
							res.data.data.tradeData.map(function(val, idx) {
								//							if(val.orderStatus == "0") {
								//								val.statusTxt = "未支付"
								//							}
								if(val.orderStatus == "1") {
									if(that.$store.state.langType == "cn") {
										val.statusTxt = "未启用"
									} else {
										val.statusTxt = "No use"
									}
									that.result.push(val)
								}
								if(val.orderStatus == "2") {
									if(that.$store.state.langType == "cn") {
										val.statusTxt = "已开始使用"
									} else {
										val.statusTxt = "Useing"
									}
									that.result.push(val)
								}
								if(val.orderStatus == "3") {
									if(that.$store.state.langType == "cn") {
										val.statusTxt = "已结束"
									} else {
										val.statusTxt = "Finished"
									}
									that.result.push(val)
								}
								//							if(val.orderStatus == "4") {
								//								val.statusTxt = "已取消"
								//							}
							})
							that.result.reverse()
						} else {
							that.popupTxt = res.data.data.tradeRstMessage
							const component = that.$refs['myPopup']
							component.show()
							setTimeout(() => {
								component.hide()
							}, 1000)
						}
					}
				})
			},
			routerFunc(i) {
				this.$router.push({
					name: "status",
					params: {
						obj: i
					}
				})
			},
			substring(str) {
				var str_after = str.substring(str.length - 7, str.length)
				return str_after
			}
		}
	}
</script>

<style scoped>
	.list-content li {
		border-bottom: 1px solid #eaeaea;
		margin-bottom: 5px;
		box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
	}
	
	.order-list {
		padding: 0.8rem 1.2rem 10px;
		border-bottom: 1px solid #E4E4E4
	}
	
	.order-list div .txt {
		font-size: 0.7rem;
		color: #3E3A39;
		line-height: 20px;
	}
	
	.order-list div .time {
		font-size: 0.7rem;
		line-height: 30px;
		color: #9FA0A0;
	}
	
	.order-list .price {
		font-size: 0.8rem;
		line-height: 30px;
		padding-right: 1rem;
		background: url(../assets/common/more.png)no-repeat right 8px;
		background-size: 8px 14px;
	}
	
	.order-list .price span {
		color: #d7013f
	}
	
	.card-num {
		padding: 0 1.2rem;
		font-size: 0.7rem;
		color: #3E3A39;
		line-height: 40px;
	}
	
	.card-num a {
		color: #9FA0A0;
	}
	
	.no-card a {
		padding-right: 0.7rem;
		background: url(../assets/common/more.png)no-repeat center right;
		background-size: 6px 10px;
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
	
	.btns a {
		margin-bottom: 8px;
	}
	
	.status-list {
		border-top: 1px solid #E4E4E4;
		padding: 10px 1.2rem;
	}
	
	.list-content {
		padding-bottom: 160px;
		background: #fff;
	}
	
	.status-list ul li {
		font-size: 0.7rem;
		color: #9FA0A0;
		line-height: 30px;
	}
	
	.status-list ul li span {
		display: block;
		float: left;
	}
	
	.status-list ul li p {
		float: right;
	}
</style>