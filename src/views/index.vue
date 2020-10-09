<template>
  <div>
    <ArticleList />
    <CardList />
  </div>
</template>

<script>
import ArticleList from "@/components/ArticleList.vue";
import CardList from "@/components/CardList.vue";
export default {
  name: "index",
  data() {
    return {};
  },
  components: {
    ArticleList,
    CardList
  }
};
</script>

<style lang="less" scoped>
div {
    display: flex;
    height: 100%;
}
</style>