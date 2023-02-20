<template>
  <div>
    <div style="display: flex;margin-top: 5px;">
      <div style="width: 82%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">5#铸轧机</span>
            </div>
          </div>
          <div>
            <el-table :data="rollingTableData5" stripe style="width: 100%" height="300px" :cell-style="{'text-align':'center','height':'10px','line-hight':'150px'}" :header-cell-style="{'text-align':'center'}">
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="chartData" label="图表" min-width="50%">
                <template slot-scope="scope">
                  <div style="padding: 0 30%" @click="getMyData(1, scope.row)">
                    <AreaChart width="200px" height="63px" :x-data="scope.row.chartData.xData" :y-data="scope.row.chartData.yData" :min-data="scope.row.chartData.minData" :max-data="scope.row.chartData.maxData" :r-name="scope.row.chartData.rName" />
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
    <div class="health_status" style="margin-top: 8px">
      <el-card shadow="always">
        <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
          <div style="display: flex;">
            <span style="line-height: 20px;">报警记录表</span>
          </div>
        </div>
        <div>
          <el-table :data="warnTable" stripe style="width: 100%" height="300px" :show-header="false">
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
                <el-button
                  size="medium"
                  type="text"
                  @click="getMyData(2, scope.row)"
                >查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>
    <el-dialog :visible.sync="dialogVisible">
      <div v-if="showWtich===1">
        <div style="display: flex;">
          <el-button style="" type="text"> 本周 </el-button>
          <el-button style="" type="text"> 本月 </el-button>
          <el-button style="margin-right: 10px;" type="text"> 本年 </el-button>
          <div>
            <el-date-picker
              v-model="qualifyDateRange"
              size="small"
              type="daterange"
              align="left"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
            />
          </div>
        </div>
        <div>
          <AreaChart :x-data="xData" :y-data="yData" :min-data="minData" :max-data="maxData" :r-name="rName" />
        </div>
      </div>
      <div v-if="showWtich===2">
        <div>
          <AreaChart :x-data="xData" :y-data="yData" :min-data="minData" :max-data="maxData" :r-name="rName" />
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import AreaChart from '@/views/dashboard/AreaChart'
import { getListInfo, getListSpecial, rollingTableData5 } from '@/api/rollingMachine'
import { getAvaluateList } from '@/api/avaluate'
export default {
  components: { AreaChart },
  data() {
    return {
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
      rollingTableData5,
      warnTable: [],
      dialogVisible: false,
      dataList: {},
      avaluateList: {},
      listSpecial: {},
      // avaluateListTen:{},
      minData: null,
      maxData: null,
      rName: null,
      xData: [],
      yData: [],
      timer: null,
      showWtich: 1,
      parameter: {
        indicatorName: null
      },
      dyTime: ['1970-01-01 00:00:00', '1970-01-01 00:00:00', '1970-01-01 00:00:00', '1970-01-01 00:00:00', '1970-01-01 00:00:00', '1970-01-01 00:00:00', '1970-01-01 00:00:00', '1970-01-01 00:00:00', '1970-01-01 00:00:00', '1970-01-01 00:00:00', '1970-01-01 00:00:00', '1970-01-01 00:00:00', '1970-01-01 00:00:00']
    }
  },
  async created() {
    // 每次进入界面时，先清除之前的所有定时器，然后启动新的定时器
    clearInterval(this.timer)
    this.timer = null
    this.setTimer()
    await getAvaluateList().then((res) => {
      this.avaluateList = res.data
      // console.log("上下限：",res.data)
      this.avaluateList.forEach(item => {
        // 1号铸轧机参数
        if (item.deviceId == '铸轧机5#') {
          switch (item.name) {
            case '上辊电机电流':
              this.rollingTableData5[0].chartData.minData = item.minValue
              this.rollingTableData5[0].chartData.maxData = item.maxValue
              break
            case '下辊电机电流':
              this.rollingTableData5[1].chartData.minData = item.minValue
              this.rollingTableData5[1].chartData.maxData = item.maxValue
              break
            case '主水泵电机电流':
              this.rollingTableData5[2].chartData.minData = item.minValue
              this.rollingTableData5[2].chartData.maxData = item.maxValue
              break
            case '备用水泵电机电流':
              this.rollingTableData5[3].chartData.minData = item.minValue
              this.rollingTableData5[3].chartData.maxData = item.maxValue
              break
            case '卷取电机电流':
              this.rollingTableData5[4].chartData.minData = item.minValue
              this.rollingTableData5[4].chartData.maxData = item.maxValue
              break
            case '上辊水压':
              this.rollingTableData5[5].chartData.minData = item.minValue
              this.rollingTableData5[5].chartData.maxData = item.maxValue
              break
            case '下辊水压':
              this.rollingTableData5[6].chartData.minData = item.minValue
              this.rollingTableData5[6].chartData.maxData = item.maxValue
              break
            case '上辊水温':
              this.rollingTableData5[7].chartData.minData = item.minValue
              this.rollingTableData5[7].chartData.maxData = item.maxValue
              break
            case '下辊水温':
              this.rollingTableData5[8].chartData.minData = item.minValue
              this.rollingTableData5[8].chartData.maxData = item.maxValue
              break
            case '上辊流量':
              this.rollingTableData5[9].chartData.minData = item.minValue
              this.rollingTableData5[9].chartData.maxData = item.maxValue
              break
            case '下辊流量':
              this.rollingTableData5[10].chartData.minData = item.minValue
              this.rollingTableData5[10].chartData.maxData = item.maxValue
              break
            case '操作侧预载力':
              this.rollingTableData5[11].chartData.minData = item.minValue
              this.rollingTableData5[11].chartData.maxData = item.maxValue
              break
            case '传动侧预载力':
              this.rollingTableData5[12].chartData.minData = item.minValue
              this.rollingTableData5[12].chartData.maxData = item.maxValue
              break
          }
        }
      })
    })
  },
  destroyed: function() {
    // 每次离开当前界面时，清除定时器
    clearInterval(this.timer)
    this.timer = null
  },

  methods: {
    getMyData: function(index, row) {
      this.showWtich = index
      if (index == 1) {
        this.xData = row.chartData.xData
        this.yData = row.chartData.yData
        this.minData = row.chartData.minData
        this.maxData = row.chartData.maxData
        this.rName = row.chartData.rName
        // console.log("这是name",row.chartData.rName)
      } else if (index == 2) {
        getListSpecial({ rollingName: row.rollingName, rollingProduceTime: row.rollingProduceTime }).then((res) => {
          console.log('特殊值列表', res.data)
          this.listSpecial = res.data
          this.xData = []
          this.yData = []
          this.listSpecial.forEach(item => {
            this.xData.push(item.rollingProduceTime)
            this.yData.push(item.rollingValue)
            this.rName = item.rollingName
            if (this.rName == '上辊电机电流') {
              this.minData = this.rollingTableData5[0].chartData.minData
              this.maxData = this.rollingTableData5[0].chartData.maxData
            } else if (this.rName == '下辊电机电流') {
              this.minData = this.rollingTableData5[1].chartData.minData
              this.maxData = this.rollingTableData5[1].chartData.maxData
            } else if (this.rName == '主水泵电机电流') {
              this.minData = this.rollingTableData5[2].chartData.minData
              this.maxData = this.rollingTableData5[2].chartData.maxData
            } else if (this.rName == '备用水泵电机电流') {
              this.minData = this.rollingTableData5[3].chartData.minData
              this.maxData = this.rollingTableData5[3].chartData.maxData
            } else if (this.rName == '卷取电机电流') {
              this.minData = this.rollingTableData5[4].chartData.minData
              this.maxData = this.rollingTableData5[4].chartData.maxData
            } else if (this.rName == '上辊水压') {
              this.minData = this.rollingTableData5[5].chartData.minData
              this.maxData = this.rollingTableData5[5].chartData.maxData
            } else if (this.rName == '下辊水压') {
              this.minData = this.rollingTableData5[6].chartData.minData
              this.maxData = this.rollingTableData5[6].chartData.maxData
            } else if (this.rName == '上辊水温') {
              this.minData = this.rollingTableData5[7].chartData.minData
              this.maxData = this.rollingTableData5[7].chartData.maxData
            } else if (this.rName == '下辊水温') {
              this.minData = this.rollingTableData5[8].chartData.minData
              this.maxData = this.rollingTableData5[8].chartData.maxData
            } else if (this.rName == '上辊流量') {
              this.minData = this.rollingTableData5[9].chartData.minData
              this.maxData = this.rollingTableData5[9].chartData.maxData
            } else if (this.rName == '下辊流量') {
              this.minData = this.rollingTableData5[10].chartData.minData
              this.maxData = this.rollingTableData5[10].chartData.maxData
            } else if (this.rName == '操作侧预载力') {
              this.minData = this.rollingTableData5[11].chartData.minData
              this.maxData = this.rollingTableData5[11].chartData.maxData
            } else if (this.rName == '传动侧预载力') {
              this.minData = this.rollingTableData5[12].chartData.minData
              this.maxData = this.rollingTableData5[12].chartData.maxData
            }
          })
        })
      }

      this.dialogVisible = true
    },

    // 定时查询铸轧机数据

    setTimer() {
      if (this.timer == null) {
        this.timer = setInterval(() => {
          // 1号铸轧机数据

          getListInfo({ rollingName: '上辊电机电流', rollingDeviceId: 5 }).then((res) => {
            this.dataList = res.data
            // console.log(this.dataList)
            this.rollingTableData5[0].chartData.xData = []
            this.rollingTableData5[0].chartData.yData = []
            this.dataList.forEach(item => {
              if (item.rollingValue > this.rollingTableData5[0].chartData.maxData) {
                if (this.warnTable.length == 0 || this.dyTime[0] < item.rollingProduceTime) {
                  this.warnTable.push(item)
                  this.dyTime[0] = item.rollingProduceTime
                }
              }
              this.rollingTableData5[0].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData5[0].chartData.yData.push(item.rollingValue)
              this.rollingTableData5[0].chartData.rName = item.rollingName
            })
          })
          getListInfo({ rollingName: '下辊电机电流', rollingDeviceId: 5 }).then((res) => {
            this.dataList = res.data
            this.rollingTableData5[1].chartData.xData = []
            this.rollingTableData5[1].chartData.yData = []
            this.dataList.forEach(item => {
              if (item.rollingValue > this.rollingTableData5[1].chartData.maxData) {
                if (this.warnTable.length == 0 || this.dyTime[1] < item.rollingProduceTime) {
                  this.warnTable.push(item)
                  this.dyTime[1] = item.rollingProduceTime
                }
              }
              this.rollingTableData5[1].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData5[1].chartData.yData.push(item.rollingValue)
              this.rollingTableData5[1].chartData.rName = item.rollingName
            })
          })
          getListInfo({ rollingName: '主水泵电机电流', rollingDeviceId: 5 }).then((res) => {
            this.dataList = res.data
            this.rollingTableData5[2].chartData.xData = []
            this.rollingTableData5[2].chartData.yData = []
            this.dataList.forEach(item => {
              if (item.rollingValue > this.rollingTableData5[2].chartData.maxData) {
                if (this.warnTable.length == 0 || this.dyTime[2] < item.rollingProduceTime) {
                  this.warnTable.push(item)
                  this.dyTime[2] = item.rollingProduceTime
                }
              }
              this.rollingTableData5[2].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData5[2].chartData.yData.push(item.rollingValue)
              this.rollingTableData5[2].chartData.rName = item.rollingName
            })
          })
          getListInfo({ rollingName: '备用水泵电机电流', rollingDeviceId: 5 }).then((res) => {
            this.dataList = res.data
            this.rollingTableData5[3].chartData.xData = []
            this.rollingTableData5[3].chartData.yData = []
            this.dataList.forEach(item => {
              if (item.rollingValue > this.rollingTableData5[3].chartData.maxData) {
                if (this.warnTable.length == 0 || this.dyTime[3] < item.rollingProduceTime) {
                  this.warnTable.push(item)
                  this.dyTime[3] = item.rollingProduceTime
                }
              }
              this.rollingTableData5[3].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData5[3].chartData.yData.push(item.rollingValue)
              this.rollingTableData5[3].chartData.rName = item.rollingName
            })
          })
          getListInfo({ rollingName: '卷取电机电流', rollingDeviceId: 5 }).then((res) => {
            this.dataList = res.data
            this.rollingTableData5[4].chartData.xData = []
            this.rollingTableData5[4].chartData.yData = []
            this.dataList.forEach(item => {
              if (item.rollingValue > this.rollingTableData5[4].chartData.maxData) {
                if (this.warnTable.length == 0 || this.dyTime[4] < item.rollingProduceTime) {
                  this.warnTable.push(item)
                  this.dyTime[4] = item.rollingProduceTime
                }
              }
              this.rollingTableData5[4].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData5[4].chartData.yData.push(item.rollingValue)
              this.rollingTableData5[4].chartData.rName = item.rollingName
            })
          })
          getListInfo({ rollingName: '上辊水压', rollingDeviceId: 5 }).then((res) => {
            this.dataList = res.data
            this.rollingTableData5[5].chartData.xData = []
            this.rollingTableData5[5].chartData.yData = []
            this.dataList.forEach(item => {
              if (item.rollingValue > this.rollingTableData5[5].chartData.maxData) {
                if (this.warnTable.length == 0 || this.dyTime[5] < item.rollingProduceTime) {
                  this.warnTable.push(item)
                  this.dyTime[5] = item.rollingProduceTime
                }
              }
              this.rollingTableData5[5].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData5[5].chartData.yData.push(item.rollingValue)
              this.rollingTableData5[5].chartData.rName = item.rollingName
            })
          })
          getListInfo({ rollingName: '下辊水压', rollingDeviceId: 5 }).then((res) => {
            this.dataList = res.data
            this.rollingTableData5[6].chartData.xData = []
            this.rollingTableData5[6].chartData.yData = []
            this.dataList.forEach(item => {
              if (item.rollingValue > this.rollingTableData5[6].chartData.maxData) {
                if (this.warnTable.length == 0 || this.dyTime[6] < item.rollingProduceTime) {
                  this.warnTable.push(item)
                  this.dyTime[6] = item.rollingProduceTime
                }
              }
              this.rollingTableData5[6].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData5[6].chartData.yData.push(item.rollingValue)
              this.rollingTableData5[6].chartData.rName = item.rollingName
            })
          })
          getListInfo({ rollingName: '上辊水温', rollingDeviceId: 5 }).then((res) => {
            this.dataList = res.data
            this.rollingTableData5[7].chartData.xData = []
            this.rollingTableData5[7].chartData.yData = []
            this.dataList.forEach(item => {
              if (item.rollingValue > this.rollingTableData5[7].chartData.maxData) {
                if (this.warnTable.length == 0 || this.dyTime[7] < item.rollingProduceTime) {
                  this.warnTable.push(item)
                  this.dyTime[7] = item.rollingProduceTime
                }
              }
              this.rollingTableData5[7].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData5[7].chartData.yData.push(item.rollingValue)
              this.rollingTableData5[7].chartData.rName = item.rollingName
            })
          })
          getListInfo({ rollingName: '下辊水温', rollingDeviceId: 5 }).then((res) => {
            this.dataList = res.data
            this.rollingTableData5[8].chartData.xData = []
            this.rollingTableData5[8].chartData.yData = []
            this.dataList.forEach(item => {
              if (item.rollingValue > this.rollingTableData5[8].chartData.maxData) {
                if (this.warnTable.length == 0 || this.dyTime[8] < item.rollingProduceTime) {
                  this.warnTable.push(item)
                  this.dyTime[8] = item.rollingProduceTime
                }
              }
              this.rollingTableData5[8].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData5[8].chartData.yData.push(item.rollingValue)
              this.rollingTableData5[8].chartData.rName = item.rollingName
            })
          })
          getListInfo({ rollingName: '上辊流量', rollingDeviceId: 5 }).then((res) => {
            this.dataList = res.data
            this.rollingTableData5[9].chartData.xData = []
            this.rollingTableData5[9].chartData.yData = []
            this.dataList.forEach(item => {
              if (item.rollingValue > this.rollingTableData5[9].chartData.maxData) {
                if (this.warnTable.length == 0 || this.dyTime[9] < item.rollingProduceTime) {
                  this.warnTable.push(item)
                  this.dyTime[9] = item.rollingProduceTime
                }
              }
              this.rollingTableData5[9].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData5[9].chartData.yData.push(item.rollingValue)
              this.rollingTableData5[9].chartData.rName = item.rollingName
            })
          })
          getListInfo({ rollingName: '下辊流量', rollingDeviceId: 5 }).then((res) => {
            this.dataList = res.data
            this.rollingTableData5[10].chartData.xData = []
            this.rollingTableData5[10].chartData.yData = []
            this.dataList.forEach(item => {
              if (item.rollingValue > this.rollingTableData5[10].chartData.maxData) {
                if (this.warnTable.length == 0 || this.dyTime[10] < item.rollingProduceTime) {
                  this.warnTable.push(item)
                  this.dyTime[10] = item.rollingProduceTime
                }
              }
              this.rollingTableData5[10].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData5[10].chartData.yData.push(item.rollingValue)
              this.rollingTableData5[10].chartData.rName = item.rollingName
            })
          })
          getListInfo({ rollingName: '操作侧预载力', rollingDeviceId: 5 }).then((res) => {
            this.dataList = res.data
            this.rollingTableData5[11].chartData.xData = []
            this.rollingTableData5[11].chartData.yData = []
            this.dataList.forEach(item => {
              if (item.rollingValue > this.rollingTableData5[11].chartData.maxData) {
                if (this.warnTable.length == 0 || this.dyTime[11] < item.rollingProduceTime) {
                  this.warnTable.push(item)
                  this.dyTime[11] = item.rollingProduceTime
                }
              }
              this.rollingTableData5[11].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData5[11].chartData.yData.push(item.rollingValue)
              this.rollingTableData5[11].chartData.rName = item.rollingName
            })
          })
          getListInfo({ rollingName: '传动侧预载力', rollingDeviceId: 5 }).then((res) => {
            this.dataList = res.data
            this.rollingTableData5[12].chartData.xData = []
            this.rollingTableData5[12].chartData.yData = []
            this.dataList.forEach(item => {
              if (item.rollingValue > this.rollingTableData5[12].chartData.maxData) {
                if (this.warnTable.length == 0 || this.dyTime[12] < item.rollingProduceTime) {
                  this.warnTable.push(item)
                  this.dyTime[12] = item.rollingProduceTime
                }
              }
              this.rollingTableData5[12].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData5[12].chartData.yData.push(item.rollingValue)
              this.rollingTableData5[12].chartData.rName = item.rollingName
            })
          })
        }, 2000)
      }
    }
  }
}
</script>

<style scoped>
.el-icon-mytubiao{
  background: url('~@/icons/myicons/status1.jpg') center no-repeat;
  background-size: cover;
}
.el-icon-mytubiao:before{
  content: "替";
  font-size: 16px;
  visibility: hidden;
}
</style>
