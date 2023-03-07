<template>
  <div>
    <el-table :data="tableData" style="width: 100%;margin-bottom: 20px;" :row-class-name="getRowClassName" :row-key="rowKey" :expand-row-keys="nowExpand" @row-click="rowClick">
      <el-table-column type="expand">
        <template v-if="props.row.children" slot-scope="props">
          <el-form style="width: 100%;">
            <el-form-item>
              <el-table style="width: 100%;background: none" :data="props.row.children">
                <el-table-column label="日期" prop="date" align="center" />
                <el-table-column label="姓名" prop="name" align="center" />
                <el-table-column label="地址" prop="address" align="center" />
                <el-table-column label="操作" align="center">
                  <template slot-scope="scope">
                    <el-button size="mini" type="primary" plain @click="handleEdit(scope.$index, scope.row)">详情</el-button>
                    <el-button size="mini" type="success" plain @click="handleDelete(scope.$index, scope.row)">录入</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>

      <el-table-column prop="date" label="日期" align="center" />
      <el-table-column prop="name" label="姓名" align="center" />
      <el-table-column prop="address" label="地址" align="center" />

    </el-table>

  </div>
</template>

<script>
import ECharts from 'echarts'
// 折线图
const lineDefaultOpt = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    bottom: 0,
    left: 'center'
  },
  grid: {
    left: 30,
    bottom: 50,
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    name: '时间',
    type: 'category',
    boundaryGap: false,
    axisLine: {
      lineStyle: {
        color: ['#666666'],
        width: 1,
        type: 'solid'
      }
    }
  },
  yAxis: {
    name: '温度',
    type: 'value',
    boundaryGap: ['0%', '20%'],
    axisLine: {
      lineStyle: {
        color: ['#666666'],
        width: 1,
        type: 'solid'
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#C4C4C4',
        width: 1,
        type: 'dashed'
      }
    }
  },
  series: []
}

export default {
  data() {
    return {
      // 当前展开行
      nowExpand: [], // 表格数据
      tableData: [{
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 2,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: 3,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        children: [{
          id: 31,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          id: 32,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }]
      }, {
        id: 4,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }] }
  },
  mounted() {
    this.getDoubleLineData()// 收款折线数据
  },
  methods: {
    // rowkey获取方式
    rowKey(row) {
      return row.id
    },
    // 点击该行就添加到显示数组中
    rowClick(row, event, column) {
      if (row.children != null) {
        const index = this.nowExpand.indexOf(row.id)
        if (index == -1) {
          this.nowExpand.push(row.id)
        } else {
          this.nowExpand.splice(index, 1)
        }
      }
    },
    // 设置没行的样式名称  是否显示下拉箭头
    getRowClassName({ row, rowIndex }) { // 有children就显示箭头
      if (!row.children) {
        return 'row-expand-cover'
      } else {
        return 'row-expand-show'
      }
    },
    /**
     * eChart初始化 params:
     * domId :传入DomId
     * theme: eChart 的 主题
     * opt: 初始值
     */
    eChartsInit(domId, theme, opt) {
      ECharts.init(document.getElementById(domId), theme).setOption(opt)
      window.addEventListener('resize', () => {
        ECharts.init(document.getElementById(domId), theme).resize()
      })
    },
    // 获取折线数据
    getDoubleLineData() {
      var arr = [100, 600, 300, 400, 200]
      var arr2 = ['2021-01-01', '2021-01-02', '2021-01-03', '2021-01-04', '2021-01-05']
      var list = [{
        type: 'line',
        symbol: 'circle',
        symbolSize: [5, 5],
        data: arr
      }, { type: 'line', symbol: 'circle', symbolSize: [5, 5], data: arr2 }]
      this.doubleLineOption.series = list
      this.doubleLineOption.xAxis.data = arr2
      this.eChartsInit('home_DoubleLine', 'light', this.doubleLineOption)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
