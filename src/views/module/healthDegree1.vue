<template>
  <div>
    <div style="display: flex;justify-content: space-between;line-height: 20px;padding: 5px 5px">
      <div style="flex: 7; box-shadow: 5px 5px 2px #cccccc;padding: 0 5px">
        <div style="text-align: center">退火炉</div>
        <div style="display: flex;justify-content: space-between;text-align: center">
          <div >
            <i :class="true?'el-icon-s-help':'el-icon-phone'" si />
            <div>1#退火炉</div>
          </div>
          <div>
            <i class="el-icon-s-help" si />
            <div>2#退火炉</div>
          </div>
          <div>
            <i class="el-icon-s-help" si />
            <div>3#退火炉</div>
          </div>
          <div>
            <i class="el-icon-s-help" si />
            <div>4#退火炉</div>
          </div>
          <div>
            <i class="el-icon-s-help" si />
            <div>5#退火炉</div>
          </div>
          <div>
            <i class="el-icon-s-help" si />
            <div>6#退火炉</div>
          </div>
          <div>
            <i class="el-icon-s-help" si />
            <div>7#退火炉</div>
          </div>
        </div>
      </div>

      <div style="flex: 1;margin:0px 20px;text-align: center;box-shadow: 5px 5px 2px #cccccc;padding: 0 5px">
        <div>重卷机</div>
        <div >
          <i class="el-icon-s-help" si />
          <div>1#重卷机</div>
        </div>
      </div>

      <div style="flex: 5;text-align: center;box-shadow: 5px 5px 2px #cccccc;padding: 0 5px">
        <div>铸轧机</div>
        <div style="display: flex;justify-content: space-between">
          <div>
            <i class="el-icon-s-help" si />
            <div>1#铸轧机</div>
          </div>
          <div>
            <i class="el-icon-s-help" si />
            <div>2#铸轧机</div>
          </div>
          <div>
            <i class="el-icon-s-help" si />
            <div>3#铸轧机</div>
          </div>
          <div>
            <i class="el-icon-s-help" si />
            <div>4#铸轧机</div>
          </div>
          <div>
            <i class="el-icon-s-help" si />
            <div>5#铸轧机</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 合格率图表 -->
    <div style="display: flex;margin-top: 5px;" >
      <div style="width: 55%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">1#熔炼炉</span>
            </div>
          </div>
          <AreaChart />
        </el-card>
      </div>
      <div class="health_status" style="width: 16%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">当前设备状态</span>
            </div>
          </div>
          <div style="font-size: 60px;color: blue;text-align: center;margin: 99px auto">
            <i class="el-icon-s-help" si />
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
              <el-table-column prop="status" label="状态" min-width="25%" />
              <el-table-column label="判定结果" min-width="15%" >
                <template>
                  <el-button
                    size="mini"
                    type="text"
                  >查看</el-button>
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
              <span style="line-height: 20px;">1#铸扎机</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData1" stripe style="width: 100%" height="300px"  >
              <el-table-column prop="xuhao" label="序号" min-width="20%" />
              <el-table-column prop="name" label="指标名称" min-width="40%" />
              <el-table-column prop="sources" label="数据来源" min-width="40%" />

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
          <div style="font-size: 60px;color: blue;text-align: center;margin: 99px auto">
            <i class="el-icon-s-help" si />
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
              <el-table-column prop="status" label="状态" min-width="25%" />
              <el-table-column label="判定结果" min-width="15%" >
                <template>
                  <el-button
                    size="mini"
                    type="text"
                  >查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>

    </div>
    <div style="display: flex;margin-top: 5px;">
      <div style="width: 55%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">1#熔炼炉</span>
            </div>
          </div>
          <div  style="display: flex;">
            <BarChart1/>
            <BarChart1/>
            <BarChart1/>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 16%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">当前设备状态</span>
            </div>
          </div>
          <div style="font-size: 60px;color: blue;text-align: center;margin: 99px auto">
            <i class="el-icon-s-help" si />
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
              <el-table-column prop="status" label="状态" min-width="25%" />
              <el-table-column label="判定结果" min-width="15%" >
                <template>
                  <el-button
                    size="mini"
                    type="text"
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
              <span style="line-height: 20px;">2#铸扎机</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData1" stripe style="width: 100%" height="300px"  >
              <el-table-column prop="xuhao" label="序号" min-width="20%" />
              <el-table-column prop="name" label="指标名称" min-width="40%" />
              <el-table-column prop="sources" label="数据来源" min-width="40%" />

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
          <div style="font-size: 60px;color: blue;text-align: center;margin: 99px auto">
            <i class="el-icon-s-help" si />
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
              <el-table-column prop="status" label="状态" min-width="25%" />
              <el-table-column label="判定结果" min-width="15%" >
                <template>
                  <el-button
                    size="mini"
                    type="text"
                  >查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>

    </div>
  </div>
</template>

<script>
import AreaChart from '@/views/dashboard/AreaChart'
export default {
  components: {AreaChart},
  props: {},
  data() {
    return {
      tableData: [{
        id: '01',
        data: '2022/04/15 18:00',
        address: '编号ADGH12435',
        status: '压力过高'
      }, {
        id: '01',
        data: '2022/04/15 18:00',
        address: '编号ADGH12435',
        status: '装置故障'
      }, {
        id: '01',
        data: '2022/04/15 18:00',
        address: '编号ADGH12435',
        status: '电机温度过高'
      }, {
        id: '01',
        data: '2022/04/15 18:00',
        address: '编号ADGH12435',
        status: '压力过高'
      }, {
        id: '01',
        data: '2022/04/15 18:00',
        address: '编号ADGH12435',
        status: '装置故障'
      }, {
        id: '01',
        data: '2022/04/15 18:00',
        address: '编号ADGH12435',
        status: '电机温度过高'
      }],
      tableData1: [{
        xuhao: '01',
        name: '上辊电机电流',
        sources: '原有PLC'
      }, {
        xuhao: '02',
        name: '上辊电机电流',
        sources: '原有PLC'
      }, {
        xuhao: '03',
        name: '上辊电机电流',
        sources: '原有PLC'
      }, {
        xuhao: '04',
        name: '上辊电机电流',
        sources: '原有PLC'
      }, {
        xuhao: '05',
        name: '上辊电机电流',
        sources: '原有PLC'
      }, {
        xuhao: '06',
        name: '上辊电机电流',
        sources: '原有PLC'
      }],
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>

