<template>
  <div class="app-container">
    <div style="display: inline-flex;">
      <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help"/></div>
      <span style="line-height: 20px; width:200px">生产流程监视</span>
      <el-input v-model="input" style="line-height: 10px; width:200px" size="mini" placeholder="请输入你要查询的生产流程"></el-input>
      <el-row>
        <el-button type="primary" size="mini">查询</el-button>
      </el-row>
    </div>
    <div align="center">
      <span style="line-height: 1px;" size="mini">当前生产流程： </span>
      <el-button type="primary" size="mini">保温</el-button>
    </div>
    <div>
      <CustomStep :steps-data="stepData" :active="active"></CustomStep>
    </div>
    <div style="display: flex">
      <!-- 交期风险预判图表 -->
      <div class="top_card">
        <el-card shadow="always" style="height: 500px">
          <div slot="header" style="line-height: 40px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help"/></div>
              <span style="line-height: 40px;">交期风险预判</span>
            </div>
            <div>
              <el-date-picker
                v-model="value1"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['00:00:00', '23:59:59']">
              </el-date-picker>
            </div>
          </div>
          <div>
            <div style="display: flex;">
              <span style="flex: 2;line-height: 48px">订单编号001</span>
              <div style="flex: 5">
                <el-progress class="el_progress" :stroke-width="15" :percentage="50"></el-progress>
              </div>
              <span style="flex: 3;line-height: 48px">18天23小时15分</span>
              <div>
                <el-button type="text" @click="fengxian = true">查看</el-button>
              </div>
            </div>
            <div style="display: flex;">
              <span style="flex: 2;line-height: 48px">订单编号001</span>
              <div style="flex: 5">
                <el-progress class="el_progress" :stroke-width="15" :percentage="50"></el-progress>
              </div>
              <span style="flex: 3;line-height: 48px">18天23小时15分</span>
              <div>
                <el-button type="text" @click="fengxian = true">查看</el-button>
              </div>
            </div>
            <div style="display: flex;">
              <span style="flex: 2;line-height: 48px">订单编号001</span>
              <div style="flex: 5">
                <el-progress class="el_progress" :stroke-width="15" :percentage="50"></el-progress>
              </div>
              <span style="flex: 3;line-height: 48px">18天23小时15分</span>
              <div>
                <el-button type="text" @click="fengxian = true">查看</el-button>
              </div>
            </div>
            <div style="display: flex;">
              <span style="flex: 2;line-height: 48px">订单编号001</span>
              <div style="flex: 5">
                <el-progress class="el_progress" :stroke-width="15" :percentage="50"></el-progress>
              </div>
              <span style="flex: 3;line-height: 48px">18天23小时15分</span>
              <div>
                <el-button type="text" @click="fengxian = true">查看</el-button>
              </div>
            </div>
            <div style="display: flex;">
              <span style="flex: 2;line-height: 48px">订单编号001</span>
              <div style="flex: 5">
                <el-progress class="el_progress" :stroke-width="15" :percentage="50"></el-progress>
              </div>
              <span style="flex: 3;line-height: 48px">18天23小时15分</span>
              <div>
                <el-button type="text" @click="fengxian = true">查看</el-button>
              </div>
            </div>
          </div>
        </el-card>
      </div>
<!--      异常流程显示图表 -->
      <div class="top_card">
        <el-card shadow="always" style="height: 500px">
          <div slot="header" style="line-height: 40px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 40px;">异常流程显示</span>
            </div>
            <div>
              <el-date-picker
                v-model="value2"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['00:00:00', '23:59:59']">
              </el-date-picker>
            </div>
          </div>
          <div>
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                fixed
                prop="num"
                label="序号"
                width="100">
              </el-table-column>
              <el-table-column
                prop="product_num"
                label="产品编号"
                width="120">
              </el-table-column>
              <el-table-column
                prop="now_process"
                label="当前流程"
                width="120">
              </el-table-column>
              <el-table-column
                prop="hang_time"
                label="停滞时间"
                width="120">
              </el-table-column>
              <el-table-column
                prop="note"
                label="备注"
                width="100">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
