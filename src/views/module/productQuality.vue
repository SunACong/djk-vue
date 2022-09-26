<template>
  <div>
    <!-- 合格率图表 -->
    <div class="top_card">
      <el-card shadow="always">
        <div slot="header" style="line-height: 40px;display: flex;justify-content: space-between;">
          <div style="display: flex;">
            <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
            <span style="line-height: 40px;">产品合格判定汇总</span>
          </div>
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
        </div>
        <BarChart />
      </el-card>
    </div>

    <!-- 报告表格 -->
    <div class="bottom_card">
      <el-card shadow="always">
        <!-- 卡片头 -->
        <div slot="header" style="line-height: 40px;display: flex;justify-content: space-between;">
          <div style="display: flex;">
            <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
            <span style="">冷轧卷报告单判定</span>
          </div>
          <div style="display: flex;">
            <div>
              <el-date-picker
                v-model="reportDateRange"
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
            <div>
              <el-input v-model="rollNumber" size="small" placeholder="输入冷轧卷号">
                <el-button slot="append" style="background-color: #409EFF;color: white;line-height: 15px;" size="small">查询</el-button>
              </el-input>
            </div>
          </div>
        </div>
        <!-- 表格 -->
        <div>
          <el-table :data="tableData" stripe style="width: 100%" :border="true" :cell-style="{'text-align':'center','height':'10px'}" :header-cell-style="{'text-align':'center'}">
            <el-table-column prop="report_time" label="日期" min-width="20%" />
            <el-table-column prop="batch_num" label="卷号" min-width="20%" />
            <el-table-column prop="consumer" label="客户" min-width="20%" />
            <el-table-column prop="plate_type" label="板型" min-width="20%">
              <template slot-scope="scope">
                <el-button
                  size="medium"
                  type="text"
                >{{ scope.row.plate_type?'合格':'不合格' }}</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="dimensional_deviation" label="尺寸偏差" min-width="20%">
              <template slot-scope="scope">
                <el-button
                  size="medium"
                  type="text"
                >{{ scope.row.dimensional_deviation?'合格':'不合格' }}</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="mechanical_property" label="力学性能" min-width="20%">
              <template slot-scope="scope">
                <el-button
                  size="medium"
                  type="text"
                >{{ scope.row.mechanical_property?'合格':'不合格' }}</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="surface_quality" label="表面质量" min-width="20%">
              <template slot-scope="scope">
                <el-button
                  size="medium"
                  type="text"
                >{{ scope.row.surface_quality?'合格':'不合格' }}</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="quality_judgment" label="外观质量" min-width="20%">
              <template slot-scope="scope">
                <el-button
                  size="medium"
                  type="text"
                >{{ scope.row.quality_judgment?'合格':'不合格' }}</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="quality_judgment" label="质量判定" min-width="20%">
              <template>
                <el-button
                  size="medium"
                  type="text"
                >合格</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="consumer" label="备注" min-width="20%">合格A</el-table-column>
            <el-table-column label="操作" min-width="20%">
              <template slot-scope="scope">
                <el-button
                  size="medium"
                  type="text"
                  @click="handleView(scope.row)"
                >查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- 分页插件 -->
        <div style="margin: 30px 20px 20px;float: right;font-size: 20px;">
          <el-pagination
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 50]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </el-card>
    </div>

    <!-- 弹窗 -->
    <el-dialog title="" :visible.sync="dialogFormVisible">
      <!-- 版型 -->
      <div>
        <el-descriptions class="margin-top" title="版型" :column="2" border>
          <el-descriptions-item>
            <template slot="label">
              平直度
            </template>
            kooriookami
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              中凸度
            </template>
            18100000000
          </el-descriptions-item>
        </el-descriptions>
      </div>

      <!-- 力学性能 -->
      <div style="margin-top: 20px;">
        <el-descriptions class="margin-top" title="力学性能" :column="2" border>
          <el-descriptions-item>
            <template slot="label">
              抗拉强度
            </template>
            kooriookami
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              延伸率
            </template>
            18100000000
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              弯折性能
            </template>
            18100000000
          </el-descriptions-item>
        </el-descriptions>
      </div>

      <!-- 尺寸偏差 -->
      <div style="margin-top: 20px;">
        <el-descriptions class="margin-top" title="尺寸偏差" :column="2" border>
          <el-descriptions-item>
            <template slot="label">
              宽度
            </template>
            kooriookami
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              厚度
            </template>
            18100000000
          </el-descriptions-item>
        </el-descriptions>
      </div>

      <!-- 表面质量 -->
      <div style="margin-top: 20px;">
        <el-descriptions class="margin-top" title="表面质量" :column="2" border>
          <el-descriptions-item>
            <template slot="label">
              划痕
            </template>
            kooriookami
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              色差
            </template>
            18100000000
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              条纹
            </template>
            18100000000
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              油斑
            </template>
            18100000000
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              腐蚀
            </template>
            18100000000
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              黑线
            </template>
            18100000000
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              辊印
            </template>
            18100000000
          </el-descriptions-item>
        </el-descriptions>
      </div>

      <!-- 外观质量 -->
      <div style="margin-top: 20px;">
        <el-descriptions class="margin-top" title="外观质量" :column="2" border>
          <el-descriptions-item>
            <template slot="label">
              串层
            </template>
            kooriookami
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              塔形
            </template>
            18100000000
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              卷径
            </template>
            18100000000
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              偏移量
            </template>
            18100000000
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              卷重
            </template>
            18100000000
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              管芯
            </template>
            18100000000
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import BarChart from '@/views/dashboard/BarChart'
import { getProductQualityList } from '@/api/productQuality'
export default {
  batch_num: 'ProductQuality',
  components: { BarChart },
  data() {
    return {
      qualifyDateRange: '',
      reportDateRange: '',
      rollNumber: '',
      currentPage: 1,
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
        report_time: '2022/09/20', // 日期
        batch_num: 'ASDF54635',		// 卷号
        consumer: '2022.04.16',		// 客户
        plate_type: true,					// 版型
        dimensional_deviation: true, // 尺寸偏差
        mechanical_property: true,	// 力学性能
        surface_quality: true,			// 表面质量
        quality_judgment: true			// 外观质量
      }],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {},
      formLabelWidth: '120px'
    }
  },
  watch: {},
  created() {
    console.log('hahaha')
    getProductQualityList().then((res) => {
      console.log('res: ', res)
    })
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    handleView(row) {
      console.log('row: ', row)
      this.dialogFormVisible = true
    }
  }
}
</script>

<style scoped="sass">
	.top_card{
		margin: 1% 1%;
	}
	.bottom_card{
		margin: 1% 1%;
	}

	/deep/ .el-card__header {
		padding: 10px 20px;
	}
</style>

