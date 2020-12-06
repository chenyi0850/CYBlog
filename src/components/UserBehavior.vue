<template>
  <el-card id="UserBehavior">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="我的博客" name="first">
        <my-article-list></my-article-list>
      </el-tab-pane>
      <el-tab-pane label="我评论的" name="second">
        <my-comment-articles-list></my-comment-articles-list>
      </el-tab-pane>
      <el-tab-pane label="我的收藏" name="third">
        <my-collect-articles-list></my-collect-articles-list>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import MyArticleList from "./MyArticleList";
import MyCommentArticlesList from "./MyCommentArticlesList"
import MyCollectArticlesList from "./MyCollectArticlesList"
export default {
  name: "UserBehavior",
  components: {
    MyArticleList,
    MyCommentArticlesList,
    MyCollectArticlesList
  },
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="less" scoped>
#UserBehavior {
  width: 820px;
  margin: 10px;
}
</style>