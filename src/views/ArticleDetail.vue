<template>
  <div id="ArticleDetail">
    <article-content></article-content>
    <!-- <about-author></about-author> -->
    <card-list></card-list>
  </div>
</template>

<script>
import ArticleContent from "@/components/ArticleContent"
// import AboutAuthor from "@/components/AboutAuthor"
import CardList from "@/components/CardList"
export default {
    name: "ArticleDetail",
    components: {
      ArticleContent,
      CardList
      // AboutAuthor
    }
}
</script>

<style lang="less" scoped>
#ArticleDetail {
  display: flex;
}
</style>