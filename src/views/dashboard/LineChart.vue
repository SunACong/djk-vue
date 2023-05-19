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
    chartData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
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
      this.setOptions('bar', '平均时间', this.chartData)
    },
    setOptions(type, legend, data) {
      this.chart.setOption({
        xAxis: {
          data: ['熔炼工序', '保温工序', '铸轧工序', '冷轧工序', '退火工序', '重卷工序'],
          axisLabel: {
            interval:0,
            fontSize:30//调整坐标轴字体大小
          }
        },
        tooltip: {
            show: true,    // 是否显示提示框组件
            trigger: 'item',    // 触发类型（'item'，数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用；'axis'，坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用；'none'，不触发。）
            showContent: true,     // 是否显示提示框浮层，默认显示
            alwaysShowContent: true,     // 是否永远显示提示框内容，默认情况下在移出可触发提示框区域后一定时间后隐藏
            triggerOn: 'mousemove|click',    // 提示框触发的条件（'mousemove'，鼠标移动时触发；'click'，鼠标点击时触发；'mousemove|click'，同时鼠标移动和点击时触发；'none'，不在 'mousemove' 或 'click' 时触发）
            confine: true,    // 是否将 tooltip 框限制在图表的区域内
            backgroundColor: 'rgba(50,50,50,0.7)',    // 提示框浮层的背景颜色
            padding: 5,    // 提示框浮层内边距，单位px
            textStyle: {
                color: '#FFF',     // 文字的颜色
                fontStyle: 'normal',    // 文字字体的风格（'normal'，无样式；'italic'，斜体；'oblique'，倾斜字体） 
                fontWeight: 'normal',    // 文字字体的粗细（'normal'，无样式；'bold'，加粗；'bolder'，加粗的基础上再加粗；'lighter'，变细；数字定义粗细也可以，取值范围100至700）
                fontSize: '20',    // 文字字体大小
                lineHeight: '50',    // 行高 
            },
        },
        grid: {
          left: 40,
          right: 10,
          bottom: 40,
          top: 30,
        },
        yAxis: {
          axisTick: {
            show: false
          },
          axisLabel: {
            interval:0,
            fontSize:30
          }
        },
        legend: {
          data: legend
        },
        series: [{
          name: length[0],
          barWidth: '25%',
          smooth: true,
          type: type,
          data: data,
          animationDuration: 1000,
          itemStyle: {
            normal: {
              label: {
                show: true, //开启显示
                position: 'top', //在上方显示
                textStyle: { //数值样式
                  color: 'black',
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
