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
            <el-table
              :data="fengxianData"
              border
              style="width: 100%">
              <el-table-column
                fixed
                prop="order_num"
                label="订单号"
                width="150">
              </el-table-column >
              <el-table-column prop="progress" label="进度" width="520" >
                <el-progress :percentage="80"  stroke-width="1000px"></el-progress>
              </el-table-column>
              <el-table-column
                prop="left_time"
                label="剩余时间"
                width="200">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                  <el-button @click="fengxianClick(scope.row)" type="text" size="small">查看</el-button>
<!--                  <el-button type="text" size="small">编辑</el-button>-->
                </template>
              </el-table-column>
            </el-table>
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
                width="100">
              </el-table-column>
              <el-table-column
                prop="hang_time"
                label="停滞时间"
                width="120">
              </el-table-column>
              <el-table-column
                prop="note"
                label="备注"
                width="140">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
<!--                  <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
                  <el-button type="text" @click="yichangClick(scope.row)">查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
    </div>
<!--    交期风险信息显示查看对话框-->
    <el-dialog
      title="提示"
      :visible.sync="fengxianVisible"
      width="30%"
      :before-close="handleClose">
      <span>交期风险信息显示</span>
      <el-form label-width="80px" :model="fengxianAlign" :disabled="true">
        <el-form-item label="订单号" >
          <el-input v-model="fengxianAlign.order_num"></el-input>
        </el-form-item>
        <el-form-item label="剩余时间">
          <el-input v-model="fengxianAlign.left_time"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="fengxianVisible = false">取 消</el-button>
        <el-button type="primary" @click="fengxianVisible = false">确 定</el-button>
      </span>
    </el-dialog>
