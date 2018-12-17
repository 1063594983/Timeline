<template>
	<div>
		<user-header id="header" @message="handleSelect" v-bind:headImage="headImage" v-bind:nickName="$cookie.get('username')"></user-header>

		<el-button style="position: absolute; left: 0%; right: 0%;" size="medium" type="primary" plain
			:loading="btnStyle" @click="addMore">
			加载最新消息
		</el-button>
		<br />
		<br />
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
		<el-button size="medium">更多</el-button>

		<el-dialog title="消息" :visible.sync="dialogVisible" width="50%">
			<span>{{ messageDetails }}</span>
			<span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
		</el-dialog>

		<el-dialog title="发布" :visible.sync="releaseVisible" width="50%">
		<div id="editorElem" style="text-align:left; height: 100px; width: 100px;"></div>
   		
    <el-button @click="releaseVisible = false">取 消</el-button>
    <el-button type="primary" @click="releaseVisible = false">确 定</el-button>
  </span>
		</el-dialog>

	</div>
</template>

<script>
	import userHeader from './user-header'
	import E from 'wangeditor'
	
	export default {
		data() {
			return {
				messageList: [],
				imageT: "../static/image/link.jpg",
				btnStyle: false,
				messageDetails: '',
				dialogVisible: false,
				releaseVisible: false,
				headImage: "../static/image/IMG_9996.JPG",
				messageReleaseContent: ''
			}
		},
		created() {
			this.$axios.get("/api/messages").then(res => {
				this.messageList = res.data.messages;
			})
		},
		mounted() {
			var editor = new E('#editorElem')
        editor.customConfig.onchange = (html) => {
          this.editorContent = html
        }
        editor.create()
		},
		computed: {
			getContent() {
				console.log(this.messageReleaseContent);
			},
			showList() {
				var showList = this.messageList;
				showList.sort((a, b) => {
					return(new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
				})
				return showList;
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				switch(key) {
					case '1-1':
						this.infoVisible = true;
						break;
					case '1-2':
						this.$cookie.remove('token');
						this.$cookie.remove('username');
						this.$router.push({
							path: '/login'
						});
						break;
					case '2':
						this.releaseVisible = true;
						break;
				}
			},
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

				})
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