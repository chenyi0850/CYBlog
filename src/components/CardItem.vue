<template>
  <div id="CardItem">
    <h4><slot></slot></h4>
    <ul>
      <li><el-link class="link" href="https://github.com/chenyi0850" target="_blank">我的github</el-link></li>
      <li><el-link class="link" href="https://github.com/chenyi0850" target="_blank">我的github</el-link></li>
      <li><el-link class="link" href="https://github.com/chenyi0850" target="_blank">我的github</el-link></li>
      <li><el-link class="link" href="https://github.com/chenyi0850" target="_blank">我的github</el-link></li>
      <li><el-link class="link" href="https://github.com/chenyi0850" target="_blank">我的github</el-link></li>
      <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#CardItem {
  width: 260px;
  height: 260px;
  margin: 10px;
  background: #ebeef5;
  padding: 40px;
  /* display: flex;
  flex-direction: column; */
}
#CardItem:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
h4 {
  height: 40px;
}
ul {
  list-style-type: none;
  li {
    height: 30px;
  }
}
</style>