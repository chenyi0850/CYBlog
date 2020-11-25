<template>
  <div id="Timeline">
    <div id="scroll" v-infinite-scroll="load" style="overflow: auto">
    <el-timeline>
      
        <el-timeline-item
          v-for="data in datas"
          :key="data.title"
          timestamp="2018/4/12"
          placement="top"
          color="#909399"
        >
          <el-card>
            <h4>{{ data.username }} {{ data.type }}</h4>
            <p style="margin-top: 5px">{{ data.time }}</p>
          </el-card>
        </el-timeline-item>
      
    </el-timeline>
    </div>
  </div>
</template>

<script>
import { getTimeline } from "@/network/api"
import { formatDate } from "@/tools/formatDate"

export default {
  name: "Timeline",
  data() {
    return {
      datas: [],
      type: "",
      // limit: 6,
      skip: 0
    }
  },
  methods: {
    getTimeline() {
      getTimeline({
      limit: 2,
      skip: this.skip
    }).then(res => {
      this.datas = this.datas.concat(res.data)
      this.skip += 2
      console.log(this.datas)
      this.datas.forEach(val => {
        val.time = formatDate(new Date(val.time))
      })
    }).catch(err => {
      console.log(err)
    })
    },
    load() {
      this.getTimeline()
    }
  },
  created() {
    this.getTimeline()
  }
};
</script>

<style lang="less">
#Timeline {
  padding-top: 20px;
  .el-timeline-item__tail {
    border-left: 2px solid #909399;
  }
}
html {
  height: 100%;
}
body {
  height: calc(100% - 150px);
}
#app,
article,
#Timeline
 {
  height: 100%;
}
#scroll {
  height: 100%;
}
</style>