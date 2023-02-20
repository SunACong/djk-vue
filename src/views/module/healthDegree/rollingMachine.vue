<template>
  <div>
    <div style="display: flex;margin-top: 5px;">
      <div style="width: 54%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">1#铸轧机</span>
            </div>
          </div>
          <div>
            <el-table :data="rollingTableData1" stripe style="width: 100%" height="300px" :cell-style="{'text-align':'center','height':'10px','line-hight':'150px'}" :header-cell-style="{'text-align':'center'}"  >
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="tubiao" label="图表" min-width="50%" >
                <template slot-scope="scope">
                  <div style="padding: 0 15%" @click="getMyData(1,scope.row)" >
                    <AreaChart width="200px" height="63px" :x-data="scope.row.chartData.xData" :y-data="scope.row.chartData.yData"  :min-data="scope.row.chartData.minData" :max-data="scope.row.chartData.maxData" :r-name="scope.row.chartData.rName"></AreaChart>
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
          <div style="font-size: 60px;color: blue;text-align: center;margin: 92px 0px 92px 0px">
            <el-button class="el-icon-mytubiao" style="margin-bottom: 10px" />
            <div style="font-size: 30px;color: green;">正常</div>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 40%;height: 300px">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">报警记录表</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData" stripe style="width: 100%" height="300px" :show-header="false" >
              <el-table-column prop="id" label="序号" min-width="10%" />
              <el-table-column prop="data" label="日期" min-width="25%" />
              <el-table-column prop="address" label="编号" min-width="25%" />
              <el-table-column prop="status" label="状态" min-width="25%" >
                <template slot-scope="scope">
                  <el-button
                      size="medium"
                      type="text"
                      style="color: red"
                  >{{ scope.row.status }}</el-button>
                </template>
              </el-table-column>
              <el-table-column label="判定结果" min-width="15%" >
                <template slot-scope="scope">
                  <el-button
                      size="medium"
                      type="text"
                      @click="getMyData(2,scope.row)"
                  >查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
    </div>
    <div style="display: flex;margin-top: 5px;">
      <div style="width: 54%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">2#铸轧机</span>
            </div>
          </div>
          <div>
            <el-table :data="rollingTableData2" stripe style="width: 100%" height="300px" :cell-style="{'text-align':'center','height':'10px','line-hight':'150px'}" :header-cell-style="{'text-align':'center'}"  >
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="tubiao" label="图表" min-width="50%" >
                <template slot-scope="scope">
                  <div style="padding: 0 15%" @click="getMyData(1,scope.row)" >
                    <AreaChart width="200px" height="63px" :x-data="scope.row.chartData.xData" :y-data="scope.row.chartData.yData"  :min-data="scope.row.chartData.minData" :max-data="scope.row.chartData.maxData" :r-name="scope.row.chartData.rName"></AreaChart>
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
          <div style="font-size: 60px;color: blue;text-align: center;margin: 92px 0px 92px 0px">
            <el-button class="el-icon-mytubiao" style="margin-bottom: 10px" />
            <div style="font-size: 30px;color: green;">正常</div>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 40%;height: 300px">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">报警记录表</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData" stripe style="width: 100%" height="300px" :show-header="false" >
              <el-table-column prop="id" label="序号" min-width="10%" />
              <el-table-column prop="data" label="日期" min-width="25%" />
              <el-table-column prop="address" label="编号" min-width="25%" />
              <el-table-column prop="status" label="状态" min-width="25%" >
                <template slot-scope="scope">
                  <el-button
                      size="medium"
                      type="text"
                      style="color: red"
                  >{{ scope.row.status }}</el-button>
                </template>
              </el-table-column>
              <el-table-column label="判定结果" min-width="15%" >
                <template slot-scope="scope">
                  <el-button
                      size="medium"
                      type="text"
                      @click="getMyData(2,scope.row)"
                  >查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
    </div>
    <div style="display: flex;margin-top: 5px;">
      <div style="width: 54%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">3#铸轧机</span>
            </div>
          </div>
          <div>
            <el-table :data="rollingTableData3" stripe style="width: 100%" height="300px" :cell-style="{'text-align':'center','height':'10px','line-hight':'150px'}" :header-cell-style="{'text-align':'center'}"  >
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="tubiao" label="图表" min-width="50%" >
                <template slot-scope="scope">
                  <div style="padding: 0 15%" @click="getMyData(1,scope.row)" >
                    <AreaChart width="200px" height="63px" :x-data="scope.row.chartData.xData" :y-data="scope.row.chartData.yData"  :min-data="scope.row.chartData.minData" :max-data="scope.row.chartData.maxData" :r-name="scope.row.chartData.rName"></AreaChart>
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
          <div style="font-size: 60px;color: blue;text-align: center;margin: 92px 0px 92px 0px">
            <el-button class="el-icon-mytubiao" style="margin-bottom: 10px" />
            <div style="font-size: 30px;color: green;">正常</div>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 40%;height: 300px">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">报警记录表</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData" stripe style="width: 100%" height="300px" :show-header="false" >
              <el-table-column prop="id" label="序号" min-width="10%" />
              <el-table-column prop="data" label="日期" min-width="25%" />
              <el-table-column prop="address" label="编号" min-width="25%" />
              <el-table-column prop="status" label="状态" min-width="25%" >
                <template slot-scope="scope">
                  <el-button
                      size="medium"
                      type="text"
                      style="color: red"
                  >{{ scope.row.status }}</el-button>
                </template>
              </el-table-column>
              <el-table-column label="判定结果" min-width="15%" >
                <template slot-scope="scope">
                  <el-button
                      size="medium"
                      type="text"
                      @click="getMyData(2,scope.row)"
                  >查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
    </div>
    <div style="display: flex;margin-top: 5px;">
      <div style="width: 54%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">4#铸轧机</span>
            </div>
          </div>
          <div>
            <el-table :data="rollingTableData4" stripe style="width: 100%" height="300px" :cell-style="{'text-align':'center','height':'10px','line-hight':'150px'}" :header-cell-style="{'text-align':'center'}"  >
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="tubiao" label="图表" min-width="50%" >
                <template slot-scope="scope">
                  <div style="padding: 0 15%" @click="getMyData(1,scope.row)" >
                    <AreaChart width="200px" height="63px" :x-data="scope.row.chartData.xData" :y-data="scope.row.chartData.yData"  :min-data="scope.row.chartData.minData" :max-data="scope.row.chartData.maxData" :r-name="scope.row.chartData.rName"></AreaChart>
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
          <div style="font-size: 60px;color: blue;text-align: center;margin: 92px 0px 92px 0px">
            <el-button class="el-icon-mytubiao" style="margin-bottom: 10px" />
            <div style="font-size: 30px;color: green;">正常</div>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 40%;height: 300px">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">报警记录表</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData" stripe style="width: 100%" height="300px" :show-header="false" >
              <el-table-column prop="id" label="序号" min-width="10%" />
              <el-table-column prop="data" label="日期" min-width="25%" />
              <el-table-column prop="address" label="编号" min-width="25%" />
              <el-table-column prop="status" label="状态" min-width="25%" >
                <template slot-scope="scope">
                  <el-button
                      size="medium"
                      type="text"
                      style="color: red"
                  >{{ scope.row.status }}</el-button>
                </template>
              </el-table-column>
              <el-table-column label="判定结果" min-width="15%" >
                <template slot-scope="scope">
                  <el-button
                      size="medium"
                      type="text"
                      @click="getMyData(2,scope.row)"
                  >查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
    </div>
    <div style="display: flex;margin-top: 5px;">
      <div style="width: 54%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">5#铸轧机</span>
            </div>
          </div>
          <div>
            <el-table :data="rollingTableData5" stripe style="width: 100%" height="300px" :cell-style="{'text-align':'center','height':'10px','line-hight':'150px'}" :header-cell-style="{'text-align':'center'}"  >
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="tubiao" label="图表" min-width="50%" >
                <template slot-scope="scope">
                  <div style="padding: 0 15%" @click="getMyData(1,scope.row)" >
                    <AreaChart width="200px" height="63px" :x-data="scope.row.chartData.xData" :y-data="scope.row.chartData.yData"  :min-data="scope.row.chartData.minData" :max-data="scope.row.chartData.maxData" :r-name="scope.row.chartData.rName"></AreaChart>
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
          <div style="font-size: 60px;color: blue;text-align: center;margin: 92px 0px 92px 0px">
            <el-button class="el-icon-mytubiao" style="margin-bottom: 10px" />
            <div style="font-size: 30px;color: green;">正常</div>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 40%;height: 300px">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">报警记录表</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData" stripe style="width: 100%" height="300px" :show-header="false" >
              <el-table-column prop="id" label="序号" min-width="10%" />
              <el-table-column prop="data" label="日期" min-width="25%" />
              <el-table-column prop="address" label="编号" min-width="25%" />
              <el-table-column prop="status" label="状态" min-width="25%" >
                <template slot-scope="scope">
                  <el-button
                      size="medium"
                      type="text"
                      style="color: red"
                  >{{ scope.row.status }}</el-button>
                </template>
              </el-table-column>
              <el-table-column label="判定结果" min-width="15%" >
                <template slot-scope="scope">
                  <el-button
                      size="medium"
                      type="text"
                      @click="getMyData(2,scope.row)"
                  >查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
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
          <AreaChart :x-data="xData" :y-data="yData" :min-data="minData" :max-data="maxData" :r-name="rName"></AreaChart>
        </div>
      </div>
      <div v-if="showWtich===2">
        <!-- 表格 -->
        <el-table v-loading="loading" :data="warnList" >
          <el-table-column label="序号" align="center" prop="rollingId" />
          <el-table-column label="指标名称" align="center" prop="rollingName" />
          <el-table-column label="时间" align="center" prop="rollingProduceTime" />
          <el-table-column label="数值" align="center" prop="rollingValue" />
        </el-table>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import AreaChart from '@/views/dashboard/AreaChart'
