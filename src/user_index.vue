<template>
	<div>
		<h1>user_index</h1>
		<el-button size="medium" :loading="btnStyle" @click="addMore">更多</el-button>
		<el-button @click="login">登录</el-button>
		<el-button @click="sendMessage">发布</el-button>
		<div style="height: 500px; overflow: auto;">
			<div v-for="x in showList" :key="x.id">
			<el-card class="box-card" :span="12" :offset="6">
				<div style="float: left;">
					<img :src="imageT" style="width: 100px; height: 100px;" />
				</div>
				<div style="float: left ;">
					<h3>{{ x.author.username }} | {{ getTime(x.createdAt) }}</h3>
					<h1>{{ x.body }}</h1>
				</div>
			</el-card>
		</div>
		</div>
		<el-button size="medium" :loading="btnStyle" @click="addMore">更多</el-button>
	</div>
</template>

<script>
	var token;
	export default {
		data() {
			return {
				messageList: [],
				imageT: "../static/image/link.jpg",
				btnStyle: false
			}
		},
		created() {
			this.$axios.get("/api/messages").then(res => {
				this.messageList = res.data.messages;
			})
		},
		computed: {
			showList() {
				var showList = this.messageList;
				showList.sort((a, b) => {
					return (new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
				})
				return showList;
			}
		},
		methods: {
			getTime(time) {
				var createdAt = new Date(time);
				var now = new Date();
				var offsetTime = Math.floor((now.getTime() - createdAt.getTime()) / 1000);
				var minutes = Math.round(offsetTime / 60) + 1;
				if(minutes < 60) {
					return minutes + "分钟前";
				}
				var hours = Math.round(minutes / 60);
				if(hours <= 24) {
					return minutes + "小时前";
				}
				var days = Math.round(hours / 24);
				if(days < 3) {
					return days + "天前";
				}
				return createdAt.datetime();
			},
			login() {
				this.$axios.post("/api/users/login", {
					"user": {
						"email": "1234@qq.com",
						"password": "123"
					}
				}).then(res => {
					token = res.data.user.token;
				})
			},
			sendMessage() {
				this.$axios({
					url: '/api/messages',
					method: 'post',
					headers: {
						"Authorization": "Bearer " + token
					},
					data: {
						"message": {
							"body": "gbk is a 乐观boy"
						}
					}
				}).then(res => {
					console.log(res);
				})
			},
			addMore() {
				this.btnStyle = true;
				this.$axios.get("/api/messages").then(res => {
					this.messageList = res.data.messages;
					this.btnStyle = false;
					this.$message({
						"message": "加载成功",
						"type": "success"
					})
					
				})
			}
		}
	}
</script>

<style>

</style>