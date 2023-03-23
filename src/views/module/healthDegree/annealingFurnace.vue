<template>
  <div>
    <div style="display: flex; margin-top: 5px;">
      <div style="width: 54%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">1#退火炉</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData5" stripe style="width: 100%" height="700px"
              :cell-style="{ 'text-align': 'center', 'height': '10px', 'line-hight': '150px' }"
              :header-cell-style="{ 'text-align': 'center' }">
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="tubiao" label="图表" min-width="50%">
                <template slot-scope="scope">
                  <div style="text-align: center" @click="getChart2(scope.row)">
                    <GradientChart width="200px" height="63px" />
                    <!--                   <testChart width="200px" height="63px"></testChart>-->
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
          <div style="font-size: 60px;color: blue;text-align: center;margin: 99px 0px 86px 0px">
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
            <el-table :data="tableData" stripe style="width: 100%" height="300px" :show-header="false">
              <el-table-column prop="id" label="序号" min-width="10%" />
              <el-table-column prop="data" label="日期" min-width="25%" />
              <el-table-column prop="address" label="编号" min-width="25%" />
              <el-table-column prop="status" label="状态" min-width="25%">
                <template slot-scope="scope">
                  <el-button size="medium" type="text" style="color: red">{{ scope.row.status }}</el-button>
                </template>
              </el-table-column>
              <el-table-column label="判定结果" min-width="15%">
                <template>
                  <el-button size="medium" type="text">查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
    </div>
    <div style="display: flex; margin-top: 5px;">
      <div style="width: 54%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">2#退火炉</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData5" stripe style="width: 100%" height="300px"
              :cell-style="{ 'text-align': 'center', 'height': '10px', 'line-hight': '150px' }"
              :header-cell-style="{ 'text-align': 'center' }">
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="tubiao" label="图表" min-width="50%">
                <template slot-scope="scope">
                  <div style="text-align: center" @click="getChart2(scope.row)">
                    <GradientChart width="200px" height="63px" />
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
          <div style="font-size: 60px;color: blue;text-align: center;margin:99px 0px 86px 0px">
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
            <el-table :data="tableData" stripe style="width: 100%" height="300px" :show-header="false">
              <el-table-column prop="id" label="序号" min-width="10%" />
              <el-table-column prop="data" label="日期" min-width="25%" />
              <el-table-column prop="address" label="编号" min-width="25%" />
              <el-table-column prop="status" label="状态" min-width="25%">
                <template slot-scope="scope">
                  <el-button size="medium" type="text" style="color: red">{{ scope.row.status }}</el-button>
                </template>
              </el-table-column>
              <el-table-column label="判定结果" min-width="15%">
                <template>
                  <el-button size="medium" type="text">查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>

    </div>
    <div style="display: flex; margin-top: 5px;">
      <div style="width: 54%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">3#退火炉</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData5" stripe style="width: 100%" height="300px"
              :cell-style="{ 'text-align': 'center', 'height': '10px', 'line-hight': '150px' }"
              :header-cell-style="{ 'text-align': 'center' }">
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="tubiao" label="图表" min-width="50%">
                <template slot-scope="scope">
                  <div style="text-align: center" @click="getChart2(scope.row)">
                    <GradientChart width="200px" height="63px" />
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
          <div style="font-size: 60px;color: blue;text-align: center;margin:99px 0px 86px 0px">
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
            <el-table :data="tableData" stripe style="width: 100%" height="300px" :show-header="false">
              <el-table-column prop="id" label="序号" min-width="10%" />
              <el-table-column prop="data" label="日期" min-width="25%" />
              <el-table-column prop="address" label="编号" min-width="25%" />
              <el-table-column prop="status" label="状态" min-width="25%">
                <template slot-scope="scope">
                  <el-button size="medium" type="text" style="color: red">{{ scope.row.status }}</el-button>
                </template>
              </el-table-column>
              <el-table-column label="判定结果" min-width="15%">
                <template>
                  <el-button size="medium" type="text">查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>

    </div>
    <div style="display: flex; margin-top: 5px;">
      <div style="width: 54%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">4#退火炉</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData5" stripe style="width: 100%" height="300px"
              :cell-style="{ 'text-align': 'center', 'height': '10px', 'line-hight': '150px' }"
              :header-cell-style="{ 'text-align': 'center' }">
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="tubiao" label="图表" min-width="50%">
                <template slot-scope="scope">
                  <div style="text-align: center" @click="getChart2(scope.row)">
                    <GradientChart width="200px" height="63px" />
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
          <div style="font-size: 60px;color: blue;text-align: center;margin: 99px 0px 86px 0px">
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
            <el-table :data="tableData" stripe style="width: 100%" height="300px" :show-header="false">
              <el-table-column prop="id" label="序号" min-width="10%" />
              <el-table-column prop="data" label="日期" min-width="25%" />
              <el-table-column prop="address" label="编号" min-width="25%" />
              <el-table-column prop="status" label="状态" min-width="25%">
                <template slot-scope="scope">
                  <el-button size="medium" type="text" style="color: red">{{ scope.row.status }}</el-button>
                </template>
              </el-table-column>
              <el-table-column label="判定结果" min-width="15%">
                <template>
                  <el-button size="medium" type="text">查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>

    </div>
    <div style="display: flex; margin-top: 5px;">
      <div style="width: 54%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">5#退火炉</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData5" stripe style="width: 100%" height="300px"
              :cell-style="{ 'text-align': 'center', 'height': '10px', 'line-hight': '150px' }"
              :header-cell-style="{ 'text-align': 'center' }">
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="tubiao" label="图表" min-width="50%">
                <template slot-scope="scope">
                  <div style="text-align: center" @click="getChart2(scope.row)">
                    <GradientChart width="200px" height="63px" />
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
          <div style="font-size: 60px;color: blue;text-align: center;margin:99px 0px 86px 0px">
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
            <el-table :data="tableData" stripe style="width: 100%" height="300px" :show-header="false">
              <el-table-column prop="id" label="序号" min-width="10%" />
              <el-table-column prop="data" label="日期" min-width="25%" />
              <el-table-column prop="address" label="编号" min-width="25%" />
              <el-table-column prop="status" label="状态" min-width="25%">
                <template slot-scope="scope">
                  <el-button size="medium" type="text" style="color: red">{{ scope.row.status }}</el-button>
                </template>
              </el-table-column>
              <el-table-column label="判定结果" min-width="15%">
                <template>
                  <el-button size="medium" type="text">查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>

    </div>
    <div style="display: flex; margin-top: 5px;">
      <div style="width: 54%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">6#退火炉</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData5" stripe style="width: 100%" height="300px"
              :cell-style="{ 'text-align': 'center', 'height': '10px', 'line-hight': '150px' }"
              :header-cell-style="{ 'text-align': 'center' }">
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="tubiao" label="图表" min-width="50%">
                <template slot-scope="scope">
                  <div style="text-align: center" @click="getChart2(scope.row)">
                    <GradientChart width="200px" height="63px" />
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
          <div style="font-size: 60px;color: blue;text-align: center;margin:99px 0px 86px 0px">
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
            <el-table :data="tableData" stripe style="width: 100%" height="300px" :show-header="false">
              <el-table-column prop="id" label="序号" min-width="10%" />
              <el-table-column prop="data" label="日期" min-width="25%" />
              <el-table-column prop="address" label="编号" min-width="25%" />
              <el-table-column prop="status" label="状态" min-width="25%">
                <template slot-scope="scope">
                  <el-button size="medium" type="text" style="color: red">{{ scope.row.status }}</el-button>
                </template>
              </el-table-column>
              <el-table-column label="判定结果" min-width="15%">
                <template>
                  <el-button size="medium" type="text">查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>

    </div>
    <div style="display: flex; margin-top: 5px;">
      <div style="width: 54%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">7#退火炉</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData5" stripe style="width: 100%" height="300px"
              :cell-style="{ 'text-align': 'center', 'height': '10px', 'line-hight': '150px' }"
              :header-cell-style="{ 'text-align': 'center' }">
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="tubiao" label="图表" min-width="50%">
                <template slot-scope="scope">
                  <div style="text-align: center" @click="getChart2(scope.row)">
                    <GradientChart width="200px" height="63px" />
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
          <div style="font-size: 60px;color: blue;text-align: center;margin:99px 0px 86px 0px">
            <el-button class="el-icon-mytubiao" style="margin-bottom: 8px" />
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
            <el-table :data="tableData" stripe style="width: 100%" height="300px" :show-header="false">
              <el-table-column prop="id" label="序号" min-width="10%" />
              <el-table-column prop="data" label="日期" min-width="25%" />
              <el-table-column prop="address" label="编号" min-width="25%" />
              <el-table-column prop="status" label="状态" min-width="25%">
                <template slot-scope="scope">
                  <el-button size="medium" type="text" style="color: red">{{ scope.row.status }}</el-button>
                </template>
              </el-table-column>
              <el-table-column label="判定结果" min-width="15%">
                <template>
                  <el-button size="medium" type="text">查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible2">
      <div style="display: flex;">
        <el-button style="" type="text"> 本周 </el-button>
        <el-button style="" type="text"> 本月 </el-button>
        <el-button style="margin-right: 10px;" type="text"> 本年 </el-button>
        <div>
          <el-date-picker v-model="qualifyDateRange" size="small" type="daterange" align="left" unlink-panels
            range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions" />
        </div>
      </div>
      <div>
        <GradientChart />
        <!--        <testChart width="200px" height="63px"></testChart>-->
      </div>
    </el-dialog>
  </div>
