<template>
  <div class="layout-body" style="width: 100%;height: auto;">
    <div class="top-text">
      模块功能说明：这是计算工序的平均生产周期功能模块，该模块主要计算每个工序的平均耗时，可点击工序周期设定图标可以设定每个工序的平均时间。
    </div>
    <!-- 工序平均周期 -->
    <div class="top-card">
      <el-card shadow="always">
        <div slot="header" class="top-card">
          <div class="top-card-header">
            <div class="top-card-header-left">
              <i class="el-icon-s-help"></i>
              <span class="top-card-header-left-text">工序平均周期计算</span>
            </div>
            <div>
              <el-button type="primary" size="small" @click="showDailog = true">工序周期设定</el-button>
            </div>
          </div>
        </div>
        <div style="height: 600px">
          <LineChart :chart-data1="chartData1" :chart-data2="chartData2" height="100%" :key="chartKey"/>
        </div>
      </el-card>
    </div>
    <el-dialog title="设定工序周期" :visible.sync="showDailog">
      <el-form ref="form" :model="formData" label-width="200px" >
        <el-form-item label="熔炼工序 (单位：小时)">
          <el-input v-model="formData.rongLian"></el-input>
        </el-form-item>
        <el-form-item label="保温工序 (单位：小时)">
          <el-input v-model="formData.baoWen"></el-input>
        </el-form-item>
        <el-form-item label="铸轧工序 (单位：小时)">
          <el-input v-model="formData.zhuZha"></el-input>
        </el-form-item>
        <el-form-item label="冷轧工序 (单位：小时)">
          <el-input v-model="formData.lengZha"></el-input>
        </el-form-item>
        <el-form-item label="退火工序 (单位：小时)">
          <el-input v-model="formData.tuiHuo"></el-input>
        </el-form-item>
        <el-form-item label="重卷工序 (单位：小时)">
          <el-input v-model="formData.chongJuan"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showDailog = false">取 消</el-button>
        <el-button type="primary" @click="update(formData)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import LineChart from '@/views/dashboard/LineChart'
import { getProcessComputeTime, getSetProcessTime, updateProcessTime } from '@/api/ProcessCompute'
export default {
  name: 'ComputeIndex',
  components: { LineChart },
  data() {
    return {
      tableData: [],
      qualifyDateRange: [this.parseTime(new Date().getTime() - 3600 * 1000 * 24 * 6, '{y}-{m}-{d}'), this.parseTime(new Date().getTime(), '{y}-{m}-{d}')],
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
          text: '最近一年',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 365)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      chartData1: [],
      chartData2: [],
      chartKey: 0,
      showDailog: false,
      formData: {
        id:  null,
        rongLian:  null,
        baoWen:  null,
        zhuZha:  null,
        lengZha: null,
        tuiHuo:  null,
        chongJuan: null
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    update(formData){
      updateProcessTime(formData).then(res => {
        this.$message({
          message: '更新成功',
          type: 'success'
        })
        this.getList()
        this.showDailog = false
      })
    },
    getList(){
      getProcessComputeTime().then(res => {
        res.data.forEach((item, index) => {
          this.chartData1[index] = item.time
        });
        this.chartKey++
      })
      const arr = ['rongLian', 'baoWen', 'zhuZha', 'lengZha', 'tuiHuo', 'chongJuan']
      getSetProcessTime().then(res => {
        this.formData = res.data
        for (let i = 0; i < arr.length; i++) {
          this.chartData2[i] = res.data[arr[i]]
        }
        console.log(this.chartData2)
        this.chartKey++
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/productQuality/productQuality.scss';
.top-text{
  font-size: 20px;
}
.top-card {
    margin-bottom: 20px;

    .top-card-header{
      display: flex;
      line-height: 40px;
      justify-content: space-between;

      .top-card-header-left{
        color: blue;
        font-size: 20px;
        .top-card-header-left-text{
          font-size: 20px !important;
          color: #333;
        }
      }
    }
	}
</style>
