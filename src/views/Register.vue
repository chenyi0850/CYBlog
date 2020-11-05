<template>
  <div id="Register">
    <el-card id="card">
      <h2>注册</h2>
      <el-divider></el-divider>
      <div class="line">
        <p>用户名:</p>
        <el-input
          v-model="username"
          @keyup.enter.native="register"
          placeholder="请输入用户名"
          maxlength="16"
          show-word-limit
        ></el-input>
      </div>
      <div class="line">
        <p>密码:</p>
        <el-input
          v-model="password"
          @keyup.enter.native="register"
          placeholder="请输入密码"
          show-password
          maxlength="18"
          show-word-limit
        ></el-input>
      </div>
      <div class="line">
        <p>确认密码:</p>
        <el-input
          v-model="confirmPassword"
          @keyup.enter.native="register"
          placeholder="请再次输入密码"
          show-password
          maxlength="18"
          show-word-limit
        ></el-input>
      </div>
      <div class="line">
        <p>邮箱:</p>
        <el-input
          v-model="email"
          @keyup.enter.native="register"
          placeholder="请输入邮箱"
        ></el-input>
      </div>
      <div class="line">
        <p>手机号:</p>
        <el-input
          v-model="phoneNum"
          @keyup.enter.native="register"
          placeholder="请输入手机号"
          maxlength="11"
          show-word-limit
        ></el-input>
      </div>
      <div id="bottom">
        <el-button @click="register">注册</el-button>
        <el-button @click="reset">重置</el-button>
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
      confirmPassword: "",
      email: "",
      phoneNum: ""
    };
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
    inputInspect(name, string, reg) {
      if (!string) {
        this.$message({
          message: `${name}不能为空`,
          type: "warning"
        });
        return false;
      }
      if (!reg.test(string)) {
        if (name === "用户名") {
          this.$message({
            message:
              "用户名只能以字母开头，长度在5~16之间，只能由字母，数字，下划线组成",
            type: "warning"
          });
        }
        if (name === "密码") {
          this.$message({
            message:
              "密码需要以字母开头，长度在6~18之间，只能包含字母、数字和下划线",
            type: "warning"
          });
        }
        if (name === "邮箱") {
          this.$message({
            message: "邮箱格式错误",
            type: "warning"
          });
        }
        if (name === "手机号") {
          this.$message({
            message: "手机号格式错误",
            type: "warning"
          });
        }
        return false;
      }
      return true;
    },
    register() {
      if (
        !this.inputInspect(
          "用户名",
          this.username,
          /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/
        )
      ) {
        return;
      }
      if (!this.inputInspect("密码", this.password, /^[a-zA-Z]\w{5,17}$/)) {
        return;
      }
      if (!(this.password === this.confirmPassword)) {
        this.$message({
          message: "两次密码输入不一致",
          type: "warning"
        });
        return;
      }
      if (
        !this.inputInspect(
          "邮箱",
          this.email,
          /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        )
      ) {
        return;
      }
      if (!this.inputInspect("手机号", this.phoneNum, /^[1]+[0-9]{10}$/)) {
        return;
      }

      register({
        username: this.username,
        password: this.password,
        email: this.email,
        phoneNum: this.phoneNum
      })
        .then(res => {
          console.log(res);
          this.$message({
            message: "注册成功",
            type: "success"
          });
          this.$router.push("/login");
        })
        .catch(err => console.log(err));
    },
    reset() {
      this.username = "";
      this.password = "";
      this.email = "";
      this.phoneNum = "";
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
  align-items: center;
  height: 50px;
  p {
    width: 100px;
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