<template>
  <div id="MessageList">
    <message-item></message-item>
    <leave-msg style="position: fixed; bottom: 10px;"></leave-msg>
  </div>
</template>

<script>
import MessageItem from "./MessageItem";
import LeaveMsg from "./LeaveMsg"
export default {
  name: "MeaasgeList",
  components: {
    MessageItem,
    LeaveMsg
  },
  mounted() {
    document.getElementsByClassName("submit-button").forEach((val) => {
      val.removeAttribute("disabled")
    })
    document.getElementsByClassName("content").forEach(val => {
      val.setAttribute("placeholder", "请输入内容")
    })
  }
};
</script>

<style lang="less" scoped>
#MessageList {
  width: 820px;
}
</style>