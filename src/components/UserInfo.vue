<template>
  <el-card id="UserInfo">
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :with-credentials="true"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <div class="info" style="margin-top: 10px">
      <p class="infoName">用户名:</p>
      <input
        class="infoContent"
        disabled
        v-model="userName"
        ref="userName"
        @blur="blur"
      />
      <i class="el-icon-edit" @click="edit(1)"></i>
    </div>
    <el-divider></el-divider>
    <div class="info">
      <p class="infoName">昵称:</p>
      <input
        class="infoContent"
        disabled
        v-model="nick"
        ref="nick"
        @blur="blur"
      />
      <i class="el-icon-edit" @click="edit(2)"></i>
    </div>
    <el-divider></el-divider>
    <div class="info">
      <p class="infoName">密码:</p>
      <input
        class="infoContent"
        v-model="password"
        type="password"
        ref="password"
        disabled
        @blur="blur"
      />
      <i class="el-icon-edit" @click="edit(3)"></i>
    </div>
    <el-divider></el-divider>
    <div class="info">
      <p class="infoName">邮箱:</p>
      <input
        class="infoContent"
        v-model="email"
        disabled
        type="email"
        ref="email"
        @blur="blur"
      />
      <i class="el-icon-edit" @click="edit(4)"></i>
    </div>
    <el-divider></el-divider>
    <div class="info">
      <p class="infoName">手机号:</p>
      <input
        class="infoContent"
        v-model="phoneNum"
        disabled
        ref="phoneNum"
        @blur="blur"
      />
      <i class="el-icon-edit" @click="edit(5)"></i>
    </div>
    <el-divider></el-divider>
  </el-card>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {
      imageUrl: "",
      userName: "我是用户名",
      nick: "我是昵称",
      password: "123456789",
      email: "1203652778@qq.com",
      phoneNum: "15860160850"
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    edit(type) {
      switch (type) {
        case 1: {
          this.$refs.userName.disabled = !this.$refs.userName.disabled;
          this.$refs.userName.select();
          document.getElementsByClassName("el-divider--horizontal")[0].style.backgroundColor = "#409eff"
          break;
        }
        case 2: {
          this.$refs.nick.disabled = !this.$refs.nick.disabled;
          this.$refs.nick.select();
          document.getElementsByClassName("el-divider--horizontal")[1].style.backgroundColor = "#409eff"
          break;
        }
        case 3: {
          this.$refs.password.disabled = !this.$refs.password.disabled;
          this.$refs.password.select();
          document.getElementsByClassName("el-divider--horizontal")[2].style.backgroundColor = "#409eff"
          break;
        }
        case 4: {
          this.$refs.email.disabled = !this.$refs.email.disabled;
          this.$refs.email.select();
          document.getElementsByClassName("el-divider--horizontal")[3].style.backgroundColor = "#409eff"
          break;
        }
        case 5: {
          this.$refs.phoneNum.disabled = !this.$refs.phoneNum.disabled;
          this.$refs.phoneNum.select();
          document.getElementsByClassName("el-divider--horizontal")[4].style.backgroundColor = "#409eff"
          break;
        }
      }
    },
    blur(e) {
      e.target.disabled = true;
      document.getElementsByClassName("el-divider--horizontal").forEach(val => val.style.backgroundColor = "#DCDFE6")
    }
  }
};
</script>

<style lang="less" scoped>
#UserInfo {
  width: 380px;
  margin: 10px;
}
.info {
  // height: 40px;
  display: flex;
  align-items: center;
  .infoName {
    width: 60px;
  }
  .infoContent {
    width: 250px;
    border: none;
    outline: none;
    font: inherit;
    background: transparent;
    // -webkit-appearance: none
    // border-bottom: 1px solid #000;
  }
}
</style>
<style lang="less">
#UserInfo {
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .el-upload {
    margin: 0 auto;
    width: 180px;
    display: block;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-divider {
    margin: 10px 0;
  }
  .el-divider-focus {
    height: 2px;
    background-color: red;
  }
  .el-icon-edit:hover {
    color: #5cb6ff;
    cursor: pointer;
  }
}
</style>