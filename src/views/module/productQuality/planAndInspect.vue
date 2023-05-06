<template>
  <div class="layout-body" style="width: 100%;height: auto;">
    <!-- 顶部说明 -->
    <div class="top-text">
      产品质量判定模型：上面部分是产品质量合格统计表格，负责统计一段时间内的卷的合格和不合格情况。下面部分是成品自动判定表格，负责自动判定卷子是否合格（状态说明：暂未判定（无不合格且数据不全的情况）不合格（出现任何不合格）合格（全部合格））。
      <hr>
      功能：两部分都可以通过时间范围查询，自动判定可以同时通过卷号查询。可以查询卷号自动判定的详细信息
      <hr>
      注意：自动判定的数据是通过巡检数据自动判定的，所以巡检数据必须要全面规范。
    </div>
    <!-- 合格率图表 -->
    <!-- <div class="top-card">
      <el-card shadow="always">
        <div slot="header" class="top-card">
          <div class="top-card-header">
            <div class="top-card-header-left">
              <i class="el-icon-s-help" />
              <span class="top-card-header-left-text">产品合格判定汇总表格</span>
            </div>
            <div class="">
              <el-descriptions class="" title="" :column="5" border :size="size" :label-style="labelStyle">
                <el-descriptions-item label="合格数">
                  <el-tag type="success" size="mini">
                    {{ rangeQualifyRate.qualified }}
                  </el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="合格率">
                  <el-tag type="success" size="mini">
                    {{ (rangeQualifyRate.qualified+rangeQualifyRate.noQualified)===0? 0: (rangeQualifyRate.qualified/(rangeQualifyRate.qualified+rangeQualifyRate.noQualified)*100).toFixed(2) }}
                  </el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="暂未判定">
                  <el-tag type="info" size="mini">
                    {{ rangeQualifyRate.tentative }}
                  </el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="不合格数">
                  <el-tag type="danger" size="mini">
                    {{ rangeQualifyRate.noQualified }}
                  </el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="不合格率">
                  <el-tag type="danger" size="mini">
                    {{ (rangeQualifyRate.qualified+rangeQualifyRate.noQualified)===0? 0: (rangeQualifyRate.noQualified/(rangeQualifyRate.qualified+rangeQualifyRate.noQualified)*100).toFixed(2) }}
                  </el-tag>
                </el-descriptions-item>
              </el-descriptions>
            </div>
            <div>
              <el-date-picker
                v-model="qualifyDateRange"
                size="small"
                type="daterange"
                align="left"
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
          <BarChart :key="key" chart-type="line" :xydata="everyQualifyRate" />
        </div>
      </el-card>
    </div> -->

    <!-- 报告表格 -->
    <div class="bottom_card">
      <el-card shadow="always">
        <!-- 卡片头 -->
        <div slot="header" style="line-height: 40px;display: flex;justify-content: space-between;">
          <div style="display: flex;">
            <div style="font-size: 20px;color: blue;margin-right: 3px;">
              <i class="el-icon-s-help" si />
            </div>
            <span>冷轧卷报告单判定</span>
            <el-button type="primary" :loading="loading" size="small"
              style="height: 33px;width: 80px;margin: 5px 0 0 10px;" @click="getList">{{ loading ? "判定中" : "判定"
              }}</el-button>
          </div>
          <div style="display: flex;">
            <div>
              <el-date-picker v-model="reportDateRange" size="small" type="datetimerange" align="left"
                format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss" :picker-options="pickerOptions"
                range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
                @change="dateRange(reportDateRange)" />
            </div>
            <div>
              <el-input v-model="rollNumber" size="small" placeholder="输入冷轧卷号" :clearable="true">
                <el-button slot="append" style="background-color: #409EFF;color: white;line-height: 15px;" size="small"
                  @click="query(rollNumber)">
                  查询
                </el-button>
              </el-input>
            </div>
          </div>
        </div>
        <!-- 表格 -->
        <div>
          <el-table v-loading="loading" :data="tableData" stripe style="width: 100%" :border="true"
            :cell-style="{ 'text-align': 'center', 'height': '10px' }" :header-cell-style="{ 'text-align': 'center' }">
            <el-table-column prop="batchNum" label="卷号" min-width="21%" />
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
            <el-table-column prop="dimensionalDeviationDetermination" label="尺寸偏差" min-width="20%">
              <template slot-scope="scope">
                <el-tag
                  :type="scope.row.dimensionalDeviationDetermination === 1 ? 'success' : (scope.row.dimensionalDeviationDetermination === 2 ? 'info' : 'danger')"
                  @click="handleView(2, scope.row)">
                  {{ scope.row.dimensionalDeviationDetermination === 1 ? '合格' :
                    (scope.row.dimensionalDeviationDetermination
                      === 2 ? '暂未评定' : '不合格') }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="mechanicalPropertiesDetermination" label="力学性能" min-width="20%">
              <template slot-scope="scope">
                <el-tag
                  :type="scope.row.mechanicalPropertiesDetermination === 1 ? 'success' : (scope.row.mechanicalPropertiesDetermination === 2 ? 'info' : 'danger')"
                  @click="handleView(3, scope.row)">
                  {{ scope.row.mechanicalPropertiesDetermination === 1 ? '合格' :
                    (scope.row.mechanicalPropertiesDetermination
                      === 2 ? '暂未评定' : '不合格') }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="surfaceQualityDetermination" label="表面质量" min-width="20%">
              <template slot-scope="scope">
                <el-tag
                  :type="scope.row.surfaceQualityDetermination === 1 ? 'success' : (scope.row.surfaceQualityDetermination === 2 ? 'info' : 'danger')"
                  @click="handleView(4, scope.row)">
                  {{ scope.row.surfaceQualityDetermination === 1 ? '合格' : (scope.row.surfaceQualityDetermination ===
                    2 ? '暂未评定' : '不合格') }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="appearanceQualityDetermination" label="外观质量" min-width="20%">
              <template slot-scope="scope">
                <el-tag
                  :type="scope.row.appearanceQualityDetermination === 1 ? 'success' : (scope.row.appearanceQualityDetermination === 2 ? 'info' : 'danger')"
                  @click="handleView(5, scope.row)">
                  {{ scope.row.appearanceQualityDetermination === 1 ? '合格' : (scope.row.appearanceQualityDetermination ===
                    2 ? '暂未评定' : '不合格') }}
                </el-tag>
              </template>
            </el-table-column>
            <!-- <el-table-column prop="allDetermination" label="质量判定" min-width="20%">
              <template slot-scope="scope">
                <el-tag
                  :type="scope.row.allDetermination === 1 ? 'success' : (scope.row.allDetermination === 2 ? 'info' : 'danger')"
                >
                  {{ scope.row.allDetermination === 1 ? '合格' : (scope.row.allDetermination === 2 ? '暂未评定' : '不合格') }}
                </el-tag>
              </template>
            </el-table-column> -->
            <!-- <el-table-column prop="remark" label="备注" min-width="20%" /> -->
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
          <el-pagination :current-page="pageNum" :page-sizes="[5, 10, 20, 30]"
            layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
        </div>
      </el-card>
    </div>

    <!-- 弹窗 -->
    <el-dialog ref="dailog" :title="dailogData.planNum" :visible.sync="dialogFormVisible">
      <!-- 板型 -->
      <div v-if="showWtich === 1 || showWtich === 6">
        <el-descriptions title="板型" :column="2" border :size="size"
          :label-style="dailogData.plateTypeDetermination == 0 ? labelStyleNo : labelStyle">
          <el-descriptions-item label="平直度">
            {{ dailogData.lmdpQcColdInspect.singleStraightness === null ?
              '-' : dailogData.lmdpQcColdInspect.singleStraightness }}
          </el-descriptions-item>
          <el-descriptions-item label="平直度标准">
            {{ dailogData.slaveErpPlanColdreductionstrip.flatness === null ?
              '-' : dailogData.slaveErpPlanColdreductionstrip.flatness }}
          </el-descriptions-item>
          <el-descriptions-item label="中凸度">
            {{ dailogData.lmdpQcColdInspect.singleMediumConvexity === null ?
              '-' : dailogData.lmdpQcColdInspect.singleMediumConvexity }}
          </el-descriptions-item>
          <el-descriptions-item label="中凸度标准">
            {{ dailogData.slaveErpPlanColdreductionstrip.convexRate === null ?
              '-' : dailogData.slaveErpPlanColdreductionstrip.convexRate }}
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <!-- 尺寸偏差 -->
      <div v-if="showWtich === 2 || showWtich === 6" class="dialog-item">
        <el-descriptions title="尺寸偏差" :column="2" border :size="size"
          :label-style="dailogData.dimensionalDeviationDetermination == 0 ? labelStyleNo : labelStyle">
          <el-descriptions-item label="宽度">
            {{ dailogData.lmdpQcColdInspect.finishedWidth === null ?
              '-' : dailogData.lmdpQcColdInspect.finishedWidth }}
          </el-descriptions-item>
          <el-descriptions-item label="宽度差标准">
            {{ dailogData.slaveErpPlanColdreductionstrip.warpWidth ===
              null ? '-' : dailogData.slaveErpPlanColdreductionstrip.warpWidth }}
          </el-descriptions-item>
          <el-descriptions-item label="厚度">
            {{ dailogData.lmdpQcColdInspect.finishedThickness === null ?
              '-' : dailogData.lmdpQcColdInspect.finishedThickness }}
          </el-descriptions-item>
          <el-descriptions-item label="厚度差标准">
            {{ dailogData.slaveErpPlanColdreductionstrip.endwiseHeight ===
              null ? '-' : dailogData.slaveErpPlanColdreductionstrip.endwiseHeight }}
          </el-descriptions-item>
          <el-descriptions-item label="成品规格">
            {{ dailogData.lmdpQcColdInspect.finishedThickness === null ?
              '-' : dailogData.lmdpQcColdInspect.finishedThickness }}
            *
            {{ dailogData.lmdpQcColdInspect.finishedWidth === null ?
              '-' : dailogData.lmdpQcColdInspect.finishedWidth }}
          </el-descriptions-item>
          <el-descriptions-item label="成品规格要求">
            {{ dailogData.lmdpQcColdInspect.model === null ?
              '-' : dailogData.lmdpQcColdInspect.model }}
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <!-- 力学性能 -->
      <div v-if="showWtich === 3 || showWtich === 6" class="dialog-item">
        <el-descriptions title="力学性能" :column="3" border :size="size"
          :label-style="dailogData.mechanicalPropertiesDetermination == 0 ? labelStyleNo : labelStyle">
          <el-descriptions-item label="抗拉强度">
            {{ dailogData.lmdpQcColdInspect.singleStrength === null ?
              '-' : dailogData.lmdpQcColdInspect.singleStrength }}
          </el-descriptions-item>
          <el-descriptions-item label="抗拉强度复检">
            {{ dailogData.lmdpQcColdInspect.singleStrengthRe === null ?
              '-' : dailogData.lmdpQcColdInspect.singleStrengthRe }}
          </el-descriptions-item>
          <el-descriptions-item label="抗拉强度标准">
            {{ dailogData.slaveErpPlanColdreductionstrip.tensileStrength ===
              null ? '-' : dailogData.slaveErpPlanColdreductionstrip.tensileStrength }}
          </el-descriptions-item>
          <el-descriptions-item label="延伸率">
            {{ dailogData.lmdpQcColdInspect.singleExtension === null ?
              '-' : dailogData.lmdpQcColdInspect.singleExtension
            }}
          </el-descriptions-item>
          <el-descriptions-item label="延伸率复检">
            {{ dailogData.lmdpQcColdInspect.singleExtensionRe === null ?
              '-' : dailogData.lmdpQcColdInspect.singleExtensionRe
            }}
          </el-descriptions-item>
          <el-descriptions-item label="延伸率标准">
            {{ dailogData.slaveErpPlanColdreductionstrip.elongation ===
              null ? '-' : dailogData.slaveErpPlanColdreductionstrip.elongation }}
          </el-descriptions-item>
          <el-descriptions-item label="弯折性能">
            {{ dailogData.lmdpQcColdInspect.bendingPerformanceRequirements ===
              null ? '-' : Dict.get(dailogData.lmdpQcColdInspect.bendingPerformanceRequirements) }}
          </el-descriptions-item>
          <el-descriptions-item label="弯折性能复检">
            {{ dailogData.lmdpQcColdInspect.bendingPerformanceRe ===
              null ? '-' : Dict.get(dailogData.lmdpQcColdInspect.bendingPerformanceRe) }}
          </el-descriptions-item>
          <el-descriptions-item label="弯折性能表标准">
            {{ dailogData.lmdpQcColdInspect.bendingPerformanceRequirements ===
              null ? '-' : Dict.get(dailogData.lmdpQcColdInspect.bendingPerformanceRequirements) }}
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <!-- 表面质量 -->
      <div v-if="showWtich === 4 || showWtich === 6" class="dialog-item">
        <el-descriptions title="表面质量" :column="1" border :size="size"
          :label-style="dailogData.surfaceQualityDetermination == 0 ? labelStyleNo : labelStyle">
          <el-descriptions-item label="表面质量描述">
            {{ dailogData.lmdpQcColdInspect.surfaceQuality ===
              null ? '-' :
              dailogData.lmdpQcColdInspect.surfaceQualityRemark == null ?
                Dict.get(dailogData.lmdpQcColdInspect.surfaceQuality) : dailogData.lmdpQcColdInspect.surfaceQualityRemark }}
          </el-descriptions-item>
          <el-descriptions-item label="产品外观质量及轧制要求">
            1、产品外观质量：{{ dailogData.slaveErpPlanColdreductionstrip.appearanceReq }},
            2、坯料粗糙度：{{ dailogData.slaveErpPlanColdreductionstrip.roughness }},
            3、卷层端面串层：{{ dailogData.slaveErpPlanColdreductionstrip.stringLayer }},
            4、卷材端面塔形：{{ dailogData.slaveErpPlanColdreductionstrip.dagoba }},
            5、卷端面其他要求：{{ dailogData.slaveErpPlanColdreductionstrip.otherrequirement }}
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <!-- 外观质量 -->
      <div v-if="showWtich === 5 || showWtich === 6" class="dialog-item">
        <el-descriptions title="外观质量" :column="1" border :size="size"
          :label-style="dailogData.appearanceQualityDetermination == 0 ? labelStyleNo : labelStyle">
          <el-descriptions-item label="外观质量描述">
            {{ dailogData.lmdpQcColdInspect.appearanceQuality ===
              null ? '-' :
              dailogData.lmdpQcColdInspect.appearanceQualityRemark == null ?
                Dict.get(dailogData.lmdpQcColdInspect.appearanceQuality) :
                dailogData.lmdpQcColdInspect.appearanceQualityRemark
            }}
          </el-descriptions-item>
          <el-descriptions-item label="产品外观质量及轧制要求">
            1、产品外观质量：{{ dailogData.slaveErpPlanColdreductionstrip.appearanceReq }},
            2、坯料粗糙度：{{ dailogData.slaveErpPlanColdreductionstrip.roughness }},
            3、卷层端面串层：{{ dailogData.slaveErpPlanColdreductionstrip.stringLayer }},
            4、卷材端面塔形：{{ dailogData.slaveErpPlanColdreductionstrip.dagoba }},
            5、卷端面其他要求：{{ dailogData.slaveErpPlanColdreductionstrip.otherrequirement }}
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
import { getList as getPlanAndInspect, getRangeDayInfo, getEveryDayInfo } from '@/api/planAndInspect'
const Dict = new Map()
Dict.set('no_cracks', '90°折弯无裂纹')
Dict.set('cracked', '90°折弯有裂纹')
Dict.set('qualified', '合格')
Dict.set('unqualified', '不合格')
export default {
  batch_num: 'ProductQuality',
  components: {
    BarChart
  },
  data() {
    return {
      Dict,
      labelStyleNo: {
        background: '#fff',
        width: '100px',
        color: 'red'
      },
      labelStyle: {
        background: '#fff',
        width: '100px'
      },
      // 遮罩层
      loading: false,
      rangeQualifyRate: [],
      everyQualifyRate: [],
      key: 0,
      showWtich: 1,
      qualifyDateRange: [this.parseTime(new Date().getTime() - 3600 * 1000 * 24 * 6, '{y}-{m}-{d}'), this.parseTime(new Date().getTime(), '{y}-{m}-{d}')],
      reportDateRange: [],
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
      // 为了初始化描述列表中的数据
      dailogData: {
        batchNum: null,
        planNum: null,
        inspectCreateTime: null,
        plateTypeDetermination: null,
        mechanicalPropertiesDetermination: null,
        dimensionalDeviationDetermination: null,
        surfaceQualityDetermination: null,
        appearanceQualityDetermination: null,
        allDetermination: null,
        remark: null,
        lmdpQcColdInspect: {
          singleStraightness: null,
          singleMediumConvexity: null
        },
        slaveErpPlanColdreductionstrip: {
          flatness: null
        }
      },
      tableData: [],
      dialogFormVisible: false,
      size: 'small ',
      // 查询参数
      queryParams: {
        pageNum: null,
        pageSize: null,
        startDateTime: null,
        endDateTime: null,
        batchNum: null
      },
      productStandard: null
    }
  },
  computed: {},
  watch: {
    pageNum: {
      handler: function () {
        this.queryParams.pageNum = this.pageNum
      },
      deep: true,
      immediate: true
    },
    pageSize: {
      handler: function () {
        this.queryParams.pageSize = this.pageSize
      },
      deep: true,
      immediate: true
    }
  },
  async created() {
    this.getList()
    this.everyDayInfo()
    this.rangeDayInfo()
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
      this.queryParams.batchNum = val
      this.getList()
    },
    /**
     * 下面日期查询
     * @param {Object} val
     */
    dateRange(val) {
      try {
        this.queryParams.startDateTime = val[0]
        this.queryParams.endDateTime = val[1]
      } catch (e) {
        this.queryParams.startDateTime = null
        this.queryParams.endDateTime = null
      }
    },
    /**
     * 上面日期查询
     */
    async dateRangeQuality(val) {
      this.qualifyDateRange[0] = val[0]
      this.qualifyDateRange[1] = val[1]
      await this.everyDayInfo()
      await this.rangeDayInfo()
      this.key += 1
    },
    /**
     * 获取表格数据
     */
    getList() {
      this.loading = true
      getPlanAndInspect(this.queryParams).then((res) => {
        console.log('res: ', res)
        this.tableData = res.data.records
        this.total = res.data.total
        this.loading = false
      })
    },
    /**
     * 获取一段时间内的合格率
     */
    rangeDayInfo() {
      const params = {
        startTime: this.qualifyDateRange[0],
        endTime: this.qualifyDateRange[1]
      }
      getRangeDayInfo(params).then((res) => {
        console.log('范围内合格率: ', res)
        if (res.data[0] === null) {
          this.rangeQualifyRate = {
            qualified: 0,
            noQualified: 0,
            tentative: 0
          }
          return
        }
        this.rangeQualifyRate = res.data[0]
      })
    },
    /**
     * 获取一段时间内每一天的合格率
     */
    everyDayInfo() {
      const params = {
        startTime: this.qualifyDateRange[0],
        endTime: this.qualifyDateRange[1]
      }
      getEveryDayInfo(params).then((res) => {
        this.everyQualifyRate = res.data
        console.log('每一天的合格率: ', res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/productQuality/productQuality.scss';
</style>
