<template>
  <div id="User">
    <user-behavior></user-behavior>
    <user-info></user-info>
  </div>
</template>

<script>
import UserBehavior from "@/components/UserBehavior";
import UserInfo from "@/components/UserInfo"
export default {
  name: "User",
  components: {
    UserBehavior,
    UserInfo
  }
};
</script>

<style lang="less" scoped>
#User {
  display: flex;
}
</style>