<template>
	<div>
		<user-header id="header" @message="handleSelect"></user-header>
	</div>
</template>

<script>
	import userHeader from './user-header'
	export default {
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '1',
				head: "../static/image/IMG_9996.JPG"
			};
		},
		methods: {
			handleSelect() {
				
			}
		},
		components: {
			userHeader
		}
	}
</script>

<style>
	#header {
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
	}
</style>