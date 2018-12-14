<template>
	<div>
		<div id="form-body">
			<el-col :span="12" :offset="6">
				<el-button type="text" style="font-size: 25px; font-weight: bold;">用户注册</el-button>
			</el-col>
			<el-form ref="form" :model="form" :rules="rules" label-width="80px" class="demo-ruleForm">
				<el-col :span="12" :offset="6">
					<el-form-item label="用户名" prop="username">
						<el-input v-model="form.username"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12" :offset="6">
					<el-form-item label="密码" prop="password">
						<el-input v-model="form.password" type="password"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12" :offset="6">
					<el-form-item label="确认密码" prop="repassword">
						<el-input v-model="form.repassword" type="password"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12" :offset="6">
					<el-form-item>
						<el-button type="primary" @click="submitForm('form')">注册</el-button>
						<el-button @click="resetForm('form')">取消</el-button>
						<el-button @click="showMsg">获取</el-button>
					</el-form-item>
				</el-col>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			var validatePass = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请再次输入密码'));
				} else if(value !== this.form.password) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				form: {
					username: '',
					password: '',
					repassword: ''
				},
				rules: {
					username: [{
						required: true,
						message: '请输入用户名',
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}],
					repassword: [{
						validator: validatePass,
						trigger: 'blur'
					}]
				}
			}
		},
		methods: {
			showMsg() {
				this.$axios({
					"url" : "/api/messages",
					type : "get"
				}).then(res => {
					console.log(res);
				})
			},
			submitForm(formName) {
				this.$refs[formName].validate(valid => {
					if(valid) {
						/*
						this.$axios.post('/api/user/addUser', {
							username: this.form.username,
							password: this.form.password
						}).then(response => {
							if(response.data == 'Refuse!') {
								this.$message({
									message: '该用户名已被注册!',
									type: 'error'
								})
							} else {
								this.$cookieStore.setCookie('username', this.form.username);
								this.$router.push({
									path: '/sale/goods-sale'
								});
							}
						})
						*/
						this.$axios.post('/api/users', {
							"user" : {
								"username" : this.form.username,
								"email" : "1111@qq.com",
								"password" : this.form.password
							}
						}).then(res => {
							console.log(res);
						})
					} else {
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style>

</style>