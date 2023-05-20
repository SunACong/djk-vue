<template>
  <div class="GrapeBox" style="width: 100%;height: auto;">
    <div style="width: 52%; height: 800; margin-top: 0.5%">
      <el-card class="box-card">
        <el-descriptions class="margin-top" title="平均时间" border>
          <template slot="extra">
            <el-date-picker v-model="qualifyDateRange" size="large" type="daterange" format="yyyy-MM-dd"
              value-format="yyyy-MM-dd" :picker-options="pickerOptions" range-separator="至" start-placeholder="开始日期"
              end-placeholder="结束日期" @change="dateRangeQuality(qualifyDateRange)" />
          </template>
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

    </div>

    <div style="width: 48%; height: 400px; margin-top: 0.5%">
      <el-card class="box-card">
        <bar :barData="Dataone"></bar>
        <div class="but">

          <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed prop="date" label="日期" width="150">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="province" label="省份" width="120">
            </el-table-column>
            <el-table-column prop="city" label="市区" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址" width="300">
            </el-table-column>
            <el-table-column prop="zip" label="邮编" width="120">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>

        </div>
      </el-card>
    </div>


  </div>
</template>

<script>
import LineChart from '@/views/dashboard/LineChart'
import { getSetProcessTime } from '@/api/ProcessCompute'
import bar from "@/views/dashboard/Albar";

export default {
  name: 'ProcessIndex',
  components: { LineChart, bar },
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }],
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

    getjudgeList() {
      getSetProcessTime().then((res) => {
        // console.log("特定时间范围内的数据", res)
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
        // console.log('+++', arrData);
        this.Dataone = arrData;
        // console.log('看看数据', this.dataOne);
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
