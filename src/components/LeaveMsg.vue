<template>
  <el-card id="LeaveMsg">
    <div id="cardBody">
      <comment-editor
        :buttonText="buttonText"
        @submit="comment"
      ></comment-editor>
    </div>
  </el-card>
</template>

<script>
import CommentEditor from "comment-message-editor";
import { formatDate } from "@/tools/formatDate";
import { addMessage } from "@/network/api";
export default {
  name: "LeaveMsg",
  components: {
    CommentEditor,
  },
  data() {
    return {
      buttonText: "登录后评论",
    };
  },
  methods: {
    async comment(content) {
      const result = await addMessage({
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