import {getListInfo,getListWarnData,tableData,rollingTableData1,rollingTableData2,rollingTableData3,rollingTableData4,rollingTableData5} from "@/api/rollingMachine";
import {getAvaluateList} from "@/api/avaluate";
export default {
  components: {AreaChart},
  props: {},
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
      tableData,
      rollingTableData1,
      rollingTableData2,
      rollingTableData3,
      rollingTableData4,
      rollingTableData5,
      loading: true,
      //报警记录表数据
      warnList: [],
      //弹窗
      dialogVisible: false,
      //值域列表
      avaluateList:{},
      //铸轧机值列表
      dataList:{},
      //定时器1
      timer: null,
      //定时器2
      timer1: null,
      //定时器3
      timer2: null,
      //定时器4
      timer3: null,
      //定时器5
      timer4: null,
      //弹窗显示第几个
      showWtich: 1,
      //指标名称
      rollingName: null,
      //设备id
      rollingDeviceId: null,
      //最大值
      maxValue: null,
      //echarts 相关数据
      xData: [],
      yData: [],
      minData: null,
      maxData: null,
      rName: null,
    }
  },
  async created() {



    // 获取参数设置的最大最小值
    await getAvaluateList().then((res) => {
      this.avaluateList =res.data
      console.log("上下限：",res.data)
      this.avaluateList.forEach(item => {
        //1号铸轧机参数

        if(item.deviceId=="铸轧机1#"){
          switch (item.name){
            case "上辊电机电流":
              this.rollingTableData1[0].chartData.minData=item.minValue
              this.rollingTableData1[0].chartData.maxData=item.maxValue
              break
            case "下辊电机电流":
              this.rollingTableData1[1].chartData.minData=item.minValue
              this.rollingTableData1[1].chartData.maxData=item.maxValue
              break
            case "主水泵电机电流":
              this.rollingTableData1[2].chartData.minData=item.minValue
              this.rollingTableData1[2].chartData.maxData=item.maxValue
              break
            case "备用水泵电机电流":
              this.rollingTableData1[3].chartData.minData=item.minValue
              this.rollingTableData1[3].chartData.maxData=item.maxValue
              break
            case "卷取电机电流":
              this.rollingTableData1[4].chartData.minData=item.minValue
              this.rollingTableData1[4].chartData.maxData=item.maxValue
              break
            case "上辊水压":
              this.rollingTableData1[5].chartData.minData=item.minValue
              this.rollingTableData1[5].chartData.maxData=item.maxValue
              break
            case "下辊水压":
              this.rollingTableData1[6].chartData.minData=item.minValue
              this.rollingTableData1[6].chartData.maxData=item.maxValue
              break
            case "上辊水温":
              this.rollingTableData1[7].chartData.minData=item.minValue
              this.rollingTableData1[7].chartData.maxData=item.maxValue
              break
            case "下辊水温":
              this.rollingTableData1[8].chartData.minData=item.minValue
              this.rollingTableData1[8].chartData.maxData=item.maxValue
              break
            case "上辊流量":
              this.rollingTableData1[9].chartData.minData=item.minValue
              this.rollingTableData1[9].chartData.maxData=item.maxValue
              break
            case "下辊流量":
              this.rollingTableData1[10].chartData.minData=item.minValue
              this.rollingTableData1[10].chartData.maxData=item.maxValue
              break
            case "操作侧预载力":
              this.rollingTableData1[11].chartData.minData=item.minValue
              this.rollingTableData1[11].chartData.maxData=item.maxValue
              break
            case "传动侧预载力":
              this.rollingTableData1[12].chartData.minData=item.minValue
              this.rollingTableData1[12].chartData.maxData=item.maxValue
              break
          }
          // 2号铸轧机参数
        }

          else if(item.deviceId=="铸轧机2#") {
          switch (item.name) {
            case "上辊电机电流":
              this.rollingTableData2[0].chartData.minData = item.minValue
              this.rollingTableData2[0].chartData.maxData = item.maxValue
              break
            case "下辊电机电流":
              this.rollingTableData2[1].chartData.minData = item.minValue
              this.rollingTableData2[1].chartData.maxData = item.maxValue
              break
            case "主水泵电机电流":
              this.rollingTableData2[2].chartData.minData = item.minValue
              this.rollingTableData2[2].chartData.maxData = item.maxValue
              break
            case "备用水泵电机电流":
              this.rollingTableData2[3].chartData.minData = item.minValue
              this.rollingTableData2[3].chartData.maxData = item.maxValue
              break
            case "卷取电机电流":
              this.rollingTableData2[4].chartData.minData = item.minValue
              this.rollingTableData2[4].chartData.maxData = item.maxValue
              break
            case "上辊水压":
              this.rollingTableData2[5].chartData.minData = item.minValue
              this.rollingTableData2[5].chartData.maxData = item.maxValue
              break
            case "下辊水压":
              this.rollingTableData2[6].chartData.minData = item.minValue
              this.rollingTableData2[6].chartData.maxData = item.maxValue
              break
            case "上辊水温":
              this.rollingTableData2[7].chartData.minData = item.minValue
              this.rollingTableData2[7].chartData.maxData = item.maxValue
              break
            case "下辊水温":
              this.rollingTableData2[8].chartData.minData = item.minValue
              this.rollingTableData2[8].chartData.maxData = item.maxValue
              break
            case "上辊流量":
              this.rollingTableData2[9].chartData.minData = item.minValue
              this.rollingTableData2[9].chartData.maxData = item.maxValue
              break
            case "下辊流量":
              this.rollingTableData2[10].chartData.minData = item.minValue
              this.rollingTableData2[10].chartData.maxData = item.maxValue
              break
            case "操作侧预载力":
              this.rollingTableData2[11].chartData.minData = item.minValue
              this.rollingTableData2[11].chartData.maxData = item.maxValue
              break
            case "传动侧预载力":
              this.rollingTableData2[12].chartData.minData = item.minValue
              this.rollingTableData2[12].chartData.maxData = item.maxValue
              break
          }

          //3号铸轧机参数
        }
        //   else if(item.deviceId=="铸轧机3#") {
        //   switch (item.name) {
        //     case "上辊电机电流":
        //       this.rollingTableData3[0].chartData.minData = item.minValue
        //       this.rollingTableData3[0].chartData.maxData = item.maxValue
        //       break
        //     case "下辊电机电流":
        //       this.rollingTableData3[1].chartData.minData = item.minValue
        //       this.rollingTableData3[1].chartData.maxData = item.maxValue
        //       break
        //     case "主水泵电机电流":
        //       this.rollingTableData3[2].chartData.minData = item.minValue
        //       this.rollingTableData3[2].chartData.maxData = item.maxValue
        //       break
        //     case "备用水泵电机电流":
        //       this.rollingTableData3[3].chartData.minData = item.minValue
        //       this.rollingTableData3[3].chartData.maxData = item.maxValue
        //       break
        //     case "卷取电机电流":
        //       this.rollingTableData3[4].chartData.minData = item.minValue
        //       this.rollingTableData3[4].chartData.maxData = item.maxValue
        //       break
        //     case "上辊水压":
        //       this.rollingTableData3[5].chartData.minData = item.minValue
        //       this.rollingTableData3[5].chartData.maxData = item.maxValue
        //       break
        //     case "下辊水压":
        //       this.rollingTableData3[6].chartData.minData = item.minValue
        //       this.rollingTableData3[6].chartData.maxData = item.maxValue
        //       break
        //     case "上辊水温":
        //       this.rollingTableData3[7].chartData.minData = item.minValue
        //       this.rollingTableData3[7].chartData.maxData = item.maxValue
        //       break
        //     case "下辊水温":
        //       this.rollingTableData3[8].chartData.minData = item.minValue
        //       this.rollingTableData3[8].chartData.maxData = item.maxValue
        //       break
        //     case "上辊流量":
        //       this.rollingTableData3[9].chartData.minData = item.minValue
        //       this.rollingTableData3[9].chartData.maxData = item.maxValue
        //       break
        //     case "下辊流量":
        //       this.rollingTableData3[10].chartData.minData = item.minValue
        //       this.rollingTableData3[10].chartData.maxData = item.maxValue
        //       break
        //     case "操作侧预载力":
        //       this.rollingTableData3[11].chartData.minData = item.minValue
        //       this.rollingTableData3[11].chartData.maxData = item.maxValue
        //       break
        //     case "传动侧预载力":
        //       this.rollingTableData3[12].chartData.minData = item.minValue
        //       this.rollingTableData3[12].chartData.maxData = item.maxValue
        //       break
        //   }
        //   //4号铸轧机参数
        // }
        //   else if(item.deviceId=="铸轧机4#") {
        //   switch (item.name) {
        //     case "上辊电机电流":
        //       this.rollingTableData4[0].chartData.minData = item.minValue
        //       this.rollingTableData4[0].chartData.maxData = item.maxValue
        //       break
        //     case "下辊电机电流":
        //       this.rollingTableData4[1].chartData.minData = item.minValue
        //       this.rollingTableData4[1].chartData.maxData = item.maxValue
        //       break
        //     case "主水泵电机电流":
        //       this.rollingTableData4[2].chartData.minData = item.minValue
        //       this.rollingTableData4[2].chartData.maxData = item.maxValue
        //       break
        //     case "备用水泵电机电流":
        //       this.rollingTableData4[3].chartData.minData = item.minValue
        //       this.rollingTableData4[3].chartData.maxData = item.maxValue
        //       break
        //     case "卷取电机电流":
        //       this.rollingTableData4[4].chartData.minData = item.minValue
        //       this.rollingTableData4[4].chartData.maxData = item.maxValue
        //       break
        //     case "上辊水压":
        //       this.rollingTableData4[5].chartData.minData = item.minValue
        //       this.rollingTableData4[5].chartData.maxData = item.maxValue
        //       break
        //     case "下辊水压":
        //       this.rollingTableData4[6].chartData.minData = item.minValue
        //       this.rollingTableData4[6].chartData.maxData = item.maxValue
        //       break
        //     case "上辊水温":
        //       this.rollingTableData4[7].chartData.minData = item.minValue
        //       this.rollingTableData4[7].chartData.maxData = item.maxValue
        //       break
        //     case "下辊水温":
        //       this.rollingTableData4[8].chartData.minData = item.minValue
        //       this.rollingTableData4[8].chartData.maxData = item.maxValue
        //       break
        //     case "上辊流量":
        //       this.rollingTableData4[9].chartData.minData = item.minValue
        //       this.rollingTableData4[9].chartData.maxData = item.maxValue
        //       break
        //     case "下辊流量":
        //       this.rollingTableData4[10].chartData.minData = item.minValue
        //       this.rollingTableData4[10].chartData.maxData = item.maxValue
        //       break
        //     case "操作侧预载力":
        //       this.rollingTableData4[11].chartData.minData = item.minValue
        //       this.rollingTableData4[11].chartData.maxData = item.maxValue
        //       break
        //     case "传动侧预载力":
        //       this.rollingTableData4[12].chartData.minData = item.minValue
        //       this.rollingTableData4[12].chartData.maxData = item.maxValue
        //       break
        //   }
        //   //5号铸轧机参数
        // }else if(item.deviceId=="铸轧机5#") {
        //   switch (item.name) {
        //     case "上辊电机电流":
        //       this.rollingTableData5[0].chartData.minData = item.minValue
        //       this.rollingTableData5[0].chartData.maxData = item.maxValue
        //       break
        //     case "下辊电机电流":
        //       this.rollingTableData5[1].chartData.minData = item.minValue
        //       this.rollingTableData5[1].chartData.maxData = item.maxValue
        //       break
        //     case "主水泵电机电流":
        //       this.rollingTableData5[2].chartData.minData = item.minValue
        //       this.rollingTableData5[2].chartData.maxData = item.maxValue
        //       break
        //     case "备用水泵电机电流":
        //       this.rollingTableData5[3].chartData.minData = item.minValue
        //       this.rollingTableData5[3].chartData.maxData = item.maxValue
        //       break
        //     case "卷取电机电流":
        //       this.rollingTableData5[4].chartData.minData = item.minValue
        //       this.rollingTableData5[4].chartData.maxData = item.maxValue
        //       break
        //     case "上辊水压":
        //       this.rollingTableData5[5].chartData.minData = item.minValue
        //       this.rollingTableData5[5].chartData.maxData = item.maxValue
        //       break
        //     case "下辊水压":
        //       this.rollingTableData5[6].chartData.minData = item.minValue
        //       this.rollingTableData5[6].chartData.maxData = item.maxValue
        //       break
        //     case "上辊水温":
        //       this.rollingTableData5[7].chartData.minData = item.minValue
        //       this.rollingTableData5[7].chartData.maxData = item.maxValue
        //       break
        //     case "下辊水温":
        //       this.rollingTableData5[8].chartData.minData = item.minValue
        //       this.rollingTableData5[8].chartData.maxData = item.maxValue
        //       break
        //     case "上辊流量":
        //       this.rollingTableData5[9].chartData.minData = item.minValue
        //       this.rollingTableData5[9].chartData.maxData = item.maxValue
        //       break
        //     case "下辊流量":
        //       this.rollingTableData5[10].chartData.minData = item.minValue
        //       this.rollingTableData5[10].chartData.maxData = item.maxValue
        //       break
        //     case "操作侧预载力":
        //       this.rollingTableData5[11].chartData.minData = item.minValue
        //       this.rollingTableData5[11].chartData.maxData = item.maxValue
        //       break
        //     case "传动侧预载力":
        //       this.rollingTableData5[12].chartData.minData = item.minValue
        //       this.rollingTableData5[12].chartData.maxData = item.maxValue
        //       break
        //   }
        // }
      })
    })
    // 每次进入界面时，先清除之前的所有定时器，然后启动新的定时器
    clearInterval(this.timer)
    clearInterval(this.timer1)
    // clearInterval(this.timer2)
    // clearInterval(this.timer3)
    // clearInterval(this.timer4)
    this.timer = null
    this.timer1 = null
    // this.timer2 = null
    // this.timer3 = null
    // this.timer4 = null
    this.setTimer()
    this.setTimer1()
    // this.setTimer2()
    // this.setTimer3()
    // this.setTimer4()
  },
  watch: {
    warnList :{
      handler(o,n){
        console.log(o)
        console.log(n)
      },
      deep: true
    }
  },
  methods: {
     getMyData(index,row) {
      this.showWtich = index
      if(index == 1){
        this.xData = row.chartData.xData
        this.yData = row.chartData.yData
        this.minData = row.chartData.minData
        this.maxData = row.chartData.maxData
        this.rName = "上辊电机电流"
        // this.rName = row.chartData.rName
        // console.log("这是name",row.chartData.rName)
      }
      else if(index==2){
        // this.loading = true
        // let res = await getListWarnData({rollingName : '上辊电机电流',maxValue : 70})
        // this.warnList = res.data
        // console.log("警告数据",this.warnList)
        // this.loading = false
        console.log("指标名称",row)
        getListWarnData({rollingName : row.address,maxValue : this.rollingTableData1[0].chartData.maxData}).then((res) => {
          this.loading=true
          this.warnList = res.data
          console.log("警告数据",this.warnList)
          this.loading=false
        })
      }
       this.dialogVisible = true

    },

    setTimer() {
      if(this.timer == null) {
        this.timer = setInterval( () => {

          //1号铸轧机数据

          getListInfo({rollingName : '上辊电机电流',rollingDeviceId:1}).then((res) =>{
            this.dataList = res.data
            // console.log(this.dataList)
            this.rollingTableData1[0].chartData.xData = []
            this.rollingTableData1[0].chartData.yData = []
            this.dataList.forEach(item =>{
              this.rollingTableData1[0].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData1[0].chartData.yData.push(item.rollingValue)
              this.rollingTableData1[0].chartData.rName= item.rollingName
            })
          })
          getListInfo({rollingName : '下辊电机电流',rollingDeviceId:1}).then((res) =>{
            this.dataList = res.data
            this.rollingTableData1[1].chartData.xData = []
            this.rollingTableData1[1].chartData.yData = []
            this.dataList.forEach(item =>{
              this.rollingTableData1[1].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData1[1].chartData.yData.push(item.rollingValue)
              this.rollingTableData1[1].chartData.rName= item.rollingName
            })
          })
          getListInfo({rollingName : '主水泵电机电流',rollingDeviceId:1}).then((res) =>{
            this.dataList = res.data
            this.rollingTableData1[2].chartData.xData = []
            this.rollingTableData1[2].chartData.yData = []
            this.dataList.forEach(item =>{
              this.rollingTableData1[2].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData1[2].chartData.yData.push(item.rollingValue)
              this.rollingTableData1[2].chartData.rName= item.rollingName
            })
          })
          getListInfo({rollingName : '备用水泵电机电流',rollingDeviceId:1}).then((res) =>{
            this.dataList = res.data
            this.rollingTableData1[3].chartData.xData = []
            this.rollingTableData1[3].chartData.yData = []
            this.dataList.forEach(item =>{
              this.rollingTableData1[3].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData1[3].chartData.yData.push(item.rollingValue)
              this.rollingTableData1[3].chartData.rName= item.rollingName
            })
          })
          getListInfo({rollingName : '卷取电机电流',rollingDeviceId:1}).then((res) =>{
            this.dataList = res.data
            this.rollingTableData1[4].chartData.xData = []
            this.rollingTableData1[4].chartData.yData = []
            this.dataList.forEach(item =>{
              this.rollingTableData1[4].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData1[4].chartData.yData.push(item.rollingValue)
              this.rollingTableData1[4].chartData.rName= item.rollingName
            })
          })
          getListInfo({rollingName : '上辊水压',rollingDeviceId:1}).then((res) =>{
            this.dataList = res.data
            this.rollingTableData1[5].chartData.xData = []
            this.rollingTableData1[5].chartData.yData = []
            this.dataList.forEach(item =>{
              this.rollingTableData1[5].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData1[5].chartData.yData.push(item.rollingValue)
              this.rollingTableData1[5].chartData.rName= item.rollingName
            })
          })
          getListInfo({rollingName : '下辊水压',rollingDeviceId:1}).then((res) =>{
            this.dataList = res.data
            this.rollingTableData1[6].chartData.xData = []
            this.rollingTableData1[6].chartData.yData = []
            this.dataList.forEach(item =>{
              this.rollingTableData1[6].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData1[6].chartData.yData.push(item.rollingValue)
              this.rollingTableData1[6].chartData.rName= item.rollingName
            })
          })
          getListInfo({rollingName : '上辊水温',rollingDeviceId:1}).then((res) =>{
            this.dataList = res.data
            this.rollingTableData1[7].chartData.xData = []
            this.rollingTableData1[7].chartData.yData = []
            this.dataList.forEach(item =>{
              this.rollingTableData1[7].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData1[7].chartData.yData.push(item.rollingValue)
              this.rollingTableData1[7].chartData.rName= item.rollingName
            })
          })
          getListInfo({rollingName : '下辊水温',rollingDeviceId:1}).then((res) =>{
            this.dataList = res.data
            this.rollingTableData1[8].chartData.xData = []
            this.rollingTableData1[8].chartData.yData = []
            this.dataList.forEach(item =>{
              this.rollingTableData1[8].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData1[8].chartData.yData.push(item.rollingValue)
              this.rollingTableData1[8].chartData.rName= item.rollingName
            })
          })
          getListInfo({rollingName : '上辊流量',rollingDeviceId:1}).then((res) =>{
            this.dataList = res.data
            this.rollingTableData1[9].chartData.xData = []
            this.rollingTableData1[9].chartData.yData = []
            this.dataList.forEach(item =>{
              this.rollingTableData1[9].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData1[9].chartData.yData.push(item.rollingValue)
              this.rollingTableData1[9].chartData.rName= item.rollingName
            })
          })
          getListInfo({rollingName : '下辊流量',rollingDeviceId:1}).then((res) =>{
            this.dataList = res.data
            this.rollingTableData1[10].chartData.xData = []
            this.rollingTableData1[10].chartData.yData = []
            this.dataList.forEach(item =>{
              this.rollingTableData1[10].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData1[10].chartData.yData.push(item.rollingValue)
              this.rollingTableData1[10].chartData.rName= item.rollingName
            })
          })
          getListInfo({rollingName : '操作侧预载力',rollingDeviceId:1}).then((res) =>{
            this.dataList = res.data
            this.rollingTableData1[11].chartData.xData = []
            this.rollingTableData1[11].chartData.yData = []
            this.dataList.forEach(item =>{
              this.rollingTableData1[11].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData1[11].chartData.yData.push(item.rollingValue)
              this.rollingTableData1[11].chartData.rName= item.rollingName
            })
          })
          getListInfo({rollingName : '传动侧预载力',rollingDeviceId:1}).then((res) =>{
            this.dataList = res.data
            this.rollingTableData1[12].chartData.xData = []
            this.rollingTableData1[12].chartData.yData = []
            this.dataList.forEach(item =>{
              this.rollingTableData1[12].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData1[12].chartData.yData.push(item.rollingValue)
              this.rollingTableData1[12].chartData.rName= item.rollingName
            })
          })
        }, 2000)

      }
    },
    setTimer1() {
      if(this.timer1 == null) {
        this.timer1 = setInterval( () => {

        // 2号铸轧机数据
          getListInfo({rollingName : '上辊电机电流',rollingDeviceId:2}).then((res) =>{
            this.dataList = res.data
            // console.log(this.dataList)
            this.rollingTableData2[0].chartData.xData = []
            this.rollingTableData2[0].chartData.yData = []
            this.dataList.forEach(item =>{
              this.rollingTableData2[0].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData2[0].chartData.yData.push(item.rollingValue)
              this.rollingTableData2[0].chartData.rName= item.rollingName
            })
          })
          getListInfo({rollingName : '下辊电机电流',rollingDeviceId:2}).then((res) =>{
            this.dataList = res.data
            this.rollingTableData2[1].chartData.xData = []
            this.rollingTableData2[1].chartData.yData = []
            this.dataList.forEach(item =>{
              this.rollingTableData2[1].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData2[1].chartData.yData.push(item.rollingValue)
              this.rollingTableData2[1].chartData.rName= item.rollingName
            })
          })
          getListInfo({rollingName : '主水泵电机电流',rollingDeviceId:2}).then((res) =>{
            this.dataList = res.data
            this.rollingTableData2[2].chartData.xData = []
            this.rollingTableData2[2].chartData.yData = []
            this.dataList.forEach(item =>{
              this.rollingTableData2[2].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData2[2].chartData.yData.push(item.rollingValue)
              this.rollingTableData2[2].chartData.rName= item.rollingName
            })
          })
          getListInfo({rollingName : '备用水泵电机电流',rollingDeviceId:2}).then((res) =>{
            this.dataList = res.data
            this.rollingTableData2[3].chartData.xData = []
            this.rollingTableData2[3].chartData.yData = []
            this.dataList.forEach(item =>{
              this.rollingTableData2[3].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData2[3].chartData.yData.push(item.rollingValue)
              this.rollingTableData2[3].chartData.rName= item.rollingName
            })
          })
          getListInfo({rollingName : '卷取电机电流',rollingDeviceId:2}).then((res) =>{
            this.dataList = res.data
            this.rollingTableData2[4].chartData.xData = []
            this.rollingTableData2[4].chartData.yData = []
            this.dataList.forEach(item =>{
              this.rollingTableData2[4].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData2[4].chartData.yData.push(item.rollingValue)
              this.rollingTableData2[4].chartData.rName= item.rollingName
            })
          })
          getListInfo({rollingName : '上辊水压',rollingDeviceId:2}).then((res) =>{
            this.dataList = res.data
            this.rollingTableData2[5].chartData.xData = []
            this.rollingTableData2[5].chartData.yData = []
            this.dataList.forEach(item =>{
              this.rollingTableData2[5].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData2[5].chartData.yData.push(item.rollingValue)
              this.rollingTableData2[5].chartData.rName= item.rollingName
            })
          })
          getListInfo({rollingName : '下辊水压',rollingDeviceId:2}).then((res) =>{
            this.dataList = res.data
            this.rollingTableData2[6].chartData.xData = []
            this.rollingTableData2[6].chartData.yData = []
            this.dataList.forEach(item =>{
              this.rollingTableData2[6].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData2[6].chartData.yData.push(item.rollingValue)
              this.rollingTableData2[6].chartData.rName= item.rollingName
            })
          })
          getListInfo({rollingName : '上辊水温',rollingDeviceId:2}).then((res) =>{
            this.dataList = res.data
            this.rollingTableData2[7].chartData.xData = []
            this.rollingTableData2[7].chartData.yData = []
            this.dataList.forEach(item =>{
              this.rollingTableData2[7].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData2[7].chartData.yData.push(item.rollingValue)
              this.rollingTableData2[7].chartData.rName= item.rollingName
            })
          })
          getListInfo({rollingName : '下辊水温',rollingDeviceId:2}).then((res) =>{
            this.dataList = res.data
            this.rollingTableData2[8].chartData.xData = []
            this.rollingTableData2[8].chartData.yData = []
            this.dataList.forEach(item =>{
              this.rollingTableData2[8].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData2[8].chartData.yData.push(item.rollingValue)
              this.rollingTableData2[8].chartData.rName= item.rollingName
            })
          })
          getListInfo({rollingName : '上辊流量',rollingDeviceId:2}).then((res) =>{
            this.dataList = res.data
            this.rollingTableData2[9].chartData.xData = []
            this.rollingTableData2[9].chartData.yData = []
            this.dataList.forEach(item =>{
              this.rollingTableData2[9].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData2[9].chartData.yData.push(item.rollingValue)
              this.rollingTableData2[9].chartData.rName= item.rollingName
            })
          })
          getListInfo({rollingName : '下辊流量',rollingDeviceId:2}).then((res) =>{
            this.dataList = res.data
            this.rollingTableData2[10].chartData.xData = []
            this.rollingTableData2[10].chartData.yData = []
            this.dataList.forEach(item =>{
              this.rollingTableData2[10].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData2[10].chartData.yData.push(item.rollingValue)
              this.rollingTableData2[10].chartData.rName= item.rollingName
            })
          })
          getListInfo({rollingName : '操作侧预载力',rollingDeviceId:2}).then((res) =>{
            this.dataList = res.data
            this.rollingTableData2[11].chartData.xData = []
            this.rollingTableData2[11].chartData.yData = []
            this.dataList.forEach(item =>{
              this.rollingTableData2[11].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData2[11].chartData.yData.push(item.rollingValue)
              this.rollingTableData2[11].chartData.rName= item.rollingName
            })
          })
          getListInfo({rollingName : '传动侧预载力',rollingDeviceId:2}).then((res) =>{
            this.dataList = res.data
            this.rollingTableData2[12].chartData.xData = []
            this.rollingTableData2[12].chartData.yData = []
            this.dataList.forEach(item =>{
              this.rollingTableData2[12].chartData.xData.push(item.rollingProduceTime)
              this.rollingTableData2[12].chartData.yData.push(item.rollingValue)
              this.rollingTableData2[12].chartData.rName= item.rollingName
            })
          })
        }, 2000)
      }
    },
    // setTimer2() {
    //   if(this.timer2 == null) {
    //     this.timer2 = setInterval( () => {
    //       // 3号铸轧机数据
    //       getListInfo({rollingName : '上辊电机电流',rollingDeviceId:3}).then((res) =>{
    //         this.dataList = res.data
    //         console.log(this.dataList)
    //         this.rollingTableData3[0].chartData.xData = []
    //         this.rollingTableData3[0].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData3[0].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData3[0].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData3[0].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '下辊电机电流',rollingDeviceId:3}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData3[1].chartData.xData = []
    //         this.rollingTableData3[1].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData3[1].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData3[1].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData3[1].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '主水泵电机电流',rollingDeviceId:3}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData3[2].chartData.xData = []
    //         this.rollingTableData3[2].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData3[2].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData3[2].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData3[2].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '备用水泵电机电流',rollingDeviceId:3}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData3[3].chartData.xData = []
    //         this.rollingTableData3[3].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData3[3].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData3[3].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData3[3].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '卷取电机电流',rollingDeviceId:3}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData3[4].chartData.xData = []
    //         this.rollingTableData3[4].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData3[4].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData3[4].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData3[4].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '上辊水压',rollingDeviceId:3}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData3[5].chartData.xData = []
    //         this.rollingTableData3[5].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData3[5].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData3[5].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData3[5].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '下辊水压',rollingDeviceId:3}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData3[6].chartData.xData = []
    //         this.rollingTableData3[6].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData3[6].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData3[6].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData3[6].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '上辊水温',rollingDeviceId:3}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData3[7].chartData.xData = []
    //         this.rollingTableData3[7].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData3[7].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData3[7].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData3[7].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '下辊水温',rollingDeviceId:3}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData3[8].chartData.xData = []
    //         this.rollingTableData3[8].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData3[8].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData3[8].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData3[8].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '上辊流量',rollingDeviceId:3}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData3[9].chartData.xData = []
    //         this.rollingTableData3[9].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData3[9].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData3[9].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData3[9].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '下辊流量',rollingDeviceId:3}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData3[10].chartData.xData = []
    //         this.rollingTableData3[10].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData3[10].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData3[10].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData3[10].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '操作侧预载力',rollingDeviceId:3}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData3[11].chartData.xData = []
    //         this.rollingTableData3[11].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData3[11].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData3[11].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData3[11].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '传动侧预载力',rollingDeviceId:3}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData3[12].chartData.xData = []
    //         this.rollingTableData3[12].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData3[12].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData3[12].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData3[12].chartData.rName= item.rollingName
    //         })
    //       })
    //     }, 2000)
    //
    //   }
    // },
    // setTimer3() {
    //   if(this.timer3 == null) {
    //     this.timer3 = setInterval( () => {
    //
    //       // 4号铸轧机数据
    //
    //       getListInfo({rollingName : '上辊电机电流',rollingDeviceId:4}).then((res) =>{
    //         this.dataList = res.data
    //         console.log(this.dataList)
    //         this.rollingTableData4[0].chartData.xData = []
    //         this.rollingTableData4[0].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData4[0].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData4[0].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData4[0].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '下辊电机电流',rollingDeviceId:4}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData4[1].chartData.xData = []
    //         this.rollingTableData4[1].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData4[1].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData4[1].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData4[1].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '主水泵电机电流',rollingDeviceId:4}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData4[2].chartData.xData = []
    //         this.rollingTableData4[2].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData4[2].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData4[2].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData4[2].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '备用水泵电机电流',rollingDeviceId:4}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData4[3].chartData.xData = []
    //         this.rollingTableData4[3].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData4[3].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData4[3].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData4[3].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '卷取电机电流',rollingDeviceId:4}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData4[4].chartData.xData = []
    //         this.rollingTableData4[4].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData4[4].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData4[4].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData4[4].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '上辊水压',rollingDeviceId:4}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData4[5].chartData.xData = []
    //         this.rollingTableData4[5].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData4[5].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData4[5].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData4[5].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '下辊水压',rollingDeviceId:4}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData4[6].chartData.xData = []
    //         this.rollingTableData4[6].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData4[6].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData4[6].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData4[6].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '上辊水温',rollingDeviceId:4}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData4[7].chartData.xData = []
    //         this.rollingTableData4[7].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData4[7].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData4[7].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData4[7].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '下辊水温',rollingDeviceId:4}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData4[8].chartData.xData = []
    //         this.rollingTableData4[8].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData4[8].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData4[8].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData4[8].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '上辊流量',rollingDeviceId:4}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData4[9].chartData.xData = []
    //         this.rollingTableData4[9].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData4[9].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData4[9].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData4[9].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '下辊流量',rollingDeviceId:4}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData4[10].chartData.xData = []
    //         this.rollingTableData4[10].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData4[10].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData4[10].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData4[10].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '操作侧预载力',rollingDeviceId:4}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData4[11].chartData.xData = []
    //         this.rollingTableData4[11].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData4[11].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData4[11].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData4[11].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '传动侧预载力',rollingDeviceId:4}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData4[12].chartData.xData = []
    //         this.rollingTableData4[12].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData4[12].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData4[12].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData4[12].chartData.rName= item.rollingName
    //         })
    //       })
    //     }, 2000)
    //
    //   }
    // },
    // setTimer4() {
    //   if(this.timer4 == null) {
    //     this.timer4 = setInterval( () => {
    //       // 5号铸轧机数据
    //
    //       getListInfo({rollingName : '上辊电机电流',rollingDeviceId:5}).then((res) =>{
    //         this.dataList = res.data
    //         console.log(this.dataList)
    //         this.rollingTableData5[0].chartData.xData = []
    //         this.rollingTableData5[0].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData5[0].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData5[0].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData5[0].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '下辊电机电流',rollingDeviceId:5}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData5[1].chartData.xData = []
    //         this.rollingTableData5[1].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData5[1].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData5[1].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData5[1].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '主水泵电机电流',rollingDeviceId:5}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData5[2].chartData.xData = []
    //         this.rollingTableData5[2].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData5[2].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData5[2].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData5[2].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '备用水泵电机电流',rollingDeviceId:5}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData5[3].chartData.xData = []
    //         this.rollingTableData5[3].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData5[3].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData5[3].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData5[3].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '卷取电机电流',rollingDeviceId:5}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData5[4].chartData.xData = []
    //         this.rollingTableData5[4].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData5[4].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData5[4].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData5[4].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '上辊水压',rollingDeviceId:5}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData5[5].chartData.xData = []
    //         this.rollingTableData5[5].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData5[5].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData5[5].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData5[5].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '下辊水压',rollingDeviceId:5}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData5[6].chartData.xData = []
    //         this.rollingTableData5[6].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData5[6].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData5[6].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData5[6].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '上辊水温',rollingDeviceId:5}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData5[7].chartData.xData = []
    //         this.rollingTableData5[7].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData5[7].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData5[7].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData5[7].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '下辊水温',rollingDeviceId:5}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData5[8].chartData.xData = []
    //         this.rollingTableData5[8].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData5[8].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData5[8].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData5[8].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '上辊流量',rollingDeviceId:5}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData5[9].chartData.xData = []
    //         this.rollingTableData5[9].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData5[9].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData5[9].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData5[9].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '下辊流量',rollingDeviceId:5}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData5[10].chartData.xData = []
    //         this.rollingTableData5[10].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData5[10].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData5[10].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData5[10].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '操作侧预载力',rollingDeviceId:5}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData5[11].chartData.xData = []
    //         this.rollingTableData5[11].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData5[11].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData5[11].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData5[11].chartData.rName= item.rollingName
    //         })
    //       })
    //       getListInfo({rollingName : '传动侧预载力',rollingDeviceId:5}).then((res) =>{
    //         this.dataList = res.data
    //         this.rollingTableData5[12].chartData.xData = []
    //         this.rollingTableData5[12].chartData.yData = []
    //         this.dataList.forEach(item =>{
    //           this.rollingTableData5[12].chartData.xData.push(item.rollingProduceTime)
    //           this.rollingTableData5[12].chartData.yData.push(item.rollingValue)
    //           this.rollingTableData5[12].chartData.rName= item.rollingName
    //         })
    //       })
    //     }, 2000)
    //
    //   }
    // }
  },
  destroyed: function () {
    // 每次离开当前界面时，清除定时器
    clearInterval(this.timer)
    clearInterval(this.timer1)
    // clearInterval(this.timer2)
    // clearInterval(this.timer3)
    // clearInterval(this.timer4)
    this.timer = null
    this.timer1 = null
    // this.timer2 = null
    // this.timer3 = null
    // this.timer4 = null
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