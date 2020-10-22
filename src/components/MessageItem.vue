<template>
  <el-card style="margin: 10px">
    <div id="MessageItem">
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
          <div id="name">我的name</div>
          <div id="time">2020年10月21日 9:50</div>
        </div>
        <div id="text">
          这个简写属性用于一次设置元素字体的两个或更多方面。使用 icon
          等关键字可以适当地设置元素的字体，使之与用户计算机环境中的某个方面一致。注意，如果没有使用这些关键词，至少要指定字体大小和字体系列。
        </div>
        <div id="bottom">
          <img
            :src="zanUrl"
            alt="点赞"
            @mouseover="changeZanImg(true)"
            @mouseout="changeZanImg(false)"
            @click="clickZan"
          />
          <p v-if="haveZan">{{ zanNum }}</p>
          <img
            :src="caiUrl"
            alt="点灭"
            @mouseover="changeCaiImg(true)"
            @mouseout="changeCaiImg(false)"
            @click="clickCai"
          />
          <p v-if="haveCai">{{ caiNum }}</p>
          <el-link @click="reply" style="margin-left:20px">回复</el-link>
        </div>
        <transition name="el-zoom-in-top">
          <comment-editor :buttonText="buttonText" v-show="showReply"></comment-editor>
        </transition>
      </div>
    </div>
  </el-card>
</template>

<script>
import CommentEditor from "comment-message-editor";
export default {
  name: "MessageItem",
  components: {
    CommentEditor
  },
  data() {
    return {
      zanUrl: require("@/assets/zan-l.png"),
      caiUrl: require("@/assets/cai-l.png"),
      zanNum: 1, //点赞数量
      caiNum: 30, //点灭数量
      haveZan: false, //是否有赞
      haveCai: false, //是否有灭
      zanFlag: false, //判断是否是点过赞的状态
      caiFlag: false, //判断是否是点过灭的状态
      showReply: false, //是否显示回复输入框
      buttonText: "回复"
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
    clickZan() {
      if (!this.zanFlag) {
        this.zanNum++;
        this.zanFlag = true;
        this.zanUrl = require("@/assets/zan-f.png");
        this.haveZan = true;
      } else {
        this.zanNum--;
        this.zanFlag = false;
        this.zanUrl = require("@/assets/zan-l.png");
        if (this.zanNum === 0) {
          this.haveZan = false;
        }
      }
    },
    clickCai() {
      if (!this.caiFlag) {
        this.caiNum++;
        this.caiFlag = true;
        this.caiUrl = require("@/assets/cai-f.png");
        this.haveCai = true;
      } else {
        this.caiNum--;
        this.caiFlag = false;
        this.caiUrl = require("@/assets/cai-l.png");
        if (this.haveCai === 0) {
          this.haveCai = false;
        }
      }
    },
    reply() {
      this.showReply = !this.showReply;
    },
    replyBlur() {
      this.showReply = false;
    }
  },
  created() {
    if (this.zanNum !== 0) {
      this.haveZan = true;
    }
    if (this.caiNum !== 0) {
      this.haveCai = true;
    }
  }
};
</script>

<style lang="less" scoped>
#MessageItem {
  //   margin: 10px;
  display: flex;
}
#content {
  width: 100%;
  //   background: cadetblue;
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
#MessageItem {
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
}
</style>