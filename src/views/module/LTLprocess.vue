<template xmlns:display="http://www.w3.org/1999/xhtml">
  <div>
    <div style="background-color: #46b9b9;padding: 10px 10px">
      模块功能说明：这是冷轧工序的功能模块，该模块主要查询显示冷轧退火的详细信息。在下方输入框输入对应的计划单号、熔次号或者冷轧卷号即可查询冷轧生产的流程信息。样例可输入冷轧卷号（4002D122、1002A122）
    </div>
    <div style="background-color: white;padding: 20px 10px">
      <el-input v-model="queryParams.reelNum" size="small" placeholder="请输入计划单号/请输入熔次号/请输入冷轧卷号" :clearable="true">
        <el-button slot="append"	style="background-color: #409EFF;color: white;line-height: 15px;" size="small" @click="query(queryParams.reelNum)">
          查询
        </el-button>
      </el-input>
      <div align="center">
        <span style="line-height: 50px;" size="mini">当前生产流程：{{ nowProduct }} </span>
      </div>

    </div>

    <div style="background-color: white;padding: 10px 10px">
      <el-steps :active="active" align-center>
        <el-step title="冷轧" description=" " />
        <el-step title="退火" description=" " />
        <el-step title="冷轧" description=" " />
        <el-step title="重卷剪切" description=" " />
      </el-steps>
    </div>
    <div style="background-color: #c0c4cc;padding: 10px 10px">冷轧工序详细信息</div>
    <div style="background-color: white;padding: 10px 10px">
      <el-table
        :data="lenzhagongxuData"
        style="width: 100%"
        height="250"
      >
        <el-table-column
          prop="planId"
          label="计划id"
          width="150"
        />
        <el-table-column
          prop="consumerName"
          label="订货单位"
          width="120"
        />
        <el-table-column
          prop="reelNum"
          label="(铸轧卷号)来料卷号"
          width="120"
        />
        <el-table-column
          prop="batchNum"
          label="冷轧卷号"
          width="120"
        />
        <el-table-column
          prop="brand"
          label="合金牌号"
          width="120"
        />
        <el-table-column
          prop="productUse"
          label="用途"
          width="120"
        />
        <el-table-column
          prop="blankSize"
          label="来料厚宽"
          width="120"
        />
        <el-table-column
          prop="blankWeight"
          label="坯料重量"
          width="120"
        />
        <el-table-column
          prop="deliveryDate"
          label="预定交货日期"
          width="120"
        />
        <el-table-column
          prop="productThick"
          label="成品厚度"
          width="120"
        />
        <el-table-column
          prop="productWidth"
          label="成品宽度"
          width="120"
        />
        <el-table-column
          prop="productStatus"
          label="成品状态"
          width="120"
        />
        <el-table-column
          prop="annealingThick"
          label="退火厚度"
          width="120"
        />
        <el-table-column
          prop="coggingTime"
          label="开坯时间"
          width="120"
        />
        <el-table-column
          prop="coggingGroupId"
          label="开坯班组id"
          width="120"
        />
        <el-table-column
          prop="coggingGroupName"
          label="开坯班组名称"
          width="120"
        />
        <el-table-column
          prop="coggingWorkShift"
          label="班次"
          width="120"
        />
        <el-table-column
          prop="coggingOrder"
          label="顺序"
          width="120"
        />
        <el-table-column
          prop="midRollTime"
          label="中轧时间"
          width="120"
        />
        <el-table-column
          prop="midRollGroupId"
          label="中轧班组id"
          width="150"
        />
        <el-table-column
          prop="midRollGroupName"
          label="中轧班组名称"
          width="120"
        />
        <el-table-column
          prop="midRollWorkShift"
          label="班次"
          width="120"
        />
        <el-table-column
          prop="midRollOrder"
          label="顺序"
          width="120"
        />
        <el-table-column
          prop="midRollWeight"
          label="中轧重量"
          width="120"
        />
        <el-table-column
          prop="planishTime"
          label="精轧时间"
          width="120"
        />
        <el-table-column
          prop="planishGroupId"
          label="精轧班组id"
          width="120"
        />
        <el-table-column
          prop="planishGroupName"
          label="精轧班组名称"
          width="120"
        />
        <el-table-column
          prop="planishWorkShift"
          label="班次"
          width="120"
        />
        <el-table-column
          prop="planishOrder"
          label="顺序"
          width="120"
        />
        <el-table-column
          prop="coldProductWeight"
          label="冷轧成品重量"
          width="120"
        />
        <el-table-column
          prop="plateCut"
          label="板型情况"
          width="120"
        />
        <el-table-column
          prop="coldTailing26"
          label="冷轧0.26尾料"
          width="120"
        />
        <el-table-column
          prop="coldTailing6"
          label="冷轧0.6尾料"
          width="120"
        />
        <el-table-column
          prop="cutSpeed"
          label="剪切速度"
          width="120"
        />
        <el-table-column
          prop="cutTime"
          label="切 边时 间"
          width="120"
        />
        <el-table-column
          prop="cutWorkShift"
          label="班次"
          width="120"
        />
        <el-table-column
          prop="cutGroupId"
          label="切边班组id"
          width="120"
        />
        <el-table-column
          prop="cutGroupName"
          label="切边班组名称"
          width="120"
        />
        <el-table-column
          prop="cutSizeH"
          label="成品切边厚度(mm)"
          width="150"
        />
        <el-table-column
          prop="cutSizeW"
          label="成品切边宽度(mm)"
          width="120"
        />
        <el-table-column
          prop="recoilingWeight"
          label="重卷成品重量"
          width="120"
        />
        <el-table-column
          prop="modelDesc"
          label="版型情况"
          width="120"
        />
        <el-table-column
          prop="produceStatus"
          label="生产状态"
          width="120"
        />
        <el-table-column
          prop="storageInTime"
          label="入库时间"
          width="120"
        />
        <el-table-column
          prop="storageInWeight"
          label="入库重量"
          width="120"
        />
        <el-table-column
          prop="reformPlanNum"
          label="改制计划号"
          width="120"
        />
        <el-table-column
          prop="coldYield"
          label="冷轧成品率"
          width="120"
        />
        <el-table-column
          prop="rereelYield"
          label="重卷成品率"
          width="120"
        />
        <el-table-column
          prop="offLineYield"
          label="下线成品率"
          width="120"
        />
        <el-table-column
          prop="storageInYield"
          label="入库成品率"
          width="120"
        />
        <el-table-column
          prop="rereelHeading"
          label="重卷头料"
          width="120"
        />
        <el-table-column
          prop="rereelTailing"
          label="重卷尾料"
          width="120"
        />
        <el-table-column
          prop="heading"
          label="头料M"
          width="120"
        />
        <el-table-column
          prop="headingReason"
          label="甩除原因"
          width="120"
        />
        <el-table-column
          prop="tailing"
          label="尾料M"
          width="120"
        />
        <el-table-column
          prop="tailingReason"
          label="甩除原因"
          width="120"
        />
        <el-table-column
          prop="headingWeight"
          label="头料总重"
          width="120"
        />
        <el-table-column
          prop="tailingWeight"
          label="尾料总重"
          width="150"
        />
        <el-table-column
          prop="qcDesc"
          label="整卷质量情况"
          width="120"
        />
        <el-table-column
          prop="qcId"
          label="质检员ID"
          width="120"
        />
        <el-table-column
          prop="qcName"
          label="质检员姓名"
          width="120"
        />
        <el-table-column
          prop="sleeve"
          label="套筒"
          width="120"
        />
        <el-table-column
          prop="hotRoll"
          label="热轧卷"
          width="120"
        />
        <el-table-column
          prop="remark"
          label="备注"
          width="120"
        />
        <el-table-column
          prop="creatorId"
          label="创建人ID"
          width="120"
        />
        <el-table-column
          prop="creatorName"
          label="创建人名称"
          width="120"
        />
        <el-table-column
          prop="reviserId"
          label="修改人id"
          width="120"
        />
        <el-table-column
          prop="deleteFlag"
          label="逻辑删除，是否删除 :0、未删除；1、删除"
          width="120"
        />
        <el-table-column
          prop="createTime"
          label="创建时间"
          width="120"
        />
        <el-table-column
          prop="ts"
          label="修改时间"
          width="120"
        />

      </el-table>
    </div>
    <div style="background-color: #c0c4cc;padding: 10px 10px">退火工序详细信息</div>
    <div style="background-color: white;padding: 10px 10px">
      <el-table
        :data="tuihuoData"
        style="width: 100%"
        height="250"
      >
        <el-table-column
          fixed
          prop="annealDate"
          label="退火日期"
          width="150"
        />
        <el-table-column
          fixed
          prop="alloy"
          label="合金"
          width="120"
        />
        <el-table-column
          prop="anneal"
          label="退火厚度"
          width="120"
        />
        <el-table-column
          prop="rollNum"
          label="卷数(个)"
          width="120"
        />
        <el-table-column
          prop="totalAmount"
          label="装炉总量"
          width="120"
        />
        <el-table-column
          prop="furnaceNum"
          label="装炉炉号"
          width="120"
        />
        <el-table-column
          prop="furnaceLocation"
          label="装炉位置"
          width="120"
        />
        <el-table-column
          prop="furnaceTime"
          label="装炉时间"
          width="120"
        />
        <el-table-column
          prop="annealTime"
          label="退火总用时"
          width="120"
        />
        <el-table-column
          prop="furnaceStaff"
          label="装炉人员"
          width="120"
        />
        <el-table-column
          prop="outStaff"
          label="出炉人员"
          width="120"
        />
        <el-table-column
          prop="furnaceTemperature"
          label="装炉料温"
          width="120"
        />
        <el-table-column
          prop="outTemperature"
          label="出炉料温"
          width="120"
        />
        <el-table-column
          prop="temperatureContro"
          label="料温控制/炉气控制"
          width="120"
        />
        <el-table-column
          prop="startCharge"
          label="起始电量（Kw.h）"
          width="120"
        />
        <el-table-column
          prop="endCharge"
          label="终止电量（Kw.h）"
          width="120"
        />
        <el-table-column
          prop="runningTime"
          label="运行时长"
          width="120"
        />
        <el-table-column
          prop="electricity"
          label="本炉电耗（Kw.h）"
          width="120"
        />
        <el-table-column
          prop="tonElectricity"
          label="吨电耗（Kw.h）/t"
          width="120"
        />
      </el-table>
    </div>
    <div style="background-color: #c0c4cc;padding: 10px 10px">重卷工序详细信息</div>
    <div style="background-color: white;padding: 10px 10px">
      <el-table
        :data="rewindData"
        style="width: 100%"
        height="250"
      >
        <el-table-column
          fixed
          prop="produceNum"
          label="生产批号"
          width="150"
        />
        <el-table-column
          fixed
          prop="cutTime"
          label="切边时间"
          width="120"
        />
        <el-table-column
          prop="mainExercise"
          label="主操"
          width="120"
        />
        <el-table-column
          prop="sailings"
          label="班次"
          width="120"
        />
        <el-table-column
          prop="productOrder"
          label="生产顺序"
          width="120"
        />
        <el-table-column
          prop="incomingWidth"
          label="来料宽度"
          width="120"
        />
        <el-table-column
          prop="cutWidth"
          label="成品切边宽度"
          width="120"
        />
        <el-table-column
          prop="cutTension"
          label="剪切张力"
          width="120"
        />
        <el-table-column
          prop="cutSpeed"
          label="剪切速度"
          width="120"
        />
        <el-table-column
          prop="knifeGap"
          label="刀缝间隙"
          width="120"
        />
        <el-table-column
          prop="rewindWeight"
          label="重卷成品重量"
          width="120"
        />
        <el-table-column
          prop="head"
          label="头料M"
          width="120"
        />
        <el-table-column
          prop="causeHead"
          label="甩除原因"
          width="120"
        />
        <el-table-column
          prop="tail"
          label="尾料M"
          width="120"
        />
        <el-table-column
          prop="causeTail"
          label="甩除原因"
          width="120"
        />
        <el-table-column
          prop="quality"
          label="整卷质量情况"
          width="120"
        />
        <el-table-column
          prop="sleeve"
          label="套筒规格"
          width="120"
        />

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
                value-format="yyyy-MM-dd"
              />
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <div id="home_DoubleLine" style="width: 100%;height: 250px;" />
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
// 折线图
import ECharts from 'echarts'
import { getColdProduceList } from '@/api/ImdpColdProduce'
import { getColdFurnaceRecordList } from '@/api/ImdpColdFurnaceRecord'
import { getColdRereelerRecordList } from '@/api/ImdpColdRereelerRecord'
import { getColdStoreRecordList } from '@/api/ImdpColdStoreRecord'

