<template>
  <div>
    <div style="font-size: 15px;color: black;margin-right: 3px;">
      模块功能说明：这是查询异常流程的功能模块，该模块主要显示异常流程，在下方点击刷新，即可查看异常流程。
    </div>
    <div class="top_card">
      <el-card shadow="always">
        <div slot="header" style="line-height: 40px;display: flex;justify-content: space-between;">
          <div style="display: flex;">
            <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si />
            </div>
            <span style="line-height: 40px;">异常流程显示</span>

          </div>
          <!--          <div>-->
          <!--            <el-date-picker v-model="value" type="daterange" start-placeholder="开始日期"-->
          <!--                            end-placeholder="结束日期" :default-time="['00:00:00', '23:59:59']">-->
          <!--            </el-date-picker>-->
          <!--          </div>-->
        </div>
        <el-button style="background-color: #409EFF;color: white;line-height: 15px;" size="small" @click="query">刷新</el-button>
        <process-bar-chart :period-data="processData" />
        <div>
          <el-table :data="yichangData" border>
            <el-table-column fixed prop="number" label="序号" />
            <el-table-column prop="productNum" label="产品编号" />
            <el-table-column prop="nowProduce" label="当前流程" />
            <el-table-column prop="stopTime" label="停滞时间" />
            <el-table-column prop="note" label="备注" />
            <el-table-column fixed="right" label="操作">
              <template slot-scope="scope">
                <!--                                  <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
                <el-button type="text" @click="yichangClick(scope.row)">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>

    <!--    异常流程信息显示查看对话框-->
    <el-dialog title="提示" :visible.sync="yichangVisible" width="30%">
      <span>异常流程信息显示</span>
      <el-form label-width="80px" label-position="left" :model="yichangAlign" :disabled="true">
        <el-form-item label="序号">
          <el-input v-model="yichangAlign.number" />
        </el-form-item>
        <el-form-item label="产品编号">
          <el-input v-model="yichangAlign.productNum" />
        </el-form-item>
        <el-form-item label="当前流程">
          <el-input v-model="yichangAlign.nowProduce" />
        </el-form-item>
        <el-form-item label="停滞时间">
          <el-input v-model="yichangAlign.stopTime" />
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="yichangAlign.note" />
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
import { getProcess } from '@/api/process'
import ProcessBarChart from '@/views/dashboard/ProcessBarChart'

export default {
  name: 'ProcessIndex',
  components: { ProcessBarChart },
  data() {
    return {
      value: '',
      processData: [50, 30, 110, 78],
      yichangVisible: false,
      yichangAlign: {},
      yichangData: [{
        number: '001',
        productNum: 'A12034',
        nowProduce: '生产',
        stopTime: '2022-04-15',
        note: ''
      }, {
        number: '002',
        productNum: 'ACC034',
        nowProduce: '轧制',
        stopTime: '2022-06-55',
        note: ''
      }, {
        number: '003',
        productNum: 'BB2034',
        nowProduce: '质检',
        stopTime: '2022-08-15',
        note: ''
      }, {
        number: '004',
        productNum: 'ABC034',
        nowProduce: '退火 ',
        stopTime: '2022-10-15',
        note: ''
      }]
    }
  },
  created() {

  },
  methods: {
    // 异常流程操作
    yichangClick(row) {
      console.log(row)
      this.yichangVisible = true
      this.yichangAlign = row
    },
    query() {
      getProcess().then(response => {
        console.log('这是异常流程数据 ', response)
        this.processData = [
          response.data[0].productNum,
          response.data[1].productNum,
          response.data[2].productNum,
          response.data[3].productNum
        ]
        this.yichangData = response.data
      })
    }

  }
}
</script>
