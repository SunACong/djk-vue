<template>
  <div>
    <div style="display: flex;margin-top: 5px;">
      <div style="width: 82%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">重卷机工艺参数</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData2" stripe style="width: 100%" height="300px" :cell-style="{'text-align':'center','height':'10px','line-hight':'150px'}" :header-cell-style="{'text-align':'center'}"  >
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="chartData" label="图表" min-width="50%" >
                <template slot-scope="scope" >
                  <div  style="padding: 0 30%" @click="handleView(1, scope.row)" >
                    <StackedLineChart width="200px" height="63px" :x-data="scope.row.chartData.xData" :y-data="scope.row.chartData.yData"  :min-data="scope.row.chartData.minData" :max-data="scope.row.chartData.maxData" :r-name="scope.row.chartData.rName"></StackedLineChart>
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
            <el-button class="el-icon-mytubiao" style="margin-bottom: 8px"/>
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
          <el-table :data="warnTable" stripe style="width: 100%" height="300px" :show-header="false" >
            <el-table-column prop="produceTime" label="日期" min-width="25%" />
            <el-table-column prop="indicatorName" label="指标名称" min-width="25%" />
            <el-table-column prop="value" label="数值" min-width="20%" />
            <el-table-column prop="status" label="状态" min-width="20%" >
              <template slot-scope="scope">
                <el-button
                    size="medium"
                    type="text"
                    style="color: red"
                >异常</el-button>
              </template>
            </el-table-column>
            <el-table-column label="判定结果" min-width="10%" >
              <template slot-scope="scope">
                <el-button
                    size="medium"
                    type="text"
                    @click="handleView(2, scope.row)"
                >查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>
    <el-dialog :visible.sync="dialogVisible">
      <div v-if="showWtich===1">
        <div  style="display: flex;">
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
          <StackedLineChart :x-data="xData" :y-data="yData" :min-data="minData" :max-data="maxData" :r-name="rName"></StackedLineChart>
        </div>
      </div>
      <div v-if="showWtich===2">
        <div>
          <StackedLineChart :x-data="xData" :y-data="yData" :min-data="minData" :max-data="maxData" :r-name="rName"></StackedLineChart>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import StackedLineChart from '@/views/dashboard/StackedLineChart'
