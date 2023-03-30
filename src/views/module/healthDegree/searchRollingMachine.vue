<template>
  <div class="layout-body">
    <div class="top-text">本页面是查询产品生产记录并且将铸轧生产中各项指标通过曲线图的形式展示
      出来，输入框中可以输入铸轧卷号，点击搜索按钮，将会展示出该卷号的生产记录。（样例卷号：5001A1230308 2458B1211108 ）
    </div>
    <!-- head -->
    <div class="top-search">
      <el-input v-model="reelNum" class="top-search-input" placeholder="请输入铸轧卷号" clearable>
        <el-button slot="append" class="top-search-input-button" icon="el-icon-search" @click="getInfo(reelNum)" />
      </el-input>
    </div>
    <!-- 复选框 -->
    <div class="top-checkbox">
      <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
      <div style="margin: 15px 0;" />
      <el-checkbox-group v-model="checkedBoxs" @change="handleCheckedBoxsChange">
        <el-checkbox v-for="item in boxs" :key="item" :label="item" text-color="000000">{{ item }}</el-checkbox>
      </el-checkbox-group>
    </div>
    <!-- chart -->
    <div v-loading="loading" class="bottom-chart">
      <div v-for="(item, index) in charData" :key="index" class="module-chart-item">
        <el-card>
          <div slot="header">
            <span>{{ item[0].deviceParam }}</span>
            <el-button class="bottom-chart-item-button" type="text" @click="expandDailog(item[0].deviceParam, item[2], item[1])">查看</el-button>
          </div>
          <RecordBarChart :key="key" chart-type="line" :one-x-data="item[2]" :one-y-data="item[1]" />
        </el-card>
      </div>
    </div>

    <!-- dialog -->
    <el-dialog
      :title="dialogData.title"
      :visible.sync="showDialog"
      width="80%"
    >
      <RecordBarChart :key="keyDailog" :data-zoom-type="dialogData.dataZoomType" :chart-type="dialogData.type" :one-x-data="dialogData.xData" :one-y-data="dialogData.yData" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="showDialog = false">取 消</el-button>
        <el-button type="primary" @click="showDialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getCastProduceList } from '@/api/LmdpCastProduced'
import RecordBarChart from '@/views/dashboard/RecordBarChart'
import Axios from 'axios'
import { header, dataSource } from '@/api/tdengine'
const deviceName = ['操作侧预载力', '备用水泵电机电流',
  '卷取电机电流', '传动侧预载力',
  '主水泵电机电流', '下辊电机电流',
  '下辊流量', '下辊水温', '下辊水压',
  '上辊电机电流', '上辊流量', '上辊水温', '上辊水压'
]
export default {
  name: 'SearchRollingMachine',
  components: { RecordBarChart },

  data() {
    return {
      loading: false,
      // 为了更新echarts 的标志位key
      key: 0,
      keyDailog: 0,
      // 复选框
      checkAll: false,
      checkedBoxs: ['主水泵电机电流', '备用水泵电机电流', '卷取电机电流'],
      boxs: deviceName,
      isIndeterminate: true,
      // 第一位代表设备号
      reelNum: null,
      map: new Map(),
      charData: [],
      showDialog: false,
      dialogData: {
        title: '查看',
        dataZoomType: 'inside',
        type: 'line',
        xData: [],
        yData: []
      }
    }
  },
  watch: {
    // 当checkedBoxs改变时，更新map，更新charData
    checkedBoxs: {
      handler(val) {
        this.loading = true
        this.initMap(this.map)
        this.charData = this.initCharData(this.map, 100, 0)
        this.loading = false
      },
      deep: true
    }
  },
  created() {
    // 初始化map
    this.initMap(this.map)
    // 初始化charData
    this.charData = this.initCharData(this.map, 100, 0)
    // 获取tdengine的数据
    this.getTDengineData()
  },
  mounted() {

  },
  methods: {
    // 传数据到弹出框
    expandDailog(title, xData, yData) {
      this.showDialog = true
      this.dialogData.title = title
      this.dialogData.xData = xData
      this.dialogData.yData = yData
      // 更新echarts
      this.keyDailog += 1
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
      // 通过铸轧卷号获取
      console.log('reelNum:', reelNum)
      const { data: res } = await getCastProduceList({ reelNum })
      console.log('res:', res)
      // 未查询到数据
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

      // 关闭加载状态
      this.loading = false
    },
    /**
     * @description: 复选框
     */
    handleCheckAllChange(val) {
      this.checkedBoxs = val ? deviceName : []
      this.isIndeterminate = false
    },
    handleCheckedBoxsChange(value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.boxs.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.boxs.length
    },

    /**
     * @description: 初始化charData
     * @param {*} charData
     * @param {*} map 包含设备参数的map
     * @param {*} maxValue y轴最大值
     * @param {*} minValue y轴最小值
     */
    initCharData(map, maxValue, minValue) {
      const charData = []
      for (let i = 0; i < map.size; i++) { // 每张chart对应信息添加进去
        charData.push([{
          deviceParam: this.containsValueReturnKey(map, i),
          maxValue,
          minValue
        }, [], []])
      }
      return charData
    },

    /**
    * @description: map通过value获取key
    * @param {*} map 包含设备参数的map
    * @param {*} value 根据values获取key
    */
    containsValueReturnKey(map, value) {
      for (const [key, val] of map) {
        if (val === value) {
          return key
        }
      }
    },

    /**
     * @description: 初始化map
     * @param {*} map 要初始化的map
     */
    initMap(map) {
      map.clear()
      for (let i = 0; i < this.checkedBoxs.length; i++) {
        map.set(this.checkedBoxs[i], i)
      }
      console.log(map)
    },

    /**
     * axios获取tdengine数据
     */
    getTDengineData() {
      Axios({
        method: 'post',
        // url: 'http://' + dataSource.host + ':' + dataSource.port + '/rest/sql/' + dataSource.database,
        url: 'https://console-mock.apipost.cn/mock/5eecb9fa-eb84-4f06-86b2-a7f7bf6876b8/tdengine1',
        headers: {
          'Content-Type': header.contentType,
          'Authorization': header.authorization
        },
        data: {
          'sql': 'SELECT * FROM t_3d8761c0928d11ed8fbe65289e32d77e where ts > now - 5s;'
        }
      }).then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

  @import '@/styles/productQuality/searchRollingMachine.scss';

</style>
