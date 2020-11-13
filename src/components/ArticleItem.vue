<template>
  <div id="ArticleItem">
    <!-- <el-link type="primary" :underline="false" style="font-size: 25px">{{
      itemData.title
    }}</el-link>
    <p>
      {{ itemData.content }}
    </p> -->
    <mavon-editor
      id="md"
      :value="itemData.content"
      :subfield="false"
      :defaultOpen="'preview'"
      :toolbarsFlag="false"
      :editable="false"
      :ishljs="true"
    />
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
  // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: 10px;
  // background:#EBEEF5;
  background: #ffffff;
}
#ArticleItem:hover {
  // box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
// p {
//   font-size: 16px;
//   margin-top: 10px;
//   height: 128px;
//   overflow: hidden;
//   line-height: 25px;
// }
#itemFooter {
  margin-top: 10px;
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#time {
  margin-right: 10px;
}
</style>
<style lang="less">
#ArticleItem {
  .v-note-wrapper {
    z-index: 0 !important;
    min-height: 170px !important;
    height: 170px;
    box-shadow: none !important;
  }
  .v-show-content {
    padding: 0 !important;
    background-color: #fff !important;
    overflow: hidden;
    * {
      margin: 0;
      border: 0;
    }
  }
}
</style>