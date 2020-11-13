<template>
  <div id="WriteArticle">
    <mavon-editor id="editor" v-model="value" />
    <el-button id="saveBtn" @click="save">发表</el-button>
  </div>
</template>

<script>
import { addArticle } from "@/network/api";
import { formatDate } from "@/tools/formatDate"
export default {
  name: "WriteArticle",
  data() {
    return {
      value: ""
    };
  },
  methods: {
    async save() {
      // console.log(this.value.substring(0, this.value.indexOf("\r")))
      const result = await addArticle({
        content: this.value,
        author: "admin",
        time: formatDate(new Date())
      })
      console.log(result)
      if(result.data === "保存成功") {
        this.$message({
          message: '发表成功',
          type: 'success'
        });
        this.$router.push("/index")
      }
    },
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