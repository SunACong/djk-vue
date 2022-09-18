<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

// const animationDuration = 3000

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
    }
  },
  data() {
    return {
      chart: null
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
        title:{
          text: ''
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['炉膛温度', '炉压']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '炉膛温度',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '炉压',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          // {
          //   name: 'Video Ads',
          //   type: 'line',
          //   stack: 'Total',
          //   areaStyle: {},
          //   emphasis: {
          //     focus: 'series'
          //   },
          //   data: [150, 232, 201, 154, 190, 330, 410]
          // },
          // {
          //   name: 'Direct',
          //   type: 'line',
          //   stack: 'Total',
          //   areaStyle: {},
          //   emphasis: {
          //     focus: 'series'
          //   },
          //   data: [320, 332, 301, 334, 390, 330, 320]
          // },
          // {
          //   name: 'Search Engine',
          //   type: 'line',
          //   stack: 'Total',
          //   label: {
          //     show: true,
          //     position: 'top'
          //   },
          //   areaStyle: {},
          //   emphasis: {
          //     focus: 'series'
          //   },
          //   data: [820, 932, 901, 934, 1290, 1330, 1320]
          // }
        ]
      })
    }
  }
}
</script>
