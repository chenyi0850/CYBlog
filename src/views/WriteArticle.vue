<template>
  <div id="WriteArticle">
    <mavon-editor id="editor" v-model="value" />
    <el-button id="saveBtn" @click="save">保存</el-button>
  </div>
</template>

<script>
export default {
  name: "WriteArticle",
  data() {
    return {
      value: ""
    };
  },
  methods: {
    save() {
      console.log(this.value)
    }
  }
};
</script>

<style lang="less" scoped>
#WriteArticle {
  padding-top: 10px;
}
#saveBtn {
  display: block;
  margin: 10px auto;
}
</style>
<style>
html {
  height: 100%;
}
body {
  height: calc(100% - 150px);
}
#app,
article,
#WriteArticle,
#editor {
  height: 100%;
}
</style>