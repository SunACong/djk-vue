<template>
  <div class="layout-body" style="width: 100%;height: auto;">
    <div class="top-text">
      模块功能说明：这是查询异常流程的功能模块，该模块主要显示异常流程，在下方点击刷新，即可查看异常流程。
    </div>
    <div class="top-card">
      <el-card shadow="always">
        <div slot="header" class="top-card">
          <div class="top-card-header">
            <div class="top-card-header-left">
              <i class="el-icon-s-help" />
              <span class="top-card-header-left-text">异常流程统计表</span>
            </div>
            <div>
              <el-date-picker v-model="qualifyDateRange" size="large" type="daterange" format="yyyy-MM-dd"
                value-format="yyyy-MM-dd" :picker-options="pickerOptions" range-separator="至" start-placeholder="开始日期"
                end-placeholder="结束日期" @change="dateRangeQuality(qualifyDateRange)" />
            </div>
          </div>
        </div>
        <div>
          <div style="height: 300px">
            <LineChart :chart-data="chartData" height="100%" />
          </div>
        </div>
        <!-- 表格 -->
        <div style="margin-top: 40px;">
          <el-table v-loading="loading" :data="tableData" stripe style="width: 100%" :border="true"
            :cell-style="{ 'text-align': 'center', 'height': '10px' }" :header-cell-style="{ 'text-align': 'center' }">
            <el-table-column prop="batchNum" label="熔次/铸轧/冷轧" min-width="21%" />
            <el-table-column prop="inspectCreateTime" label="巡检开始日期" min-width="35%" />
            <el-table-column prop="lmdpQcColdInspect.consumer" label="客户" min-width="20%" />
            <el-table-column prop="plateTypeDetermination" label="板型" min-width="20%">
              <template slot-scope="scope">
                <el-tag
                  :type="scope.row.plateTypeDetermination === 1 ? 'success' : (scope.row.plateTypeDetermination === 2 ? 'info' : 'danger')"
                  @click="handleView(1, scope.row)">
                  {{ scope.row.plateTypeDetermination === 1 ? '合格' : (scope.row.plateTypeDetermination === 2 ? '暂未评定' :
                    '不合格') }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column label="操作" min-width="20%">
              <template slot-scope="scope">
                <el-button size="medium" type="text" @click="handleView(6, scope.row)">
                  查看
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import LineChart from '@/views/dashboard/LineChart'

export default {
  name: 'ProcessIndex',
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
      loading: false,
      chartData: [1, 2, 8, 15, 4, 11, 10],
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

  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/productQuality/productQuality.scss';
</style>
