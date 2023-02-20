<template>
  <div class="my-container">
    <div id="nowEcharts" class="nowEcharts" />
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      oneDay: 1000,
      nowOptions: {
        visualMap: [
          {
            top: 10,
            right: 10,
            show: false,
            // precision: 1,
            // seriesIndex: 0,
            pieces: [{
              gt: 0, // 设置最小值
              lt: 250, // 设置最大值
              color: '#33bfcc'
            }],
            outOfRange: { color: '#CC3300' // 设置超出部分的颜色
            }
          }
        ],
        title: {
          left: 'left',
          text: ''
        },
        tooltip: {
          trigger: 'axis',
          // formatter: function (params) {
          //   params = params[0];
          //   var date = new Date(params.name);
          //   return (
          //       date.getDate() +
          //       "/" +
          //       (date.getMonth() + 1) +
          //       "/" +
          //       date.getFullYear() +
          //       " : " +
          //       params.value[1]
          //   );
          // },
          axisPointer: {
            animation: false
          }
        },
        grid: {
          left: '1%',
          right: '2%',
          bottom: '3%',
          top: '2%',
          containLabel: true
        },
        xAxis: {
          type: 'time',
          splitLine: {
            show: false
          },
          triggerEvent: true
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          max: 400,
          splitLine: {
            show: false
          }
        },
        series: [
          {
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: []
          }
        ]
      },
      myChart: null,
      timer: null,
      data: [],
      temp: 59,
      now: ''
    }
  },
  mounted() {
    this.nowChart()
    this.getData()
  },
  methods: {
    //   初始化图表
    nowChart() {
      const that = this
      this.now = +new Date()
      var value = Math.random() * 1000
      for (var i = 0; i < 60; i++) {
        this.now = new Date(+this.now + this.oneDay)
        this.data.push(this.randomData(this.now, value))
      }
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(document.getElementById('nowEcharts'))

      // 绘制图表
      const options = Object.assign(that.nowOptions, {})
      options.series.forEach((item) => {
        item.data = that.data
        item.markPoint = {
          data: [
            [
              {
                symbol: 'none',
                x: '95%'
              },
              {
                symbol: 'circle',
                name: '实时数据',
                value: this.data[this.temp].value[1],
                xAxis: this.data[this.temp].value[0]
              }
            ]
          ]
        }
      })
      this.myChart.setOption(options)
      // 1秒定时器
      //   setInterval(() => {
      //     for (var i = 0; i < 1; i++) {
      //       data.shift();
      //       now = new Date(+now + this.oneDay);
      //       data.push(this.randomData(now, value));
      //     }
      //     myChart.setOption(options);
      //   }, 1000);
    },
    // 获取接口返回数据 这里用定时器模拟一秒一个数据
    getData() {
      const that = this
      var value = Math.random() * 1000000000
      this.timer = setInterval(() => {
        for (var i = 0; i < 1; i++) {
          that.data.shift()
          that.now = new Date(+that.now + that.oneDay)
          that.data.push(this.randomData(that.now, value))
        }
        that.updateChart()
      }, 1000)
    },
    // 更新图表
    updateChart() {
      const options = Object.assign(this.nowOptions, {})
      options.series.forEach((item) => {
        item.data = this.data
        item.markPoint = {
          data: [
            [
              {
                symbol: 'none',
                x: '95%'
              },
              {
                symbol: 'circle',
                name: '实时数据',
                value: this.data[this.temp].value[1],
                xAxis: this.data[this.temp].value[0]
              }
            ]
          ]
        }
      })
      this.myChart.setOption(options)
    },
    // 产生随机数
    randomData(now, value) {
      value = Math.random() * 300
      var valueName =
          now.getFullYear() +
          '/' +
          (now.getMonth() + 1) +
          '/' +
          now.getDate() +
          ' ' +
          (now.getHours() >= 10 ? now.getHours() : '0' + now.getHours()) +
          ':' +
          (now.getMinutes() >= 10 ? now.getMinutes() : '0' + now.getMinutes()) +
          ':' +
          (now.getSeconds() >= 10 ? now.getSeconds() : '0' + now.getSeconds())
      return {
        name: now.toString(),
        value: [valueName, Math.round(value)]
      }
    }
  }
}
</script>
<style >
.nowEcharts {
  width: 100%;
  height: 300px;
}
</style>
