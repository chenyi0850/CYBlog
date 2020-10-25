<template>
  <el-card id="UserBehavior">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="我的动态" name="first">
        <Timeline/>
      </el-tab-pane>
      <el-tab-pane label="我的博客" name="second">我的博客</el-tab-pane>
      <el-tab-pane label="我的随笔" name="third">我的随笔</el-tab-pane>
      <el-tab-pane label="我评论的" name="fourth">我评论的</el-tab-pane>
      <el-tab-pane label="我的收藏" name="fifth">我的收藏</el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import Timeline from "@/views/Timeline"
export default {
  name: "UserBehavior",
  components: {
    Timeline
  },
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="less" scoped>
#UserBehavior {
  width: 820px;
  margin: 10px;
}
</style>