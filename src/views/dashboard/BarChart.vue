<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

const animationDuration = 500

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    chartType: {
      type: String,
      default: 'bar'
    },
    legend: {
      type: Array,
      default: null
    },
    oneXData: {
      type: Array,
      default: null
    },
    twoXData: {
      type: Array,
      default: null
    },
    oneYData: {
      type: Array,
      default: null
    },
    twoYData: {
      type: Array,
      default: null
    }
  },
  data() {
    return { chart: null }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '2%',
          right: '2%',
          bottom: '3%',
          top: '2%',
          containLabel: true
        },
        legend: {
          data: this.legend
          // data: ['合格', '不合格']
        },
        xAxis: [{
          type: 'category',
          data: this.oneXData
        }, {
          type: 'category',
          position: 'bottom',
          offset: 25,
          axisTick: { show: false },
          axisLine: { show: false },
          // data: ['9/13', '9/14', '9/15', '9/16', '9/17', '9/18', '9/19']
          data: this.twoXData
        }],
        yAxis: [{
          type: 'value',
          axisTick: { show: false }
        }],
        series: [{
          // name: '合格',
          type: this.chartType,
          barWidth: '10%',
          data: this.oneYData,
          animationDuration
        }, {
          // name: '不合格',
          type: this.chartType,
          barWidth: '10%',
          data: this.twoYData,
          animationDuration
        }]
      })
    }
  }
}
</script>
