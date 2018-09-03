<template>
	<div id="app">
		<transition name="fade" mode="out-in">
			<router-view :key="activeDate"></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				activeDate: 1
			}
		},
		mounted() {
			
		},
		methods: {
			refreash() {
				this.activeDate = new Date()
			}
		}
	}
</script>