<template>
  <div>
    <!-- 合格率图表 -->
    <div class="top_card">
      <el-card shadow="always">
        <div slot="header" style="line-height: 40px;display: flex;justify-content: space-between;">
          <div style="display: flex;">
            <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
            <span style="line-height: 20px;">产品合格判定汇总</span>
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
            <el-table-column prop="date" label="序号" min-width="20%" />
            <el-table-column prop="name" label="样号" min-width="20%" />
            <el-table-column prop="address" label="判定日期" min-width="20%" />
            <el-table-column label="判定结果" min-width="20%">
              <template>
                <el-button
                  size="medium"
                  type="text"
                >合格</el-button>
              </template>
            </el-table-column>
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
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import BarChart from '@/views/dashboard/BarChart'
export default {
  name: 'ProductQuality',
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
        date: '001',
        name: 'ASDF54635',
        address: '2022.04.16',
        ssc: 'sadasda'
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

