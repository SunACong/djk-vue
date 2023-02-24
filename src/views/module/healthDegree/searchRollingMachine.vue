<template>
  <div class="layout-main" style="">
    <!-- head -->
    <div class="layout-head">
      <el-input v-model="reelNum" class="module-input" placeholder="请输入铸轧卷号" clearable>
        <el-button slot="append" class="module-input-button" icon="el-icon-search" @click="getInfo(reelNum)" />
      </el-input>
    </div>
    <!-- chart -->
    <div v-loading="loading" class="layout-chart">
      <div v-for="(item, index) in charData" :key="index" class="module-chart">
        <div>
          <el-card>
            <div slot="header">
              <span>{{ item[0].deviceParam }}</span>
              <el-button class="module-chart-button" type="text" @click="expandDailog(item[0].deviceParam, item[2], item[1])">查看</el-button>
            </div>
            <RecordBarChart :key="key" chart-type="line" :one-x-data="item[2]" :one-y-data="item[1]" />
          </el-card>
        </div>
      </div>
    </div>

    <!-- dialog -->
    <el-dialog
      :title="dialogData.title"
      :visible.sync="dialogVisible"
      width="80%"
    >
      <RecordBarChart :key="keyDailog" :data-zoom-type="dialogData.dataZoomType" :chart-type="dialogData.type" :one-x-data="dialogData.xData" :one-y-data="dialogData.yData" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
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
      // 为了更新echarts 的标志位key
      key: null,
      keyDailog: null,
      // 第一位代表设备号
      reelNum: null,
      map: newHashMap(),
      charData: Array.from(Array(13), () => new Array(0)),
      isDisplay: [true, true, true, true, true, true, true, true, true, true, true, true, true],
      dialogVisible: false,
      dialogData: {
        title: '查看',
        dataZoomType: 'inside',
        type: 'line',
        xData: [],
        yData: []
      }
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
      this.charData[i].push([])
      this.charData[i].push([])
    }
  },
  mounted() {

  },
  methods: {
    // 传数据到弹出框
    expandDailog(title, xData, yData) {
      this.dialogVisible = true
      this.dialogData.title = title
      this.dialogData.xData = xData
      this.dialogData.yData = yData
      // 更新echarts
      this.keyDailog = new Date().getTime()
    },
    /**
     * @description: 获取卷号 查询范围 并且拿到数据
     * @param {*} reelNum 输入的铸轧卷号
     */
    async getInfo(reelNum) {
      // 为输入卷号 或者卷号查不到 或者卷号
      if (reelNum == null || reelNum === '') {
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
        this.loading = false
        return
      }

      // 通过卷号获取历史数据
      this.getHistoryData(reelNum.charAt(0), res[0].procUpperTime, res[0].procLowerRemoveTime)
      // 关闭加载状态
      this.loading = false
    },

    /**
     * @description: 获取信息并通过hashmap处理
     * @param {*} deviceId 设备id
     * @param {*} startDateTime 查询起始时间
     * @param {*} endDateTime 查询结束时间
     */
    async getHistoryData(deviceId, startDateTime, endDateTime) {
      const xData = Array.from(Array(13), () => new Array(0))
      const yData = Array.from(Array(13), () => new Array(0))
      // 得到历史数据
      const { data: res1 } = await getHistoryList({ deviceId, startDateTime, endDateTime })
      // 通过hashmap处理数据,分别存储到不同的数组中
      for (let i = 0; i < res1.length; i++) {
        xData[this.map.get(res1[i].rollingName)].push(res1[i].rollingValue)
        yData[this.map.get(res1[i].rollingName)].push(res1[i].rollingProduceTime)
      }
      // 把数据添加到charData中x
      for (let i = 0; i < 13; i++) {
        if (this.charData[i][0].show !== false) {
          this.charData[i][1] = xData[i]
          this.charData[i][2] = yData[i]
        }
      }
      console.log('this.charData1', this.charData)
      // 过滤掉没有数据的数组
      this.charData = this.charData.filter(item => item.length === 3)
      this.key = new Date().getTime()
      console.log('this.charData2', this.charData)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/productQuality/searchRollingMachine.scss';
</style>
