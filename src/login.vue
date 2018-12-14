<template>
	<div id='loginForm'>
		<h1>Timeline</h1>
		<el-form :model='form' ref='form' label-width='100px' class="demo-ruleForm" :rules='rules'>
			<el-col :span="10" :offset="7">
				<el-form-item label="邮箱" prop='email'>
					<el-input type='email' v-model='form.email'></el-input>
				</el-form-item>
			</el-col>
			<el-col :span="10" :offset="7">
				<el-form-item label="密码" prop='email'>
					<el-input type="password" v-model="form.password" autocomplete="off"></el-input>
				</el-form-item>
			</el-col>
			<el-col :span="10" :offset="7">
				<el-form-item>
					<el-button type="primary" plain @click="login('form')">登录</el-button>
					<el-button @click="register">注册</el-button>
				</el-form-item>
			</el-col>
		</el-form>
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
							trigger: ['blur', 'change']
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
									console.log(response);
									this.$router.push({
										path: '/userIndex'
									})
								}).catch(error => {
									this.$message('账号或密码错误!')
									//if(error) alert('登录失败')
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