<template>
  <div id="Timeline">
    <el-timeline>
      <el-timeline-item timestamp="2018/4/12" placement="top" color="#909399">
        <el-card>
          <h4>发表了博客 主要链接1</h4>
          <p>小王 提交于 2018/4/12 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/3" placement="top" color="#909399">
        <el-card>
          <h4>发表了随笔 随笔1</h4>
          <p>小杨 提交于 2018/4/3 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top" color="#909399">
        <el-card>
          <h4>发表了留言</h4>
          <p>1111111111111 提交于 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top" color="#909399">
        <el-card>
          <h4>发表了留言</h4>
          <p>1111111111111 提交于 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top" color="#909399">
        <el-card>
          <h4>发表了留言</h4>
          <p>1111111111111 提交于 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top" color="#909399">
        <el-card>
          <h4>发表了留言</h4>
          <p>1111111111111 提交于 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
#Timeline {
  padding-top: 20px;
  .el-timeline-item__tail {
    border-left: 2px solid #909399;
  }
}
</style>