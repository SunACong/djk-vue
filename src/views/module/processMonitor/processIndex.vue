<template>
  <div class="GrapeBox" style="width: 100%;height: auto;">

    <div style="width: 50%; margin-top: 0.5%">
      <!-- <h3 style="margin-left: 1.5%;">异常流程显示</h3> -->

      <el-card class="box-card" style="height: 50%;width: auto;">
        <el-descriptions class="margin-top" title="设定时间(小时)" border>
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

      <el-card class="box-card" style="height: 50%;width: auto;margin-top: 0.5%">
        <el-descriptions class="margin-top" title="历史异常统计表(次数)" border>
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

    <div style="width: 49%; height: 300px; ">
      <el-card class="box-card">
        <bar :barData="Datatwo"></bar>
        <div class="but">
        </div>
      </el-card>
    </div>


    <div style="width: 98%; height: auto;align-items: center;margin-top: 1.5%;margin-left: 0.5%;">
      <el-card class="box-card1">
        <el-form size="small" :inline="true" label-width="68px">
          <el-form-item label="选择工序">
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="熔次号/铸轧卷号/冷轧卷号" label-width="180px">
            <el-input placeholder="请输入熔次号" clearable v-model="queryParams.id" />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" icon="el-icon-search" size="mini" @click="searchList">搜索</el-button>
            <el-button icon="el-icon-refresh" size="mini" @click="reset">重置</el-button>
          </el-form-item>
        </el-form>

        <!--间隔-->
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="numberID" label="熔次号/铸轧卷号/冷轧卷号">
          </el-table-column>
          <el-table-column prop="beginTime" label="开始时间">
          </el-table-column>
          <el-table-column prop="runningTime" label="已进行时间(小时)">
          </el-table-column>
          <el-table-column prop="exceedTime" label="超时时长(小时)">
          </el-table-column>
        </el-table>
        <!-- 分页插件 -->
        <div style="margin: 30px 20px 20px;float: right;font-size: 20px;">
          <el-pagination :current-page="queryParams.pageNum" :page-sizes="[5, 10, 20, 30]"
            layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
        </div>
      </el-card>


    </div>

  </div>
</template>

<script>
import LineChart from '@/views/dashboard/LineChart'
import { getSetProcessTime, gethistoryException } from '@/api/ProcessCompute'
import bar from "@/views/dashboard/Albar";
import { getCastSmeltHoldList, getOneException, getTwoException, getThreeException, getFourException, getFiveException, getSixException } from '@/api/LmdpCastSmeltHold'
import { tableData } from '@/api/rollingMachine';

export default {
  name: 'ProcessIndex',
  components: { LineChart, bar },
  data() {
    return {
      tableData: [],
      //查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        id: null
      },
      size: '',
      num: '',

      total: 100,
      eceptionList: [],

      // 总条数
      total: 10,
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
      Dataone: [],
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
    }
  },


  created() {
    this.getjudgeList();
  },

  watch: {
    value: {
      handler(newVal, oldVal) {
        this.searchList();
        if (newVal != oldVal) {
          this.queryParams.pageNum = 1;
          this.queryParams.id = null
        }
      },
      deep: true,
      immediate: true
    }
  },

  methods: {
    reset() {
      this.value = '';
      this.queryParams.id = null;

    },
    searchList() {
      this.tableData = [];
      // console.log('打印对应的参数', this.value);
      if (this.value == 1) {
        console.log("1_熔炼");
        getOneException(this.queryParams).then((res) => {
          console.log(res);
          this.tableData = res.data.records;
          this.total = res.data.total
          console.log("打印data", this.tableData);
        })
      } else if (this.value == 2) {
        console.log("2_保温");
        getTwoException(this.queryParams).then((res) => {
          console.log(res);
          this.tableData = res.data.records;
          this.total = res.data.total
          console.log("打印data", this.tableData);
        })
      } else if (this.value == 3) {
        console.log("3_铸轧");
        getThreeException(this.queryParams).then((res) => {
          this.tableData = res.data.records;
          this.total = res.data.total
          console.log(res);
        })
      } else if (this.value == 4) {
        console.log("4_冷轧");
        getFourException(this.queryParams).then((res) => {
          this.tableData = res.data.records;
          this.total = res.data.total
          console.log(res);
        })
      } else if (this.value == 5) {
        console.log("5_退火");
        getFiveException(this.queryParams).then((res) => {
          this.tableData = res.data.records;
          this.total = res.data.total
          console.log(res);
        })
      } else if (this.value == 6) {
        console.log("6_重卷");
        getSixException(this.queryParams).then((res) => {
          this.tableData = res.data.records;
          this.total = res.data.total
          console.log(res);
        })
      }
    },
    /**
      * 更改pageSize
      * @param {Object} val
      */
    handleSizeChange(val) {
      this.queryParams.pageSize = val
      this.searchList();
    },
    /**
       * 更改当前页码
       * @param {Object} val
       */
    handleCurrentChange(val) {
      this.queryParams.pageNum = val
      this.searchList();
    },

    // getnowException() {
    //   this.loading = true
    //   getCastSmeltHoldList().then((res) => {
    //     // this.eceptionList = res.data;
    //     // this.total = res.data.length
    //     // console.log(this.total);
    //     this.loading = false
    //   })
    // },

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
  margin: 1%;
}

.box-card1 {
  // margin: 1%;
  // margin-left: 10%;
}

// .box-card1 {
//   margin-top: 3%;
//   margin-left: 2%;
// }

.box-card2 {
  margin-top: 3%;
  margin-left: 2%;
}

.but {
  margin-left: 20%;
}
</style>