</template>

<script>
import GradientChart from '@/views/dashboard/GradientChart'
// import testChart from '@/views/dashboard/testChart'
export default {
  components: { GradientChart },
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
      tableData: [{
        id: '01',
        data: '2022/04/15 18:00',
        address: '编号ADGH12435',
        status: '压力过高'
      }, {
        id: '02',
        data: '2022/04/15 18:00',
        address: '编号ADGH12435',
        status: '装置故障'
      }, {
        id: '03',
        data: '2022/04/15 18:00',
        address: '编号ADGH12435',
        status: '电机温度过高'
      }, {
        id: '04',
        data: '2022/04/15 18:00',
        address: '编号ADGH12435',
        status: '压力过高'
      }, {
        id: '05',
        data: '2022/04/15 18:00',
        address: '编号ADGH12435',
        status: '装置故障'
      }, {
        id: '06',
        data: '2022/04/15 18:00',
        address: '编号ADGH12435',
        status: '电机温度过高'
      }, {
        id: '07',
        data: '2022/04/15 18:00',
        address: '编号ADGH12435',
        status: '电机温度过高'
      }],
      tableData5: [{
        xuhao: '01',
        name: '炉冷却水',
        value: '83'
      }, {
        xuhao: '02',
        name: '炉压缩空气',
        value: '83'
      }, {
        xuhao: '03',
        name: '金属料温温度曲线',
        value: '83'
      }, {
        xuhao: '04',
        name: '1区炉气温度曲线',
        value: '83'
      }, {
        xuhao: '05',
        name: '2区炉气温度曲线',
        value: '83'
      }, {
        xuhao: '06',
        name: '3区炉气温度曲线',
        value: '83'
      }, {
        xuhao: '7',
        name: '炉气设定温度',
        value: '83'
      }],
      // dialogVisible: false,
      // dialogVisible1: false,
      dialogVisible2: false
      // dataList:{},
      // xData: [],
      // yData: []
    }
  },
  methods: {
    getChart2: function (row) {
      this.dialogVisible2 = true
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
