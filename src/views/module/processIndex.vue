<template>
  <div >
    <div class="top_card">
      <el-card shadow="always" style="height: 500px">
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
        <el-button  style="background-color: #409EFF;color: white;line-height: 15px;" size="small" @click="query">刷新</el-button>
        <div>
          <el-table :data="tableData" border >
            <el-table-column fixed prop="number" label="序号" >
            </el-table-column>
            <el-table-column prop="productNum" label="产品编号" >
            </el-table-column>
            <el-table-column prop="nowProduce" label="当前流程" >
            </el-table-column>
            <el-table-column prop="stopTime" label="停滞时间">
            </el-table-column>
            <el-table-column prop="note" label="备注" >
            </el-table-column>
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
    <el-dialog title="提示" :visible.sync="yichangVisible" width="30%" >
      <span>异常流程信息显示</span>
      <el-form label-width="80px" label-position="left" :model="yichangAlign" :disabled="true">
        <el-form-item label="序号">
          <el-input v-model="yichangAlign.number"></el-input>
        </el-form-item>
        <el-form-item label="产品编号">
          <el-input v-model="yichangAlign.productNum"></el-input>
        </el-form-item>
        <el-form-item label="当前流程" >
          <el-input v-model="yichangAlign.nowProduce"></el-input>
        </el-form-item>
        <el-form-item label="停滞时间">
          <el-input v-model="yichangAlign.stopTime"></el-input>
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
import { getProcess } from '@/api/process'

export default {
  name: "ProcessIndex",
  data() {
    return {
      value: '',
      yichangVisible: false,
      yichangAlign: {},
      tableData: [{
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
      }],
    };
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
    query(){
      getProcess().then(response =>{
        console.log("这是response ",response)
        this.tableData = response.data;

      })
    },

  }
}
</script>