<!--    异常流程信息显示查看对话框-->
    <el-dialog
      title="提示"
      :visible.sync="yichangVisible"
      width="30%"
      :before-close="handleClose">
      <span>异常流程信息显示</span>
      <el-form label-width="80px" :model="yichangAlign" :disabled="true">
        <el-form-item label="序号" >
          <el-input v-model="yichangAlign.num"></el-input>
        </el-form-item>
        <el-form-item label="产品编号">
          <el-input v-model="yichangAlign.product_num"></el-input>
        </el-form-item>
        <el-form-item label="当前流程" label-width="150px">
          <el-input v-model="yichangAlign.now_process"></el-input>
        </el-form-item>
        <el-form-item label="停滞时间">
          <el-input v-model="yichangAlign.hang_time"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="yichangAlign.note"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="yichangVisible = false">取 消</el-button>
        <el-button type="primary" @click="yichangVisible = false">确 定</el-button>
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
      active: 12,
      value1: '',
      value2: '',
      yichangVisible: false,
      fengxianVisible: false,
      fengxian: false,
      stepData: [
        { title: '步骤1铸扎生产计划确定', description: '生产计划编号：A123456，创建人：张三，订单评审编号 ：A1111111，合金状态：良好。' },
        { title: '步骤2熔炉生产', description: '生产线号：A20220402生产地点：丹江口，熔炉状态：正常，牌号：B123456' },
        { title: '步骤3保温', description: '保温时间：2022.04.02，牌号：A123456，取样时间：2022.05012，取样温度：88度，保温地点：丹江口， 精炼间隔时间：10小时，' },
        { title: '步骤4铸扎生产', description: '生产时间：2022.04.02生产地点：丹江口，熔炉状态：正常，铸轧卷号：A123456,除气箱参数设定值#炉气温度℃:500度，除气箱参数设定值#铝液温度℃：700度' },
        { title: '步骤5铸扎卷质检', description: '检查时间：2022.04.02检察地点：丹江口，检查人：李四， 轧辊编号：A144777' },
        { title: '步骤6铸扎卷入库', description: '入库时间：2022.04.02入库地点：丹江口，入库人员：李四，轧辊编号：A144777' },
        { title: '步骤7冷轧生产计划确定', description: '确定时间：2022.04.02生产地点：丹江口，，轧辊编号：A144777' },
        { title: '步骤8冷轧生产', description: '生产时间：2022.04.02生产地点：丹江口' },
        { title: '步骤9第1道次轧制', description: '轧制时间：2022.04.02轧制地点：丹江口，熔炉状态：正常，，轧辊编号：A144777' },
        { title: '步骤10第2道次轧制', description: '轧制时间：2022.04.02轧制地点：丹江口，熔炉状态：正常，，轧辊编号：A144777' },
        { title: '步骤11退火', description: '退火时间：2022.04.02熔炉状态：正常' },
        { title: '步骤11退火', description: ' 退火时间：2022.04.02熔炉状态：正常，冷轧卷号：A123456，退火开始时间：2022.04.02，退火结束时间：2022.05.02，炉气温度(℃)Ⅰ区：800度' },
        { title: '步骤12第3道次轧制', description: '轧制时间：2022.04.02轧制地点：丹江口，熔炉状态：正常' },
        { title: '步骤13第1次退火', description: '退火时间：2022.04.02退火地点：丹江口，熔炉状态：正常，退火开始时间：2022.04.02，退火结束时间：2022.05.02，炉气温度(℃)Ⅰ区：800度' },
        { title: '步骤14第4道次轧制', description: '轧制时间：2022.04.02轧制地点：丹江口，熔炉状态：正常' },
        { title: '步骤15第2次退火', description: '退火时间：2022.04.02退火地点：丹江口，熔炉状态：正常，退火开始时间：2022.04.02，退火结束时间：2022.05.02，炉气温度(℃)Ⅰ区：800度' },
        { title: '步骤16第5道次轧制', description: '轧制时间：2022.04.02轧制地点：丹江口，熔炉状态：正常' },
        { title: '步骤17第6道次轧制', description: '轧制时间：2022.04.02轧制地点：丹江口，熔炉状态：正常)' },
        { title: '步骤18冷轧卷成品质检', description: '质检时间：2022.04.02质检地点：丹江口，质检人员：李四' },
        { title: '步骤19冷轧卷成品入库', description: '入库时间：2022.04.02入库地点：丹江口，入库人员：李四' },
        { title: '步骤20重卷中切', description: '时间：2022.04.02地点：丹江口，熔炉状态：正常' },
        { title: '步骤21包装检验', description: '检验时间：2022.04.02检验地点：丹江口，冷轧卷号：A1234567，合格证：有/无，产品证书：编号XXXXXXX,包装日期:2022.05.02' }
      ],
      yichangAlign: {},
      fengxianAlign: {},
      tableData: [{
        num: '001',
        product_num: 'A12034',
        now_process: '生产',
        hang_time: '2022.04.15',
        note: '温度过高'

      }, {
        num: '002',
        product_num: 'ACC034',
        now_process: '轧制',
        hang_time: '2022.06.55',
        note: '压力过大'
      }, {
        num: '003',
        product_num: 'BB2034',
        now_process: '质检',
        hang_time: '2022.08.15',
        note: '入库质检不过关'
      }, {
        num: '004',
        product_num: 'ABC034',
        now_process: '退火 ',
        hang_time: '2022.10.15',
        note: '退火过程失败'
      }],
      fengxianData: [{
        order_num: '001',
        progress: ' ',
        left_time: '18天7小时45分'
      }, {
        order_num: '002',
        progress: ' ',
        left_time: '22天2小时45分'
      }, {
        order_num: '003',
        progress: ' ',
        left_time: '8天5小时45分'
      }, {
        order_num: '004',
        progress: ' ',
        left_time: '2天12小时45分'
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
    // 风险流程操作
    fengxianClick(row) {
      console.log(row)
      this.fengxianVisible = true
      this.fengxianAlign = row
    },
    // 异常流程操作
    yichangClick(row) {
      console.log(row)
      this.yichangVisible = true
      this.yichangAlign = row
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