const lineDefaultOpt = {
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
      // 查询参数
      queryParams: {
        produceId: ''
      },
      nowProduct: null,
      produceTitle: ['冷轧工序', '退火工序', '重卷工序', '出入库记录'],
      // 料温温度折线图
      doubleLineOption: lineDefaultOpt,
      selectGatheringTime: [],
      monitorData: [],
      input: '',
      lenzhagongxuData: [{
        planId: ' ',
        consumerName: ' ',
        coldreductionstripNum: ' ',
        reelNum: ' ',
        batchNum: ' ',
        brand: ' ',
        productUse: '',
        blankSize: ' ',
        blankWeight: ' ',
        deliveryDate: ' ',
        productThick: ' ',
        productWidth: ' ',
        productStatus: ' ',
        annealingThick: '',
        coggingTime: ' ',
        coggingGroupId: ' ',
        coggingGroupName: ' ',
        coggingWorkShift: ' ',
        coggingOrder: ' ',
        midRollTime: ' ',
        midRollGroupId: '',
        midRollGroupName: ' ',
        midRollWorkShift: ' ',
        midRollOrder: ' ',
        midRollWeight: ' ',
        planishTime: ' ',
        planishGroupId: ' ',
        planishGroupName: '',
        planishWorkShift: ' ',
        planishOrder: ' ',
        coldProductWeight: ' ',
        plateCut: ' ',
        coldTailing26: ' ',
        coldTailing6: ' ',
        cutSpeed: '',
        cutTime: ' ',
        cutWorkShift: ' ',
        cutGroupId: ' ',
        cutGroupName: ' ',
        cutSizeH: ' ',
        cutSizeW: ' ',
        recoilingWeight: '',
        modelDesc: '',
        produceStatus: ' ',
        storageInTime: ' ',
        storageInWeight: ' ',
        reformPlanNum: ' ',
        coldYield: ' ',
        rereelYield: ' ',
        offLineYield: '',
        storageInYield: ' ',
        rereelHeading: ' ',
        rereelTailing: ' ',
        heading: ' ',
        headingReason: ' ',
        tailing: ' ',
        tailingReason: ' ',
        headingWeight: ' ',
        tailingWeight: '',
        qcDesc: '',
        qcId: ' ',
        qcName: ' ',
        sleeve: ' ',
        hotRoll: ' ',
        remark: ' ',
        creatorId: ' ',
        creatorName: '',
        reviserId: ' ',
        deleteFlag: ' ',
        createTime: ' ',
        ts: ' '
      }],
      tuihuoData: [{
        ts: ' ',
        creatorId: ' ',
        createTime: ' ',
        batchNum: ' ',
        furnaceNum: ' ',
        startTime: '',
        endTime: ' ',
        totalTime: ' ',
        gasTemperature1: ' ',
        gasTemperature2: ' ',
        gasTemperature3: ' ',
        materialTemperature1: ' ',
        materialTemperature2: '',
        hydraulicPressure: ' ',
        gasPressure: ' ',
        intakeFanTemperature: ' ',
        exhaustFanTemperature: ' ',
        cycleFanTemperature1: ' ',
        cycleFanTemperature2: ' ',
        cycleFanTemperature3: '',
        remark: ' ',
        operator: ' ',
        annealingThick: ' ',
        furnaceCardNumber: ' ',
        brand: ' ',
        rollNum: ' ',
        furnaceTotal: '',
        furnacePosition: ' ',
        furnaceOperator1: ' ',
        furnaceOperator2: ' ',
        tempPowerControl: ' ',
        powerBefore: ' ',
        powerAfter: ' ',
        runningDuring: '',
        powerLoss: ' ',
        perPowerLoss: ' '
      }],
      rewindData: [{
        ts: ' ',
        creatorId: ' ',
        mainOperator: ' ',
        assistantOperator: ' ',
        workShift: '',
        recordDate: ' ',
        createTime: ' ',
        brand: ' ',
        productName: ' ',
        reelNum: ' ',
        originRegular: ' ',
        batchNum: '',
        processedRegular: ' ',
        machineSpeed: ' ',
        reelingTensileStress: ' ',
        knifeGap: ' ',
        originWeight: ' ',
        processedWeight: ' ',
        wasteMaterialHead: '',
        wasteMaterialTail: ' ',
        wasteMaterialElse: ' ',
        quality: ' ',
        result: ' ',
        confirmer: ' ',
        recordNum: ' ',
        headTailWasteMeters: '',
        abnormalWasteReason: ' ',
        surfaceQualityDesc: ' ',
        wasteTrimmingWeight: ' ',
        wasteOffLineWeight: ' ',
        wasteProductWeight: ' ',
        trimmingTime: ' ',
        produceOrder: '',
        originWidth: ' ',
        finishedTrimmingWidth: ' ',
        shearTension: ' ',
        shearSpeed: '',
        rereelerFinishedWeight: ' ',
        headRejectReason: ' ',
        tailRejectReason: ' ',
        sleeveSpecification: ' ',
        operateType: '',
        workGroup: ' ',
        rereelerCardNumber: ' '
      }],
      lenzharukuData: [{
        area: ' ',
        shelves: ' ',
        reelNum: ' ',
        brand: ' ',
        weight: '',
        plateCut: ' ',
        productUse: ' ',
        consumerName: ' ',
        storerId: ' ',
        storageTime: ' ',
        creatorId: ' ',
        createTime: '',
        ts: ' ',
        productType: ' '
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
    // 查询功能
    query() {
      this.getList()
    },
    /**
     * 获取表格数据
     */
    async getList() {
      this.monitorData = []

      // 冷轧工序
      const { data: lmdpColdProduce } = await getColdProduceList(this.queryParams)
      console.log('冷轧生产的数据', lmdpColdProduce)
      this.monitorData.push(lmdpColdProduce[0])
      this.lenzhagongxuData = lmdpColdProduce
      this.active = 1
      this.nowProduct = this.produceTitle[0]

      // 退火
      const { data: lmdpCFRL } = await getColdFurnaceRecordList({ batchNum: lmdpColdProduce[0].batchNum })
      this.monitorData.push(lmdpCFRL[0])
      // this.stepData[12].description = '创建时间:' + this.monitorData[12].createTime + '冷轧卷号:' + this.monitorData[12].batchNum + '退火日期:' + this.monitorData[12].recordDate + '退火炉号:' + this.monitorData[12].furnaceNum + '退火开始时间:' + this.monitorData[12].startTime + '退火结束时间:' + this.monitorData[12].endTime + '炉气温度(℃)Ⅰ区:' + this.monitorData[12].gasTemperature1 + '炉气温度(℃)ⅠI区:' + this.monitorData[12].gasTemperature2 + '炉气温度(℃)ⅠII区:' + this.monitorData[12].gasTemperature3 + '水压MPa:' + this.monitorData[12].hydraulicPressure + '气压MPa:' + this.monitorData[12].gasPressure
      this.tuihuoData = lmdpCFRL
      this.active = 2
      this.nowProduct = this.produceTitle[1]

      // 重卷工序
      const { data: lmdpQRRecord } = await getColdRereelerRecordList({ batchNum: lmdpColdProduce[0].batchNum })
      this.monitorData.push(lmdpQRRecord[0])
      // this.stepData[12].description = '创建时间:' + this.monitorData[12].createTime + '冷轧卷号:' + this.monitorData[12].batchNum + '退火日期:' + this.monitorData[12].recordDate + '退火炉号:' + this.monitorData[12].furnaceNum + '退火开始时间:' + this.monitorData[12].startTime + '退火结束时间:' + this.monitorData[12].endTime + '炉气温度(℃)Ⅰ区:' + this.monitorData[12].gasTemperature1 + '炉气温度(℃)ⅠI区:' + this.monitorData[12].gasTemperature2 + '炉气温度(℃)ⅠII区:' + this.monitorData[12].gasTemperature3 + '水压MPa:' + this.monitorData[12].hydraulicPressure + '气压MPa:' + this.monitorData[12].gasPressure
      this.rewindData = lmdpQRRecord
      this.active = 3
      this.nowProduct = this.produceTitle[2]

      // 出入库记录（冷轧）
      const { data: lmdpCSRL } = await getColdStoreRecordList({ reelNum: lmdpQRRecord[0].batchNum })
      this.monitorData.push(lmdpCSRL[0])
      this.lenzharukuData = lmdpCSRL
      this.nowProduct = this.produceTitle[3]
      this.active = 3
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
