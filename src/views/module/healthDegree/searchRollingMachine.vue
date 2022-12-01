<!--
 * @Description:
 * @Author: 孙少聪
 * @Date: 2022-11-16 16:35:11
 * @LastEditTime: 2022-11-18 15:30:48
 * @LastEditors: 孙少聪
-->
<template>
  <div>
    <!-- head -->
    <div key="search" class="headBox">
      <el-input v-model="reelNum" placeholder="请输入铸轧卷号" clearable class="input-with-select">
        <el-button slot="append" class="headButton" icon="el-icon-search" @click="getInfo(reelNum)" />
      </el-input>
    </div>
    <!-- chart -->
    <div v-loading="showChart" style="display: flex;flex-wrap: wrap;justify-content: space-around;">
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
      showChart: false,
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
      this.showChart = true
      // 通过驻扎卷号获取
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

      this.getHistoryData(reelNum.charAt(0), res[0].procUpperTime, res[0].procLowerRemoveTime)
      this.showChart = false
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
      // const { data: res1 } = await getHistoryList({ deviceId: reelNum.charAt(0), startDateTime: res[0].procUpperTime, endDateTime: res[0].procLowerRemoveTime })
      const { data: res1 } = await getHistoryList({ deviceId, startDateTime, endDateTime })
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
  // padding-top: 20%;
  .el-input {
    width: 30% ;
  }

  .headButton {
    background-color: #409EFF;
    color: black;
  }
}
</style>
