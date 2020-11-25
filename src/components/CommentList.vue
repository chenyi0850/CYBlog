<template>
  <div id="CommentList">
    <comment-editor :inline="true" @submit="comment"></comment-editor>
    <comment-item
      v-for="item in commentItems"
      :key="item._id"
      :itemData="item"
    ></comment-item>
  </div>
</template>

<script>
import CommentEditor from "comment-message-editor";
import CommentItem from "./CommentItem";
import { formatDate } from "@/tools/formatDate";
import { addComment, getComments } from "@/network/api";
export default {
  name: "CommentList",
  components: {
    CommentEditor,
    CommentItem,
  },
  props: {
      articleId: String
  },
  data() {
    return {
      commentItems: [],
    };
  },
  methods: {
    async getComments(articleId) {
      const res = await getComments({
        articleId,
      });
      this.commentItems = res.data;
      console.log(this.commentItems)
    },
    async comment(content) {
      const result = await addComment({
        articleId: this.articleId,
        content,
        author: "admin",
        time: formatDate(new Date()),
      });
      console.log(result);
      if (result.data === "保存成功") {
        this.$message({
          message: "评论成功",
          type: "success",
        });
        location.reload();
      }
    },
  },
  created() {
    this.getComments(this.articleId);
  },
};
</script>

<style>
</style>