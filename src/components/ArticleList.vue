<template>
  <div>
    <ArticleItem />
  </div>
</template>

<script>
import ArticleItem from "./ArticleItem";
export default {
  name: "ArticleList",
  data() {
    return {};
  },
  components: {
    ArticleItem
  }
};
</script>

<style lang="less" scoped>
div {
    width: 800px;
    height: 100%;
    background: green;
}
</style>