<template>
  <div :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import resize from "@/views/dashboard/mixins/resize";

const animationDuration = 6000;

export default {
  mixins: [resize],
  props: {
    barData: {
      type: Array,
      // default: [1, 2, 3, 4, 5, 6],
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "372px",
    },
  },
  data() {
    return {
      chart: null,
      barchartData: [],
    };
  },

  watch: {
    barData: {
      deep: true,
      handler() {
        // console.log("打印传到组件bardata", this.barData);
        this.initChart();
        // this.barData = this.barchartData;
      },
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");
      this.chart.setOption({
        title: {
          text: "历史异常统计直方图",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {},
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: "category",
          data: [
            "重卷工序",
            "退火工序",
            "冷轧工序",
            "铸轧工序",
            "保温工序",
            "熔炼工序",

          ],
        },
        series: [
          {
            // itemStyle: {
            //   normal: {
            //     barBorderRadius: [10, 10, 0, 0],
            //     color: function () { return "#" + Math.floor(Math.random() * (256 * 256 * 256 - 1)).toString(16); }

            //   }
            // },

            itemStyle: {
              normal: {

                color: function () { return "#" + Math.floor(Math.random() * (256 * 256 * 256 - 1)).toString(16); }
              }
            },

            type: "bar",
            data: this.barData,
          },
        ],
      });
    },
  },
};
</script>
