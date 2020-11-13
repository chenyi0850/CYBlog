<template>
  <el-card id="ArticleContent">
    <div id="head">
      <el-avatar
        :size="50"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        @error="errorHandler"
      >
      </el-avatar>
      <div id="info">
        <div id="name">我的name</div>
        <div id="time">{{ time }}</div>
      </div>
    </div>
    <mavon-editor
      id="md"
      :value="content"
      :subfield="false"
      :defaultOpen="'preview'"
      :toolbarsFlag="false"
      :editable="false"
      :scrollStyle="true"
      :ishljs="true"
    />
    <el-divider id="commentArea">评论</el-divider>
    <message-item></message-item>
    <div id="aside">
      <el-tooltip content="写博客" placement="bottom"
        ><div class="asideItem" @click="toWrite">
          <i class="el-icon-edit"></i></div
      ></el-tooltip>
      <el-tooltip content="收藏" placement="bottom"
        ><div class="asideItem" @click="collect">
          <i v-if="isCollected" class="el-icon-star-on"></i
          ><i v-else class="el-icon-star-off"></i></div
      ></el-tooltip>
      <el-tooltip content="评论" placement="bottom"
        ><div class="asideItem" @click="toComment">
          <i
            class="el-icon-chat-line-round
"
          ></i></div
      ></el-tooltip>
    </div>
  </el-card>
</template>

<script>
import MessageItem from "@/components/MessageItem";
import { getArticleDetail } from "@/network/api";

export default {
  name: "ArticleContent",
  components: {
    MessageItem
  },
  data() {
    return {
      isCollected: false,
      time: "2020-11-12 12:39:50",
      content: ""
    };
  },
  methods: {
    errorHandler() {},
    toWrite() {
      this.$router.push("/writeArticle");
    },
    collect() {
      this.isCollected = !this.isCollected;
    },
    toComment() {
      document.getElementById("commentArea").scrollIntoView();
    }
  },
  created() {
    getArticleDetail({
      id: this.$route.query._id
    })
      .then(res => {
        console.log(res);
        this.content = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="less" scoped>
#ArticleContent {
  width: 820px;
  margin: 10px;
}
#head {
  display: flex;
}
#info {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  #name {
    font-weight: bold;
  }
  #time {
    font-size: 14px;
  }
}
#md {
  z-index: 0;
}

#aside {
  position: fixed;
  top: calc(50% - 90px);
  left: 300px;
  width: 50px;
  height: 180px;
  // background-color: #000;
  .asideItem {
    height: 50px;
    background: #fff;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
  .asideItem:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
}
</style>
<style lang="less">
#ArticleContent {
  .el-divider--horizontal {
    margin: 40px 0;
  }
  .el-divider__text {
    font-weight: bold;
  }
  .v-note-wrapper {
    box-shadow: none !important;
  }
  .v-show-content {
    background-color: #fff !important;
    padding: 10px 10px;
  }
}
</style>