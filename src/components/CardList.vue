<template>
  <div id="CardList">
    <CardItem />
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
    width: 400px;
    height: 100%;
    background: red;
}
</style>