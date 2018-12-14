<template>
	<div>
		<div id="form-body">
				<el-col :span="12" :offset="6">
					<el-button type="text" style="font-size: 25px; font-weight: bold;">用户登录</el-button>
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
						<el-form-item>
							<el-button type="primary" @click="submitForm('form')">立即登录</el-button>
							<el-button @click="resetForm('form')">取消</el-button>
							<el-button @click="getMessage">获取</el-button>
							<el-button @click="edit">修改</el-button>
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
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
</style>