<!--                  <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
                  <el-button type="text" @click="handleClick(scope.row)">查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="fengxian"
      width="30%"
      :before-close="handleClose">
      <span>交期风险信息显示</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="fengxian = false">取 消</el-button>
        <el-button type="primary" @click="fengxian = false">确 定</el-button>
      </span>
      <el-form label-width="80px" :model="formLabelAlign" :disabled="true">
        <el-form-item label="订单编号" >
          <el-input v-model="formLabelAlign.num"></el-input>
        </el-form-item>
        <el-form-item label="剩余时间" >
          <el-input v-model="formLabelAlign.hang_time"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose1">
      <span>异常流程信息显示</span>
      <el-form label-width="80px" :model="formLabelAlign" :disabled="true">
        <el-form-item label="序号" >
          <el-input v-model="formLabelAlign.num"></el-input>
        </el-form-item>
        <el-form-item label="产品编号">
          <el-input v-model="formLabelAlign.product_num"></el-input>
        </el-form-item>
        <el-form-item label="当前流程">
          <el-input v-model="formLabelAlign.now_process"></el-input>
        </el-form-item>
        <el-form-item label="停滞时间">
          <el-input v-model="formLabelAlign.hang_time"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="formLabelAlign.note"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import CustomStep from '@/views/dashboard/CustomStep'
export default {
  name: 'ProcessMonitor',
  components: { CustomStep },
  data() {
    return {
      input: '',
      active: 9,
      value1: '',
      value2: '',
      dialogVisible: false,
      fengxian: false,
      stepData: [
        { title: '1铸扎生产计划确定', description: '生产时间：2022.04.02生产地点：遵义' },
        { title: '2熔炉生产', description: '生产时间：2022.04.02生产地点：遵义熔炉状态：正常' },
        { title: '3保温', description: '保温时间：2022.04.02保温地点：遵义' },
        { title: '4铸扎生产', description: '生产时间：2022.04.02生产地点：遵义熔炉状态：正常' },
        { title: '5铸扎卷质检', description: '检查时间：2022.04.02检察地点：遵义检查人：李四' },
        { title: '6铸扎卷入库', description: '入库时间：2022.04.02入库地点：遵义入库人员：李四' },
        { title: '7冷轧生产计划确定', description: '确定时间：2022.04.02生产地点：遵义' },
        { title: '8冷轧生产', description: '生产时间：2022.04.02生产地点：遵义' },
        { title: '9第1道次轧制', description: '轧制时间：2022.04.02轧制地点：遵义熔炉状态：正常' },
        { title: '10第2道次轧制', description: '轧制时间：2022.04.02轧制地点：遵义熔炉状态：正常' },
        { title: '11退火', description: '退火时间：2022.04.02熔炉状态：正常' },
        { title: ' ', description: ' ' },
        { title: '12第3道次轧制', description: '轧制时间：2022.04.02轧制地点：遵义熔炉状态：正常' },
        { title: '13第1次退火', description: '退火时间：2022.04.02退火地点：遵义熔炉状态：正常' },
        { title: '14第4道次轧制', description: '轧制时间：2022.04.02轧制地点：遵义熔炉状态：正常' },
        { title: '15第2次退火', description: '退火时间：2022.04.02退火地点：遵义熔炉状态：正常' },
        { title: '16第5道次轧制', description: '轧制时间：2022.04.02轧制地点：遵义熔炉状态：正常' },
        { title: '17第6道次轧制', description: '轧制时间：2022.04.02轧制地点：遵义熔炉状态：正常)' },
        { title: '18冷轧卷成品质检', description: '质检时间：2022.04.02质检地点：遵义质检人员：李四' },
        { title: '19冷轧卷成品入库', description: '入库时间：2022.04.02入库地点：遵义入库人员：李四' },
        { title: '20重卷中切', description: '时间：2022.04.02地点：遵义熔炉状态：正常' },
        { title: '21包装检验', description: '检验时间：2022.04.02检验地点：遵义熔炉状态：正常' }
      ],
      formLabelAlign: {},
      tableData: [{
        num: '001',
        product_num: 'A12034',
        now_process: '生产',
        hang_time: '2022.04.15',
        note: '上海市',
        zip: 200333
      }, {
        num: '002',
        product_num: 'A12034',
        now_process: '轧制',
        hang_time: '2022.04.15',
        note: '上海市',
        zip: 200333
      }, {
        num: '003',
        product_num: 'A12034',
        now_process: '生产',
        hang_time: '2022.04.15',
        note: '上海市',
        zip: 200333
      }, {
        num: '004',
        product_num: 'A12034',
        now_process: '生产',
        hang_time: '2022.04.15',
        note: '上海市',
        zip: 200333
      }]
    }
  },
  watch: {},
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    handleClose1(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    // 异常流程操作
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleClick(row) {
      console.log(row)
      this.dialogVisible = true
      this.formLabelAlign = row
    },
    next() {
      if (this.active++ > 2) this.active = 0
    },
    format(percentage) {
      return percentage === 100 ? '满' : `${percentage}%`
    }
  }
}
</script>
<style scoped="sass">
.top_card{
  margin: 1% 1%;
  flex: 1;
}
.bottom_card{
  margin: 1% 1%;
}

/deep/ .el-card__header {
  padding: 10px 20px;
}
 .el_progress{
   margin: 15px 0;
 }
</style>
