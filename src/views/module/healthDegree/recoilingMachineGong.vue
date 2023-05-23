<template>
  <div>
    <div style="display: flex;margin-top: 5px;">
      <div style="width: 82%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">1#重卷机工艺参数</span>
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
    <div class="health_status" style="margin-top: 8px;height: 400px;">
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
import { getListNewDataCjj1, getListSpecialCjj1, rollingOptions, rollingTableData1 } from '@/api/oneCjjgy'
// import { getListNewDataCjj1, getListSpecialCjj1, rollingOptions, rollingTableData1 } from '@/api/oneCjj'
import { getListWarnNewData, getListWarnHistoryData, getListDuringWarnData, addRead, getTec } from '@/api/warnTable'
import { parseTime } from '@/utils/utils'
export default {
  components: { AreaChart },
  data() {
    return {
      //判断状态
      judge: '',
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
    /**
     * 获取一号铸轧机报警历史记录（30条）
     */
    await getTec({ rollingDeviceNumber: '重卷机1#' }).then((res) => {
      this.historyWarnTable = res.data,
        console.log('得到基础数据', res.data)
    })
    /**
     * 获取上下限阈值
     */
    await getAvaluateList().then((res) => {
      this.avaluateList = res.data
      this.avaluateList.forEach(item => {
        // 1号铸轧机参数
        if (item.deviceId == '重卷机1#') {
          switch (item.name) {
            case '机列速度':
              this.rollingTableData1[0].chartData.minData = item.minValue
              this.rollingTableData1[0].chartData.maxData = item.maxValue
              break
            case '卷取卷径':
              this.rollingTableData1[1].chartData.minData = item.minValue
              this.rollingTableData1[1].chartData.maxData = item.maxValue
              break
            case '实际张力':
              this.rollingTableData1[2].chartData.minData = item.minValue
              this.rollingTableData1[2].chartData.maxData = item.maxValue
              break
            case '带材长度':
              this.rollingTableData1[3].chartData.minData = item.minValue
              this.rollingTableData1[3].chartData.maxData = item.maxValue
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
      // 重卷机#
      // select * from t_8e6f17d0928e11ed8fbe65289e32d77e where ts > now - 5s;
      var zong = 'SELECT * FROM t_8e6f17d0928e11ed8fbe65289e32d77e where ts between'
      var qian = parseTime(this.qualifyDateRange[0])
      var hou = parseTime(this.qualifyDateRange[1])
      // 补全sql语句，并且将其添加限制查询条件
      this.tdts = zong + "'" + qian + "'" + ' and ' + "'" + hou + "'" + 'limit' + '  ' + 1000
      axios
        // params:可传递多个参数,固定写法,不能改,否则参数传递失败
        .get('https://10.82.23.246:9528/td/rewindRoll/historyRange', { params: { sql: this.tdts, type: this.tdtype } })
        // .get('https://192.168.100.208:9528/td/rewindRoll/historyRange', { params: { sql: this.tdts, type: this.tdtype } })
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
      getListDuringWarnData({ rollingDeviceNumber: '重卷机1#', rollingName: this.indicatorName, begin: this.begin, end: this.end }).then((res) => {
        console.log('特定时间范围内的数据', res)
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
        this.tdtype = row.chartData.rType
        console.log('打印出来的type', this.tdtype)
      }
      /**
       * 查看报警数据前后的数据，并以图表形式展示
       */
      else if (index == 2) {
        getListSpecialCjj1({ rollingName: row.rollingName, ts: row.rollingProduceTime }).then((res) => {
          console.log('报警数据前后的数据', res.data)
          this.myvisible = false
          this.listSpecial = res.data
          this.xData = []
          this.yData = []
          this.listSpecial.forEach(item => {
            console.log('名字', item.rollingName)
            this.xData.push(item.rollingProduceTime)
            this.yData.push(item.rollingValue)
            this.rName = item.rollingName
            if (this.rName == '机列速度') {
              this.minData = this.rollingTableData1[0].chartData.minData
              this.maxData = this.rollingTableData1[0].chartData.maxData
            } else if (this.rName == '卷取卷径') {
              this.minData = this.rollingTableData1[1].chartData.minData
              this.maxData = this.rollingTableData1[1].chartData.maxData
            } else if (this.rName == '实际张力') {
              this.minData = this.rollingTableData1[2].chartData.minData
              this.maxData = this.rollingTableData1[2].chartData.maxData
            } else if (this.rName == '带材长度') {
              this.minData = this.rollingTableData1[3].chartData.minData
              this.maxData = this.rollingTableData1[3].chartData.maxData
            }
          })
        })
        addRead(row).then((res) => {
          // console.log("是否已读", res)
        })
        row.yd = '已读'
      }
      // 为true则显示弹窗
      this.dialogVisible = true
    },
    // 定时查询铸轧机数据
    setTimer() {
      if (this.timer == null) {
        this.timer = setInterval(() => {
          // 1号铸轧机数据
          getListNewDataCjj1().then((res) => {
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
            this.rollingTableData1[0].chartData.rType = []
            this.rollingTableData1[1].chartData.rType = []
            this.rollingTableData1[2].chartData.rType = []
            this.rollingTableData1[3].chartData.rType = []

            this.dataList.forEach(item => {
              this.rollingTableData1[0].chartData.xData.unshift(item.ts)
              this.rollingTableData1[0].chartData.yData.unshift(item.machineColsV)
              this.rollingTableData1[0].chartData.rName = '机列速度'
              this.rollingTableData1[0].chartData.rType = 'machineColsV'

              this.rollingTableData1[1].chartData.xData.unshift(item.ts)
              this.rollingTableData1[1].chartData.yData.unshift(item.rollWindD)
              this.rollingTableData1[1].chartData.rName = '卷取卷径'
              this.rollingTableData1[1].chartData.rType = 'rollWindD'

              this.rollingTableData1[2].chartData.xData.unshift(item.ts)
              this.rollingTableData1[2].chartData.yData.unshift(item.actualTension)
              this.rollingTableData1[2].chartData.rName = '实际张力'
              this.rollingTableData1[2].chartData.rType = 'actualTension'

              this.rollingTableData1[3].chartData.xData.unshift(item.ts)
              this.rollingTableData1[3].chartData.yData.unshift(item.stripL)
              this.rollingTableData1[3].chartData.rName = '带材长度'
              this.rollingTableData1[3].chartData.rType = 'stripL'
              // 机列速度
              this.rollingTableData1[0].value = item.machineColsV
              // 卷取卷径
              this.rollingTableData1[1].value = item.rollWindD
              // 实际张力
              this.rollingTableData1[2].value = item.actualTension
              // 带材长度
              this.rollingTableData1[3].value = item.stripL
            })
          })


          //判断设备健康状况
          getListNewDataCjj1().then((res) => {
            console.log("打印设备的状态信息", res.data[0].machineColsV);
            this.judgeList = [];
            this.judge = res.data[0].machineColsV;
            // 绿
            if (this.judge >= 10) {
              this.ZT1 = "true";
              this.ZT2 = "";
            };

            // 红
            if (this.judge < 10) {
              this.ZT1 = "";
              this.ZT2 = "true";
            };
          })

          // 定时查询重卷机最新50条报警记录
          getTec({ rollingDeviceNumber: '重卷机1#' }).then((res) => {
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
