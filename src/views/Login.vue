<template>
  <div id="Login">
    <el-card id="card">
      <h2>登录</h2>
      <el-divider></el-divider>
      <div class="line">
        <p>用户名:</p>
        <el-input
          v-model="username"
          @keyup.enter.native="login"
          placeholder="请输入用户名"
          maxlength="16"
          show-word-limit
        ></el-input>
      </div>
      <div class="line">
        <p>密码:</p>
        <el-input
          v-model="password"
          @keyup.enter.native="login"
          placeholder="请输入密码"
          show-password
          maxlength="18"
          show-word-limit
        ></el-input>
      </div>
      <div id="bottom">
        <el-button @click="login">登录</el-button>
        <el-button @click="reset">重置</el-button>
      </div>
    </el-card>
    <div id="tip">还没账号？先<el-link @click="toRegister">注册</el-link></div>
  </div>
</template>

<script>
import { login } from "@/network/api";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    toRegister() {
      this.$router.push("/register");
    },
    login() {
      login({
        username: this.username,
        password: this.password
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    reset() {
      (this.username = ""), (this.password = "");
    }
  }
};
</script>

<style lang="less" scoped>
#Login {
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
  align-items: center;
  height: 50px;
  p {
    width: 80px;
  }
}
#bottom {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
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