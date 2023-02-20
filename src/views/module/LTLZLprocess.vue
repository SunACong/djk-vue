<template xmlns:display="http://www.w3.org/1999/xhtml">
  <div>
    <div style="font-size: 15px;color: black;margin-right: 3px;">模块功能说明：这是五步骤的冷轧与退火的功能模块，该模块主要显示冷轧退火的详细信息。</div>
    <div style="background-color: white;padding: 20px 10px">
      <el-input v-model="input" size="small" placeholder="请输入计划单号/请输入熔次号/请输入冷轧卷号" :clearable="true" >
        <el-button slot="append"	style="background-color: #409EFF;color: white;line-height: 15px;" size="small" >
          查询
        </el-button>
      </el-input>
    </div>

    <div style="background-color: white;padding: 10px 10px">
      <el-steps :active="2" align-center>
        <el-step title="冷轧" description="订货单位：生产批号：合金牌号：坯料重量:"></el-step>
        <el-step title="退火" description="退火日期：合金：卷数：装炉炉号："></el-step>
        <el-step title="冷轧" description="订货单位：生产批号：合金牌号：坯料重量:"></el-step>
        <el-step title="冷轧" description="订货单位：生产批号：合金牌号：坯料重量:"></el-step>
        <el-step title="重卷剪切" description="生产批号：切边时间：主操："></el-step>
      </el-steps>
    </div>
    <div style="background-color: #c0c4cc;padding: 10px 10px">冷轧工序详细信息</div>
    <div style="background-color: white;padding: 10px 10px">
      <el-table
          :data="lenzhaData"
          style="width: 100%"
          height="250">
        <el-table-column
            fixed
            prop="orderUnit"
            label="订货单位"
            width="150">
        </el-table-column>
        <el-table-column
            fixed
            prop="productNum"
            label="生产批号"
            width="120">
        </el-table-column>
        <el-table-column
            fixed
            prop="alloyNum"
            label="合金牌号"
            width="120">
        </el-table-column>
        <el-table-column
            prop="blankWeight"
            label="坯料重量"
            width="120">
        </el-table-column>
        <el-table-column
            prop="mainExercise"
            label="主操"
            width="120">
        </el-table-column>
        <el-table-column
            prop="shift"
            label="班次"
            width="120">
        </el-table-column>
        <el-table-column
            prop="productNumber"
            label="生产顺序"
            width="120">
        </el-table-column>
        <el-table-column
            prop="inletThickness"
            label="入口厚度"
            width="120">
        </el-table-column>
        <el-table-column
            prop="outThickness"
            label="出口厚度"
            width="120">
        </el-table-column>
        <el-table-column
            prop="width"
            label="宽度"
            width="120">
        </el-table-column>
        <el-table-column
            prop="unwinding"
            label="开卷张力"
            width="120">
        </el-table-column>
        <el-table-column
            prop="coiling"
            label="卷取张力"
            width="120">
        </el-table-column>
        <el-table-column
            prop="zhazhiSpeed"
            label="轧制速度"
            width="120">
        </el-table-column>
        <el-table-column
            prop="zhazhiTemperature"
            label="轧制油温度"
            width="120">
        </el-table-column>
        <el-table-column
            prop="zhazhiFlow"
            label="轧制油流量"
            width="120">
        </el-table-column>
        <el-table-column
            prop="airTemperature"
            label="压缩空气温度"
            width="120">
        </el-table-column>
        <el-table-column
            prop="pressure"
            label="气源压力"
            width="120">
        </el-table-column>
        <el-table-column
            prop="AFC"
            label="AFC曲线"
            width="120">
        </el-table-column>
        <el-table-column
            prop="rolling"
            label="轧制力"
            width="120">
        </el-table-column>
        <el-table-column
            prop="inletWeight"
            label="入口重量"
            width="120">
        </el-table-column>
        <el-table-column
            prop="outWeight"
            label="出口重量"
            width="120">
        </el-table-column>
        <el-table-column
            prop="zhaNum"
            label="轧辊辊号"
            width="120">
        </el-table-column>
      </el-table>
    </div>
    <div style="background-color: #c0c4cc;padding: 10px 10px">退火工序详细信息</div>
    <div style="background-color: white;padding: 10px 10px">
      <el-table
          :data="tuihuoData"
          style="width: 100%"
          height="250">
        <el-table-column
            fixed
            prop="annealDate"
            label="退火日期"
            width="150">
        </el-table-column>
        <el-table-column
            fixed
            prop="alloy"
            label="合金"
            width="120">
        </el-table-column>
        <el-table-column
            prop="anneal"
            label="退火厚度"
            width="120">
        </el-table-column>
        <el-table-column
            prop="rollNum"
            label="卷数(个)"
            width="120">
        </el-table-column>
        <el-table-column
            prop="totalAmount"
            label="装炉总量"
            width="120">
        </el-table-column>
        <el-table-column
            prop="furnaceNum"
            label="装炉炉号"
            width="120">
        </el-table-column>
        <el-table-column
            prop="furnaceLocation"
            label="装炉位置"
            width="120">
        </el-table-column>
        <el-table-column
            prop="furnaceTime"
            label="装炉时间"
            width="120">
        </el-table-column>
        <el-table-column
            prop="annealTime"
            label="退火总用时"
            width="120">
        </el-table-column>
        <el-table-column
            prop="furnaceStaff"
            label="装炉人员"
            width="120">
        </el-table-column>
        <el-table-column
            prop="outStaff"
            label="出炉人员"
            width="120">
        </el-table-column>
        <el-table-column
            prop="furnaceTemperature"
            label="装炉料温"
            width="120">
        </el-table-column>
        <el-table-column
            prop="outTemperature"
            label="出炉料温"
            width="120">
        </el-table-column>
        <el-table-column
            prop="temperatureContro"
            label="料温控制/炉气控制"
            width="120">
        </el-table-column>
        <el-table-column
            prop="startCharge"
            label="起始电量（Kw.h）"
            width="120">
        </el-table-column>
        <el-table-column
            prop="endCharge"
            label="终止电量（Kw.h）"
            width="120">
        </el-table-column>
        <el-table-column
            prop="runningTime"
            label="运行时长"
            width="120">
        </el-table-column>
        <el-table-column
            prop="electricity"
            label="本炉电耗（Kw.h）"
            width="120">
        </el-table-column>
        <el-table-column
            prop="tonElectricity"
            label="吨电耗（Kw.h）/t"
            width="120">
        </el-table-column>

      </el-table>
    </div>
    <div style="background-color: #c0c4cc;padding: 10px 10px">重卷工序详细信息</div>
    <div style="background-color: white;padding: 10px 10px">
      <el-table
          :data="rewindData"
          style="width: 100%"
          height="250">
        <el-table-column
            fixed
            prop="produceNum"
            label="生产批号"
            width="150">
        </el-table-column>
        <el-table-column
            fixed
            prop="cutTime"
            label="切边时间"
            width="120">
        </el-table-column>
        <el-table-column
            prop="mainExercise"
            label="主操"
            width="120">
        </el-table-column>
        <el-table-column
            prop="sailings"
            label="班次"
            width="120">
        </el-table-column>
        <el-table-column
            prop="productOrder"
            label="生产顺序"
            width="120">
        </el-table-column>
        <el-table-column
            prop="incomingWidth"
            label="来料宽度"
            width="120">
        </el-table-column>
        <el-table-column
            prop="cutWidth"
            label="成品切边宽度"
            width="120">
        </el-table-column>
        <el-table-column
            prop="cutTension"
            label="剪切张力"
            width="120">
        </el-table-column>
        <el-table-column
            prop="cutSpeed"
            label="剪切速度"
            width="120">
        </el-table-column>
        <el-table-column
            prop="knifeGap"
            label="刀缝间隙"
            width="120">
        </el-table-column>
        <el-table-column
            prop="rewindWeight"
            label="重卷成品重量"
            width="120">
        </el-table-column>
        <el-table-column
            prop="head"
            label="头料M"
            width="120">
        </el-table-column>
        <el-table-column
            prop="causeHead"
            label="甩除原因"
            width="120">
        </el-table-column>
        <el-table-column
            prop="tail"
            label="尾料M"
            width="120">
        </el-table-column>
        <el-table-column
            prop="causeTail"
            label="甩除原因"
            width="120">
        </el-table-column>
        <el-table-column
            prop="quality"
            label="整卷质量情况"
            width="120">
        </el-table-column>
        <el-table-column
            prop="sleeve"
            label="套筒规格"
            width="120">
        </el-table-column>

      </el-table>
    </div>

    <div>
      <!--料温温度折线趋势图-->
      <div class="graph-doubleLine-warp">
        <el-row :gutter="20">
          <el-col :span="16">
            <div class="selection-box" style="background-color: #c0c4cc;padding: 10px 10px">
              料温温度曲线图:
            </div>
          </el-col>
          <el-col :span="8">
            <div class="selection-box">
              <el-date-picker
                  v-model="selectGatheringTime"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <div id="home_DoubleLine" style="width: 100%;height: 250px;"></div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
