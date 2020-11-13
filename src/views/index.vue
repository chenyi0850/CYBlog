<template>
  <div id="index">
    <article-list></article-list>
    <card-list>最新文章</card-list>
  </div>
</template>

<script>
import ArticleList from "@/components/ArticleList.vue";
import CardList from "@/components/CardList.vue";
export default {
  name: "index",
  components: {
    ArticleList,
    CardList
  },
  data() {
    return {
    };
  }
};
</script>

<style lang="less" scoped>
#index {
  display: flex;
  // height: 100%;
}
</style>