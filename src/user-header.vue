<template>
	<div>
		<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" 
			background-color="#CCCCFF" text-color="#4D4D4D" active-text-color="#000000">
			<el-submenu index="1">
				<template slot="title">
					<img id="headcss" :src="head" height="50" />
				</template>
				
				<el-menu-item index="1-1">个人信息</el-menu-item>
				<el-menu-item index="1-2">注销</el-menu-item>
			</el-submenu>
			<el-menu-item index="2">
				<el-badge is-dot class="item">新消息</el-badge>
			</el-menu-item>
			<el-menu-item index="3">发布</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '1',
				head: "../static/image/IMG_9996.JPG"
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				this.$emit('message', key);
				console.log(key);
			}
		}
	}
</script>

<style>
	#headcss {
		border-radius:100%
	}
</style>