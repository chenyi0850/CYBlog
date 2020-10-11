<template>
  <div id="ArticleItem">
    <el-link type="primary" :underline="false" style="font-size: 25px">{{
      itemData.title
    }}</el-link>
    <p>
      {{ itemData.content }}
    </p>
    <div id="itemFooter">
      <div id="time">{{ itemData.time }}</div>
      <div>作者：{{ itemData.author }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleItem",
  data() {
    return {};
  },
  props: {
    itemData: Object
  }
};
</script>

<style lang="less" scoped>
#ArticleItem {
  width: 750px;
  height: 200px;
  padding: 10px 25px 0;
  // background: floralwhite;
}
p {
  font-size: 16px;
  margin-top: 10px;
  height: 128px;
  overflow: hidden;
}
#itemFooter {
  margin-top: 10px;
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
}
#time {
  margin-right: 10px;
}
</style>