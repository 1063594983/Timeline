<template>
  <div class="hello">
    <el-button @click="showMessage">点击</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
  	showMessage() {
  		this.$message.error("hello");
  		/*
  		this.$axios.post('/api/users', {
					"user": {
						"username" : "gbk",
						"email": "gbk@qq.com",
						"password": "gbk"
						//"image": "image"
					}
				}).then(response => {
					console.log(response.data.user.token);
					//token = response.data.user.token
					//this.$cookieStore.setCookie("token", response.data.user.token);
					console.log(token);
				})
				*/
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