import {getListTen,getListSpecial} from "@/api/rewinder";
import {getAvaluateList} from "@/api/avaluate";
export default {
  components: {StackedLineChart},
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
      tableData2: [{
        xuhao: '01',
        name: '卷取张力',
        value: '83',
        chartData:{
          xData: [],
          yData: [],
          minData:null,
          maxData:null
        }
      }, {
        xuhao: '02',
        name: '卷取侧卷径',
        value: '83',
        chartData:{
          xData: [],
          yData: [],
          minData:null,
          maxData:null
        }
      }, {
        xuhao: '03',
        name: '卷取侧重量',
        value: '83',
        chartData:{
          xData: [],
          yData: [],
          minData:null,
          maxData:null
        }
      }, {
        xuhao: '04',
        name: '带材长度',
        value: '83',
        chartData:{
          xData: [],
          yData: [],
          minData:null,
          maxData:null
        }
      },{
        xuhao: '05',
        name: '剪切速度',
        value: '83',
        chartData:{
          xData: [],
          yData: [],
          minData:null,
          maxData:null
        }
      },{
        xuhao: '06',
        name: '张力曲线',
        value: '83',
        chartData:{
          xData: [],
          yData: [],
          minData:null,
          maxData:null
        }
      },{
        xuhao: '07',
        name: '速度曲线',
        value: '83',
        chartData:{
          xData: [],
          yData: [],
          minData:null,
          maxData:null
        }
      }],
      warnTable: [],
      dialogVisible: false,
      dataList:{},
      avaluateList:{},
      listSpecial:{},
      avaluateListTen:{},
      minData: null,
      maxData: null,
      rName: null,
      xData : [],
      yData : [],
      timer: null,
      showWtich:1,
      parameter: {
        indicatorName:null
      },
      dyTime:["1970-01-01 00:00:00", "1970-01-01 00:00:00", "1970-01-01 00:00:00", "1970-01-01 00:00:00", "1970-01-01 00:00:00", "1970-01-01 00:00:00", "1970-01-01 00:00:00"]
    }
  },
  async created() {
    // 每次进入界面时，先清除之前的所有定时器，然后启动新的定时器
    clearInterval(this.timer)
    this.timer = null
    this.setTimer()
    // this.xData = []
    // this.yData = []
    // await getList().then((res) => {
    //   this.dataList = res.data
    //   // console.log(this.dataList)
    //   this.dataList.forEach(item => {
    //     switch (item.indicatorName){
    //       case "开卷机速度":
    //         this.tableData2[0].chartData.xData.push(item.produceTime)
    //         this.tableData2[0].chartData.yData.push(item.value)
    //         break
    //       case "开卷机电流":
    //         this.tableData2[1].chartData.xData.push(item.produceTime)
    //         this.tableData2[1].chartData.yData.push(item.value)
    //         break
    //       case "卷取机速度":
    //         this.tableData2[2].chartData.xData.push(item.produceTime)
    //         this.tableData2[2].chartData.yData.push(item.value)
    //         break
    //       case "卷取机电流":
    //         this.tableData2[3].chartData.xData.push(item.produceTime)
    //         this.tableData2[3].chartData.yData.push(item.value)
    //         break
    //     }
    //   })
    // })
    // this.parameter.indicatorName = '开卷机速度'
    // await getListTen(this.parameter).then((res) =>{
    //   // console.log("这是查询的10条数据",res)
    //   this.avaluateListTen = res.data
    //   // console.log("时间",res.data[0].produceTime)
    //   // console.log("值",res.data[0].value)
    //   this.avaluateListTen.forEach(item =>{
    //     console.log("时间",item.produceTime)
    //     this.tableData2[0].chartData.xData.push(item.produceTime)
    //     this.tableData2[0].chartData.yData.push(item.value)
    //     this.tableData2[0].chartData.rName= item.indicatorName
    //   })
    //
    // })
    await getAvaluateList().then((res) => {
      this.avaluateList =res.data
      // console.log("上下限：",res.data)
      this.avaluateList.forEach(item => {
        switch (item.name){
          case "卷取张力":
            this.tableData2[0].chartData.minData=item.minValue
            this.tableData2[0].chartData.maxData=item.maxValue
            break
          case "卷取侧卷径":
            this.tableData2[1].chartData.minData=item.minValue
            this.tableData2[1].chartData.maxData=item.maxValue
            break
          case "卷取侧重量":
            this.tableData2[2].chartData.minData=item.minValue
            this.tableData2[2].chartData.maxData=item.maxValue
            break
          case "带材长度":
            this.tableData2[3].chartData.minData=item.minValue
            this.tableData2[3].chartData.maxData=item.maxValue
            break
          case "剪切速度":
            this.tableData2[4].chartData.minData=item.minValue
            this.tableData2[4].chartData.maxData=item.maxValue
            break
          case "张力曲线":
            this.tableData2[5].chartData.minData=item.minValue
            this.tableData2[5].chartData.maxData=item.maxValue
            break
          case "速度曲线":
            this.tableData2[6].chartData.minData=item.minValue
            this.tableData2[6].chartData.maxData=item.maxValue
            break
        }

      })
    })
    // console.log(this.avaluateList)
  },

  methods: {
    handleView: function(index,row) {
      this.showWtich = index
      if(index ==1){
        this.xData = row.chartData.xData
        this.yData = row.chartData.yData
        this.minData = row.chartData.minData
        this.maxData = row.chartData.maxData
        this.rName = "开卷机速度"
        // console.log("这是name",row.chartData.rName)
      }else if(index == 2){
        getListSpecial({indicatorName: row.indicatorName, produceTime: row.produceTime}).then((res) =>{
          console.log("特殊值列表", res.data)
          this.listSpecial = res.data
          this.xData = []
          this.yData = []
          this.listSpecial.forEach(item =>{
            this.xData.push(item.produceTime)
            this.yData.push(item.value)
            this.rName = item.indicatorName
            if(this.rName == "卷取张力"){
              this.minData = this.tableData2[0].chartData.minData
              this.maxData =  this.tableData2[0].chartData.maxData
            }else if(this.rName == "卷取侧卷径"){
              this.minData = this.tableData2[1].chartData.minData
              this.maxData =  this.tableData2[1].chartData.maxData
            }else if(this.rName == "卷取侧重量"){
              this.minData = this.tableData2[2].chartData.minData
              this.maxData =  this.tableData2[2].chartData.maxData
            }else if(this.rName == "带材长度"){
              this.minData = this.tableData2[3].chartData.minData
              this.maxData =  this.tableData2[3].chartData.maxData
            }
            else if(this.rName == "剪切速度"){
              this.minData = this.tableData2[4].chartData.minData
              this.maxData =  this.tableData2[4].chartData.maxData
            }else if(this.rName == "张力曲线"){
              this.minData = this.tableData2[5].chartData.minData
              this.maxData =  this.tableData2[5].chartData.maxData
            }else if(this.rName == "速度曲线"){
              this.minData = this.tableData2[6].chartData.minData
              this.maxData =  this.tableData2[6].chartData.maxData
            }
          })

        })
      }

      this.dialogVisible = true
    },

    //定时查询重卷机数据

    setTimer() {
      // this.yData = []
      if(this.timer == null) {
        this.timer = setInterval( () => {
          getListTen({indicatorName : '卷取张力'}).then((res) =>{
            // console.log("这是查询的10条数据",res)
            this.avaluateListTen = res.data
            this.tableData2[0].chartData.xData = []
            this.tableData2[0].chartData.yData = []
            this.avaluateListTen.forEach(item =>{
              if(item.value>this.tableData2[0].chartData.maxData){
                if(this.warnTable.length == 0 || this.dyTime[0] < item.produceTime){
                  this.warnTable.push(item);
                  this.dyTime[0] = item.produceTime
                }
                // console.log(typeof this.warnTable[this.warnTable.length-1].produceTime)
              }
              this.tableData2[0].chartData.xData.push(item.produceTime)
              this.tableData2[0].chartData.yData.push(item.value)
              this.tableData2[0].chartData.rName= item.indicatorName
            })
          })
          // getListTen(this.parameter.indicatorName = '开卷机电流').then((res) =>{
          getListTen({indicatorName : '卷取侧卷径'}).then((res) =>{
            // console.log("这是查询的10条数据",res)
            this.avaluateListTen = res.data
            this.tableData2[1].chartData.xData = []
            this.tableData2[1].chartData.yData = []
            this.avaluateListTen.forEach(item =>{
              if(item.value>this.tableData2[1].chartData.maxData){
                if(this.warnTable.length == 0 || this.dyTime[1] < item.produceTime){
                  this.warnTable.push(item);
                  this.dyTime[1] = item.produceTime
                }
              }
              this.tableData2[1].chartData.xData.push(item.produceTime)
              this.tableData2[1].chartData.yData.push(item.value)
              this.tableData2[1].chartData.rName= item.indicatorName
            })
          })
          getListTen({indicatorName : '卷取侧重量'}).then((res) =>{
            // console.log("这是查询的10条数据",res)
            this.avaluateListTen = res.data
            this.tableData2[2].chartData.xData = []
            this.tableData2[2].chartData.yData = []
            this.avaluateListTen.forEach(item =>{
              if(item.value>this.tableData2[2].chartData.maxData){
                if(this.warnTable.length == 0 || this.dyTime[2] < item.produceTime){
                  this.warnTable.push(item);
                  this.dyTime[2] = item.produceTime
                }
              }
              this.tableData2[2].chartData.xData.push(item.produceTime)
              this.tableData2[2].chartData.yData.push(item.value)
              this.tableData2[2].chartData.rName= item.indicatorName
            })
          })
          getListTen({indicatorName : '带材长度'}).then((res) =>{
            // console.log("这是查询的10条数据",res)
            this.avaluateListTen = res.data
            this.tableData2[3].chartData.xData = []
            this.tableData2[3].chartData.yData = []
            this.avaluateListTen.forEach(item =>{
              if(item.value>this.tableData2[3].chartData.maxData){
                if(this.warnTable.length == 0 || this.dyTime[3] < item.produceTime){
                  this.warnTable.push(item);
                  this.dyTime[3] = item.produceTime
                }
              }
              this.tableData2[3].chartData.xData.push(item.produceTime)
              this.tableData2[3].chartData.yData.push(item.value)
              this.tableData2[3].chartData.rName= item.indicatorName
            })
          })
          getListTen({indicatorName : '剪切速度'}).then((res) =>{
            // console.log("这是查询的10条数据",res)
            this.avaluateListTen = res.data
            this.tableData2[4].chartData.xData = []
            this.tableData2[4].chartData.yData = []
            this.avaluateListTen.forEach(item =>{
              if(item.value>this.tableData2[4].chartData.maxData){
                if(this.warnTable.length == 0 || this.dyTime[4] < item.produceTime){
                  this.warnTable.push(item);
                  this.dyTime[4] = item.produceTime
                }
              }
              this.tableData2[4].chartData.xData.push(item.produceTime)
              this.tableData2[4].chartData.yData.push(item.value)
              this.tableData2[4].chartData.rName= item.indicatorName
            })
          })
          getListTen({indicatorName : '张力曲线'}).then((res) =>{
            // console.log("这是查询的10条数据",res)
            this.avaluateListTen = res.data
            this.tableData2[5].chartData.xData = []
            this.tableData2[5].chartData.yData = []
            this.avaluateListTen.forEach(item =>{
              if(item.value>this.tableData2[5].chartData.maxData){
                if(this.warnTable.length == 0 || this.dyTime[5] < item.produceTime){
                  this.warnTable.push(item);
                  this.dyTime[5] = item.produceTime
                }
              }
              this.tableData2[5].chartData.xData.push(item.produceTime)
              this.tableData2[5].chartData.yData.push(item.value)
              this.tableData2[5].chartData.rName= item.indicatorName
            })
          })
          getListTen({indicatorName : '速度曲线'}).then((res) =>{
            // console.log("这是查询的10条数据",res)
            this.avaluateListTen = res.data
            this.tableData2[6].chartData.xData = []
            this.tableData2[6].chartData.yData = []
            this.avaluateListTen.forEach(item =>{
              if(item.value>this.tableData2[6].chartData.maxData){
                if(this.warnTable.length == 0 || this.dyTime[6] < item.produceTime){
                  this.warnTable.push(item);
                  this.dyTime[6] = item.produceTime
                }
              }
              this.tableData2[6].chartData.xData.push(item.produceTime)
              this.tableData2[6].chartData.yData.push(item.value)
              this.tableData2[6].chartData.rName= item.indicatorName
            })
          })
          // this.handleView();
          // getList().then((res) => {
          //   this.dataList = res.data
          //   // console.log(this.dataList)
          //   this.tableData2[0].chartData.xData = []
          //   this.tableData2[0].chartData.yData = []
          //   this.tableData2[1].chartData.xData = []
          //   this.tableData2[1].chartData.yData = []
          //   this.tableData2[2].chartData.xData = []
          //   this.tableData2[2].chartData.yData = []
          //   this.tableData2[3].chartData.xData = []
          //   this.tableData2[3].chartData.yData = []
          //   this.dataList.forEach(item => {
          //     switch (item.indicatorName){
          //       case "开卷机速度":
          //         this.tableData2[0].chartData.xData.push(item.produceTime)
          //         this.tableData2[0].chartData.yData.push(item.value)
          //         this.tableData2[0].chartData.rName= item.indicatorName
          //         break
          //       case "开卷机电流":
          //         this.tableData2[1].chartData.xData.push(item.produceTime)
          //         this.tableData2[1].chartData.yData.push(item.value)
          //         this.tableData2[1].chartData.rName= item.indicatorName
          //         break
          //       case "卷取机速度":
          //         this.tableData2[2].chartData.xData.push(item.produceTime)
          //         this.tableData2[2].chartData.yData.push(item.value)
          //         this.tableData2[2].chartData.rName= item.indicatorName
          //         break
          //       case "卷取机电流":
          //         this.tableData2[3].chartData.xData.push(item.produceTime)
          //         this.tableData2[3].chartData.yData.push(item.value)
          //         this.tableData2[3].chartData.rName= item.indicatorName
          //         break
          //     }
          //   })
          // })
        }, 2000)

      }
    }
  },
  destroyed: function () {
    // 每次离开当前界面时，清除定时器
    clearInterval(this.timer)
    this.timer = null
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