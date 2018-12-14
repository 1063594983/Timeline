<template>
	<div>
		<h1>user_index</h1>
		<el-button size="medium" :loading="btnStyle" @click="addMore">更多</el-button>
		<div style="height: 500px; overflow: auto;">
			<div v-for="x in showList" :key="x.id" @click="showMessage(x.body)">
				<el-card class="box-card" :span="12" :offset="6">
					<el-container>
						<el-aside width="100px"><img :src="imageT" style="width: 100px; height: 100px;" /></el-aside>
						<el-container>
							<el-header height="20px">
								<h3 style="float: left;">{{ x.author.username }} | {{ getTime(x.createdAt) }}</h3></el-header>
							<el-main>
								<p style="text-align: left; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">{{ x.body }}</p>
							</el-main>
						</el-container>
					</el-container>

				</el-card>
			</div>
		</div>
		<el-button size="medium" :loading="btnStyle" @click="addMore">更多</el-button>
		
		<el-dialog title="消息" :visible.sync="dialogVisible" width="50%">
			<span>{{ messageDetails }}</span>
			<span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
		</el-dialog>
	</div>
</template>

<script>
	var token;
	export default {
		data() {
			return {
				messageList: [],
				imageT: "../static/image/link.jpg",
				btnStyle: false,
				messageDetails: '',
				dialogVisible: false
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
					return(new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
				})
				return showList;
			}
		},
		methods: {
			showMessage(message) {
				this.messageDetails = message;
				this.dialogVisible = true;

			},
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
					return hours + "小时前";
				}
				var days = Math.round(hours / 24);
				if(days < 3) {
					return days + "天前";
				}
				return createdAt.datetime();
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