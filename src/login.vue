<template>
	<div>
	<div id='loginForm'>
		<h1>Timeline</h1>
		<el-form :model='form' ref='form' label-width='100px' class="demo-ruleForm" :rules='rules'>
			<el-col :span="16" :offset="2">
				<el-form-item label="邮箱" prop='email'>
					<el-input type='email' v-model='form.email'></el-input>
				</el-form-item>
			</el-col>
			<el-col :span="16" :offset="2">
				<el-form-item label="密码" prop='email'>
					<el-input type="password" v-model="form.password" autocomplete="off"></el-input>
				</el-form-item>
			</el-col>
			<el-col :span="16" :offset="2">
				<el-form-item>
					<el-button type="primary" plain @click="login('form')">登录</el-button>
					<el-button @click="register">注册</el-button>
				</el-form-item>
			</el-col>
		</el-form>
	</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					email: '',
					password: ''
				},
				rules: {
					email: [{
							required: true,
							message: '请输入邮箱地址',
							trigger: 'blur'
						},
						{
							type: 'email',
							message: '请输入正确的邮箱地址',
							trigger: 'blur'
						}
					],
					password: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}]
				}

			}
		},
		methods: {
			login(formname) {
				this.$refs[formname].validate(valid => {
							if(valid) {
								this.$axios({
									url: '/api/users/login',
									method: 'post',
									data: {
										"user": {
											"email": this.form.email,
											"password": this.form.password
										}
									}
								}).then(response => {
									this.$cookie.set("token", response.data.user.token);
									this.$cookie.set("username", response.data.user.username);
									console.log(response);
									this.$router.push({
										path: '/user_index'
									})
								}).catch(error => {
									this.$message('账号或密码错误!')
								})
							} else {
								this.$message('格式错误!');
								return false;
							}
						})
					},
					register() {
						this.$router.push({
							path: '/register'
						})
					}
			}
		}
</script>

<style>

</style>