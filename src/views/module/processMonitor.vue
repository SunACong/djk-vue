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
              <div style="flex: 8">
                <el-progress class="el_progress" stroke-width="15" :percentage="50"></el-progress>
              </div>
              <span style="flex: 3;line-height: 48px">18天23小时15分</span>
            </div>
            <div style="display: flex;">
              <span style="flex: 2;line-height: 48px">订单编号002</span>
              <div style="flex: 8">
                <el-progress class="el_progress" stroke-width="15" :percentage="60"></el-progress>
              </div>
              <span style="flex: 3;line-height: 48px">18天23小时15分</span>
            </div>
            <div style="display: flex;">
              <span style="flex: 2;line-height: 48px">订单编号003</span>
              <div style="flex: 8">
                <el-progress class="el_progress" stroke-width="15" :percentage="70"></el-progress>
              </div>
              <span style="flex: 3;line-height: 48px">18天23小时15分</span>
            </div>
            <div style="display: flex;">
              <span style="flex: 2;line-height: 48px">订单编号004</span>
              <div style="flex: 8">
                <el-progress class="el_progress" stroke-width="15" :percentage="80"></el-progress>
              </div>
              <span style="flex: 3;line-height: 48px">18天23小时15分</span>
            </div>
            <div style="display: flex;">
              <span style="flex: 2;line-height: 48px">订单编号005</span>
              <div style="flex: 8">
                <el-progress class="el_progress" stroke-width="15" :percentage="90"></el-progress>
              </div>
              <span style="flex: 3;line-height: 48px">18天23小时15分</span>
            </div>
            <div style="display: flex;">
              <span style="flex: 2;line-height: 48px">订单编号006</span>
              <div style="flex: 8">
                <el-progress class="el_progress" stroke-width="15" :percentage="99"></el-progress>
              </div>
              <span style="flex: 3;line-height: 48px">18天23小时15分</span>
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
              stripe
              style="width: 100%">
              <el-table-column
                prop="num"
                label="序号"
                width="60">
              </el-table-column>
              <el-table-column
                prop="product_num"
                label="产品编号"
                width="100">
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
                label="备注">
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
    </div>
  </div>

</template>

<script>
import CustomStep from '@/views/dashboard/CustomStep'
export default {
  name: 'ProcessMonitor',
  components: { CustomStep },
  data() {
    return {
      active: 13,
      value1: '',
      value2: '',
      stepData: [
        { title: '1', description: '铸扎生产计划确定' },
        { title: '2', description: '熔炉生产' },
        { title: '3', description: '保温' },
        { title: '4', description: '铸扎生产' },
        { title: '5', description: '铸扎卷质检' },
        { title: '6', description: '铸扎卷入库' },
        { title: '7', description: '冷轧生产计划确定' },
        { title: '8', description: '冷轧生产' },
        { title: '9', description: '第1道次轧制' },
        { title: '10', description: '第2道次轧制' },
        { title: '11', description: '退火' },
        { title: ' ', description: ' ' },
        { title: '12', description: '第3道次轧制' },
        { title: '13', description: '第1次退火' },
        { title: '14', description: '第4道次轧制' },
        { title: '15', description: '第2次退火' },
        { title: '16', description: '第5道次轧制' },
        { title: '17', description: '第6道次轧制' },
        { title: '18', description: '冷轧卷成品质检' },
        { title: '19', description: '冷轧卷成品入库' },
        { title: '20', description: '重卷中切' },
        { title: '21', description: '包装检验' }
      ],
      tableData: [{
        num: '001',
        product_num: 'A12034',
        now_process: '冷轧生产',
        hang_time: '2022.04.18',
        note: '无'
      }, {
        num: '002',
        product_num: 'A12034',
        now_process: '第6道次轧制',
        hang_time: '2022.04.18',
        note: '无'
      }, {
        num: '003',
        product_num: 'A12034',
        now_process: '冷轧生产',
        hang_time: '2022.04.18',
        note: '无'
      }, {
        num: '004',
        product_num: 'A12034',
        now_process: '第6道次轧制',
        hang_time: '2022.04.18',
        note: '无'
      }]
    }
  },
  watch: {},
  methods: {
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
