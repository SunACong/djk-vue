<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'
import { type } from 'os'

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
    },
    xData: {
      type: Array,
      default: () => []
    },
    yData: {
      type: Array,
      default: () => []
    },
    minData: {
      type: Number
    },
    maxData: {
      type: Number
    },
    rName: {
      type: String
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    xData: {
      handler: function () {
        this.initChart()
      },
      // immediate: true,
      // deep: true
    },
    yData: {
      handler: function () {
        this.initChart()
      },
      // immediate: true,
      // deep: true
    },
    minData: {
      handler: function () {
        this.initChart()
      },
      // immediate: true,
      // deep: true
    },
    maxData: {
      handler: function () {
        this.initChart()
      },
      // immediate: true,
      // deep: true
    },
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
      // console.log(this.xData, this.yData)
      this.setOption(this.xData, this.yData, this.minData, this.maxData, this.rName)
    },
    setOption(x, y, min, max, r) {
      this.chart.setOption({
        title: {
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
        grid: {
          left: '1%',
          right: '10%',
          bottom: '3%',
          top: '10%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: x
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {

            name: r,
            type: 'line',
            stack: 'Total',
            // areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            //最大值最小值标注线
            markLine: {
              // symbol: ['上限', '下限'], // 去掉箭头
              data: [
                {
                  yAxis: max,
                  name: '上限'
                },
                {
                  yAxis: min,
                  name: '下限'
                }
              ]
            },
            data: y
          },
        ],
        dataZoom: { // 放大和缩放
          type: 'inside'
        },
        visualMap: [
          {
            min,
            max,
            show: false,
            //平均分层
            splitNumber: 2,
            inRange: {
              color: ['#33bfcc']
            },
            outOfRange: {
              color: ['#CC3300'],
            },
          }]
      })
    }
  }
}
</script>
