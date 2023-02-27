<template>
  <div>
    <div style="font-size: 15px;color: black;margin-right: 3px;">
      模块功能说明：这是计算交期风险预判功能模块，该模块主要计算交期风险，判断剩余时间，在下方点击刷新，即可计算剩余时间。
    </div>
    <div class="top_card">
      <el-card shadow="always">
        <div slot="header" style="line-height: 40px;display: flex;justify-content: space-between;">
          <div style="display: flex;">
            <div style="font-size: 20px;color: blue;margin-right: 10px;"><i class="el-icon-s-help" />
            </div>
            <span style="line-height: 40px;display: flex">交期风险预判</span>
          </div>
        </div>
        <el-button style="background-color: #409EFF;color: white;line-height: 15px;" size="small" @click="query">刷新</el-button>
        <div>
          <predict-bar-chart :period-data="predictData" />
        </div>
        <div>

          <el-table :data="fengxianData" border>
            <el-table-column fixed prop="orderNumber" label="订单号" />
            <el-table-column prop="progress" label="进度">
              <!--            <el-progress :percentage="80" ></el-progress>-->
            </el-table-column>
            <el-table-column prop="leftTime" label="剩余时间" />
            <el-table-column fixed="right" label="操作">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="fengxianClick(scope.row)">查看</el-button>
              <!--                  <el-button type="text" size="small">编辑</el-button>-->
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>
    <!--    交期风险信息显示查看对话框-->
    <el-dialog title="提示" :visible.sync="fengxianVisible" width="30%">
      <span>交期风险信息显示</span>
      <el-form label-width="80px" label-position="left" :model="fengxianAlign" :disabled="true">
        <el-form-item label="订单号">
          <el-input v-model="fengxianAlign.orderNumber" />
        </el-form-item>
        <el-form-item label="进度">
          <el-input v-model="fengxianAlign.progress" />
        </el-form-item>
        <el-form-item label="剩余时间">
          <el-input v-model="fengxianAlign.leftTime" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="fengxianVisible = false">取 消</el-button>
        <el-button type="primary" @click="fengxianVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getPredict } from '@/api/predict'
import PredictBarChart from '@/views/dashboard/PredictBarChart'

export default {
  name: 'PredictIndex',
  components: { PredictBarChart },
  data() {
    return {
      value: '',
      predictData: [110, 0, 10, 0, 0],
      fengxianVisible: false,
      fengxianAlign: {},
      fengxianData: [{
        orderNumber: '001',
        progress: '铸轧生产 ',
        leftTime: '18天7小时45分'
      }, {
        orderNumber: '002',
        progress: ' 保温',
        leftTime: '22天2小时45分'
      }, {
        orderNumber: '003',
        progress: ' 包装',
        leftTime: '8天5小时45分'
      }, {
        orderNumber: '004',
        progress: ' 冷轧',
        leftTime: '2天12小时45分'
      }]
    }
  },
  created() {

  },
  methods: {

    // 风险流程操作
    fengxianClick(row) {
      console.log(row)
      this.fengxianVisible = true
      this.fengxianAlign = row
    },
    query() {
      getPredict().then(response => {
        console.log('这是交期风险数据 ', response)
        this.predictData = [
          response.data[0].orderNumber,
          response.data[1].orderNumber,
          response.data[2].orderNumber,
          response.data[3].orderNumber
        ]
        this.fengxianData = response.data
      })
    }
  }
}
</script>

