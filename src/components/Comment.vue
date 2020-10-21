<template>
  <el-card id="Comment">
    <el-input
      id="textarea"
      type="textarea"
      placeholder="请输入内容"
      v-model="textarea"
      maxlength="300"
      show-word-limit
      rows="4"
    >
    </el-input>
    <el-button type="info" size="medium" style="margin: 10px auto 0; display: block">登录后留言</el-button>
  </el-card>
</template>

<script>
export default {
  name: "Comment",
  data() {
    return {
      textarea: ""
    };
  }
};
</script>

<style lang="less">
#Comment {
  position: fixed;
  bottom: 10px;
  margin: 10px;
  width: 800px;
}
#textarea {
  resize: none;
}
</style>