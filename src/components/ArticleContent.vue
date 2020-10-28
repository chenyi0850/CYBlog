<template>
  <el-card id="ArticleContent">
    <div id="head">
      <el-avatar
        :size="50"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        @error="errorHandler"
      >
      </el-avatar>
      <div id="info">
        <div id="name">我的name</div>
        <div id="time">2020年10月21日 9:50</div>
      </div>
    </div>
    <h1>这是博客的标题</h1>
    <p>
      二话不说 轮子我都会造 还怕你面试问吗？ 一天造一个轮子，干就完了。 看点
      针对大厂笔试、面试必考手写题目TDD方式开发配合视频讲解 造轮子计划
      （计划赶不上变化 随时迭代 欢迎留言 随时摸鱼） 框架基础
      模板引擎防抖、节流数据响应式统一状态管理时间旅行洋葱圈ComposeFlux模式PromiseThunkHTML编译器Pipe管道原生Ajax
      JS基础 Promise.all/race路由newcall/apply/bindObject.create深拷贝、浅拷贝
      算法、设计模式
      二分查找快排二分查找冒泡排序选择排序订阅发布斐波那契算法去重 时间旅行
      时间旅行就是让程序可以在自己历史状态里面任意穿梭，想想Office和PS软件中的Undo和Redo就知道。再想想王者荣耀的录像功能。
      时间旅行实际上就是设计模式中的备忘录模式。这个到我们可以练习设计模式的时候再升华，先不在这里强行渡劫。
      首先Redux为时间旅行做了基础性工作，首先所有组件上缴了状态，地主家不存余粮,然后使用纯函数加工数据，不存在秘方和小料，保证了加工结果的可预测性。
      然后要做的就是找一个容器我们可以叫做历史和时间轴，把状态变更的历史存储起来。把状态分为三个时间段：
      过去 (过去状态数组)现在（只有一个状态）将来 (将来状态数组)gotoState
      函数则是用来做时间旅行的，把过去、现在、将来重新分配 作者：全栈然叔
      链接：https://juejin.im/post/6887844088335302670 来源：掘金
      著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
      二话不说 轮子我都会造 还怕你面试问吗？ 一天造一个轮子，干就完了。 看点
      针对大厂笔试、面试必考手写题目TDD方式开发配合视频讲解 造轮子计划
      （计划赶不上变化 随时迭代 欢迎留言 随时摸鱼） 框架基础
      模板引擎防抖、节流数据响应式统一状态管理时间旅行洋葱圈ComposeFlux模式PromiseThunkHTML编译器Pipe管道原生Ajax
      JS基础 Promise.all/race路由newcall/apply/bindObject.create深拷贝、浅拷贝
      算法、设计模式
      二分查找快排二分查找冒泡排序选择排序订阅发布斐波那契算法去重 时间旅行
      时间旅行就是让程序可以在自己历史状态里面任意穿梭，想想Office和PS软件中的Undo和Redo就知道。再想想王者荣耀的录像功能。
      时间旅行实际上就是设计模式中的备忘录模式。这个到我们可以练习设计模式的时候再升华，先不在这里强行渡劫。
      首先Redux为时间旅行做了基础性工作，首先所有组件上缴了状态，地主家不存余粮,然后使用纯函数加工数据，不存在秘方和小料，保证了加工结果的可预测性。
      然后要做的就是找一个容器我们可以叫做历史和时间轴，把状态变更的历史存储起来。把状态分为三个时间段：
      过去 (过去状态数组)现在（只有一个状态）将来 (将来状态数组)gotoState
      函数则是用来做时间旅行的，把过去、现在、将来重新分配 作者：全栈然叔
      链接：https://juejin.im/post/6887844088335302670 来源：掘金
      著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
    </p>
    <el-divider id="commentArea">评论</el-divider>
    <message-item></message-item>
    <div id="aside">
      <el-tooltip content="写博客" placement="bottom"
        ><div class="asideItem" @click="toWrite"><i class="el-icon-edit"></i></div
      ></el-tooltip>
      <el-tooltip content="收藏" placement="bottom"
        ><div class="asideItem" @click="collect">
          <i v-if="isCollected" class="el-icon-star-on"></i
          ><i v-else class="el-icon-star-off"></i></div
      ></el-tooltip>
      <el-tooltip content="评论" placement="bottom"
        ><div class="asideItem" @click="toComment">
          <i
            class="el-icon-chat-line-round
"
          ></i></div
      ></el-tooltip>
    </div>
  </el-card>
</template>

<script>
import MessageItem from "@/components/MessageItem";
export default {
  name: "ArticleContent",
  components: {
    MessageItem
  },
  data() {
    return {
      isCollected: false
    };
  },
  methods: {
    errorHandler() {},
    toWrite() {
        this.$router.push("/writeArticle")
    },
    collect() {
        this.isCollected = !this.isCollected
    },
    toComment() {
        document.getElementById("commentArea").scrollIntoView();
    }
  }
};
</script>

<style lang="less" scoped>
#ArticleContent {
  width: 820px;
  margin: 10px;
}
#head {
  display: flex;
}
#info {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  #name {
    font-weight: bold;
  }
  #time {
    font-size: 14px;
  }
}
h1 {
  margin: 20px 0;
}
p {
    line-height: 25px;
}
#aside {
  position: fixed;
  top: calc(50% - 90px);
  left: 300px;
  width: 50px;
  height: 180px;
  // background-color: #000;
  .asideItem {
    height: 50px;
    background: #fff;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
  .asideItem:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
}
</style>
<style lang="less">
#ArticleContent {
  .el-divider--horizontal {
    margin: 40px 0;
  }
  .el-divider__text {
    font-weight: bold;
  }
}
</style>