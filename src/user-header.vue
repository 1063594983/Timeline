<template>
	<div>
		<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" 
			id="menu" text-color="#4D4D4D" active-text-color="#ffffff">
			<el-submenu index="1">
				<template slot="title">
					<img id="imagecss" :src="head" height="50" />
				</template>
				
				<el-menu-item index="1-1">个人信息</el-menu-item>
				<el-menu-item index="1-2">注销</el-menu-item>
			</el-submenu>
			<!--
			<el-menu-item index="2">新消息</el-menu-item>
			<el-menu-item index="3">发布</el-menu-item>
			-->
		</el-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '1',
				//head: "../static/image/IMG_9996.JPG"
				head: this.headImage
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				this.$emit('message', key);
				console.log(key);
			}
		},
		props: {
			headImage: {
				type: String,
				required: true
			}
		}
	}
</script>

<style>
	#imagecss {
		height: 50px;
		width: 50px;
		border-radius: 100%;
	}
	#menu {
		background: linear-gradient(to right, #66B2FF, #3399FF);
	}
</style>