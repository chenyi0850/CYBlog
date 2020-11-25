<template>
  <div id="WriteArticle">
    <mavon-editor
      id="editor"
      v-model="value"
      ref="md"
      @imgAdd="$imgAdd"
      @imgDel="$imgDel"
    />
    <el-button id="saveBtn" @click="save">发表</el-button>
  </div>
</template>

<script>
import { addArticle, uploadImg } from "@/network/api";
import { formatDate } from "@/tools/formatDate";
export default {
  name: "WriteArticle",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    // 绑定@imgAdd event
    $imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      var formdata = new FormData();
      formdata.append("image", $file);
      console.log(formdata)
      uploadImg( formdata ).then((res) => {
        console.log(res)
        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        /**
         * $vm 指为mavonEditor实例，可以通过如下两种方式获取
         * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
         * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
         */
        this.$refs.md.$img2Url(pos, res.data);
      });
    },
    $imgDel(pos) {
      delete this.img_file[pos];
    },
    async save() {
      // console.log(this.value.substring(0, this.value.indexOf("\r")))
      const result = await addArticle({
        content: this.value,
        author: "admin",
        time: formatDate(new Date()),
      });
      console.log(result);
      if (result.data === "保存成功") {
        this.$message({
          message: "发表成功",
          type: "success",
        });
        this.$router.push("/index");
      }
    },
  },
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