// 折线图
import ECharts from 'echarts'

let lineDefaultOpt = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    bottom: 0,
    left: 'center'
  },
  grid: {
    left: 30,
    bottom: 50,
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    name: '时间',
    type: 'category',
    boundaryGap: false,
    axisLine: {
      lineStyle: {
        color: ['#666666'],
        width: 1,
        type: 'solid'
      }
    }
  },
  yAxis: {
    name: '温度',
    type: 'value',
    boundaryGap: ['0%', '20%'],
    axisLine: {
      lineStyle: {
        color: ['#666666'],
        width: 1,
        type: 'solid'
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#C4C4C4',
        width: 1,
        type: 'dashed'
      }
    }
  },
  series: []
}
export default {
  data() {
    return {
      // 料温温度折线图
      doubleLineOption: lineDefaultOpt,
      selectGatheringTime: [],
      input: '',
      lenzhaData: [{
        orderUnit: '湖北丹江口',
        productNum: 'ADVBGNP2378',
        alloyNum: 'DSG98',
        blankWeight: '11154KG',
        mainExercise: '张三',
        shift: 'dsg82',
        productNumber: '正常',
        inletThickness: '11CM',
        outThickness: '1CM',
        width: '11CM',
        unwinding: '12',
        coiling: '11',
        zhazhiSpeed: '11',
        zhazhiTemperature: '11',
        zhazhiFlow: '11',
        airTemperature: '11',
        pressure: '11',
        AFC: '11',
        rolling: '11',
        inletWeight: '11',
        outWeight: '11',
        zhaNum: '11'
      }, {
        orderUnit: '湖北丹江口',
        productNum: 'ADVBGNP2378',
        alloyNum: 'DSG98',
        blankWeight: '11154KG',
        mainExercise: '张三',
        shift: 'dsg82',
        productNumber: '正常',
        inletThickness: '11CM',
        outThickness: '1CM',
        width: '11CM',
        unwinding: '12',
        coiling: '11',
        zhazhiSpeed: '11',
        zhazhiTemperature: '11',
        zhazhiFlow: '11',
        airTemperature: '11',
        pressure: '11',
        AFC: '11',
        rolling: '11',
        inletWeight: '11',
        outWeight: '11',
        zhaNum: '11'
      }, {
        orderUnit: '湖北丹江口',
        productNum: 'ADVBGNP2378',
        alloyNum: 'DSG98',
        blankWeight: '11154KG',
        mainExercise: '张三',
        shift: 'dsg82',
        productNumber: '正常',
        inletThickness: '11CM',
        outThickness: '1CM',
        width: '11CM',
        unwinding: '12',
        coiling: '11',
        zhazhiSpeed: '11',
        zhazhiTemperature: '11',
        zhazhiFlow: '11',
        airTemperature: '11',
        pressure: '11',
        AFC: '11',
        rolling: '11',
        inletWeight: '11',
        outWeight: '11',
        zhaNum: '11'
      }, {
        orderUnit: '湖北丹江口',
        productNum: 'ADVBGNP2378',
        alloyNum: 'DSG98',
        blankWeight: '11154KG',
        mainExercise: '张三',
        shift: 'dsg82',
        productNumber: '正常',
        inletThickness: '11CM',
        outThickness: '1CM',
        width: '11CM',
        unwinding: '12',
        coiling: '11',
        zhazhiSpeed: '11',
        zhazhiTemperature: '11',
        zhazhiFlow: '11',
        airTemperature: '11',
        pressure: '11',
        AFC: '11',
        rolling: '11',
        inletWeight: '11',
        outWeight: '11',
        zhaNum: '11'
      }, {
        orderUnit: '湖北丹江口',
        productNum: 'ADVBGNP2378',
        alloyNum: 'DSG98',
        blankWeight: '11154KG',
        mainExercise: '张三',
        shift: 'dsg82',
        productNumber: '正常',
        inletThickness: '11CM',
        outThickness: '1CM',
        width: '11CM',
        unwinding: '12',
        coiling: '11',
        zhazhiSpeed: '11',
        zhazhiTemperature: '11',
        zhazhiFlow: '11',
        airTemperature: '11',
        pressure: '11',
        AFC: '11',
        rolling: '11',
        inletWeight: '11',
        outWeight: '11',
        zhaNum: '11'
      }, {
        orderUnit: '湖北丹江口',
        productNum: 'ADVBGNP2378',
        alloyNum: 'DSG98',
        blankWeight: '11154KG',
        mainExercise: '张三',
        shift: 'dsg82',
        productNumber: '正常',
        inletThickness: '11CM',
        outThickness: '1CM',
        width: '11CM',
        unwinding: '12',
        coiling: '11',
        zhazhiSpeed: '11',
        zhazhiTemperature: '11',
        zhazhiFlow: '11',
        airTemperature: '11',
        pressure: '11',
        AFC: '11',
        rolling: '11',
        inletWeight: '11',
        outWeight: '11',
        zhaNum: '11'
      }, {
        orderUnit: '湖北丹江口',
        productNum: 'ADVBGNP2378',
        alloyNum: 'DSG98',
        blankWeight: '11154KG',
        mainExercise: '张三',
        shift: 'dsg82',
        productNumber: '正常',
        inletThickness: '11CM',
        outThickness: '1CM',
        width: '11CM',
        unwinding: '12',
        coiling: '11',
        zhazhiSpeed: '11',
        zhazhiTemperature: '11',
        zhazhiFlow: '11',
        airTemperature: '11',
        pressure: '11',
        AFC: '11',
        rolling: '11',
        inletWeight: '11',
        outWeight: '11',
        zhaNum: '11'
      }],
      tuihuoData: [{
        annealDate: '2222-05-03',
        alloy: 'SDG89FD',
        anneal: '15CM',
        rollNum: '15个',
        totalAmount: '111个',
        furnaceNum: 200333,
        furnaceLocation: '无',
        furnaceTime: '2022年3月3号',
        annealTime: '11小时35分钟',
        furnaceStaff: '张三',
        outStaff: '李四',
        furnaceTemperature: '110度',
        outTemperature: '110度',
        temperatureContro: '110度',
        startCharge: '111伏',
        endCharge: '119伏',
        runningTime: '11小时',
        electricity: '11',
        tonElectricity: '11'
      }],
      rewindData: [{
        produceNum: 'SDG89Q',
        cutTime: '2222-05-03',
        mainExercise: '张三',
        sailings: 'SDG87',
        productOrder: '正常',
        incomingWidth: '20CM',
        cutWidth: '12CM',
        cutTension: '11',
        cutSpeed: '11岶',
        knifeGap: '11CM',
        rewindWeight: '12吨',
        head: '11吨',
        causeHead: '不合格',
        tail: '11吨',
        causeTail: '不合格',
        quality: '11',
        sleeve: '11'
      }]
    }
  },
  mounted() {
    this.getDoubleLineData()// 收款折线数据
  },
  methods: {
    /**
     * eChart初始化 params:
     * domId :传入DomId
     * theme: eChart 的 主题
     * opt: 初始值
     */
    eChartsInit(domId, theme, opt) {
      ECharts.init(document.getElementById(domId), theme).setOption(opt)
      window.addEventListener('resize', () => {
        ECharts.init(document.getElementById(domId), theme).resize()
      })
    },
    // 获取折线数据
    getDoubleLineData() {
      var arr = [100, 600, 300, 400, 200]
      var arr2 = ['2021-01-01', '2021-01-02', '2021-01-03', '2021-01-04', '2021-01-05']
      var list = [{
        type: 'line',
        symbol: 'circle',
        symbolSize: [5, 5],
        data: arr
      }, { type: 'line', symbol: 'circle', symbolSize: [5, 5], data: arr2 }]
      this.doubleLineOption.series = list
      this.doubleLineOption.xAxis.data = arr2
      this.eChartsInit('home_DoubleLine', 'light', this.doubleLineOption)
    }
  }
}
</script>

<style scoped="sass">

</style>
