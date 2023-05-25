<template>
  <div>
    <div style="display: flex;margin-top: 5px;">
      <div style="width: 82%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">2#铸轧机设备参数</span>
            </div>
          </div>
          <div>
            <el-table :data="rollingTableData2" stripe style="width: 100%" height="300px"
              :cell-style="{ 'text-align': 'center', 'height': '10px', 'line-hight': '150px' }"
              :header-cell-style="{ 'text-align': 'center' }">
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="chartData" label="图表" min-width="50%">
                <template slot-scope="scope">
                  <div style="display: inline; " @click="getMyData(1, scope.row)">
                    <AreaChart width="100%" height="80%" :x-data="scope.row.chartData.xData"
                      :y-data="scope.row.chartData.yData" :min-data="scope.row.chartData.minData"
                      :max-data="scope.row.chartData.maxData" :r-name="scope.row.chartData.rName" />
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 18%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">当前设备状态</span>
            </div>
          </div>
          <div v-show="ZT1" style="font-size: 60px;color: blue;text-align: center;margin: 99px 0px 87px 0px">
            <el-button class="el-icon-mytubiao" style="margin-bottom: 8px" />
            <div style="font-size: 30px;color: green;">正常</div>
          </div>

          <div v-show="ZT2" style="font-size: 60px;color: blue;text-align: center;margin: 99px 0px 87px 0px">
            <el-button class="el-icon-mytubiao1" style="margin-bottom: 8px" />
            <div style="font-size: 30px;color: gray;">停机</div>
          </div>
        </el-card>
      </div>

    </div>
    <!--实时报警记录刷新表-->
    <div class="health_status" style="margin-top: 8px">
      <el-card shadow="always">
        <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
          <div style="display: flex;">
            <span style="line-height: 20px;">实时报警记录</span>
          </div>
        </div>
        <div>
          <el-table :data="currentWarnTable" stripe style="width: 100%,display: flex;" height="300px" :show-header="true">
            <!-- <el-table-column prop="idNumber" label="序号" /> -->
            <el-table-column prop="rollingProduceTime" label="日期" />
            <el-table-column prop="rollingName" label="指标名称" />
            <el-table-column prop="rollingValue" label="数值" />
            <el-table-column prop="status" label="状态">
              <template slot-scope="scope">
                <el-button size="medium" type="text" style="color: red">异常</el-button>
              </template>
            </el-table-column>
            <el-table-column label="查看">
              <template slot-scope="scope">
                <div style="display: flex">
                  <el-button size="medium" type="text" @click="getMyData(2, scope.row)">查看</el-button>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="yd" label="是否已读" />
          </el-table>
        </div>
      </el-card>
    </div>

    <div class="health_status" style="margin-top: 8px">
      <el-card shadow="always">
        <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
          <div style="display: flex;">
            <span style="line-height: 20px;">历史报警记录</span>
          </div>
        </div>
        <div style="display: flex;">
          <div>
            <el-date-picker v-model="qualifyDateRange" size="medium" type="datetimerange" align="left" unlink-panels
              range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions"
              @change="getDate" />
          </div>
          <template>
            <el-select v-model="value" style="margin-bottom: 10px" size="medium" placeholder="请选择"
              @change="getIndicatorName($event)">
              <el-option v-for="item in rollingOptions" :key="item.value" size="mini" :label="item.label"
                :value="item.value" />
            </el-select>
          </template>
          <div style="margin-left: 30px">
            <el-button size="medium" type="text" @click="getMyHistoryData">查询</el-button>
          </div>
        </div>
        <div>
          <el-table :data="historyWarnTable" stripe style="width: 100%,display: flex;" height="300px" :show-header="true">
            <!-- <el-table-column prop="idNumber" label="序号" /> -->
            <el-table-column prop="rollingProduceTime" label="日期" />
            <el-table-column prop="rollingName" label="指标名称" />
            <el-table-column prop="rollingValue" label="数值" />
            <el-table-column prop="status" label="状态">
              <template slot-scope="scope">
                <el-button size="medium" type="text" style="color: red">异常</el-button>
              </template>
            </el-table-column>
            <el-table-column label="查看">
              <template slot-scope="scope">
                <div style="display: flex">
                  <el-button size="medium" type="text" @click="getMyData(2, scope.row)">查看</el-button>
                  <!-- <el-button v-if="myvisible" size="medium" type="text" style="color: red">(已阅)</el-button> -->
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="yd" label="是否已读" />
          </el-table>
        </div>
      </el-card>
    </div>

    <el-dialog :visible.sync="dialogVisible">
      <div v-if="showWtich === 1">

        <div display="flex" margin="5%">
          <el-row margin="5%">
            <el-date-picker v-model="qualifyDateRange" size="medium" type="datetimerange" align="left" unlink-panels
              range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions"
              @change="getDate" />
            <el-button size="medium" type="text" @click="getengineList">查询</el-button>
          </el-row>
          <AreaChart :x-data="xData" :y-data="yData" :min-data="minData" :max-data="maxData" :r-name="rName" />
        </div>
      </div>

      <div v-if="showWtich === 2">
        <div>
          <AreaChart :x-data="xData" :y-data="yData" :min-data="minData" :max-data="maxData" :r-name="rName" />
        </div>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import AreaChart from '@/views/dashboard/AreaChart1'
