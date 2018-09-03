<template>
	<div class="body-container">
		<div class="order-detail flexBox">
			<div class="flex-1">
				<p class="txt">{{obj.packageName}}</p>
				<p class="time" v-if="obj.orderStartDate">{{obj.orderStartDate}}</p>
			</div>
			<!--<div class="price"><span>{{ price }}</span> 元</div>-->
		</div>

		<!--无卡-->
		<div class="card-num no-card flexBox" >
			<p class="flex-1">卡号：</p>
			<a class="status" >{{iccid?iccid:"暂无旅游卡" }}</a>
		</div>
		<div class="status-list">
			<ul>
				<li class="clearfix">
					<span>订单号</span>
					<p>{{obj.orderId}}</p>
				</li>
				<li class="clearfix" v-if="obj.orderStartDate">
					<span>购买时间</span>
					<p>{{obj.orderStartDate}}</p>
				</li>
				<li class="clearfix">
					<span>当前状态</span>
					<p>{{obj.statusTxt}}</p>
				</li>
			</ul>
		</div>

		<div class="btns">
			<!--<a @click="toPay">去支付</a>-->
			<router-link class="done" to="/orderList">返回</router-link>
			<!--<router-link class="done" to="/quit">立即退订</router-link>-->
		</div>
	</div>
</template>

<script>
	export default {
		name: 'status',
		data() {
			return {
				iccid: this.$store.state.iccid
			}
		},
		props: {
			obj:{
				type:Object,
				default: {}
			}
		},
		mounted() {
			console.log(this.obj)
		},
		methods: {
			toPay(){
				this.$router.push("/order")
			}
		}
	}
</script>

<style scoped>
	.order-detail {
		padding: 0.8rem 1.2rem 10px;
		border-bottom: 1px solid #E4E4E4
	}
	
	.order-detail div .txt {
		font-size: 0.7rem;
		color: #3E3A39;
		line-height: 20px;
	}
	
	.order-detail div .time {
		font-size: 0.7rem;
		line-height: 30px;
		color: #9FA0A0;
	}
	
	.order-detail .price {
		font-size: 0.8rem;
		line-height: 30px;
	}
	
	.order-detail .price span {
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
		position: absolute;
		bottom: 15px;
		left: 0;
		right: 0;
		text-align: center;
	}
	
	.status-list {
		border-top: 1px solid #E4E4E4;
		padding: 10px 1.2rem;
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