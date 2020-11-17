<template>
  <div id="MessageList">
    <div id="scroll" v-infinite-scroll="load" style="overflow:auto">
      <message-item
      v-for="item in messageItems"
      :key="item.title"
      :itemData="item"
    />
    </div>
    <leave-msg style="position: fixed; bottom: 10px"></leave-msg>
  </div>
</template>

<script>
import MessageItem from "./MessageItem";
import LeaveMsg from "./LeaveMsg";
import { getMessages } from "@/network/api";
export default {
  name: "MeaasgeList",
  components: {
    MessageItem,
    LeaveMsg,
  },
  data() {
    return {
      messageItems: [],
      totalItems: 0,
      limit: 2,
      skip: 0
    };
  },
  methods: {
    async getMessages(skip) {
      const res = await getMessages({
        limit: this.limit,
        skip,
      });
      this.messageItems = this.messageItems.concat(res.data.messages);
      this.skip += 2
      console.log(this.messageItems);
      this.totalItems = res.data.count;
    },
    load() {
      this.getMessages(this.skip)
    }
  },
  created() {
    // this.getMessages(this.skip)
  },
  mounted() {
    document.getElementsByClassName("submit-button").forEach((val) => {
      val.removeAttribute("disabled");
    });
    document.getElementsByClassName("content").forEach((val) => {
      val.setAttribute("placeholder", "请输入内容");
    });
  },
};
</script>

<style lang="less" scoped>
#MessageList {
  width: 820px;
}
#scroll {
  height: 650px;
}
</style>