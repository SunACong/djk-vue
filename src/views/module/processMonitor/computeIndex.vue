<template>
  <div class="layout-body">
    <div class="top-text">
      模块功能说明：这是计算平均生产天数功能模块，该模块主要计算每个流程的平均生产天数，在下方点击计算平均生产天数，即可计算所有步骤的平均生产天数。
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
              <el-date-picker
                v-model="qualifyDateRange"
                size="large"
                type="daterange"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
                :picker-options="pickerOptions"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                @change="dateRangeQuality(qualifyDateRange)"
              />
            </div>
          </div>
        </div>
        <div style="height: calc(80vh);">
          <div style="margin-top: 40px;">
            <el-form ref="form" :model="formData" label-width="80px" style="display: flex;flex-wrap: wrap;">
              <el-form-item label="熔炼(天)">
                <el-input v-model="formData.rongLian"></el-input>
              </el-form-item>
              <el-form-item label="保温(天)">
                <el-input v-model="formData.baoWen"></el-input>
              </el-form-item>
              <el-form-item label="铸轧(天)">
                <el-input v-model="formData.zhuZha"></el-input>
              </el-form-item>
              <el-form-item label="冷轧(天)">
                <el-input v-model="formData.lengZha"></el-input>
              </el-form-item>
              <el-form-item label="退火(天)">
                <el-input v-model="formData.tuiHuo"></el-input>
              </el-form-item>
              <el-form-item label="重卷(天)">
                <el-input v-model="formData.chongJuan"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="warning">修改</el-button>
                <el-button type="primary">确定</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div style="height: 90%">
            <LineChart :chart-data="chartData" height="100%" :key="chartKey"/>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import LineChart from '@/views/dashboard/LineChart'
import { getProcessComputeTime } from '@/api/ProcessCompute'
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
            // const start = new Date(new Date().getFullYear(), 0)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      chartData: [],
      chartKey: 0,
      formData: {
        rongLian: '',
        baoWen: '',
        zhuZha: '',
        lengZha: '',
        tuiHuo: '',
        chongJuan: ''
      }
    }
  },
  created() {
    getProcessComputeTime().then(res => {
      res.data.forEach((item, index) => {
        this.chartData[index] = item.time
      });
      this.chartKey++
    })
    console.log(this.chartData)
  },
  methods: {
    
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
        font-size: 30px;
        .top-card-header-left-text{
          font-size: 30px !important;
          color: #333;
        }
      }
    }
	}
</style>
