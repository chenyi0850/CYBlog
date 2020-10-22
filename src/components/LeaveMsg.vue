<template>
  <el-card id="LeaveMsg">
    <div id="cardBody">
      <comment-editor :buttonText="buttonText"></comment-editor>
    </div>
  </el-card>
</template>

<script>
import CommentEditor from "comment-message-editor";
export default {
  name: "LeaveMsg",
  components: {
    CommentEditor
  },
  data() {
    return {
      buttonText: "登录后评论"
    };
  },
  methods: {
    onInput() {}
  }
};
</script>

<style lang="less">
#LeaveMsg {
  margin: 10px;
  width: 800px;
  #cardBody {
    display: flex;
  }
  .comment-editor {
    width: 100%;
    // height: 200px;
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
    align-items: flex-end;
  }
  .submit-tiptext {
    display: block;
    height: 33px;
    line-height: 33px;
  }
}
</style>