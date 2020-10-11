<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <Header/>
    <article>
      <router-view></router-view>
    </article>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  // box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #E6E6E6;
  // text-align: center;
  // color: #76a8db;
}

article {
  margin: 62px auto 0;
  width: 1200px;
  background:#EBEEF5;
  height: 2000px;
}
// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
