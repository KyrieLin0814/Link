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
						<p class="flex-1">卡号：{{ iccid }}</p>
						<a class="status">{{i.statusTxt}}</a>
					</div>
				</a>
			</li>
		</ul>
		<p v-if="!result.length" class="no-data">暂无订单</p>

		<div class="btns">
			<router-link to="/haveCard">关联我的旅游卡</router-link>
			<router-link class="done" to="/text">查看境外上网设置办法</router-link>
			<router-link class="done" to="/">返回</router-link>
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
				iccid: this.$store.state.iccid
			}
		},
		created() {
			var that = this
			const toast = that.$createToast({
				type: 'loading',
				time: 0,
				txt: 'Loading'
			})
			toast.show()

			that.$http.post("/SimGW/travelSimGW/busiService", {
				data: {
					connSeqNo: that.$store.state.connSeqNo,
					partnerCode: that.$store.state.partnerCode,
					token: that.$store.state.token,
					tradeData: {
						iccid: that.$store.state.iccid
//						iccid: "89852000363106059861"
					},
					tradeTime: new Date(),
					tradeType: "F011"
				}
			}).then((res) => {
				toast.hide()
				console.log(res)
				if(res.data.data.tradeRstCode == "1000") {
					if(res.data.data.tradeData) {
						that.result= []
						res.data.data.tradeData.map(function(val, idx) {
//							if(val.orderStatus == "0") {
//								val.statusTxt = "未支付"
//							}
							if(val.orderStatus == "1") {
								val.statusTxt = "未启用"
								that.result.push(val)
							}
							if(val.orderStatus == "2") {
								val.statusTxt = "已开始使用"
								that.result.push(val)
							}
							if(val.orderStatus == "3") {
								val.statusTxt = "已结束"
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
		mounted() {
			this.$store.state.routerBack.haveCard = "orderList"
			this.$store.state.routerBack.text = "orderList"
		},
		methods: {
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
		color: #F39800
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
	.list-content{
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