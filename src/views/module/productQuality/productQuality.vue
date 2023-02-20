<template>
  <div>
    <!-- 合格率图表 -->
    <div class="top_card">
      <el-card shadow="always">
        <div slot="header" style="line-height: 40px;display: flex;justify-content: space-between;">
          <div style="display: flex;">
            <div style="font-size: 20px;color: blue;margin-right: 3px;">
              <i class="el-icon-s-help" si />
            </div>
            <span style="line-height: 40px;">产品合格判定汇总</span>
          </div>
          <div style="display: flex;">
            <div>
              <el-date-picker
                v-model="qualifyDateRange"
                size="small"
                type="datetimerange"
                align="left"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
                :picker-options="pickerOptions"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                @change="dateRange(qualityDateRange)"
              />
            </div>
          </div>
        </div>
        <!-- <BarChart :key="key" chart-type="bar" :one-x-data="item[2]" :one-y-data="item[1]" /> -->
        <BarChart key chart-type="bar" :one-x-data="barData[0]" :one-y-data="barData[1]" :two-x-data="barData1[0]" :two-y-data="barData1[1]" />
      </el-card>
    </div>

    <!-- 报告表格 -->
    <div class="bottom_card">
      <el-card shadow="always">
        <!-- 卡片头 -->
        <div slot="header" style="line-height: 40px;display: flex;justify-content: space-between;">
          <div style="display: flex;">
            <div style="font-size: 20px;color: blue;margin-right: 3px;">
              <i class="el-icon-s-help" si />
            </div>
            <span >冷轧卷报告单判定</span>
            <el-button @click="getList" type="primary" :loading="loading" size="small" style="height: 33px;width: 80px;margin: 5px 0 0 10px;" >{{loading? "判定中":"判定"}}</el-button>
          </div>
          <div style="display: flex;">
            <div>
              <el-date-picker
                v-model="reportDateRange"
                size="small"
                type="datetimerange"
                align="left"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
                :picker-options="pickerOptions"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                @change="dateRange(reportDateRange)"
              />
            </div>
            <div>
              <el-input v-model="rollNumber" size="small" placeholder="输入冷轧卷号" :clearable="true">
                <el-button slot="append"	style="background-color: #409EFF;color: white;line-height: 15px;" size="small" @click="query(rollNumber)">
                  查询
                </el-button>
              </el-input>
            </div>
          </div>
        </div>
        <!-- 表格 -->
        <div>
          <el-table
            v-loading="loading"
            :data="tableData"
            stripe
            style="width: 100%"
            :border="true"
            :cell-style="{'text-align':'center','height':'10px'}"
            :header-cell-style="{'text-align':'center'}"
          >
            <el-table-column prop="lqciTs" label="日期" min-width="20%" />
            <el-table-column prop="batchNum" label="卷号" min-width="21%" />
            <el-table-column prop="consumer" label="客户" min-width="20%" />
            <el-table-column prop="plateType" label="板型" min-width="20%">
              <template slot-scope="scope">
                <el-button size="medium" type="text" @click="handleView(1, scope.row)">
                  {{ scope.row.plateType === 1?'合格': (scope.row.plateType === 2?'暂未评定':'不合格') }}
                </el-button>
              </template>
            </el-table-column>
            <el-table-column prop="sizeDeviation" label="尺寸偏差" min-width="20%">
              <template slot-scope="scope">
                <el-button size="medium" type="text" @click="handleView(2, scope.row)">
                  {{ scope.row.sizeDeviation === 1?'合格': (scope.row.sizeDeviation === 2?'暂未评定':'不合格') }}
                </el-button>
              </template>
            </el-table-column>
            <el-table-column prop="mechanicalProperties" label="力学性能" min-width="20%">
              <template slot-scope="scope">
                <el-button size="medium" type="text" @click="handleView(3, scope.row)">
                  {{ scope.row.mechanicalProperties === 1?'合格': (scope.row.mechanicalProperties === 2?'暂未评定':'不合格') }}
                </el-button>
              </template>
            </el-table-column>
            <el-table-column prop="surfaceQuality" label="表面质量" min-width="20%">
              <template slot-scope="scope">
                <el-button size="medium" type="text" @click="handleView(4, scope.row)">
                  {{ scope.row.surfaceQuality === 1?'合格': (scope.row.surfaceQuality === 2?'暂未评定':'不合格') }}
                </el-button>
              </template>
            </el-table-column>
            <el-table-column prop="quality_judgment" label="外观质量" min-width="20%">
              <template slot-scope="scope">
                <el-button size="medium" type="text" @click="handleView(5, scope.row)">
                  {{ scope.row.appearanceQuality === 1?'合格': (scope.row.appearanceQuality === 2?'暂未评定':'不合格') }}
                </el-button>
              </template>
            </el-table-column>
            <el-table-column prop="qualityJudgment" label="质量判定" min-width="20%">
              <template slot-scope="scope">
                <el-tag :type="scope.row.qualityJudgment === 1?'success': (scope.row.qualityJudgment === 2?'info':'danger')">
                  {{ scope.row.qualityJudgment === 1?'合格': (scope.row.qualityJudgment === 2?'暂未评定':'不合格') }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="remark" label="备注" min-width="20%" />
            <el-table-column label="操作" min-width="20%">
              <template slot-scope="scope">
                <el-button size="medium" type="text" @click="handleView(6, scope.row)">
                  查看
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- 分页插件 -->
        <div style="margin: 30px 20px 20px;float: right;font-size: 20px;">
          <el-pagination
            :current-page="pageNum"
            :page-sizes="[10, 20, 30, 50]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </el-card>
    </div>

    <!-- 弹窗 -->
    <el-dialog :title="dailogData.processStandard.processName" :visible.sync="dialogFormVisible">
      <!-- 板型 -->
      <div v-if="showWtich===1 || showWtich===6">
        <el-descriptions class="margin-top" title="板型" :column="2" border :size="size">
          <el-descriptions-item label="平直度">
            {{ dailogData.singleStraightness === null?'-':dailogData.singleStraightness }}
          </el-descriptions-item>
          <el-descriptions-item label="平直度标准">
            {{ dailogData.processStandard.straightness === null?'-':dailogData.processStandard.straightness }}
          </el-descriptions-item>
          <el-descriptions-item label="中凸度">
            {{ dailogData.singleMediumConvexity === null?'-':dailogData.singleMediumConvexity }}
          </el-descriptions-item>
          <el-descriptions-item label="中凸度标准">
            {{ dailogData.processStandard.mediumConvexityLow === null?'-':dailogData.processStandard.mediumConvexityLow }}
            ~
            {{ dailogData.processStandard.mediumConvexityHigh === null?'-':dailogData.processStandard.mediumConvexityHigh }}
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <!-- 尺寸偏差 -->
      <div v-if="showWtich===2 || showWtich===6" class="my-margin">
        <el-descriptions class="margin-top" title="尺寸偏差" :column="2" border :size="size">
          <el-descriptions-item label="宽度差">
            {{ dailogData.finishedWidth === null?'-':dailogData.finishedWidth }}
          </el-descriptions-item>
          <el-descriptions-item label="宽度差标准">
            ±{{ dailogData.processStandard.widthDiff === null?'-': dailogData.processStandard.widthDiff }}
          </el-descriptions-item>
          <el-descriptions-item label="厚度差">
            {{ dailogData.finishedThickness === null?'-':dailogData.finishedThickness }}
          </el-descriptions-item>
          <el-descriptions-item label="厚度差标准">
            ±{{ dailogData.processStandard.thicknessDiff === null?'-':dailogData.processStandard.thicknessDiff }}
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <!-- 力学性能 -->
      <div v-if="showWtich===3 || showWtich===6" class="my-margin">
        <el-descriptions class="margin-top" title="力学性能" :column="2" border :size="size">
          <el-descriptions-item label="抗拉强度">
            {{ dailogData.correctStrength === null?'-':dailogData.correctStrength }}
          </el-descriptions-item>
          <el-descriptions-item label="抗拉强度标准">
            {{ dailogData.processStandard.tensileStrengthLow === null?'-':dailogData.processStandard.tensileStrengthLow }}
            ~
            {{ dailogData.processStandard.tensileStrengthHigh === null?'-':dailogData.processStandard.tensileStrengthHigh }}
          </el-descriptions-item>
          <el-descriptions-item label="延伸率">
            {{ dailogData.correctExtension === null?'-':dailogData.correctExtension }}
          </el-descriptions-item>
          <el-descriptions-item label="延伸率标准">
            ≥{{ dailogData.processStandard.elongation === null?'-':dailogData.processStandard.elongation }}
          </el-descriptions-item>
          <el-descriptions-item label="弯折性能">
            -
          </el-descriptions-item>
          <el-descriptions-item label="弯折性能表标准">
            -
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <!-- 表面质量 -->
      <div v-if="showWtich===4 || showWtich===6" class="my-margin">
        <el-descriptions class="margin-top" title="表面质量" :column="2" border :size="size">
          <el-descriptions-item label="划痕">
            -
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              条纹
            </template>
            -
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              油斑
            </template>
            -
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              腐蚀
            </template>
            -
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              黑线
            </template>
            -
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              辊印
            </template>
            -
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <!-- 外观质量 -->
      <div v-if="showWtich===5 || showWtich===6" class="my-margin">
        <el-descriptions class="margin-top" title="外观质量" :column="2" border :size="size">
          <el-descriptions-item>
            <template slot="label">
              串层
            </template>
            -
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              塔形
            </template>
            -
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              卷径
            </template>
            {{ dailogData.finishedRollDiameter === null?'-':dailogData.finishedRollDiameter }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              偏移量
            </template>
            -
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              卷重
            </template>
            {{ dailogData.finishedWeight === null?'-':dailogData.finishedWeight }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              管芯
            </template>
            -
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          取 消
        </el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          确 定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import BarChart from '@/views/dashboard/BarChart'
import {	getProductQualityVoList } from '@/api/productQuality'
export default {
  batch_num: 'ProductQuality',
  components: {
    BarChart
  },
  data() {
    return {
      labelStyle:{
        background: '#8a1065',
      },
      // 遮罩层
      loading: false,
      barData: [
        ['周' + this.parseTime(new Date().getTime() - 3600 * 1000 * 24 * 6, '{a}'),
          '周' + this.parseTime(new Date().getTime() - 3600 * 1000 * 24 * 5, '{a}'),
          '周' + this.parseTime(new Date().getTime() - 3600 * 1000 * 24 * 4, '{a}'),
          '周' + this.parseTime(new Date().getTime() - 3600 * 1000 * 24 * 3, '{a}'),
          '周' + this.parseTime(new Date().getTime() - 3600 * 1000 * 24 * 2, '{a}'),
          '周' + this.parseTime(new Date().getTime() - 3600 * 1000 * 24 * 1, '{a}'),
          '周' + this.parseTime(new Date().getTime() - 3600 * 1000 * 24 * 0, '{a}')],
        [15, 20, 19, 10, 23, 11, 10]
      ],
      barData1: [
        [this.parseTime(new Date().getTime() - 3600 * 1000 * 24 * 6, '{y}-{m}-{d}'),
          this.parseTime(new Date().getTime() - 3600 * 1000 * 24 * 5, '{y}-{m}-{d}'),
          this.parseTime(new Date().getTime() - 3600 * 1000 * 24 * 4, '{y}-{m}-{d}'),
          this.parseTime(new Date().getTime() - 3600 * 1000 * 24 * 3, '{y}-{m}-{d}'),
          this.parseTime(new Date().getTime() - 3600 * 1000 * 24 * 2, '{y}-{m}-{d}'),
          this.parseTime(new Date().getTime() - 3600 * 1000 * 24 * 1, '{y}-{m}-{d}'),
          this.parseTime(new Date().getTime() - 3600 * 1000 * 24 * 0, '{y}-{m}-{d}')],
        [0, 1, 2, 1, 0, 1, 1]
      ],
      showWtich: 1,
      qualifyDateRange: '',
      reportDateRange: '',
      rollNumber: '',
      pageNum: 1,
      pageSize: 10,
      total: 100,
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
      dailogData: {
        processStandard: {
          id: null,
          processName: null,
          thicknessDiff: null,
          widthDiff: null,
          straightness: null,
          mediumConvexityLow: null,
          mediumConvexityHigh: null,
          rollDiameterLow: null,
          rollDiameterHigh: null,
          rollWeightLow: null,
          rollWeightHigh: null,
          tensileStrengthLow: null,
          tensileStrengthHigh: null,
          elongation: null,
          surface: null
        }
      },
      tableData: [],
      dialogFormVisible: false,
      size: 'small',
      // 查询参数
      queryParams: {
        pageNum: null,
        pageSize: null,
        startDateTime: null,
        endDateTime: null,
        batchNum: null,
        isDecision: 1
      },
      productStandard: null
    }
  },
  computed: {},
  watch: {
    pageNum: {
      handler: function() {
        this.queryParams.pageNum = this.pageNum
      },
      deep: true,
      immediate: true
    },
    pageSize: {
      handler: function() {
        this.queryParams.pageSize = this.pageSize
      },
      deep: true,
      immediate: true
    }
  },
  async created() {
    await this.getList()
  },
  methods: {
    /**
			 * 更改pageSize
			 * @param {Object} val
			 */
    handleSizeChange(val) {
      this.pageSize = val
      this.getList()
    },
    /**
			 * 更改当前页码
			 * @param {Object} val
			 */
    handleCurrentChange(val) {
      this.pageNum = val
      this.getList()
    },
    /**
			 * 展示对应行的数据弹窗
			 * @param {Object} index
			 * @param {Object} row
			 */
    handleView(index, row) {
      this.showWtich = index
      this.dailogData = row
      this.dialogFormVisible = true
    },
    /**
			 * 卷号查询
			 * @param {Object} val
			 */
    query(val) {
      console.log(val)
      this.queryParams.batchNum = val
      this.getList()
    },
    /**
     * 日期查询
     * @param {Object} val
     */
    dateRange(val) {
      console.log(val)
      try {
        this.queryParams.startDateTime = val[0]
        this.queryParams.endDateTime = val[1]
      } catch (e) {
        this.queryParams.startDateTime = null
        this.queryParams.endDateTime = null
      }
    },
    /**
     * 立马判断
    */
    getSoon() {
      this.queryParams.isDecision = 1
      this.getList()
    },
    /**
			 * 获取表格数据
			 */
    getList() {
      this.loading = true
      getProductQualityVoList(this.queryParams).then((res) => {
        console.log('res: ', res)
        this.tableData = res.data.records
        this.total = res.data.total
        this.loading = false
        console.log('total', this.total)
      })
    }
  }
}
</script>

<style scoped="sass">
  .my-margin {
    margin-top: 20px;
  }

	.top_card {
		margin: 1% 1%;
	}

	.bottom_card {
    overflow: hidden;
    margin: 1% 1.1%;
	}

  /deep/ .el-card__header {
		padding: 10px 20px;
	}
</style>
