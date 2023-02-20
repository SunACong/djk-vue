<template>
  <div>
    <!--折线趋势图-->
    <div class="graph-doubleLine-warp">
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="selection-box">
            料温温度曲线图:
          </div>
        </el-col>
        <el-col :span="8">
          <div class="selection-box">
            <el-date-picker
                v-model="selectGatheringTime"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <div id="home_DoubleLine" style="width: 100%;height: 250px;"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import ECharts from 'echarts'
// 折线图
let lineDefaultOpt = {
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
      // 折线图
      doubleLineOption: lineDefaultOpt,
      selectGatheringTime: []
    }
  },
  mounted() {
    this.getDoubleLineData()// 收款折线数据
  },
  methods: {
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
