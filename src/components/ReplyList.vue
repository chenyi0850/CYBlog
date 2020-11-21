<template>
  <div id="ReplyList">
    <reply-item v-for="item in replyItems" :key="item._id" :itemData="item" />
    <el-link type="primary" v-if="showViewMore" @click="viewMore"
      >查看更多</el-link
    >
  </div>
</template>

<script>
import ReplyItem from "./ReplyItem";
import { getReplies } from "@/network/api";
export default {
  name: "ReplyList",
  components: {
    ReplyItem,
  },
  props: {
    replyId: String,
  },
  data() {
    return {
      replyItems: [],
      totalItems: 0,
      limit: 4,
      skip: 0,
      showViewMore: false,
    };
  },
  methods: {
    async getReplies(skip, id) {
      const res = await getReplies({
        id,
        limit: this.limit,
        skip,
      });
      this.replyItems = this.replyItems.concat(res.data.replies);
      this.skip += 4;
      console.log(this.replyItems);
      this.totalItems = res.data.count;
      if (this.totalItems > 4) {
        this.showViewMore = true;
      }
      if (this.replyItems.length === this.totalItems) {
        this.showViewMore = false;
      }
    },
    viewMore() {
      this.getReplies(this.skip, this.replyId);
    },
  },
  created() {
    this.getReplies(this.skip, this.replyId);
  },
};
</script>

<style lang="less" scoped>
</style>