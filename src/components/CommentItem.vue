<template>
  <!-- <el-card style="margin: 10px" v-if="itemData"> -->
  <div id="CommentItem">
    <el-divider></el-divider>
    <div id="headImg">
      <el-avatar
        :size="50"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        @error="errorHandler"
      >
      </el-avatar>
    </div>
    <div id="content">
      <div id="top">
        <div id="name">{{ itemData.author }}</div>
        <div id="time">{{ itemData.time }}</div>
      </div>
      <div id="text" v-html="itemData.content"></div>
      <div id="bottom">
        <img
          :src="zanUrl"
          alt="点赞"
          @mouseover="changeZanImg(true)"
          @mouseout="changeZanImg(false)"
          @click="clickZan(itemData._id)"
        />
        <p v-if="haveZan">{{ itemData.zan }}</p>
        <img
          :src="caiUrl"
          alt="点灭"
          @mouseover="changeCaiImg(true)"
          @mouseout="changeCaiImg(false)"
          @click="clickCai(itemData._id)"
        />
        <p v-if="haveCai">{{ itemData.cai }}</p>
        <el-link @click="clickReply" style="margin-left: 20px">回复</el-link>
      </div>
      <transition name="el-zoom-in-top">
        <comment-editor
          :buttonText="buttonText"
          @submit="reply"
          v-show="showReply"
        ></comment-editor>
      </transition>
      <reply-list :replyId="itemData._id"></reply-list>
    </div>
  </div>
  <!-- </el-card> -->
</template>

<script>
import CommentEditor from "comment-message-editor";
import ReplyList from "@/components/ReplyList";
import { commentZan, commentCai, commentAlreadyZanOrCai, reply } from "@/network/api";
import { formatDate } from "@/tools/formatDate";
export default {
  name: "CommentItem",
  components: {
    CommentEditor,
    ReplyList,
  },
  props: {
    itemData: Object,
  },
  data() {
    return {
      zanUrl: require("@/assets/zan-l.png"),
      caiUrl: require("@/assets/cai-l.png"),
      haveZan: false, //是否有赞
      haveCai: false, //是否有灭
      zanFlag: false, //判断是否是点过赞的状态
      caiFlag: false, //判断是否是点过灭的状态
      showReply: false, //是否显示回复输入框
      buttonText: "回复",
    };
  },
  methods: {
    errorHandler() {},
    //hover改变img
    changeZanImg(isHover) {
      if (this.zanFlag) {
        return;
      }
      if (isHover) {
        this.zanUrl = require("@/assets/zan-f.png");
      } else {
        this.zanUrl = require("@/assets/zan-l.png");
      }
    },
    changeCaiImg(isHover) {
      if (this.caiFlag) {
        return;
      }
      if (isHover) {
        this.caiUrl = require("@/assets/cai-f.png");
      } else {
        this.caiUrl = require("@/assets/cai-l.png");
      }
    },
    //点赞或者点灭
    clickZan(_id) {
      if (!this.zanFlag) {
        commentZan({
          _id,
          username: "admin",
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        this.itemData.zan++;
        this.zanFlag = true;
        this.zanUrl = require("@/assets/zan-f.png");
        this.haveZan = true;
      } else {
        commentZan({
          _id,
          username: "admin",
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        this.itemData.zan--;
        this.zanFlag = false;
        this.zanUrl = require("@/assets/zan-l.png");
        if (this.itemData.zan === 0) {
          this.haveZan = false;
        }
      }
    },
    clickCai(_id) {
      if (!this.caiFlag) {
        commentCai({
          _id,
          username: "admin",
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        this.itemData.cai++;
        this.caiFlag = true;
        this.caiUrl = require("@/assets/cai-f.png");
        this.haveCai = true;
      } else {
        commentCai({
          _id,
          username: "admin",
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        this.itemData.cai--;
        this.caiFlag = false;
        this.caiUrl = require("@/assets/cai-l.png");
        if (this.itemData.cai === 0) {
          this.haveCai = false;
        }
      }
    },
    clickReply() {
      this.showReply = !this.showReply;
    },
    replyBlur() {
      this.showReply = false;
    },
    reply(content) {
      reply({
        id: this.itemData._id,
        content,
        author: "admin",
        toAuthor: "admin2",
        time: formatDate(new Date()),
      })
        .then((res) => {
          console.log(res);
          if (res.data === "保存成功") {
            this.$message({
              message: "回复成功",
              type: "success",
            });
            location.reload();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    commentAlreadyZanOrCai({
      _id: this.itemData._id,
      username: "admin",
    })
      .then((res) => {
        console.log(res);
        this.zanFlag = res.data.zanFlag;
        this.caiFlag = res.data.caiFlag;
        if (this.zanFlag) {
          this.zanUrl = require("@/assets/zan-f.png");
        }
        if (this.caiFlag) {
          this.caiUrl = require("@/assets/cai-f.png");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    if (this.itemData.zan !== 0) {
      this.haveZan = true;
    }
    if (this.itemData.cai !== 0) {
      this.haveCai = true;
    }
  },
};
</script>

<style lang="less" scoped>
#CommentItem {
  display: flex;
  flex-wrap: wrap;
}
#content {
  width: calc(100% - 60px);
  margin-left: 10px;
  #top {
    display: flex;
    justify-content: space-between;
    #name {
      font-weight: bold;
    }
  }
  #text {
    margin-top: 10px;
  }
}
#bottom {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
    margin-left: 20px;
  }
  p {
    color: #606266;
    margin-left: 5px;
  }
}
#bottom img:hover {
  cursor: pointer;
}
</style>
<style lang="less">
#CommentItem {
  .comment-editor {
    margin-top: 10px;
  }
  .content {
    height: 150px;
  }
  .button-text {
    display: none;
  }
  .emoji-picker {
    position: relative !important;
  }
  .footer-action {
    justify-content: space-between;
  }
  .submit-tiptext {
    display: none;
  }
  .el-divider {
    margin: 15px 0;
    width: 100%;
  }
}
</style>