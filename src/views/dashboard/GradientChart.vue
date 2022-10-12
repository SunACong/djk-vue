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
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        title: {
          // text: ''
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
        // legend: {
        //   data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
        // },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
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
            data: ['2022.9.27 8:47:53', '2022.9.27 8:48:47', '2022.9.27 8:48:55', '2022.9.27 8:49:33', '2022.9.27 8:47:47', '2022.9.27 8:50:47', '2022.9.27 8:51:47','2022.9.27 8:52:53', '2022.9.27 8:53:47', '2022.9.27 8:54:55', '2022.9.27 8:55:33', '2022.9.27 8:56:47', '2022.9.27 8:57:47', '2022.9.27 8:58:47']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '金属料温温度',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            label: {
              show: true,
              position: 'top'
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 191, 0)'
                },
                {
                  offset: 1,
                  color: 'rgb(224, 62, 76)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 365, 111, 234, 89, 290, 150,220, 325, 240, 255, 288, 200, 186]
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
            lt: 300 , // 设置最大值<250
            color: '#33bfcc'
          }],
          outOfRange: { color: '#f30b2d' // 设置超出部分的颜色
          }
        },
        ]
      })
    }
  }
}
</script>
