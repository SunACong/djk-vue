<template>
  <div class="GrapeBox" style="width: 100%;height: auto;">
    <div style="width: 52%; height: 800; margin-top: 0.5%">
      <el-card class="box-card">
        <el-descriptions class="margin-top" title="设定时间" border>
          <!-- <template slot="extra">
            <el-date-picker v-model="qualifyDateRange" size="large" type="daterange" format="yyyy-MM-dd"
              value-format="yyyy-MM-dd" :picker-options="pickerOptions" range-separator="至" start-placeholder="开始日期"
              end-placeholder="结束日期" @change="dateRangeQuality(qualifyDateRange)" />
          </template> -->
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-sunrise-1"></i>
              熔炼工序
            </template>
            {{ this.Dataone[5] }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-sunny
"></i>
              保温工序
            </template>
            {{ this.Dataone[4] }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-guide"></i>
              铸轧工序
            </template>
            {{ this.Dataone[3] }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-receiving"></i>
              冷轧工序
            </template>
            {{ this.Dataone[2] }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-mobile"></i>
              退火工序
            </template>
            {{ this.Dataone[1] }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-orange"></i>
              重卷工序
            </template>
            {{ this.Dataone[0] }}
          </el-descriptions-item>
        </el-descriptions>
      </el-card>

      <el-card class="box-card">
        <el-descriptions class="margin-top" title="历史异常统计表" border>
          <!-- <template slot="extra">
            <el-date-picker v-model="qualifyDateRange" size="large" type="daterange" format="yyyy-MM-dd"
              value-format="yyyy-MM-dd" :picker-options="pickerOptions" range-separator="至" start-placeholder="开始日期"
              end-placeholder="结束日期" @change="dateRangeQuality(qualifyDateRange)" />
          </template> -->
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-sunrise-1"></i>
              熔炼工序
            </template>
            {{ this.Datatwo[5] }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-sunny
"></i>
              保温工序
            </template>
            {{ this.Datatwo[4] }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-guide"></i>
              铸轧工序
            </template>
            {{ this.Datatwo[3] }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-receiving"></i>
              冷轧工序
            </template>
            {{ this.Datatwo[2] }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-mobile"></i>
              退火工序
            </template>
            {{ this.Datatwo[1] }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-orange"></i>
              重卷工序
            </template>
            {{ this.Datatwo[0] }}
          </el-descriptions-item>
        </el-descriptions>
      </el-card>

    </div>

    <div style="width: 48%; height: 400px; margin-top: 0.5%">
      <el-card class="box-card">
        <bar :barData="Datatwo"></bar>
        <div class="but">
        </div>
      </el-card>


    </div>
    <div style="width: 80%; height: auto; margin-top: 0.5% ;align-items: center;">
      <el-card class="box-card">
        <el-form size="small" :inline="true" label-width="68px">
          <el-form-item label="选择工序">
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" @click="">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="熔次号/铸轧卷号/冷轧卷号" label-width="180px">
            <el-input placeholder="请输入熔次号" clearable />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" icon="el-icon-search" size="mini">搜索</el-button>
            <el-button icon="el-icon-refresh" size="mini">重置</el-button>
          </el-form-item>

        </el-form>

        <!--间隔-->
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column fixed prop="id" label="序号">
          </el-table-column>
          <el-table-column prop="name" label="熔次号/铸轧卷号/冷轧卷号">
          </el-table-column>
          <el-table-column prop="province" label="开始时间">
          </el-table-column>
          <el-table-column prop="city" label="已进行时间">
          </el-table-column>
          <el-table-column prop="address" label="超时时长">
          </el-table-column>
        </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage1"
          :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </el-card>
    </div>

  </div>
</template>

<script>
import LineChart from '@/views/dashboard/LineChart'
import { getSetProcessTime, gethistoryException } from '@/api/ProcessCompute'
import bar from "@/views/dashboard/Albar";
import { getCastSmeltHoldList } from '@/api/LmdpCastSmeltHold'
import { tableData } from '@/api/rollingMachine';

export default {
  name: 'ProcessIndex',
  components: { LineChart, bar },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      // 总条数
      total: 10,
      pageNum: 1,
      pageSize: 10,
      options: [{
        value: '1',
        label: '熔炼工序'
      }, {
        value: '2',
        label: '保温工序'
      }, {
        value: '3',
        label: '铸轧工序'
      }, {
        value: '4',
        label: '冷轧工序'
      }, {
        value: '5',
        label: '退火工序'
      }, {
        value: '6',
        label: '重卷工序'
      }
      ],
      value: '',
      Datatwo: [],
      historyEcp: [],
      tableData: [{
        id: '1',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        id: '2',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        id: '3',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        id: '4',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        id: '5',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        id: '6',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        id: '7',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        id: '8',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        id: '9',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        id: '10',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        id: '11',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        id: '22',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        id: '13',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        id: '14',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }
        , {
        id: '15',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        id: '16',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }, {
        id: '17',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }, {
        id: '18',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }, {
        id: '19',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }, {
        id: '20',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }, {
        id: '21',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }, {
        id: '22',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }, {
        id: '23',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }, {
        id: '24',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }, {
        id: '25',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }, {
        id: '26',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }, {
        id: '27',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }
      ],
      Dataone: [],
      // tableData: [],
      qualifyDateRange: [this.parseTime(new Date().getTime() - 3600 * 1000 * 24 * 6, '{y}-{m}-{d}'), this.parseTime(new Date().getTime(), '{y}-{m}-{d}')],
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
      loading: false,
      chartData: [1, 2, 8, 15, 4, 11, 10],
      formData: {
        rongLian: '',
        baoWen: '',
        zhuZha: '',
        lengZha: '',
        tuiHuo: '',
        chongJuan: ''
      }
    }
  },
  created() {
    this.getjudgeList();

  },
  methods: {

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },



    getjudgeList() {
      gethistoryException().then((res1) => {
        this.historyEcp = res1.data;
        var arrData1 = [];
        // 第一种for循环
        for (let i = 0; i < res1.data.length; i++) {
          arrData1.push(res1.data[i].number)
        }
        arrData1.reverse();
        this.Datatwo = arrData1;
      })
      getSetProcessTime().then((res) => {
        var arrData = [];
        arrData.push(
          res.data.rongLian,
          res.data.baoWen,
          res.data.zhuZha,
          res.data.lengZha,
          res.data.tuiHuo,
          res.data.chongJuan,
        )
        arrData.reverse()

        this.Dataone = arrData;
      })
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/productQuality/productQuality.scss';

.tableflex {
  width: fit-content;
}

.GrapeBox {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.box-card {
  margin: 2%;
}

.box-card1 {
  margin-top: 3%;
  margin-left: 2%;
}

.box-card2 {
  margin-top: 3%;
  margin-left: 2%;
}

.but {
  margin-left: 20%;
}
</style>
