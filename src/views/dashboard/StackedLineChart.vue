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
    },
    minData:{
      type: Number
    },
    maxData:{
      type: Number
    },
    rName:{
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
    // rName: {
    //   handler () {
    //     this.initChart()
    //   },
    //   // immediate: true,
    //   // deep: true
    // }
  },
  mounted() {
    // console.log(this.xData)
    // console.log(this.yData)
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
      this.setOption(this.xData, this.yData,this.minData,this.maxData,this.rName)
    },
    setOption(x, y,min,max,name) {
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
            name: name,
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
            gt: min,   //设置最小值
            lt: max , // 设置最大值
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
