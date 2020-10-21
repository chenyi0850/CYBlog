<template>
  <div id="ArticleList">
    <article-item v-for="item in articleItems" :key="item.title" :itemData="item"/>
    <pagination v-if="isPagiExit"/>
  </div>
</template>

<script>
import ArticleItem from "./ArticleItem";
import Pagination from "./Pagination";
export default {
  name: "ArticleList",
  components: {
    ArticleItem,
    Pagination
  },
  props: {
    articleItems: Array
  },
  data() {
    return {
      isPagiExit: false
    }
  },
  created() {
    if(this.articleItems.length >= 8) this.isPagiExit = true
  }
};
</script>

<style lang="less" scoped>
#ArticleList {
  // margin: 10px;
  width: 820px;
  // height: 100%;
  // background: green;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
}
</style>