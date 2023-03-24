<template>
  <div>
    <div style="display: flex;margin-top: 5px;">
      <div style="width: 82%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">6#退火炉参数</span>
            </div>
          </div>
          <div>
            <el-table :data="rollingTableData1" stripe style="width: 100%" height="400px"
              :cell-style="{ 'text-align': 'center', 'height': '10px', 'line-hight': '150px' }"
              :header-cell-style="{ 'text-align': 'center' }">
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="chartData" label="图表" min-width="50%">
                <template slot-scope="scope">
                  <div style="padding: 0 30%" @click="getMyData(1, scope.row)">
                    <AreaChart width="200px" height="63px" :x-data="scope.row.chartData.xData"
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
          <div style="font-size: 60px;color: blue;text-align: center;margin: 99px 0px 87px 0px">
            <el-button class="el-icon-mytubiao" style="margin-bottom: 8px" />
            <div style="font-size: 30px;color: green;">正常</div>
          </div>
        </el-card>
      </div>
    </div>
    <!-- <div class="health_status" style="margin-top: 8px">
      <el-card shadow="always">
        <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
          <div style="display: flex;">
            <span style="line-height: 20px;">实时报警记录</span>
          </div>
        </div>
        <div>
          <el-table :data="currentWarnTable" stripe style="width: 100%" height="300px" :show-header="false">
            <el-table-column prop="rollingProduceTime" label="日期" min-width="25%" />
            <el-table-column prop="rollingName" label="指标名称" min-width="25%" />
            <el-table-column prop="rollingValue" label="数值" min-width="20%" />
            <el-table-column prop="status" label="状态" min-width="20%">
              <template slot-scope="scope">
                <el-button
                  size="medium"
                  type="text"
                  style="color: red"
                >异常</el-button>
              </template>
            </el-table-column>
            <el-table-column label="判定结果" min-width="10%">
              <template slot-scope="scope">
                <div style="display: flex">
                  <el-button
                    size="medium"
                    type="text"
                    @click="getMyData(2, scope.row)"
                  >查看</el-button>
                  <el-button v-if="myvisible" size="medium" type="text" style="color: red">(已阅)</el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </div> -->
    <div class="health_status" style="margin-top: 8px">
      <el-card shadow="always">
        <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
          <div style="display: flex;">
            <span style="line-height: 20px;">报警记录</span>
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
          <el-table :data="historyWarnTable" stripe style="width: 100%" height="300px" :show-header="false">
            <el-table-column prop="rollingProduceTime" label="日期" min-width="25%" />
            <el-table-column prop="rollingName" label="指标名称" min-width="25%" />
            <el-table-column prop="rollingValue" label="数值" min-width="20%" />
            <el-table-column prop="status" label="状态" min-width="20%">
              <template slot-scope="scope">
                <el-button size="medium" type="text" style="color: red">异常</el-button>
              </template>
            </el-table-column>
            <el-table-column label="判定结果" min-width="10%">
              <template slot-scope="scope">
                <div style="display: flex">
                  <el-button size="medium" type="text" @click="getMyData(2, scope.row)">查看</el-button>
                  <el-button v-if="myvisible" size="medium" type="text" style="color: red">(已阅)</el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>
    <el-dialog :visible.sync="dialogVisible">
      <div v-if="showWtich === 1">
        <div>
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
import { getListNewData6, getListSpecial6, rollingOptions, rollingTableData1 } from '@/api/AnneaF'
import { getListWarnNewData, getListWarnHistoryData, getListDuringWarnData } from '@/api/warnTable'
import { parseTime } from '@/utils/utils'
export default {
  components: { AreaChart },
  data() {
    return {
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
      rollingTableData1,
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
      showWtich: 1
    }
  },
  async created() {
    // 每次进入界面时，先清除之前的所有定时器，然后启动新的定时器
    clearInterval(this.timer)
    this.timer = null
    this.setTimer()
    /**
     * 获取一号铸轧机报警历史记录（30条）
     */
    await getListWarnHistoryData({ rollingDeviceNumber: '退火炉6#' }).then((res) => {
      this.historyWarnTable = res.data
    })
    /**
     * 获取上下限阈值
     */
    await getAvaluateList().then((res) => {
      this.avaluateList = res.data
      // console.log("上下限：", res.data)
      this.avaluateList.forEach(item => {
        // 1号铸轧机参数
        if (item.deviceId == '退火炉#') {
          switch (item.name) {
            case '炉冷却水':
              this.rollingTableData1[0].chartData.minData = item.minValue
              this.rollingTableData1[0].chartData.maxData = item.maxValue
              break
            case '炉压缩空气':
              this.rollingTableData1[1].chartData.minData = item.minValue
              this.rollingTableData1[1].chartData.maxData = item.maxValue
              break
            case '金属料温温度曲线':
              this.rollingTableData1[2].chartData.minData = item.minValue
              this.rollingTableData1[2].chartData.maxData = item.maxValue
              break
            case '一区炉气温度曲线':
              this.rollingTableData1[3].chartData.minData = item.minValue
              this.rollingTableData1[3].chartData.maxData = item.maxValue
              break
            case '二区炉气温度曲线':
              this.rollingTableData1[4].chartData.minData = item.minValue
              this.rollingTableData1[4].chartData.maxData = item.maxValue
              break
            case '三区炉气温度曲线':
              this.rollingTableData1[5].chartData.minData = item.minValue
              this.rollingTableData1[5].chartData.maxData = item.maxValue
              break
            case '炉气设定温度':
              this.rollingTableData1[6].chartData.minData = item.minValue
              this.rollingTableData1[6].chartData.maxData = item.maxValue
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
    /**
     * 获取当点击时间空间以及单选框时，得到的指标名称和时间
     */
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
    /**
     * 在历史报警记录表中，当点击事件发生时，去数据库查询相应时间段的数据
     */
    getMyHistoryData: function () {
      this.historyWarnTable = []
      getListDuringWarnData({ rollingDeviceNumber: '退火炉6#', rollingName: this.indicatorName, begin: this.begin, end: this.end }).then((res) => {
        console.log("特定时间范围内的数据", res)
        this.historyWarnTable = res.data
      })
    },
    /**
     * 当电机页面中的图表和报警记录表中的查询按钮时，触发
     */
    getMyData: function (index, row) {
      this.showWtich = index
      if (index == 1) {
        this.xData = row.chartData.xData
        this.yData = row.chartData.yData
        this.minData = row.chartData.minData
        this.maxData = row.chartData.maxData
        this.rName = row.chartData.rName
        // console.log("这是name",row.chartData.rName)
      }
      /**
       * 查看报警数据前后的数据，并以图表形式展示
       */

      else if (index == 2) {
        getListSpecial6({ rollingName: row.rollingName, ts: row.rollingProduceTime }).then((res) => {
          console.log('报警数据前后的数据', res.data)
          this.myvisible = false
          this.listSpecial = res.data
          this.xData = []
          this.yData = []
          this.listSpecial.forEach(item => {
            this.xData.push(item.rollingProduceTime)
            this.yData.push(item.rollingValue)
            this.rName = item.rollingName
            if (this.rName == '炉冷却水') {
              this.minData = this.rollingTableData1[0].chartData.minData
              this.maxData = this.rollingTableData1[0].chartData.maxData
            } else if (this.rName == '炉压缩空气') {
              this.minData = this.rollingTableData1[1].chartData.minData
              this.maxData = this.rollingTableData1[1].chartData.maxData
            } else if (this.rName == '金属料温温度曲线') {
              this.minData = this.rollingTableData1[2].chartData.minData
              this.maxData = this.rollingTableData1[2].chartData.maxData
            } else if (this.rName == '一区炉气温度曲线') {
              this.minData = this.rollingTableData1[3].chartData.minData
              this.maxData = this.rollingTableData1[3].chartData.maxData
            } else if (this.rName == '二区炉气温度曲线') {
              this.minData = this.rollingTableData1[4].chartData.minData
              this.maxData = this.rollingTableData1[4].chartData.maxData
            } else if (this.rName == '三区炉气温度曲线') {
              this.minData = this.rollingTableData1[5].chartData.minData
              this.maxData = this.rollingTableData1[5].chartData.maxData
            } else if (this.rName == '炉气设定温度') {
              this.minData = this.rollingTableData1[6].chartData.minData
              this.maxData = this.rollingTableData1[6].chartData.maxData
            }
          })
        })
      }
      // 为true则显示弹窗
      this.dialogVisible = true
    },

    // 定时查询铸轧机数据
    setTimer() {
      if (this.timer == null) {
        this.timer = setInterval(() => {
          // 1号铸轧机数据
          getListNewData6().then((res) => {
            this.dataList = res.data
            // console.log("这是拿到的数据"+this.dataList)
            this.rollingTableData1[0].chartData.xData = []
            this.rollingTableData1[0].chartData.yData = []
            this.rollingTableData1[1].chartData.xData = []
            this.rollingTableData1[1].chartData.yData = []
            this.rollingTableData1[2].chartData.xData = []
            this.rollingTableData1[2].chartData.yData = []
            this.rollingTableData1[3].chartData.xData = []
            this.rollingTableData1[3].chartData.yData = []
            this.rollingTableData1[4].chartData.xData = []
            this.rollingTableData1[4].chartData.yData = []
            this.rollingTableData1[5].chartData.xData = []
            this.rollingTableData1[5].chartData.yData = []
            this.rollingTableData1[6].chartData.xData = []
            this.rollingTableData1[6].chartData.yData = []

            this.dataList.forEach(item => {
              this.rollingTableData1[0].chartData.xData.unshift(item.ts)
              this.rollingTableData1[0].chartData.yData.unshift(item.coolWaterUpLimit)
              this.rollingTableData1[0].chartData.rName = '炉冷却水'
              this.rollingTableData1[1].chartData.xData.unshift(item.ts)
              // this.rollingTableData1[1].chartData.yData.unshift(item.compressedAirOneLowPressure)
              this.rollingTableData1[1].chartData.yData.unshift(1)
              this.rollingTableData1[1].chartData.rName = '炉压缩空气'
              this.rollingTableData1[2].chartData.xData.unshift(item.ts)
              this.rollingTableData1[2].chartData.yData.unshift(item.meterialT)
              this.rollingTableData1[2].chartData.rName = '金属料温温度曲线'
              this.rollingTableData1[3].chartData.xData.unshift(item.ts)
              this.rollingTableData1[3].chartData.yData.unshift(item.zoneOneT)
              this.rollingTableData1[3].chartData.rName = '1区炉气温度曲线'
              this.rollingTableData1[4].chartData.xData.unshift(item.ts)
              this.rollingTableData1[4].chartData.yData.unshift(item.zoneTwoT)
              this.rollingTableData1[4].chartData.rName = '2区炉气温度曲线'
              this.rollingTableData1[5].chartData.xData.unshift(item.ts)
              this.rollingTableData1[5].chartData.yData.unshift(item.zoneThreeT)
              this.rollingTableData1[5].chartData.rName = '3区炉气温度曲线'
              this.rollingTableData1[6].chartData.xData.unshift(item.ts)
              this.rollingTableData1[6].chartData.yData.unshift(item.setT)
              this.rollingTableData1[6].chartData.rName = '炉气设定温度'

              //炉冷却水
              this.rollingTableData1[0].value = item.coolWaterUpLimit;
              //炉压缩空气
              // this.rollingTableData1[1].value = item.compressedAirOneLowPressure;
              this.rollingTableData1[1].value = 1;
              //金属料温温度曲线
              this.rollingTableData1[2].value = item.meterialT;
              //1区炉气温度曲线
              this.rollingTableData1[3].value = item.zoneOneT;
              //2区炉气温度曲线  rollA
              this.rollingTableData1[4].value = item.zoneTwoT;
              //3区炉气温度曲线
              this.rollingTableData1[5].value = item.zoneThreeT;
              //炉气设定温度
              this.rollingTableData1[6].value = item.setT;
              // //上辊水温
              // this.rollingTableData1[7].value = item.upRollWaterT;
              // //下辊水温
              // this.rollingTableData1[8].value = item.upRollFlow;
              // //上辊流量
              // this.rollingTableData1[9].value = item.upRollFlow;
              // //下辊流量
              // this.rollingTableData1[10].value = item.downRollFlow;
              // //操作侧预载力
              // this.rollingTableData1[11].value = item.operationPreloadForce;
              // //传动侧预载力
              // this.rollingTableData1[12].value = item.transPreloadForce;
              //  //传动侧预载力
              //  this.rollingTableData1[12].value = item.upRollMontorA;

            })
          })
          // 定时查询退火炉最新20条报警记录
          // getListWarnNewData({ rollingDeviceNumber: '退火炉#' }).then((res) => {
          //   this.currentWarnTable = res.data
          // })
        }, 1000)
      }
    }
  }
}
</script>

<style scoped>
.el-icon-mytubiao {
  background: url('~@/icons/myicons/status1.jpg') center no-repeat;
  background-size: cover;
}

.el-icon-mytubiao:before {
  content: "替";
  font-size: 16px;
  visibility: hidden;
}
</style>
