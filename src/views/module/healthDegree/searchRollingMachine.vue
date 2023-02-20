<template>
  <div>
    <!-- head -->
    <div key="search" class="headBox">
      <el-input v-model="reelNum" placeholder="请输入铸轧卷号" clearable class="input-with-select">
        <el-button slot="append" class="headButton" icon="el-icon-search" @click="getInfo(reelNum)" />
      </el-input>
    </div>
    <!-- chart -->
    <div v-loading="loading" style="display: flex;flex-wrap: wrap;justify-content: space-around;">
      <div v-for="(item, index) in charData" :key="index" style="width: 48%;margin: 1% auto;">
        <div>
          <el-card>
            <div slot="header" class="clearfix">
              <span>{{ item[0].deviceParam }}</span>
              <el-button style="float: right; padding: 3px 0" type="text">查看</el-button>
            </div>
            <RecordBarChart :key="key" chart-type="line" :one-x-data="item[2]" :one-y-data="item[1]" />
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCastProduceList } from '@/api/lmdpCastProduce'
import { getHistoryList } from '@/api/rollingMachine'
import { newHashMap } from '@/store/hashMap'
import RecordBarChart from '@/views/dashboard/RecordBarChart.vue'
export default {
  name: 'SearchRollingMachine',
  components: { RecordBarChart },

  data() {
    return {
      showCard: true,
      loading: false,
      // 为了更新echarts
      key: null,
      // 第一位代表设备号
      reelNum: null,
      map: newHashMap(),
      charData: Array.from(Array(13), () => new Array(0)),
      isDisplay: [false, true, true, true, true, true, true, true, true, true, true, true, true]
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
    /**
     * @description: 获取卷号 查询范围 并且拿到数据
     * @return {*}
     * @Author: 孙少聪
     * @Date: 2022-11-18 14:30:58
     * @LastEditTime: Do not edit
     * @LastEditors: 孙少聪
     * @param {*} reelNum 输入的铸轧卷号
     */
    async getInfo(reelNum) {
      // 为输入卷号 或者卷号查不到 或者卷号
      if (reelNum == null) {
        this.$message({
          showClose: true,
          message: '请填写铸轧卷号！！！',
          type: 'error'
        })
        return
      }
      this.loading = true
      // 通过驻扎卷号获取
      const { data: res } = await getCastProduceList({ reelNum })
      console.log(res)
      if (res.length === 0 || res[0].procUpperTime == null || res[0].procLowerRemoveTime == null) {
        this.$message({
          showClose: true,
          message: '该卷未完成铸轧程序！！！',
          type: 'error'
        })
        return
      }
      console.log(reelNum.charAt(0), res[0].procUpperTime, res[0].procLowerRemoveTime)
      this.getHistoryData(reelNum.charAt(0), res[0].procUpperTime, res[0].procLowerRemoveTime)
      this.loading = false
    },

    /**
     * @description: 获取信息并通过hashmap处理
     * @return {*}
     * @Author: 孙少聪
     * @Date: 2022-11-18 09:50:07
     * @LastEditTime: Do not edit
     * @LastEditors: 孙少聪
     * @param {*} deviceId 设备id
     * @param {*} startDateTime 查询起始时间
     * @param {*} endDateTime 查询结束时间
     */
    async getHistoryData(deviceId, startDateTime, endDateTime) {
      const xData = Array.from(Array(13), () => new Array(0))
      const yData = Array.from(Array(13), () => new Array(0))
      const { data: res1 } = await getHistoryList({ deviceId, startDateTime, endDateTime })
      console.log(res1)
      for (let i = 0; i < res1.length; i++) {
        xData[this.map.get(res1[i].rollingName)].push(res1[i].rollingValue)
        yData[this.map.get(res1[i].rollingName)].push(res1[i].rollingProduceTime)
      }
      for (let i = 0; i < 13; i++) {
        if (this.charData[i][0].show !== false) {
          this.charData[i].push(xData[i])
          this.charData[i].push(yData[i])
        }
      }
      this.charData = this.charData.filter(item => item.length === 3)
      this.key = new Date().getTime()
      console.log('this.charData', this.charData)
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
  .headButton{
    background-color: #409EFF;
    color: black;
  }
}

</style>
