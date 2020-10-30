<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <el-menu-item style="width: calc(50% - 600px)"
      ><i class="el-icon-paperclip"></i>BLOG</el-menu-item
    >
    <el-menu-item index="index">首页</el-menu-item>
    <el-menu-item index="essay">随笔</el-menu-item>
    <el-menu-item index="timeline">时间轴</el-menu-item>
    <el-menu-item index="message">留言</el-menu-item>
    <el-menu-item index="about">关于</el-menu-item>
    <el-submenu index="writeArticle">
      <template slot="title">{{ writeTitle }}</template>
      <el-menu-item index="writeArticle">写博客</el-menu-item>
      <el-menu-item index="writeEssay">写随笔</el-menu-item>
    </el-submenu>
    <el-menu-item style="margin-left: 350px"
      ><el-input
        placeholder="请输入内容"
        v-model="input3"
        class="input-with-select"
        style="width: 273px"
      >
        <el-button slot="append" icon="el-icon-search"></el-button> </el-input
    ></el-menu-item>

    <el-menu-item index="user"
      ><el-avatar size="small" :src="circleUrl"></el-avatar
    ></el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "index",
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      input3: "",
      writeTitle: "写博客"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      if(key == "writeArticle") {
        this.writeTitle = "写博客"
      } else {
        this.writeTitle = "写随笔"
      }
    }
  }
};
</script>

<style lang="less" scoped>
.el-menu-demo {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60.75px;
  z-index: 1000;
}
</style>