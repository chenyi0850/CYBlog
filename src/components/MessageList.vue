<template>
  <div id="MessageList">
    <message-item></message-item>
    <Comment></Comment>
  </div>
</template>

<script>
import MessageItem from "./MessageItem";
import Comment from "./Comment"
export default {
  name: "MeaasgeList",
  components: {
    MessageItem,
    Comment
  }
};
</script>

<style lang="less" scoped>
#MessageList {
  width: 820px;
}
</style>