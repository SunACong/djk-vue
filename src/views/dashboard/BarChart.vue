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
      default: function() {
        return ['不合格', '合格', '暂未判定']
      }
    },
    xydata: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    xydata: {
      handler(newVal, oldVal) {
        this.$nextTick(() => {
          this.initChart()
        })
      },
      deep: true,
      immediate: true
    }
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
          bottom: '1%',
          top: '8%',
          containLabel: true
        },
        legend: {
          data: this.legend
        },
        dataZoom: { // 放大和缩放
          type: 'inside'
        },
        dataset: {
          dimensions: ['inspectCreateTime', 'noQualified', 'qualified', 'tentative'],
          source: this.xydata
        },
        xAxis: [{
          type: 'category'
        }, {
          type: 'category',
          position: 'bottom',
          offset: 25,
          axisTick: { show: false },
          axisLine: { show: false }
        }],
        yAxis: [{
          type: 'value',
          axisTick: { show: false }
        }],
        series: [{
          name: this.legend[0],
          type: this.chartType,
          barWidth: '10%',
          animationDuration,
          itemStyle: {
            normal: {
              color: '#a80000', // 改变折线点的颜色
              lineStyle: {
                color: '#a80000' // 改变折线颜色
              }
            }
          }
        }, {
          name: this.legend[1],
          type: this.chartType,
          barWidth: '10%',
          animationDuration,
          itemStyle: {
            normal: {
              color: '#5087ff', // 改变折线点的颜色
              lineStyle: {
                color: '#5087ff' // 改变折线颜色
              }
            }
          }
        }, {
          name: this.legend[2],
          type: this.chartType,
          barWidth: '10%',
          animationDuration,
          itemStyle: {
            normal: {
              color: '#333333', // 改变折线点的颜色
              lineStyle: {
                color: '#333333' // 改变折线颜色
              }
            }
          }
        }]
      })
    }
  }
}
</script>
