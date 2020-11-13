<template>
  <div id="ArticleList">
    <article-item
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
import ArticleItem from "./ArticleItem";
import { getArticles } from "@/network/api.js";
export default {
  name: "ArticleList",
  components: {
    ArticleItem
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
    getArticles(skip) {
      getArticles({
        limit: this.limit,
        skip
      }).then(res => {
        console.log(res.data);
        this.articleItems = res.data.articles;
        this.totalItems = res.data.count;
      });
    },
    // 页码改变
    handleCurrentChange(val) {
      this.getArticles((val - 1) * this.limit)
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
    this.getArticles(0)
  }
};
</script>

<style lang="less" scoped>
#ArticleList {
  width: 820px;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
}
</style>