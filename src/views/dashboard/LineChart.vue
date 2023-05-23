<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import * as echarts from 'echarts'
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
      default: '350px'
    },
    autoResize: {
      type: Boolean,
      default: true
    }, 
    chartData1: {
      type: Array,
      required: true
    },
    chartData2: {
      type: Array
    },
    barColor: {
      type: String,
      default: '#2EC7C9'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
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
      this.setOptions('bar', this.barColor , this.chartData1, this.chartData2)
    },
    setOptions(type, barColor, data1, data2) {
      this.chart.setOption({
        xAxis: {
          data: ['熔炼工序', '保温工序', '铸轧工序', '冷轧工序', '退火工序', '重卷工序'],
          axisLabel: {
            interval:0,
            fontSize:20//调整坐标轴字体大小
          }
        },
        legend: {
            data:['自动计算', '手动设定'],
            x:'right',      //可设定图例在左、右、居中
            y:'top',     //可设定图例在上、下、居中
        },
        tooltip: {
            show: true,    // 是否显示提示框组件
            trigger: 'item',    // 触发类型（'item'，数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用；'axis'，坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用；'none'，不触发。）
            confine: true,    // 是否将 tooltip 框限制在图表的区域内
        },
        grid: {
          left: 40,
          right: 10,
          bottom: 40,
          top: 40,
        },
        yAxis: {
          name: '小时',
          nameTextStyle: {
            fontSize: 20
          },
          axisLabel: {
            interval:0,
            fontSize:20
          }
        },
        series: [{
          name: '自动计算',
          barWidth: '25%',
          smooth: true,
          type: type,
          data: data1,
          animationDuration: 1000,
          itemStyle: {
            normal: {
              color: barColor,
              label: {
                show: true, //开启显示
                position: 'top', //在上方显示
                textStyle: { //数值样式
                  fontSize: 20
                }
              }
            }
          }
        },{
          name: '手动设定',
          barWidth: '25%',
          smooth: true,
          type: type,
          data: data2,
          animationDuration: 1000,
          itemStyle: {
            normal: {
              color: '#fEC7C9',
              label: {
                show: true, //开启显示
                position: 'top', //在上方显示
                textStyle: { //数值样式
                  fontSize: 16
                }
              }
            }
          }
        }]
      })
    }
  }
}
</script>
