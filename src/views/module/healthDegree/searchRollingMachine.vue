<template>
  <div>
    <!-- head -->
    <div class="headBox">
      <el-input v-model="reelNum" placeholder="请输入铸轧卷号" clearable class="input-with-select">
        <el-button slot="append" class="headButton" icon="el-icon-search" @click="getInfo(reelNum)" />
      </el-input>
    </div>

    <!-- chart -->
    <div style="display: flex;flex-wrap: wrap;justify-content: space-around;">

      <div v-for="(item, index) in charData" :key="index" style="width: 32%;margin: 1% auto;">
        <div>
          <el-card>
            <div slot="header" class="clearfix">
              <span>{{ item[0].deviceParam }}</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <BarChart :key="key" chart-type="line" :one-x-data="item[2]" :one-y-data="item[1]" />
          </el-card>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import BarChart from '@/views/dashboard/BarChart.vue'
import { getCastProduceList } from '@/api/lmdpCastProduce'
import { getHistoryList } from '@/api/rollingMachine'
import { newHashMap } from '@/store/hashMap'
export default {
  name: 'SearchRollingMachine',
  components: { BarChart },

  data() {
    return {
      key: null,
      reelNum: null,
      map: newHashMap(),
      charData: Array.from(Array(13), () => new Array(0))
    }
  },
  created() {
    // 先把每张chart对应的设备参数名字添加进去
    for (let i = 0; i < 13; i++) {
      this.charData[i].push({
        deviceParam: this.map.containsValueReturnKey(i),
        show: true,
        maxValue: 100,
        minValue: 0
      })
    }
  },
  mounted() {

  },

  methods: {
    async getInfo(reelNum) {
      console.log(this.charData)
      if (reelNum == null) {
        this.$message({
          showClose: true,
          message: '请填写铸轧卷号！！！',
          type: 'error'
        })
        return
      }
      const { data: res } = await getCastProduceList({ reelNum })
      console.log(res)
      if (res.length === 0 || res[0].procUpperTime == null || res[0].procLowerRemoveTime == null) {
        this.$message({
          showClose: true,
          message: '请检查铸轧卷号和是否已完成铸轧程序！！！',
          type: 'error'
        })
        return
      }
      const xData = Array.from(Array(13), () => new Array(0))
      const yData = Array.from(Array(13), () => new Array(0))
      const { data: res1 } = await getHistoryList({ deviceId: reelNum.charAt(0), startDateTime: res[0].procUpperTime, endDateTime: res[0].procLowerRemoveTime })
      for (let i = 0; i < res1.length; i++) {
        xData[this.map.get(res1[i].rollingName)].push(res1[i].rollingValue)
        yData[this.map.get(res1[i].rollingName)].push(res1[i].rollingProduceTime)
      }
      for (let i = 0; i < 13; i++) {
        this.charData[i].push(xData[i])
        this.charData[i].push(yData[i])
      }
      this.key = new Date().getTime()
      console.log(this.charData)
    }
  }
}
</script>

<style lang="scss" scoped>

.headBox{
  text-align: center;

  .el-input {
    width: 30% ;
  }

  .headButton {
    background-color: #409EFF;
    color: black;
  }
}

</style>
