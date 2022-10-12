<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

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
      type: Array
    },
    yData:{
      type: Array
    }
  },
  data() {
    return {
      chart: null,
      xdata: [],
      ydata:[]
    }
  },
  watch: {
    xData: {
      handler () {

        // console.log('这是xData', oldValue, newValue)
      },
      immediate: true,
      deep: true
    },
    yData: {
      handler () {
        this.initChart()
        // console.log('这是yData', oldValue, newValue)
      },
      immediate: true,
      deep: true
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
      this.setOption(this.xData, this.yData)
    },
    setOption(x, y) {
      this.chart.setOption({
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            // label: {
            //   backgroundColor: '#6a7985'
            // }
          }
        },
        // legend: {
        //   data: []
        // },
        grid: {
          left: '1%',
          right: '10%',
          bottom: '3%',
          top: '10%',
          containLabel: true
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: x
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '开卷机速度',
            type: 'line',
            stack: 'Total',
            data: y
          }
        ],
        visualMap: [{
          top: 10,
          right: 10,
          show: false,
          // precision: 1,
          // seriesIndex: 0,
          pieces: [{
            gt:0,
            lt: 250 , // 设置最大值<250
            color: '#33bfcc'
          }],
          outOfRange: { color: '#CC3300' // 设置超出部分的颜色
          }
        },
        ]
      })
    }
  }
}
</script>
