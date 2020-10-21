<template>
  <div id="Essay">
    <article-list :articleItems="articleItems"></article-list>
    <card-list>最新随笔</card-list>
  </div>
</template>

<script>
import ArticleList from "@/components/ArticleList.vue";
import CardList from "@/components/CardList.vue";
export default {
  name: "Essay",
  components: {
    ArticleList,
    CardList
  },
  data() {
    return {
      articleItems: [
        {
          title: "随笔",
          content: `版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA
      版权协议，转载请附上原文出处链接和本声明。
      本文链接：https://blog.csdn.net/qappleh/article/details/80975368
      刚刚开始的小伙伴是不是空格报错少一行报错各种错？是不是觉得快被限制的失去了自由的思绪了？受折磨后找到了不错的文章来取消eslint语法检测限制，作为学习笔记摘自segmentfault
      其实我并不反对这些语法检测，但是像许多反个人意愿的那就真的不得不吐槽了，比如vue-cli脚手架创建的默认eslint规则：
      代码末尾不能加分号 ; 代码中不能存在多行空行
      tab键不能使用，必须换成两个空格 代码中不能存在声明了但未使用的变量
      以上规则个人认为真的反人类！调试代码太难了。 关闭eslint
      这里只说vue-cli脚手架的关闭方法，其实很简单，就是把
      build/webpack.base.conf.js 配置文件中的eslint rules注释掉即可。`,
          time: "2020年10月9日 23时23分",
          author: "111111"
        },
        {
          title: "随笔2",
          content: `2版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA
      版权协议，转载请附上原文出处链接和本声明。
      本文链接：https://blog.csdn.net/qappleh/article/details/80975368
      刚刚开始的小伙伴是不是空格报错少一行报错各种错？是不是觉得快被限制的失去了自由的思绪了？受折磨后找到了不错的文章来取消eslint语法检测限制，作为学习笔记摘自segmentfault
      其实我并不反对这些语法检测，但是像许多反个人意愿的那就真的不得不吐槽了，比如vue-cli脚手架创建的默认eslint规则：
      代码末尾不能加分号 ; 代码中不能存在多行空行
      tab键不能使用，必须换成两个空格 代码中不能存在声明了但未使用的变量
      以上规则个人认为真的反人类！调试代码太难了。 关闭eslint
      这里只说vue-cli脚手架的关闭方法，其实很简单，就是把
      build/webpack.base.conf.js 配置文件中的eslint rules注释掉即可。`,
          time: "2020年10月9日 23时23分",
          author: "111111"
        },
        {
          title: "随笔3",
          content: `3版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA
      版权协议，转载请附上原文出处链接和本声明。
      本文链接：https://blog.csdn.net/qappleh/article/details/80975368
      刚刚开始的小伙伴是不是空格报错少一行报错各种错？是不是觉得快被限制的失去了自由的思绪了？受折磨后找到了不错的文章来取消eslint语法检测限制，作为学习笔记摘自segmentfault
      其实我并不反对这些语法检测，但是像许多反个人意愿的那就真的不得不吐槽了，比如vue-cli脚手架创建的默认eslint规则：
      代码末尾不能加分号 ; 代码中不能存在多行空行
      tab键不能使用，必须换成两个空格 代码中不能存在声明了但未使用的变量
      以上规则个人认为真的反人类！调试代码太难了。 关闭eslint
      这里只说vue-cli脚手架的关闭方法，其实很简单，就是把
      build/webpack.base.conf.js 配置文件中的eslint rules注释掉即可。`,
          time: "2020年10月9日 23时23分",
          author: "111111"
        },
        {
          title: "随笔4",
          content: `3版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA
      版权协议，转载请附上原文出处链接和本声明。
      本文链接：https://blog.csdn.net/qappleh/article/details/80975368
      刚刚开始的小伙伴是不是空格报错少一行报错各种错？是不是觉得快被限制的失去了自由的思绪了？受折磨后找到了不错的文章来取消eslint语法检测限制，作为学习笔记摘自segmentfault
      其实我并不反对这些语法检测，但是像许多反个人意愿的那就真的不得不吐槽了，比如vue-cli脚手架创建的默认eslint规则：
      代码末尾不能加分号 ; 代码中不能存在多行空行
      tab键不能使用，必须换成两个空格 代码中不能存在声明了但未使用的变量
      以上规则个人认为真的反人类！调试代码太难了。 关闭eslint
      这里只说vue-cli脚手架的关闭方法，其实很简单，就是把
      build/webpack.base.conf.js 配置文件中的eslint rules注释掉即可。`,
          time: "2020年10月9日 23时23分",
          author: "111111"
        },
        {
          title: "随笔5",
          content: `3版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA
      版权协议，转载请附上原文出处链接和本声明。
      本文链接：https://blog.csdn.net/qappleh/article/details/80975368
      刚刚开始的小伙伴是不是空格报错少一行报错各种错？是不是觉得快被限制的失去了自由的思绪了？受折磨后找到了不错的文章来取消eslint语法检测限制，作为学习笔记摘自segmentfault
      其实我并不反对这些语法检测，但是像许多反个人意愿的那就真的不得不吐槽了，比如vue-cli脚手架创建的默认eslint规则：
      代码末尾不能加分号 ; 代码中不能存在多行空行
      tab键不能使用，必须换成两个空格 代码中不能存在声明了但未使用的变量
      以上规则个人认为真的反人类！调试代码太难了。 关闭eslint
      这里只说vue-cli脚手架的关闭方法，其实很简单，就是把
      build/webpack.base.conf.js 配置文件中的eslint rules注释掉即可。`,
          time: "2020年10月9日 23时23分",
          author: "111111"
        },
        {
          title: "随笔6",
          content: `3版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA
      版权协议，转载请附上原文出处链接和本声明。
      本文链接：https://blog.csdn.net/qappleh/article/details/80975368
      刚刚开始的小伙伴是不是空格报错少一行报错各种错？是不是觉得快被限制的失去了自由的思绪了？受折磨后找到了不错的文章来取消eslint语法检测限制，作为学习笔记摘自segmentfault
      其实我并不反对这些语法检测，但是像许多反个人意愿的那就真的不得不吐槽了，比如vue-cli脚手架创建的默认eslint规则：
      代码末尾不能加分号 ; 代码中不能存在多行空行
      tab键不能使用，必须换成两个空格 代码中不能存在声明了但未使用的变量
      以上规则个人认为真的反人类！调试代码太难了。 关闭eslint
      这里只说vue-cli脚手架的关闭方法，其实很简单，就是把
      build/webpack.base.conf.js 配置文件中的eslint rules注释掉即可。`,
          time: "2020年10月9日 23时23分",
          author: "111111"
        },
        {
          title: "随笔7",
          content: `3版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA
      版权协议，转载请附上原文出处链接和本声明。
      本文链接：https://blog.csdn.net/qappleh/article/details/80975368
      刚刚开始的小伙伴是不是空格报错少一行报错各种错？是不是觉得快被限制的失去了自由的思绪了？受折磨后找到了不错的文章来取消eslint语法检测限制，作为学习笔记摘自segmentfault
      其实我并不反对这些语法检测，但是像许多反个人意愿的那就真的不得不吐槽了，比如vue-cli脚手架创建的默认eslint规则：
      代码末尾不能加分号 ; 代码中不能存在多行空行
      tab键不能使用，必须换成两个空格 代码中不能存在声明了但未使用的变量
      以上规则个人认为真的反人类！调试代码太难了。 关闭eslint
      这里只说vue-cli脚手架的关闭方法，其实很简单，就是把
      build/webpack.base.conf.js 配置文件中的eslint rules注释掉即可。`,
          time: "2020年10月9日 23时23分",
          author: "111111"
        },
      //   {
      //     title: "随笔8",
      //     content: `3版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA
      // 版权协议，转载请附上原文出处链接和本声明。
      // 本文链接：https://blog.csdn.net/qappleh/article/details/80975368
      // 刚刚开始的小伙伴是不是空格报错少一行报错各种错？是不是觉得快被限制的失去了自由的思绪了？受折磨后找到了不错的文章来取消eslint语法检测限制，作为学习笔记摘自segmentfault
      // 其实我并不反对这些语法检测，但是像许多反个人意愿的那就真的不得不吐槽了，比如vue-cli脚手架创建的默认eslint规则：
      // 代码末尾不能加分号 ; 代码中不能存在多行空行
      // tab键不能使用，必须换成两个空格 代码中不能存在声明了但未使用的变量
      // 以上规则个人认为真的反人类！调试代码太难了。 关闭eslint
      // 这里只说vue-cli脚手架的关闭方法，其实很简单，就是把
      // build/webpack.base.conf.js 配置文件中的eslint rules注释掉即可。`,
      //     time: "2020年10月9日 23时23分",
      //     author: "111111"
      //   }
      ]
    };
  }
  
};
</script>

<style lang="less" scoped>
#Essay {
    display: flex;
    // height: 100%;
}
</style>