import { getAvaluateList } from '@/api/avaluate'
import { getListNewData, getListSpecial, rollingOptions, rollingTableData2 } from '@/api/twoCastroll'
import { getListDuringWarnData, addRead, getDevice } from '@/api/warnTable'
import { parseTime } from '@/utils/utils'
export default {
  components: { AreaChart },
  data() {
    return {
      //判断状态
      judge: "",
      judgeList: [],
      // 报警状态 正常1 异常2
      ZT1: '',
      ZT2: '',

      value: '',
      ListDuringData: {},
      indicatorName: null,
      begin: null,
      end: null,
      qualifyDateRange: '',
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '本年至今',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 365)
            // const start = new Date(new Date().getFullYear(), 0)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      rollingOptions,
      rollingTableData2,
      myvisible: false,
      currentWarnTable: [],
      historyWarnTable: [],
      dialogVisible: false,
      dataList: {},
      avaluateList: {},
      listSpecial: {},
      minData: null,
      maxData: null,
      rName: null,
      xData: [],
      yData: [],
      timer: null,
      showWtich: 1,
      // tdengine的sql信息
      tdts: '',
      // tdengine的标签信息
      tdtype: ''
    }
  },
  async created() {
    // 每次进入界面时，先清除之前的所有定时器，然后启动新的定时器
    clearInterval(this.timer)
    this.timer = null
    this.ZT1 = "true";
    this.ZT2 = "";
    this.setTimer()
    await getDevice({ rollingDeviceNumber: '铸轧机2#' }).then((res) => {
      // this.historyWarnTable = res.data
    })
    await getAvaluateList().then((res) => {
      this.avaluateList = res.data
      // console.log("上下限：",res.data)
      this.avaluateList.forEach(item => {
        // 1号铸轧机参数
        if (item.deviceId == '铸轧机设备参数') {
          switch (item.name) {
            case '上辊电机电流':
              this.rollingTableData2[0].chartData.minData = item.minValue
              this.rollingTableData2[0].chartData.maxData = item.maxValue
              break
            case '下辊电机电流':
              this.rollingTableData2[1].chartData.minData = item.minValue
              this.rollingTableData2[1].chartData.maxData = item.maxValue
              break
            case '主水泵电机电流':
              this.rollingTableData2[2].chartData.minData = item.minValue
              this.rollingTableData2[2].chartData.maxData = item.maxValue
              break
            // case '备用水泵电机电流':
            //   this.rollingTableData2[3].chartData.minData = item.minValue
            //   this.rollingTableData2[3].chartData.maxData = item.maxValue
            //   break
            case '卷取电机电流':
              this.rollingTableData2[3].chartData.minData = item.minValue
              this.rollingTableData2[3].chartData.maxData = item.maxValue
              break
            case '上辊水压':
              this.rollingTableData2[4].chartData.minData = item.minValue
              this.rollingTableData2[4].chartData.maxData = item.maxValue
              break
            case '下辊水压':
              this.rollingTableData2[5].chartData.minData = item.minValue
              this.rollingTableData2[5].chartData.maxData = item.maxValue
              break
            case '上辊水温':
              this.rollingTableData2[6].chartData.minData = item.minValue
              this.rollingTableData2[6].chartData.maxData = item.maxValue
              break
            case '下辊水温':
              this.rollingTableData2[7].chartData.minData = item.minValue
              this.rollingTableData2[7].chartData.maxData = item.maxValue
              break
            case '上辊流量':
              this.rollingTableData2[8].chartData.minData = item.minValue
              this.rollingTableData2[8].chartData.maxData = item.maxValue
              break
            case '下辊流量':
              this.rollingTableData2[9].chartData.minData = item.minValue
              this.rollingTableData2[9].chartData.maxData = item.maxValue
              break
            case '操作侧预载力':
              this.rollingTableData2[10].chartData.minData = item.minValue
              this.rollingTableData2[10].chartData.maxData = item.maxValue
              break
            case '传动侧预载力':
              this.rollingTableData2[11].chartData.minData = item.minValue
              this.rollingTableData2[11].chartData.maxData = item.maxValue
              break
          }
        }
      })
    })
  },
  destroyed: function () {
    // 每次离开当前界面时，清除定时器
    clearInterval(this.timer)
    this.timer = null
  },

  methods: {
    // 查询tdengine上的数据
    getengineList() {
      console.log('打印是否为相应字段', this.tdtype)
      // 铸轧机2#
      // SELECT * FROM t_31daa490928d11ed8fbe65289e32d77e where ts > now - 5s;
      var zong = 'SELECT * FROM t_31daa490928d11ed8fbe65289e32d77e where ts between'
      var qian = parseTime(this.qualifyDateRange[0])
      var hou = parseTime(this.qualifyDateRange[1])
      // 补全sql语句，并且将其添加限制查询条件
      this.tdts = zong + "'" + qian + "'" + ' and ' + "'" + hou + "'" + 'limit' + '  ' + 1000
      axios
        // params:可传递多个参数,固定写法,不能改,否则参数传递失败
        .get('https://10.82.23.246:9528/td/castRoll/historyRange', { params: { sql: this.tdts, type: this.tdtype } })
        // .get('/td/castRoll/historyRange', { params: { sql: this.tdts, type: this.tdtype } })
        .then((data) => {
          console.log('日期', data.data[0])
          console.log('值', data.data[1])
          this.xData = data.data[0]
          this.yData = data.data[1]
        })
        .catch((err) => {
          console.log(err)
        })
    },

    getIndicatorName: function (event) {
      console.log(event)
      this.indicatorName = this.value
      console.log('指标名称', this.value)
    },
    getDate: function () {
      this.begin = parseTime(this.qualifyDateRange[0])
      this.end = parseTime(this.qualifyDateRange[1])
      console.log('开始时间', parseTime(this.qualifyDateRange[0]))
      console.log('结束时间', parseTime(this.qualifyDateRange[1]))
    },
    getMyHistoryData: function () {
      this.historyWarnTable = []
      getListDuringWarnData({ rollingDeviceNumber: '铸轧机2#', rollingName: this.indicatorName, begin: this.begin, end: this.end }).then((res) => {
        // console.log("特定时间范围内的数据", res)
        this.historyWarnTable = res.data
      })
    },
    getMyData: function (index, row) {
      this.showWtich = index
      if (index == 1) {
        this.xData = row.chartData.xData
        this.yData = row.chartData.yData
        this.minData = row.chartData.minData
        this.maxData = row.chartData.maxData
        this.rName = row.chartData.rName
        // console.log("这是name",row.chartData.rName)
        this.tdtype = row.chartData.rType
        console.log('打印出来的type', this.tdtype)
      } else if (index == 2) {
        getListSpecial({ rollingName: row.rollingName, ts: row.rollingProduceTime }).then((res) => {
          console.log('报警数据前后的数据', res.data)
          this.myvisible = false
          this.listSpecial = res.data
          this.xData = []
          this.yData = []
          this.listSpecial.forEach(item => {
            this.xData.push(item.rollingProduceTime)
            this.yData.push(item.rollingValue)
            this.rName = item.rollingName
            if (this.rName == '上辊电机电流') {
              this.minData = this.rollingTableData2[0].chartData.minData
              this.maxData = this.rollingTableData2[0].chartData.maxData
            } else if (this.rName == '下辊电机电流') {
              this.minData = this.rollingTableData2[1].chartData.minData
              this.maxData = this.rollingTableData2[1].chartData.maxData
            } else if (this.rName == '主水泵电机电流') {
              this.minData = this.rollingTableData2[2].chartData.minData
              this.maxData = this.rollingTableData2[2].chartData.maxData
            } else if
              // (this.rName == '备用水泵电机电流') {
              //   this.minData = this.rollingTableData2[3].chartData.minData
              //   this.maxData = this.rollingTableData2[3].chartData.maxData
              // } else if
              (this.rName == '卷取电机电流') {
              this.minData = this.rollingTableData2[3].chartData.minData
              this.maxData = this.rollingTableData2[3].chartData.maxData
            } else if (this.rName == '上辊水压') {
              this.minData = this.rollingTableData2[4].chartData.minData
              this.maxData = this.rollingTableData2[4].chartData.maxData
            } else if (this.rName == '下辊水压') {
              this.minData = this.rollingTableData2[5].chartData.minData
              this.maxData = this.rollingTableData2[5].chartData.maxData
            } else if (this.rName == '上辊水温') {
              this.minData = this.rollingTableData2[6].chartData.minData
              this.maxData = this.rollingTableData2[6].chartData.maxData
            } else if (this.rName == '下辊水温') {
              this.minData = this.rollingTableData2[7].chartData.minData
              this.maxData = this.rollingTableData2[7].chartData.maxData
            } else if (this.rName == '上辊流量') {
              this.minData = this.rollingTableData2[8].chartData.minData
              this.maxData = this.rollingTableData2[8].chartData.maxData
            } else if (this.rName == '下辊流量') {
              this.minData = this.rollingTableData2[9].chartData.minData
              this.maxData = this.rollingTableData2[9].chartData.maxData
            } else if (this.rName == '操作侧预载力') {
              this.minData = this.rollingTableData2[10].chartData.minData
              this.maxData = this.rollingTableData2[10].chartData.maxData
            } else if (this.rName == '传动侧预载力') {
              this.minData = this.rollingTableData2[11].chartData.minData
              this.maxData = this.rollingTableData2[11].chartData.maxData
            }
          })
        })
        addRead(row).then((res) => {
          // console.log("是否已读", res)
        })
        row.yd = '已读'
      }

      this.dialogVisible = true
    },

    // 定时查询铸轧机数据

    setTimer() {
      if (this.timer == null) {
        this.timer = setInterval(() => {
          // 2号铸轧机数据
          getListNewData().then((res) => {
            this.dataList = res.data
            // console.log("这是拿到的数据" + res.data)
            this.rollingTableData2[0].chartData.xData = []
            this.rollingTableData2[0].chartData.yData = []
            this.rollingTableData2[1].chartData.xData = []
            this.rollingTableData2[1].chartData.yData = []
            this.rollingTableData2[2].chartData.xData = []
            this.rollingTableData2[2].chartData.yData = []
            this.rollingTableData2[3].chartData.xData = []
            this.rollingTableData2[3].chartData.yData = []
            this.rollingTableData2[4].chartData.xData = []
            this.rollingTableData2[4].chartData.yData = []
            this.rollingTableData2[5].chartData.xData = []
            this.rollingTableData2[5].chartData.yData = []
            this.rollingTableData2[6].chartData.xData = []
            this.rollingTableData2[6].chartData.yData = []
            this.rollingTableData2[7].chartData.xData = []
            this.rollingTableData2[7].chartData.yData = []
            this.rollingTableData2[8].chartData.xData = []
            this.rollingTableData2[8].chartData.yData = []
            this.rollingTableData2[9].chartData.xData = []
            this.rollingTableData2[9].chartData.yData = []
            this.rollingTableData2[10].chartData.xData = []
            this.rollingTableData2[10].chartData.yData = []
            this.rollingTableData2[11].chartData.xData = []
            this.rollingTableData2[11].chartData.yData = []

            this.rollingTableData2[0].chartData.rType = []
            this.rollingTableData2[1].chartData.rType = []
            this.rollingTableData2[2].chartData.rType = []
            this.rollingTableData2[3].chartData.rType = []
            this.rollingTableData2[4].chartData.rType = []
            this.rollingTableData2[5].chartData.rType = []
            this.rollingTableData2[6].chartData.rType = []
            this.rollingTableData2[7].chartData.rType = []
            this.rollingTableData2[8].chartData.rType = []
            this.rollingTableData2[9].chartData.rType = []
            this.rollingTableData2[10].chartData.rType = []
            this.rollingTableData2[11].chartData.rType = []

            this.dataList.forEach(item => {
              this.rollingTableData2[0].chartData.xData.push(item.ts)
              this.rollingTableData2[0].chartData.yData.push(item.upRollMontorA)
              this.rollingTableData2[0].chartData.rName = '上辊电机电流'
              this.rollingTableData2[0].chartData.rType = 'upRollMontorA'

              this.rollingTableData2[1].chartData.xData.push(item.ts)
              this.rollingTableData2[1].chartData.yData.push(item.downRollMontorA)
              this.rollingTableData2[1].chartData.rName = '下辊电机电流'
              this.rollingTableData2[1].chartData.rType = 'downRollMontorA'

              this.rollingTableData2[2].chartData.xData.push(item.ts)
              this.rollingTableData2[2].chartData.yData.push(item.pumpA)
              this.rollingTableData2[2].chartData.rName = '主水泵电机电流'
              this.rollingTableData2[2].chartData.rType = 'pumpA'

              this.rollingTableData2[3].chartData.xData.push(item.ts)
              this.rollingTableData2[3].chartData.yData.push(item.rollA)
              this.rollingTableData2[3].chartData.rName = '卷取电机电流'
              this.rollingTableData2[3].chartData.rType = 'rollA'

              this.rollingTableData2[4].chartData.xData.push(item.ts)
              this.rollingTableData2[4].chartData.yData.push(item.upRollWaterFn)
              this.rollingTableData2[4].chartData.rName = '上辊水压'
              this.rollingTableData2[4].chartData.rType = 'upRollWaterFn'

              this.rollingTableData2[5].chartData.xData.push(item.ts)
              this.rollingTableData2[5].chartData.yData.push(item.downRollWaterFn)
              this.rollingTableData2[5].chartData.rName = '下辊水压'
              this.rollingTableData2[5].chartData.rType = 'downRollWaterFn'

              this.rollingTableData2[6].chartData.xData.push(item.ts)
              this.rollingTableData2[6].chartData.yData.push(item.upRollWaterT)
              this.rollingTableData2[6].chartData.rName = '上辊水温'
              this.rollingTableData2[6].chartData.rType = 'upRollWaterT'

              this.rollingTableData2[7].chartData.xData.push(item.ts)
              this.rollingTableData2[7].chartData.yData.push(item.downRollWaterT)
              this.rollingTableData2[7].chartData.rName = '下辊水温'
              this.rollingTableData2[7].chartData.rType = "downRollWaterT"

              this.rollingTableData2[8].chartData.xData.push(item.ts)
              this.rollingTableData2[8].chartData.yData.push(item.upRollFlow)
              this.rollingTableData2[8].chartData.rName = '上辊流量'
              this.rollingTableData2[8].chartData.rType = 'upRollFlow'

              this.rollingTableData2[9].chartData.xData.push(item.ts)
              this.rollingTableData2[9].chartData.yData.push(item.downRollFlow)
              this.rollingTableData2[9].chartData.rName = '下辊流量'
              this.rollingTableData2[9].chartData.rType = 'downRollFlow'

              this.rollingTableData2[10].chartData.xData.push(item.ts)
              this.rollingTableData2[10].chartData.yData.push(item.operationPreloadForce)
              this.rollingTableData2[10].chartData.rName = '操作侧预载力'
              this.rollingTableData2[10].chartData.rType = 'operationPreloadForce'

              this.rollingTableData2[11].chartData.xData.push(item.ts)
              this.rollingTableData2[11].chartData.yData.push(item.transPreloadForce)
              this.rollingTableData2[11].chartData.rName = '传动侧预载力'
              this.rollingTableData2[11].chartData.rType = 'transPreloadForce'
              // 上辊电机电流
              this.rollingTableData2[0].value = item.upRollMontorA.toFixed(1)
              // 下辊电机电流
              this.rollingTableData2[1].value = item.downRollMontorA.toFixed(1)
              // 主水泵电机电流
              this.rollingTableData2[2].value = item.pumpA.toFixed(1)
              // 备用水泵电机电流
              // this.rollingTableData2[3].value = item.upRollMontorA;
              // 卷取电机电流  rollA
              this.rollingTableData2[3].value = item.rollA.toFixed(1)
              // 上辊水压
              this.rollingTableData2[4].value = item.upRollWaterFn.toFixed(1)
              // 下辊水压
              this.rollingTableData2[5].value = item.downRollWaterFn.toFixed(1)
              // 上辊水温
              this.rollingTableData2[6].value = item.upRollWaterT.toFixed(1)
              // 下辊水温
              this.rollingTableData2[7].value = item.downRollWaterT.toFixed(1)
              // 上辊流量
              this.rollingTableData2[8].value = item.upRollFlow.toFixed(1)
              // 下辊流量
              this.rollingTableData2[9].value = item.downRollFlow.toFixed(1)
              // 操作侧预载力
              this.rollingTableData2[10].value = item.operationPreloadForce.toFixed(1)
              // 传动侧预载力
              this.rollingTableData2[11].value = item.transPreloadForce.toFixed(1)
              //  //传动侧预载力
              //  this.rollingTableData2[12].value = item.upRollMontorA;
            })
          })

          //判断设备健康状况
          getListNewData().then((res) => {
            console.log("打印设备的状态信息", res.data[19].rollV);
            this.judgeList = [];
            this.judge = res.data[19].rollV;

            // 绿
            if (this.judge > 0) {
              this.ZT1 = "true";
              this.ZT2 = "";
            };

            // 红
            if (this.judge == 0) {
              this.ZT1 = "";
              this.ZT2 = "true";
            };
          })



          // 定时查询铸轧机最新20条报警记录
          getDevice({ rollingDeviceNumber: '铸轧机2#' }).then((res) => {
            this.currentWarnTable = res.data
          })
        }, 3500)
      }
    }
  }
}
</script>

<style scoped>
.el-icon-mytubiao {
  background: url('~@/icons/myicons/status1.jpg') center no-repeat;
  background-size: cover;
  height: 50px;
  width: auto;
}

.el-icon-mytubiao:before {
  content: "替";
  font-size: 16px;
  visibility: hidden;
}

.el-icon-mytubiao1 {
  background: url('~@/icons/myicons/status2.jpg') center no-repeat;
  background-size: cover;
  height: 50px;
  width: auto;
}
</style>
