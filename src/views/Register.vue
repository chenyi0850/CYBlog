<template>
  <div id="Register">
    <el-card id="card">
      <h2>注册</h2>
      <el-divider></el-divider>
      <div class="line">
        <p>用户名:</p>
        <el-input v-model="username"></el-input>
      </div>
      <div class="line">
        <p>密码:</p>
        <el-input v-model="password"></el-input>
      </div>
      <div class="line">
        <p>邮箱:</p>
        <el-input v-model="email"></el-input>
      </div>
      <div class="line">
        <p>手机号:</p>
        <el-input v-model="phoneNum"></el-input>
      </div>
      <div id="bottom">
        <el-button @click="register">注册</el-button>
        <el-button>重置</el-button>
      </div>
    </el-card>
    <div id="tip">注册过了？去 <el-link @click="toLogin">登录</el-link></div>
  </div>
</template>

<script>
import { register } from "@/network/api";
export default {
  name: "Register",
  data() {
      return {
          username: "",
          password: "",
          email: "",
          phoneNum: ""
      }
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
    register() {
        register({
            username: this.username,
            password: this.password,
            email: this.email,
            phoneNum: this.phoneNum
        }).then(res => console.log(res)).catch(err => console.log(err))
    }
  }
};
</script>

<style lang="less" scoped>
#Register {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #e6e6e6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h2 {
  text-align: center;
}
.line {
  display: flex;
  height: 50px;
  p {
    width: 80px;
  }
}
#bottom {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}
#tip {
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-top: 10px;
}
</style>
<style lang="less">
.el-menu-demo {
  display: none;
}
</style>