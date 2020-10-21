<template>
  <div id="CardList">
    <card-item><i class="el-icon-paperclip"></i> 友情链接</card-item>
    <card-item><i class="el-icon-document"></i> <slot></slot></card-item>
  </div>
</template>

<script>
import CardItem from "./CardItem.vue"
export default {
  name: "CardList",
  data() {
    return {};
  },
  components: {
    CardItem
  }
};
</script>

<style lang="less" scoped>
#CardList {
    width: 380px;
    // height: 100%;
    // background: red;
}
</style>