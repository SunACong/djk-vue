<template>
<div>
  <div class="top_card" >
    <el-card shadow="always" style="height: 500px">
      <div slot="header" style="line-height: 40px;display: flex;justify-content: space-between;">
        <div style="display: flex;">
          <div style="font-size: 20px;color: blue;margin-right: 10px;"><i class="el-icon-s-help" />
          </div>
          <span style="line-height: 40px;display: flex">交期风险预判</span>
        </div>
<!--        <div>-->
<!--          <el-date-picker v-model="value" type="daterange" start-placeholder="开始日期"-->
<!--                          end-placeholder="结束日期" :default-time="['00:00:00', '23:59:59']">-->
<!--          </el-date-picker>-->
<!--        </div>-->
      </div>
      <el-button  style="background-color: #409EFF;color: white;line-height: 15px;" size="small" @click="query">刷新</el-button>
      <div>
        <el-table :data="fengxianData" border >
          <el-table-column fixed prop="orderNumber" label="订单号" >
          </el-table-column>
          <el-table-column prop="progress" label="进度" >
<!--            <el-progress :percentage="80" ></el-progress>-->
          </el-table-column>
          <el-table-column prop="leftTime" label="剩余时间" >
          </el-table-column>
          <el-table-column fixed="right" label="操作" >
            <template slot-scope="scope">
              <el-button @click="fengxianClick(scope.row)" type="text" size="small">查看</el-button>
              <!--                  <el-button type="text" size="small">编辑</el-button>-->
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
  <!--    交期风险信息显示查看对话框-->
  <el-dialog title="提示" :visible.sync="fengxianVisible" width="30%" >
    <span>交期风险信息显示</span>
    <el-form label-width="80px" label-position="left" :model="fengxianAlign" :disabled="true">
      <el-form-item label="订单号">
        <el-input v-model="fengxianAlign.orderNumber"></el-input>
      </el-form-item>
      <el-form-item label="进度">
        <el-input v-model="fengxianAlign.progress"></el-input>
      </el-form-item>
      <el-form-item label="剩余时间">
        <el-input v-model="fengxianAlign.leftTime"></el-input>
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

export default {
  name: "PredictIndex",
  data() {
    return {
      value: '',
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
      }],
    };
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
    query(){
      getPredict().then(response =>{
        console.log("这是response ",response)
        this.fengxianData = response.data;

      })
    }
  }
}
</script>

