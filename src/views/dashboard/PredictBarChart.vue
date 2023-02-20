<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

const animationDuration = 1000

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '98%'
    },
    height: {
      type: String,
      default: '300px'
    },
    periodData: {
      type: Array,
      default: function() {
        return []
      }
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
  watch: {
    periodData: {
      handler() {
        this.$nextTick(() => {
          this.initChart()
        })
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '2%',
          right: '2%',
          bottom: '13%',
          containLabel: true
        },
        legend: {
          data: ['剩余时间']
        },
        xAxis: [{
          name: '订单号',
          nameGap: 1,
          type: 'category',
          nameTextStyle: {
            fontSize: '4'
          },
          data: ['订单一', '订单二', '订单三', '订单四']
        }, {
          type: 'category',
          position: 'bottom',
          offset: 25,
          axisTick: { show: false },
          axisLine: { show: false }
          // data: ['9/13', '9/14', '9/15', '9/16', '9/17', '9/18', '9/19']
        }
        ],
        yAxis: [{
          name: '进度',
          show: true,
          type: 'value',
          axisTick: { show: false }
        }],
        series: [{
          name: '剩余时间',
          type: 'bar',
          barWidth: '30%',
          data: this.periodData,
          // data: [79, 52, 200, 400, 390, 330, 220,111,212,313,414,515,616,717,818,919,123],
          animationDuration
        }

        ]
      })
    }
  }
}
</script>
