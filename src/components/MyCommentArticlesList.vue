<template>
  <div id="MyArticleList">
    <my-comment-articles-item
      v-for="item in articleItems"
      :key="item.title"
      :itemData="item"
      @click.native="toArticleDetail(item._id)"
    />
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="limit"
      layout="prev, pager, next, jumper"
      background
      :total="totalItems"
      style="text-align: center;"
    >
    </el-pagination>
  </div>
</template>

<script>
import MyCommentArticlesItem from "./MyCommentArticlesItem";
import { getMyArticlesByComment } from "@/network/api.js";
export default {
  name: "MyArticleList",
  components: {
    MyCommentArticlesItem
  },
  data() {
    return {
      currentPage: 1,
      totalItems: 0,
      limit: 8,
      articleItems: []
    };
  },
  methods: {
    // 获取文章列表请求
    getMyArticlesByComment(skip) {
      getMyArticlesByComment({
        limit: this.limit,
        skip,
        author: "admin"
      }).then(res => {
        console.log(res.data);
        this.articleItems = res.data.articles;
        this.totalItems = res.data.count;
      });
    },
    // 页码改变
    handleCurrentChange(val) {
      this.getMyArticlesByComment((val - 1) * this.limit)
    },
    toArticleDetail(_id) {
      console.log(_id);
      this.$router.push({
        name: "ArticleDetail",
        query: {
          _id
        }
      });
    }
  },
  created() {
    this.getMyArticlesByComment(0)
  }
};
</script>

<style lang="less" scoped>
#MyArticleList {
  width: 820px;
  display: flex;
  flex-direction: column; 
  padding-bottom: 20px;
}
</style>