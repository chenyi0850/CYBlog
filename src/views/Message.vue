<template>
  <div id="Message">
    <message-list></message-list>
    <card-list>最新博客</card-list>
  </div>
</template>

<script>
import MessageList from "@/components/MessageList.vue"
import CardList from "@/components/CardList"
export default {
  name: "Message",
  components: {
    MessageList,
    CardList
  }
}
</script>

<style>
#Message {
  display: flex;
}
</style>