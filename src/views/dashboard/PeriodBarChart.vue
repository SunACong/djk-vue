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
    periodData:{
      type: Array,
      default : function() {
        return [];
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
          data: ['平均生产天数']
        },
        xAxis: [{
          name:'名称',
          nameGap: 1,
          type: 'category',
          nameTextStyle:{
            fontSize: '13'
          },
          data: ['铸轧计划','熔炉生产', '保温', '保温（精练一）', '保温（精练二）', '保温（精练三）', '保温（精练四）', '保温（精练五）','铸轧生产','铸轧卷质检', '冷轧生产计划', '冷轧工序 ', '退火', '冷轧卷成品质检', '重卷中切', '冷轧卷入库','包装检验']
        },
          {
          type: 'category',
          position: 'bottom',
          offset: 25,
          axisTick: { show: false },
          axisLine: { show: false },
          // data: ['9/13', '9/14', '9/15', '9/16', '9/17', '9/18', '9/19']
        }
        ],
        yAxis: [{
          name:'生产时间',
          show: true,
          type: 'value',
          axisTick: { show: false }
        }],
        series: [{
          name: '平均生产天数',
          type: 'bar',
          barWidth: '30%',
          data: this.periodData,
          // data: [79, 52, 200, 400, 390, 330, 220,111,212,313,414,515,616,717,818,919,123],
          animationDuration
        },

        ]
      })
    }
  }
}
</script>
