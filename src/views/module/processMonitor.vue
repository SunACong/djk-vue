<template>
  <div class="app-container" style="background-color: white">
    <div style="font-size: 15px;color: black;margin-right: 3px;">
      模块功能说明：这是整体生产流程功能模块，该模块主要查询整个生产流程步骤的状态，流程步骤下方是每个流程的详细信息，在下方输入框输入计划单号/熔次号/冷轧卷号可以查询整个生产流程的状态。
    </div>
    <div style="background-color: white;padding: 20px 20px">
      <div style="display: flex;">
        <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" /></div>
        <span style="line-height: 20px; width:200px">生产流程监视</span>
        <div>
          <el-input v-model="queryParams.produceId" size="small" placeholder="计划单号/熔次号/冷轧卷号" :clearable="true">
            <el-button slot="append"	style="background-color: #409EFF;color: white;line-height: 15px;" size="small" @click="query(queryParams.produceId)">
              查询
            </el-button>
          </el-input>
        </div>
      </div>
      <div align="center" style="color: #000000">

        <span style="line-height: 90px;" size="mini">当前生产流程：{{ nowProduct }} </span>

      </div>
      <div>
        <CustomStep :steps-data="stepData" :active="active" />
      </div>
    </div>
    <div>
      <div style="background-color: #c0c4cc;padding: 10px 10px">铸轧计划工序详细信息</div>
      <div style="background-color: white;padding: 10px 10px">
        <el-table
            :data="zhuzhaData"
            style="width: 100%"
            height="350">
          <el-table-column
              prop="planId"
              label="主键"
              width="150">
          </el-table-column>
          <el-table-column
              prop="deleteFlag"
              label="逻辑删除"
              width="120">
          </el-table-column>
          <el-table-column
              prop="createTime"
              label="创建时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="createUser"
              label="创建人"
              width="120">
          </el-table-column>
          <el-table-column
              prop="lastmodifyTime"
              label="最后修改时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="lastmodifyUser"
              label="最后修改人"
              width="120">
          </el-table-column>
          <el-table-column
              prop="produceId"
              label="生产计划编号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="productionUnitA"
              label="生产单位A"
              width="120">
          </el-table-column>
          <el-table-column
              prop="deliveredTimeA"
              label="交货日期A"
              width="120">
          </el-table-column>
          <el-table-column
              prop="productionUnitB"
              label="生产单位B"
              width="120">
          </el-table-column>
          <el-table-column
              prop="deliveredTimeB"
              label="交货日期B"
              width="120">
          </el-table-column>
          <el-table-column
              prop="fe"
              label="Fe%"
              width="120">
          </el-table-column>
          <el-table-column
              prop="si"
              label="Si%"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cu"
              label="Cu%"
              width="120">
          </el-table-column>
          <el-table-column
              prop="ti"
              label="Ti%"
              width="120">
          </el-table-column>
          <el-table-column
              prop="mn"
              label="Mn%"
              width="120">
          </el-table-column>
          <el-table-column
              prop="zn"
              label="Zn%"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cr"
              label="Zr%"
              width="120">
          </el-table-column>
          <el-table-column
              prop="mg"
              label="Mg%"
              width="120">
          </el-table-column>
          <el-table-column
              prop="otherSingle"
              label="其他-单个"
              width="120">
          </el-table-column>
          <el-table-column
              prop="otherTotal"
              label="其他-总和"
              width="120">
          </el-table-column>
          <el-table-column
              prop="ai"
              label="AI%"
              width="120">
          </el-table-column>
          <el-table-column
              prop="thicknessDev"
              label="厚度偏差mm"
              width="120">
          </el-table-column>
          <el-table-column
              prop="widthDev"
              label="宽度偏差mm"
              width="120">
          </el-table-column>
          <el-table-column
              prop="doubleDev"
              label="两边板厚差mm"
              width="120">
          </el-table-column>
          <el-table-column
              prop="convexity"
              label="中凸度%"
              width="120">
          </el-table-column>
          <el-table-column
              prop="convexityAvg"
              label="平均中凸度%"
              width="120">
          </el-table-column>
          <el-table-column
              prop="infeedPoint"
              label="横向相临两点差值"
              width="120">
          </el-table-column>
          <el-table-column
              prop="endwiseThickness"
              label="纵向相临两点差值"
              width="120">
          </el-table-column>
          <el-table-column
              prop="presentationQuality"
              label="铸轧坯料外观质量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="insideQuality"
              label="铸轧坯料内在质量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="qualityProject"
              label="质检项目"
              width="120">
          </el-table-column>
          <el-table-column
              prop="otherDemand"
              label="其他要求"
              width="120">
          </el-table-column>
          <el-table-column
              prop="planningEngineer"
              label="计划工程师"
              width="120">
          </el-table-column>
          <el-table-column
              prop="checker"
              label="审核人"
              width="120">
          </el-table-column>
          <el-table-column
              prop="drawupTime"
              label="制定日期"
              width="120">
          </el-table-column>
          <el-table-column
              prop="type"
              label="计划类型"
              width="120">
          </el-table-column>
          <el-table-column
              prop="client"
              label="客户名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="productuse"
              label="产品用途"
              width="120">
          </el-table-column>
          <el-table-column
              prop="state"
              label="合金状态"
              width="120">
          </el-table-column>
          <el-table-column
              prop="specification"
              label="铸轧带材规格（mm）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="rollspecification"
              label="铸轧卷规格（mm）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="inside"
              label="内径/管芯材质"
              width="120">
          </el-table-column>
          <el-table-column
              prop="scope"
              label="卷径范围（mm）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="weight"
              label="单卷重量（吨)"
              width="120">
          </el-table-column>
          <el-table-column
              prop="count"
              label="卷数"
              width="120">
          </el-table-column>
          <el-table-column
              prop="allweight"
              label="总重量（吨）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="deliveredTimeA2"
              label="交货日期A2"
              width="120">
          </el-table-column>
          <el-table-column
              prop="deliveredTimeB2"
              label="交货日期B2"
              width="120">
          </el-table-column>
          <el-table-column
              prop="productneedsId"
              label="所属产品需求"
              width="120">
          </el-table-column>
          <el-table-column
              prop="other"
              label="待确认"
              width="120">
          </el-table-column>
          <el-table-column
              prop="remark"
              label="备注"
              width="120">
          </el-table-column>
          <el-table-column
              prop="finished"
              label="计划完成状态"
              width="120">
          </el-table-column>
          <el-table-column
              prop="sleeveWidth"
              label="套筒长度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="sleevePath"
              label="套筒直径"
              width="120">
          </el-table-column>
          <el-table-column
              prop="alloyNumber"
              label="合金牌号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="ni"
              label="Ni%"
              width="120">
          </el-table-column>
          <el-table-column
              prop="dataName"
              label="执行标准"
              width="120">
          </el-table-column>
          <el-table-column
              prop="dataId"
              label="铸轧坯料生产计划数据字典id"
              width="120">
          </el-table-column>
          <el-table-column
              prop="castflowId"
              label="待确认"
              width="120">
          </el-table-column>
          <el-table-column
              prop="castflowName"
              label="待确认"
              width="120">
          </el-table-column>
          <el-table-column
              prop="reviewNumber"
              label="订单评审编号"
              width="120">
          </el-table-column>
        </el-table>
      </div>
      <div style="background-color: #c0c4cc;padding: 10px 10px">熔炉生产工序详细信息</div>
      <div style="background-color: white;padding: 10px 10px">
        <el-table
            :data="rongluData"
            style="width: 100%"
            height="250">
          <el-table-column

              prop="planId"
              label="关联计划ID"
              width="150">
          </el-table-column>
          <el-table-column

              prop="smeltTimes"
              label="熔次号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="heatNum"
              label="生产线号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="brand"
              label="牌号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="feedTime"
              label="装炉时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="feedGroupId"
              label="装炉班组ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="feedGroupName"
              label="装炉班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="gasPrepValue"
              label="燃气表显示值"
              width="120">
          </el-table-column>
          <el-table-column
              prop="stuffAlPig"
              label="铝锭99.70％"
              width="120">
          </el-table-column>
          <el-table-column
              prop="stuffCastReel"
              label="铸轧卷"
              width="120">
          </el-table-column>
          <el-table-column
              prop="stuffBig"
              label="大块料"
              width="120">
          </el-table-column>
          <el-table-column
              prop="stuffColdThick"
              label="冷轧厚料≥0.6mm"
              width="120">
          </el-table-column>
          <el-table-column
              prop="stuffColdThin"
              label="冷轧薄料＜0.6mm"
              width="120">
          </el-table-column>
          <el-table-column
              prop="stuffAlSlag"
              label="炼渣铝块"
              width="120">
          </el-table-column>
          <el-table-column
              prop="stuffSampleSlag"
              label="样板板头料跑渣料"
              width="120">
          </el-table-column>
          <el-table-column
              prop="stuffTrim"
              label="切边料"
              width="120">
          </el-table-column>
          <el-table-column
              prop="stuffOtherName"
              label="其他废料#名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="stuffOtherWeight"
              label="其他废料#重量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="stuffOtherName1"
              label="其他废料#名称"
              width="120">
          </el-table-column>
          <el-table-column

              prop="stuffOtherWeight1"
              label="其他废料#重量"
              width="150">
          </el-table-column>
          <el-table-column

              prop="stuffOtherName2"
              label="其他废料#名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="stuffOtherWeight2"
              label="其他废料#重量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="stuffOtherName3"
              label="其他废料#名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="stuffOtherWeight3"
              label="其他废料#重量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="stuffAlGroupId"
              label="电解原铝#灌铝班组ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="stuffAlGroupName"
              label="电解原铝#灌铝班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="stuffAlWeight"
              label="电解原铝#累计重量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="stuffTotalWeight"
              label="总装炉量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="stuffStlRatio"
              label="固液比"
              width="120">
          </el-table-column>
          <el-table-column
              prop="firingTime"
              label="点火时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="forkliftStirTime1"
              label="叉车搅拌#refine1_wt_fe第1次时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="forkliftStirTime2"
              label="叉车搅拌#第2次时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="forkliftStirTime3"
              label="叉车搅拌#第3次时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="forkliftGroupId"
              label="叉车搅拌#班组ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="forkliftGroupName"
              label="叉车搅拌#班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="forkliftDriverId"
              label="叉车搅拌#叉车工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="forkliftDriverName"
              label="叉车搅拌#叉车工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="forkliftGroupId2"
              label="叉车搅拌#班组ID2"
              width="120">
          </el-table-column>
          <el-table-column

              prop="forkliftGroupName2"
              label="叉车搅拌#班组名称2"
              width="120">
          </el-table-column>
          <el-table-column
              prop="forkliftDriverId2"
              label="叉车搅拌#叉车工ID2"
              width="120">
          </el-table-column>
          <el-table-column
              prop="forkliftDriverName2"
              label="叉车搅拌#叉车工名称2"
              width="120">
          </el-table-column>
          <el-table-column
              prop="forkliftGroupId3"
              label="叉车搅拌#班组ID3"
              width="120">
          </el-table-column>
          <el-table-column
              prop="forkliftDriverId3"
              label="叉车搅拌#叉车工ID3"
              width="120">
          </el-table-column>
          <el-table-column
              prop="forkliftDriverName3"
              label="叉车搅拌#叉车工名称3"
              width="120">
          </el-table-column>
          <el-table-column
              prop="drossingTime"
              label="预扒渣#时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="drossingTemp"
              label="预扒渣#温度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="prepSamplingTime"
              label="配比前取样#时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="prepSamplingTemp"
              label="配比前取样#温度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="prepSamplingTimeRe"
              label="配比前取样复查#时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="prepSamplingTempRe"
              label="配比前取样复查#温度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="alloyRefine1AddTime"
              label="合金添加时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="alloyRefine1Fe"
              label="东盛铁剂"
              width="120">
          </el-table-column>
          <el-table-column
              prop="alloyRefine1FeWest"
              label="西盛铁剂"
              width="120">
          </el-table-column>
          <el-table-column
              prop="alloyRefine1Si"
              label="速溶硅"
              width="120">
          </el-table-column>
          <el-table-column
              prop="alloyRefine1AlSi"
              label="铝硅合金"
              width="120">
          </el-table-column>
          <el-table-column
              prop="alloyRefine1Cu"
              label="铜剂"
              width="120">
          </el-table-column>
          <el-table-column

              prop="alloyRefine1Mn"
              label="锰剂"
              width="150">
          </el-table-column>
          <el-table-column

              prop="alloyRefine1AlTi"
              label="铝钛合金"
              width="120">
          </el-table-column>
          <el-table-column
              prop="alloyRefine1OtherName"
              label="其他合金名称#合金名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="alloyRefine1OtherDose"
              label="其他合金名称#添加量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="alloyRefine1SmeltGroupId"
              label="添加量复核#班组ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="alloyRefine1SmeltGroupName"
              label="添加量复核#班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="alloyRefine1SmelterId"
              label="添加量复核#熔炼工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="alloyRefine1SmelterName"
              label="添加量复核#熔炼工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="mimRefine1BeginTime"
              label="喷粉精炼#开始时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="mimRefine1EndTime"
              label="喷粉精炼#结束时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="mimRefine1Temp"
              label="喷粉精炼#温度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="mimRefine1Medium"
              label="喷粉精炼#精炼剂#介质"
              width="120">
          </el-table-column>
          <el-table-column
              prop="mimRefine1Dose"
              label="喷粉精炼#精炼剂#用量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="mimRefine1GroupId"
              label="喷粉精炼#班组ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="mimRefine1GroupName"
              label="喷粉精炼#班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="mimRefine1SmelterId"
              label="喷粉精炼#熔炼工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="mimRefine1SmelterName"
              label="喷粉精炼#熔炼工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="refine1SamplingTime"
              label="取样时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="refine1SamplingTemp"
              label="取样温度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="refine1RatioGroupId"
              label="配比班组id"
              width="120">
          </el-table-column>
          <el-table-column
              prop="refine1RatioGroupName"
              label="配比班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="refine1SamplingTimeRe"
              label="配比后取样复查#取样时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="alloyRefine2AddTime"
              label="合金添加时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="alloyRefine2Fe"
              label="东盛铁剂"
              width="120">
          </el-table-column>
          <el-table-column
              prop="alloyRefine2FeWest"
              label="西盛铁剂"
              width="120">
          </el-table-column>
          <el-table-column
              prop="alloyRefine2Si"
              label="速溶硅"
              width="120">
          </el-table-column>
          <el-table-column
              prop="alloyRefine2AlSi"
              label="铝硅合金"
              width="120">
          </el-table-column>
          <el-table-column
              prop="alloyRefine2Cu"
              label="铜剂"
              width="120">
          </el-table-column>
          <el-table-column

              prop="alloyRefine2Mn"
              label="锰剂"
              width="150">
          </el-table-column>
          <el-table-column

              prop="alloyRefine2AlTi"
              label="铝钛合金"
              width="120">
          </el-table-column>
          <el-table-column
              prop="alloyRefine2OtherName"
              label="其他合金名称#合金名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="alloyRefine2OtherDose"
              label="其他合金名称#添加量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="alloyRefine2GroupId"
              label="添加量复核#班组ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="alloyRefine2GroupName"
              label="添加量复核#班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="alloyRefine2SmelterId"
              label="添加量复核#熔炼工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="alloyRefine2SmelterName"
              label="添加量复核#熔炼工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grainRefine1BeginTime"
              label="开始时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grainRefine1EndTime"
              label="结束时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grainRefine1Temp"
              label="温度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grainRefine1Medium"
              label="精炼剂#介质"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grainRefine1Dose"
              label="精炼剂#用量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grainRefine1SmeltGroupId"
              label="班组ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grainRefine1SmeltGroupName"
              label="班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grainRefine1SmelterId"
              label="熔炼工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grainRefine1SmelterName"
              label="熔炼工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grainRefine1OperatorId"
              label="操作工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grainRefine1OperatorName"
              label="操作工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grainRefine1DrossingGroupId"
              label="扒渣班组ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grainRefine1DrossingGroupName"
              label="扒渣班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grainRefine2BeginTime"
              label="开始时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grainRefine2EndTime"
              label="结束时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grainRefine2Temp"
              label="温度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grainRefine2Medium"
              label="精炼剂#介质"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grainRefine2Dose"
              label="精炼剂#用量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grainRefine2SmeltGroupId"
              label="班组ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grainRefine2SmeltGroupName"
              label="班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grainRefine2SmelterId"
              label="熔炼工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grainRefine2SmelterName"
              label="熔炼工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grainRefine2OperatorId"
              label="操作工ID"
              width="120">
          </el-table-column>
          <el-table-column

              prop="grainRefine2OperatorName"
              label="操作工名称"
              width="150">
          </el-table-column>
          <el-table-column

              prop="grainRefine2DrossingGroupId"
              label="扒渣班组ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grainRefine2DrossingGroupName"
              label="扒渣班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="prepTurndownSamplingTime"
              label="取样时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="prepTurndownSamplingTemp"
              label="取样温度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="turndownGroupId"
              label="倒炉班组"
              width="120">
          </el-table-column>
          <el-table-column
              prop="turndownSmelterId"
              label="熔炼工"
              width="120">
          </el-table-column>
          <el-table-column
              prop="turndownTemp"
              label="熔炼炉#温度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="turndownBeginTime"
              label="倒炉作业#开始时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="turndownEndTime"
              label="倒炉作业#结束时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="gasPostValue"
              label="倒炉作业#燃气抄表"
              width="120">
          </el-table-column>
          <el-table-column
              prop="turndownCleanerName"
              label="清炉工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grainRefine1Dose"
              label="清炉工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="smeltRemark"
              label="熔炼工序备注"
              width="120">
          </el-table-column>
          <el-table-column
              prop="smeltApprove"
              label="熔炼工序审核"
              width="120">
          </el-table-column>
          <el-table-column
              prop="creatorId"
              label="创建人ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="reviserId"
              label="修改人ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="createTime"
              label="创建时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="ts"
              label="ts"
              width="120">
          </el-table-column>
          <el-table-column
              prop="drossingTempTime"
              label="预扒渣温度测量时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="mimRefine1TempTime"
              label="喷粉精炼温度测量时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grainRefine1TempTime"
              label="液体、颗粒精炼温度测量时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grainRefine2TempTime"
              label="二次液体、颗粒精炼温度测量时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="turndownTempTime"
              label="倒炉温度测量时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="gasUnitConsumption"
              label="天然气单耗"
              width="120">
          </el-table-column>
          <el-table-column
              prop="makingSlagAgentAddAmount"
              label="装炉前燃气抄表#炉料装炉前造渣剂加入量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="makingPreSlagAgentAddAmount"
              label="预扒渣#预扒渣前造渣剂加入量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="singleGasConsumption"
              label="单熔次燃气用量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="prepTurndownSamplingTimeRe"
              label="倒炉前取样复查#取样时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="prepTurndownSamplingTempRe"
              label="倒炉前取样复查#取样温度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="clearGroupId"
              label="清炉班组id"
              width="120">
          </el-table-column>
          <el-table-column
              prop="liningPotNum1"
              label="抬包电解槽号1"
              width="120">
          </el-table-column>
          <el-table-column
              prop="liningPotNum2"
              label="抬包电解槽号2"
              width="120">
          </el-table-column>
          <el-table-column
              prop="liningPotNum3"
              label="抬包电解槽号3"
              width="120">
          </el-table-column>
          <el-table-column
              prop="liningWeight1"
              label="抬包净重1"
              width="120">
          </el-table-column>
          <el-table-column
              prop="liningWeight2"
              label="抬包净重2"
              width="120">
          </el-table-column>
          <el-table-column
              prop="liningWeight3"
              label="抬包净重3"
              width="120">
          </el-table-column>
          <el-table-column
              prop="qualityPosition1"
              label="品位1"
              width="120">
          </el-table-column>
          <el-table-column
              prop="qualityPosition2"
              label="品位2"
              width="120">
          </el-table-column>
          <el-table-column
              prop="qualityPosition3"
              label="品位3"
              width="120">
          </el-table-column>
          <el-table-column
              prop="castCardNumber"
              label="工艺卡编号"
              width="120">
          </el-table-column>
        </el-table>
      </div>
      <div style="background-color: #c0c4cc;padding: 10px 10px">保温工序详细信息</div>
      <div style="background-color: white;padding: 10px 10px">
        <el-table
            :data="baowenData"
            style="width: 100%"
            height="250">
          <el-table-column
              prop="smeltTimes"
              label="熔次号"
              width="150">
          </el-table-column>
          <el-table-column
              prop="heatNum"
              label="生产线号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="brand"
              label="牌号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="turndownBeforeBeginTime"
              label="倒炉前保温炉参数-倒炉开始时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="turndownBeforeGroupId"
              label="倒炉前保温炉参数-倒炉班组"
              width="120">
          </el-table-column>
          <el-table-column
              prop="turndownBeforeTemp"
              label="倒炉前保温炉参数-温度℃"
              width="120">
          </el-table-column>
          <el-table-column
              prop="turndownBeforeRemainingHeight"
              label="倒炉前保温炉参数-余量高度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="turndownAfterTopTemp"
              label="倒炉后参数-峰值温度℃"
              width="120">
          </el-table-column>
          <el-table-column
              prop="turndownAfterTemp"
              label="倒后温度℃"
              width="120">
          </el-table-column>
          <el-table-column
              prop="turndownAfterEndTime"
              label="倒炉后时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="turndownType"
              label="倒炉类型"
              width="120">
          </el-table-column>
          <el-table-column
              prop="turndownAfterPeriodTime"
              label="持续时长（分钟）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1BeginTime"
              label="开始时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1EndTime"
              label="结束时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1Duration"
              label="精炼时长"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1Temp"
              label="温度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1Medium"
              label="精炼剂#介质"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1Dose"
              label="精炼剂#用量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1ColdStuffDose"
              label="冷材加入量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1GroupId"
              label="班组ID"
              width="150">
          </el-table-column>
          <el-table-column
              prop="holdRefine1GroupName"
              label="班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1CasterId"
              label="轧机侧操作工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1CasterName"
              label="轧机侧操作工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1SmelterId"
              label="熔炼侧操作工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1SmelterName"
              label="熔炼侧操作工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1SamplingTime"
              label="取样时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1SamplingTemp"
              label="取样温度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine2FollowTime"
              label="精炼间隔时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine2BeginTime"
              label="开始时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine2EndTime"
              label="结束时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine2Duration"
              label="精炼时长"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine2Temp"
              label="温度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine2Medium"
              label="精炼剂#介质"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine2Dose"
              label="精炼剂#用量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine2ColdStuffDose"
              label="冷材加入量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine2GroupId"
              label="班组ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine2GroupName"
              label="班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine2CasterId"
              label="轧机侧操作工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine2CasterName"
              label="轧机侧操作工名称"
              width="150">
          </el-table-column>
          <el-table-column
              prop="holdRefine2SmelterName"
              label="熔炼侧操作工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine3FollowTime"
              label="精炼间隔时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine3BeginTime"
              label="开始时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine3EndTime"
              label="结束时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine3Duration"
              label="精炼时长"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine3Temp"
              label="温度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine3Medium"
              label="精炼剂#介质"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine3Dose"
              label="精炼剂#用量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine3ColdStuffDose"
              label="冷材加入量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine3GroupId"
              label="班组ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine3GroupName"
              label="班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine3CasterId"
              label="轧机侧操作工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine3CasterName"
              label="轧机侧操作工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine3SmelterId"
              label="熔炼侧操作工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine3SmelterName"
              label="熔炼侧操作工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine4FollowTime"
              label="精炼间隔时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine4BeginTime"
              label="开始时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine4EndTime"
              label="结束时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine4Duration"
              label="精炼时长"
              width="150">
          </el-table-column>
          <el-table-column
              prop="holdRefine4Temp"
              label="温度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine4Medium"
              label="精炼剂#介质"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine4Dose"
              label="精炼剂#用量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine4ColdStuffDose"
              label="冷材加入量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine4GroupId"
              label="班组ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine4GroupName"
              label="班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine4CasterId"
              label="轧机侧操作工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine4CasterName"
              label="轧机侧操作工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine4SmelterId"
              label="熔炼侧操作工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine4SmelterName"
              label="熔炼侧操作工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine5FollowTime"
              label="精炼间隔时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine5BeginTime"
              label="开始时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine5EndTime"
              label="结束时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine5Duration"
              label="精炼时长"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine5Temp"
              label="温度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine5Medium"
              label="精炼剂#介质"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine5Dose"
              label="精炼剂#用量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine5ColdStuffDose"
              label="冷材加入量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine5GroupId"
              label="班组ID"
              width="150">
          </el-table-column>
          <el-table-column
              prop="holdRefine5GroupName"
              label="班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine5CasterId"
              label="轧机侧操作工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine5CasterName"
              label="轧机侧操作工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine5SmelterId"
              label="熔炼侧操作工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine5SmelterName"
              label="熔炼侧操作工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRemark"
              label="保温工序备注"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdApprove"
              label="保温工序审核"
              width="120">
          </el-table-column>
          <el-table-column
              prop="deleteFlag"
              label="逻辑删除"
              width="120">
          </el-table-column>
          <el-table-column
              prop="creatorId"
              label="创建人ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="creatorName"
              label="创建人姓名"
              width="120">
          </el-table-column>
          <el-table-column
              prop="reviserId"
              label="修改人ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="createTime"
              label="创建时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="ts"
              label="ts"
              width="120">
          </el-table-column>
          <el-table-column
              prop="turndownProcessOperation"
              label="倒炉过程操作"
              width="120">
          </el-table-column>
          <el-table-column
              prop="inspectionBroken"
              label="硅碳棒检查#接班断的根数"
              width="120">
          </el-table-column>
          <el-table-column
              prop="inspectionNotInstalled"
              label="硅碳棒检查#接班未装的根数"
              width="120">
          </el-table-column>
          <el-table-column
              prop="inspectionReplace"
              label="硅碳棒检查#接班更换的根数"
              width="120">
          </el-table-column>
          <el-table-column
              prop="turndownBeforeRemainingWeight"
              label="倒炉前保温炉参数-余量吨数"
              width="120">
          </el-table-column>

        </el-table>
      </div>
      <div style="background-color: #c0c4cc;padding: 10px 10px">保温（第一次精炼）工序详细信息</div>
      <div style="background-color: white;padding: 10px 10px">
        <el-table
            :data="baowen1Data"
            style="width: 100%"
            height="250">
          <el-table-column
              prop="holdRefine1BeginTime"
              label="开始时间"
              width="150">
          </el-table-column>
          <el-table-column
              prop="holdRefine1EndTime"
              label="结束时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1Duration"
              label="精练时长"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1Temp"
              label="温度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1Medium"
              label="精练质#介质"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1Dose"
              label="精练质#用量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1ColdStuffDose"
              label="冷材加入量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1GroupId"
              label="班组ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1GroupName"
              label="班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1CasterId"
              label="轧机侧操作工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1CasterName"
              label="轧机侧操作工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1SmelterId"
              label="熔炼侧操作工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1SmelterName"
              label="熔炼侧操作工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1SamplingTime"
              label="取样时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1SamplingTemp"
              label="取样温度"
              width="120">
          </el-table-column>

        </el-table>
      </div>
      <div style="background-color: #c0c4cc;padding: 10px 10px">保温(第二次精炼)工序详细信息</div>
      <div style="background-color: white;padding: 10px 10px">
        <el-table
            :data="baowen2Data"
            style="width: 100%"
            height="250">
          <el-table-column
              prop="holdRefine2BeginTime"
              label="开始时间"
              width="150">
          </el-table-column>
          <el-table-column
              prop="holdRefine2EndTime"
              label="结束时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine2Duration"
              label="精练时长"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine2Temp"
              label="温度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine2Medium"
              label="精练质#介质"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine2Dose"
              label="精练质#用量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine2ColdStuffDose"
              label="冷材加入量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine2GroupId"
              label="班组ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine2GroupName"
              label="班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine2CasterId"
              label="轧机侧操作工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine2CasterName"
              label="轧机侧操作工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine2SmelterId"
              label="熔炼侧操作工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine2SmelterName"
              label="熔炼侧操作工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine2SamplingTime"
              label="取样时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine2SamplingTemp"
              label="取样温度"
              width="120">
          </el-table-column>

        </el-table>
      </div>
      <div style="background-color: #c0c4cc;padding: 10px 10px">保温(第三次精炼)工序详细信息</div>
      <div style="background-color: white;padding: 10px 10px">
        <el-table
            :data="baowen3Data"
            style="width: 100%"
            height="250">
          <el-table-column
              prop="holdRefine3BeginTime"
              label="开始时间"
              width="150">
          </el-table-column>
          <el-table-column
              prop="holdRefine3EndTime"
              label="结束时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine3Duration"
              label="精练时长"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine3Temp"
              label="温度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine3Medium"
              label="精练质#介质"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine3Dose"
              label="精练质#用量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine3ColdStuffDose"
              label="冷材加入量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine3GroupId"
              label="班组ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine3GroupName"
              label="班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine3CasterId"
              label="轧机侧操作工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine3CasterName"
              label="轧机侧操作工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine3SmelterId"
              label="熔炼侧操作工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine3SmelterName"
              label="熔炼侧操作工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine3SamplingTime"
              label="取样时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1SamplingTemp"
              label="取样温度"
              width="120">
          </el-table-column>

        </el-table>
      </div>
      <div style="background-color: #c0c4cc;padding: 10px 10px">保温(第四次精炼)工序详细信息</div>
      <div style="background-color: white;padding: 10px 10px">
        <el-table
            :data="baowen4Data"
            style="width: 100%"
            height="250">
          <el-table-column
              prop="holdRefine4BeginTime"
              label="开始时间"
              width="150">
          </el-table-column>
          <el-table-column
              prop="holdRefine4EndTime"
              label="结束时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine4Duration"
              label="精练时长"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine4Temp"
              label="温度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine4Medium"
              label="精练质#介质"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine4Dose"
              label="精练质#用量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine4ColdStuffDose"
              label="冷材加入量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine4GroupId"
              label="班组ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine4GroupName"
              label="班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine4CasterId"
              label="轧机侧操作工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine4CasterName"
              label="轧机侧操作工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine4SmelterId"
              label="熔炼侧操作工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine4SmelterName"
              label="熔炼侧操作工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine4SamplingTime"
              label="取样时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine4SamplingTemp"
              label="取样温度"
              width="120">
          </el-table-column>

        </el-table>
      </div>
      <div style="background-color: #c0c4cc;padding: 10px 10px">保温(第五次精炼)工序详细信息</div>
      <div style="background-color: white;padding: 10px 10px">
        <el-table
            :data="baowen5Data"
            style="width: 100%"
            height="250">
          <el-table-column
              prop="holdRefine5BeginTime"
              label="开始时间"
              width="150">
          </el-table-column>
          <el-table-column
              prop="holdRefine5EndTime"
              label="结束时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine5Duration"
              label="精练时长"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine5Temp"
              label="温度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine5Medium"
              label="精练质#介质"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine5Dose"
              label="精练质#用量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine5ColdStuffDose"
              label="冷材加入量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine5GroupId"
              label="班组ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine5GroupName"
              label="班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine5CasterId"
              label="轧机侧操作工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine5CasterName"
              label="轧机侧操作工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine5SmelterId"
              label="熔炼侧操作工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine5SmelterName"
              label="熔炼侧操作工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine5SamplingTime"
              label="取样时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="holdRefine1SamplingTemp"
              label="取样温度"
              width="120">
          </el-table-column>

        </el-table>
      </div>
      <div style="background-color: #c0c4cc;padding: 10px 10px">铸轧生产工序详细信息</div>
      <div style="background-color: white;padding: 10px 10px">
        <el-table
            :data="zhuzhascData"
            style="width: 100%"
            height="250">
          <el-table-column
              prop="planId"
              label="关联计划ID"
              width="150">
          </el-table-column>
          <el-table-column
              prop="smeltTimes"
              label="关联熔次号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="heatNum"
              label="生产线号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="reelNum"
              label="铸轧卷号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="brand"
              label="牌号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="customer"
              label="客户信息"
              width="120">
          </el-table-column>
          <el-table-column
              prop="thick"
              label="板厚"
              width="120">
          </el-table-column>
          <el-table-column
              prop="width"
              label="规格宽度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="orderReelNum"
              label="订单卷数-卷序"
              width="120">
          </el-table-column>
          <el-table-column
              prop="riserReelNum"
              label="立板编号-卷序"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramDegasserGasTemp"
              label="除气箱参数设定值#炉气温度℃"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramDegasserAlTemp"
              label="除气箱参数设定值#铝液温度℃"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramDegasserArgonPress"
              label="除气箱参数设定值#氩气Mpa"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramDegasserFlow"
              label="除气箱参数设定值#流量L/min"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramDegasserRpm"
              label="除气箱参数设定值#转子转速r/min"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramDegasser"
              label="过滤箱显示值#炉气温度℃"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramFilterAlTemp"
              label="过滤箱显示值#铝液温度℃"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramFilterHTime"
              label="过滤箱入口测氢#测氢时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramFilterHTemp"
              label="过滤箱入口测氢#测氢温度℃"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramFilterHdaf"
              label="过滤箱入口测氢#含量ml/100gAL"
              width="150">
          </el-table-column>
          <el-table-column
              prop="paramFrontAlTemp"
              label="前箱工艺温度℃#铝液温度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramFrontEnvTemp1"
              label="前箱工艺温度℃#环境温度#1次"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramFrontEnvTemp2"
              label="前箱工艺温度℃#环境温度#2次"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramWaterSetTemp"
              label="循环冷却系统#水温℃#设定温度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramWaterInTemp"
              label="循环冷却系统#水温℃#入口温度38"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramWaterOutTr"
              label="循环冷却系统#出口水温℃#上辊"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramWaterOutLr"
              label="循环冷却系统#出口水温℃#下辊"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramWaterSetFreq"
              label="循环冷却系统#频率设定值Hz"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramWaterFlowTr"
              label="循环冷却系统#水流量#上辊L/min"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramWaterFlowLr"
              label="循环冷却系统#水流量#下辊L/min"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramWaterPressIn"
              label="循环冷却系统#水压Mpa#入口"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramWaterPressOutTr"
              label="循环冷却系统#水压Mpa#出口#上辊"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramWaterPressOutLr"
              label="循环冷却系统#水压Mpa#出口#下辊"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramCastGap"
              label="铸轧卷工艺#辊缝mm"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramCastOpen"
              label="铸轧卷工艺#开口mm"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramCastArea"
              label="铸轧卷工艺#铸轧区mm"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramCastSpeedHost"
              label="铸轧卷工艺#速度mm/min#主机"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramCastSpeedStuff"
              label="铸轧卷工艺#速度mm/min#带材"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramCastCurTr"
              label="铸轧卷工艺#主机电流A#上辊"
              width="150">
          </el-table-column>
          <el-table-column
              prop="paramCastCurLr"
              label="铸轧卷工艺#主机电流A#下辊"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramCastPrestressWs"
              label="铸轧卷工艺#预应力t#操WS"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramCastPrestressDs"
              label="铸轧卷工艺#预应力t#传DS"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramCastCrimpingTension"
              label="铸轧卷工艺#卷曲机#张力KN"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramCastCur"
              label="铸轧卷工艺#卷曲机#电流A"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramCastThick"
              label="铸轧卷工艺#在线#板厚mm"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramCastWidth"
              label="铸轧卷工艺#在线#板宽mm"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramCastTiBrand"
              label="铸轧卷工艺#钛丝#品牌"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramCastTiSpeed"
              label="铸轧卷工艺#钛丝#速度mm/min"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procUpperGroupId"
              label="上卷信息#上卷班组ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procUpperGroupName"
              label="上卷信息#上卷班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procUpperCasterId"
              label="上卷信息#轧制工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procUpperCasterName"
              label="上卷信息#轧制工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procUpperTime"
              label="上卷信息#上卷时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procUpperShiftTthick"
              label="上卷信息#交班壁厚"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procUpperShiftTweight"
              label="上卷信息#交班卷重"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procBigGroupId"
              label="大卷径未上下卷#大卷班组ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procBigGroupName"
              label="大卷径未上下卷#大卷班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procBigCasterId"
              label="大卷径未上下卷#轧制工ID"
              width="150">
          </el-table-column>
          <el-table-column
              prop="procBigCasterName"
              label="大卷径未上下卷#轧制工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procBigShiftThick"
              label="大卷径未上下卷#交班壁厚(kg)"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procBigShiftWeight"
              label="大卷径未上下卷#交班卷重(kg)"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procBigDutyWeight"
              label="大卷径未上下卷#当班卷重(kg)"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procLowerGroupId"
              label="下卷信息#下卷班组ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procLowerGroupName"
              label="下卷信息#下卷班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procLowerCasterId"
              label="下卷信息#轧制工ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="paramWaterSetFreq"
              label="循环冷却系统#频率设定值Hz"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procLowerCasterName"
              label="下卷信息#轧制工名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procLowerLocationNum"
              label="下卷信息#库位号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procLowerDutyWeight"
              label="下卷信息#当班卷重"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procLowerRemoveTime"
              label="下卷信息#卸卷时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procLowerRollDiameter"
              label="下卷信息#卷径±2mm"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procLowerRealWeight"
              label="下卷信息#铸轧卷净重(kg)"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procLowerTheoryWeight"
              label="下卷信息#理论卷重(kg)"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procLowerWeightDev"
              label="下卷信息#净重与理论卷重偏差(kg)"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procBeforeStabilizerCheck"
              label="憋前嘴辊间隙稳流器检查"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procMinSpeed"
              label="最低速度mm/min"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procAfterStabilizerCheck"
              label="憋后嘴辊间隙稳流器检查"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procRemark"
              label="憋氧化膜相关调整稳流器等操作备注"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procOperationTime"
              label="操作时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procOperatorId"
              label="操作责任人ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="procOperatorName"
              label="操作责任人名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="processQcSolution"
              label="缺陷描述及处理方法"
              width="120">
          </el-table-column>
          <el-table-column
              prop="processQcDutyGroupId"
              label="责任班组ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="processQcDutyGroupName"
              label="责任班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="processQcScrapWeight"
              label="废料明细kg"
              width="120">
          </el-table-column>
          <el-table-column
              prop="qtfhTurndownTime"
              label="倒炉作业#时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="qtfhTurndownSmeltNum"
              label="倒炉作业#熔次号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="qtfhPrepTemp"
              label="更换控流钎#换前温度℃"
              width="150">
          </el-table-column>
          <el-table-column
              prop="qtfhChangeTime"
              label="更换控流钎#更换时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="qtfhLowTemp"
              label="更换控流钎#低点温度℃"
              width="120">
          </el-table-column>
          <el-table-column
              prop="casterRemark"
              label="生产过程控制汇总备注栏"
              width="120">
          </el-table-column>
          <el-table-column
              prop="casterCount"
              label="每小时通过量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="casterDuration"
              label="时长（分钟）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="creatorId"
              label="创建人ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="creatorName"
              label="创建人姓名"
              width="120">
          </el-table-column>
          <el-table-column
              prop="reviserId"
              label="修改人ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="createTime"
              label="创建时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="ts"
              label="ts"
              width="120">
          </el-table-column>
          <el-table-column
              prop="actualDegasserGasTemp"
              label="除气箱参数实际值#炉气温度℃"
              width="120">
          </el-table-column>
          <el-table-column
              prop="actualDegasserAlTemp"
              label="除气箱参数实际值#铝液温度℃"
              width="120">
          </el-table-column>
          <el-table-column
              prop="actualDegasserArgonPress"
              label="除气箱参数实际值#氩气Mpa"
              width="120">
          </el-table-column>
          <el-table-column
              prop="actualDegasserFlow"
              label="除气箱参数实际值#流量L/min"
              width="120">
          </el-table-column>
          <el-table-column
              prop="actualDegasserRpm"
              label="除气箱参数实际值#转子转速r/min"
              width="120">
          </el-table-column>
          <el-table-column
              prop="degasserTempSet"
              label="过滤箱设定值#炉气温度℃"
              width="120">
          </el-table-column>
          <el-table-column
              prop="filterAlTempSet"
              label="过滤箱设定值#铝液温度℃"
              width="120">
          </el-table-column>

        </el-table>
      </div>
      <div style="background-color: #c0c4cc;padding: 10px 10px">铸轧卷质检工序详细信息</div>
      <div style="background-color: white;padding: 10px 10px">
        <el-table
            :data="zhuzhajuanzjData"
            style="width: 100%"
            height="250">
          <el-table-column
              prop="createTime"
              label="创建时间"
              width="150">
          </el-table-column>
          <el-table-column
              prop="ts"
              label="ts"
              width="120">
          </el-table-column>
          <el-table-column
              prop="creatorId"
              label="创建人"
              width="120">
          </el-table-column>
          <el-table-column
              prop="reelNum"
              label="批号(铸轧卷号)"
              width="120">
          </el-table-column>
          <el-table-column
              prop="model"
              label="规格"
              width="120">
          </el-table-column>
          <el-table-column
              prop="brand"
              label="牌号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="weight"
              label="重量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="wt"
              label="化学成份"
              width="120">
          </el-table-column>
          <el-table-column
              prop="hdaf"
              label="铝熔体氢含量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="lpsSize"
              label="低倍组织"
              width="120">
          </el-table-column>
          <el-table-column
              prop="sampleLevel"
              label="晶粒度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="hpsSize"
              label="高倍组织"
              width="120">
          </el-table-column>
          <el-table-column
              prop="hpsPicture"
              label="高倍组织图片"
              width="120">
          </el-table-column>
          <el-table-column
              prop="shapeQc"
              label="板形质量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="thickness"
              label="厚度(mm)"
              width="120">
          </el-table-column>
          <el-table-column
              prop="width"
              label="宽度(mm)"
              width="120">
          </el-table-column>
          <el-table-column
              prop="surfaceQc"
              label="表面质量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="facadeQc"
              label="外观质量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="judgeResult"
              label="铸轧卷质量判定结果"
              width="120">
          </el-table-column>
          <el-table-column
              prop="judgeReamrk"
              label="铸轧卷质量缺陷描述"
              width="150">
          </el-table-column>
          <el-table-column
              prop="hostSpeed"
              label="主机速度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="tiWireBrand"
              label="钛丝品牌"
              width="120">
          </el-table-column>
          <el-table-column
              prop="tiWireSpeed"
              label="钛丝速度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="nextReelTime"
              label="下卷时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="advise"
              label="处理意见"
              width="120">
          </el-table-column>
          <el-table-column
              prop="reportTime"
              label="日期及时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="sampleLevelPicture"
              label="晶粒度图片"
              width="120">
          </el-table-column>
          <el-table-column
              prop="lpsPicture"
              label="低倍组织图片"
              width="120">
          </el-table-column>
          <el-table-column
              prop="dimensionalDeviation"
              label="尺寸偏差"
              width="120">
          </el-table-column>
          <el-table-column
              prop="inspectMonitorCheck"
              label="质检班长复核"
              width="120">
          </el-table-column>
          <el-table-column
              prop="auditor"
              label="审核员"
              width="120">
          </el-table-column>
          <el-table-column
              prop="reviewAdvice"
              label="发评审建议"
              width="120">
          </el-table-column>
          <el-table-column
              prop="wtRemark"
              label="化学成分备注"
              width="120">
          </el-table-column>
          <el-table-column
              prop="hdafRemark"
              label="铝熔体氢含量备注"
              width="120">
          </el-table-column>
          <el-table-column
              prop="dimensionalDeviationRemark"
              label="尺寸偏差备注"
              width="120">
          </el-table-column>
          <el-table-column
              prop="lpsSizeRemark"
              label="低倍组织备注"
              width="120">
          </el-table-column>
          <el-table-column
              prop="hpsSizeRemark"
              label="高倍组织备注"
              width="120">
          </el-table-column>
          <el-table-column
              prop="shapeQcRemark"
              label="板型质量备注"
              width="120">
          </el-table-column>
          <el-table-column
              prop="surfaceQcRemark"
              label="表面质量备注"
              width="120">
          </el-table-column>
          <el-table-column
              prop="facadeQcRemark"
              label="外观质量备注"
              width="120">
          </el-table-column>

        </el-table>
      </div>
      <div style="background-color: #c0c4cc;padding: 10px 10px">冷轧生产计划工序详细信息</div>
      <div style="background-color: white;padding: 10px 10px">
        <el-table
            :data="lenzhascjhData"
            style="width: 100%"
            height="250">
          <el-table-column
              prop="coldreductionstripId"
              label="主键"
              width="150">
          </el-table-column>
          <el-table-column
              prop="coldreductionstripNum"
              label="冷轧带材计划编号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="planningengineer"
              label="计划工程师"
              width="120">
          </el-table-column>
          <el-table-column
              prop="checker"
              label="审核人"
              width="120">
          </el-table-column>
          <el-table-column
              prop="result"
              label="审批结果"
              width="120">
          </el-table-column>
          <el-table-column
              prop="drawupTime"
              label="指定日期"
              width="120">
          </el-table-column>
          <el-table-column
              prop="deleteFlag"
              label="软删除标识"
              width="120">
          </el-table-column>
          <el-table-column
              prop="createTime"
              label="创建时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="createUser"
              label="创建人"
              width="120">
          </el-table-column>
          <el-table-column
              prop="lastmodifyTime"
              label="最后修改时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="lastmodifyUser"
              label="最后修改人"
              width="120">
          </el-table-column>
          <el-table-column
              prop="client"
              label="客户名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="state"
              label="合金状态"
              width="120">
          </el-table-column>
          <el-table-column
              prop="productuse"
              label="产品用途"
              width="120">
          </el-table-column>
          <el-table-column
              prop="deliveredTimeA2"
              label="交货日期A2"
              width="120">
          </el-table-column>
          <el-table-column
              prop="deliveredTimeB2"
              label="交货日期B2"
              width="120">
          </el-table-column>
          <el-table-column
              prop="productneedsId"
              label="所属产品需求"
              width="120">
          </el-table-column>
          <el-table-column
              prop="comeSpec"
              label="来料规格"
              width="120">
          </el-table-column>
          <el-table-column
              prop="productSpec"
              label="成品规格"
              width="120">
          </el-table-column>
          <el-table-column
              prop="productState"
              label="成品状态"
              width="150">
          </el-table-column>
          <el-table-column
              prop="productQuality"
              label="成品管芯材质"
              width="120">
          </el-table-column>
          <el-table-column
              prop="productArea"
              label="成品卷径范围(mm)"
              width="120">
          </el-table-column>
          <el-table-column
              prop="singleHeight"
              label="单卷重量(吨)"
              width="120">
          </el-table-column>
          <el-table-column
              prop="volumeTotal"
              label="卷数"
              width="120">
          </el-table-column>
          <el-table-column
              prop="heightTotal"
              label="总重量(吨)"
              width="120">
          </el-table-column>
          <el-table-column
              prop="productionUnitA"
              label="生产单位A"
              width="120">
          </el-table-column>
          <el-table-column
              prop="productionUnitB"
              label="生产单位B"
              width="120">
          </el-table-column>
          <el-table-column
              prop="deliveredTimeA"
              label="交货日期A"
              width="120">
          </el-table-column>
          <el-table-column
              prop="deliveredTimeB"
              label="交货日期B"
              width="120">
          </el-table-column>
          <el-table-column
              prop="tensileStrength"
              label="抗拉强度ob/Mpa"
              width="120">
          </el-table-column>
          <el-table-column
              prop="elongation"
              label="延伸率"
              width="120">
          </el-table-column>
          <el-table-column
              prop="bendingPerformance"
              label="折弯性能"
              width="120">
          </el-table-column>
          <el-table-column
              prop="endwiseHeight"
              label="纵向厚度偏差mm"
              width="120">
          </el-table-column>
          <el-table-column
              prop="warpWidth"
              label="宽度偏差mm"
              width="120">
          </el-table-column>
          <el-table-column
              prop="convexRate"
              label="凸面率%"
              width="120">
          </el-table-column>
          <el-table-column
              prop="appearanceReq"
              label="产品外观质量及轧制要求"
              width="120">
          </el-table-column>
          <el-table-column
              prop="productCheck"
              label="产品质检"
              width="120">
          </el-table-column>
          <el-table-column
              prop="type"
              label="计划类型"
              width="120">
          </el-table-column>
          <el-table-column
              prop="finished"
              label="计划完成状态"
              width="120">
          </el-table-column>
          <el-table-column
              prop="sleeveWidth"
              label="套筒长度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="sleevePath"
              label="套筒直径"
              width="120">
          </el-table-column>
          <el-table-column
              prop="alloyNumber"
              label="合金牌号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="flatness"
              label="平直度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="wedge"
              label="楔形率%"
              width="120">
          </el-table-column>
          <el-table-column
              prop="same"
              label="同板差"
              width="120">
          </el-table-column>
          <el-table-column
              prop="roughness"
              label="坯料表面粗糙度"
              width="150">
          </el-table-column>
          <el-table-column
              prop="stringLayer"
              label="卷材端面串层"
              width="120">
          </el-table-column>
          <el-table-column
              prop="dagoba"
              label="卷材端面塔"
              width="120">
          </el-table-column>
          <el-table-column
              prop="otherrequirement"
              label="卷端面其他要求"
              width="120">
          </el-table-column>
          <el-table-column
              prop="dataName"
              label="执行标准"
              width="120">
          </el-table-column>
          <el-table-column
              prop="dataId"
              label="冷轧带材生产计划数据字典id"
              width="120">
          </el-table-column>
          <el-table-column
              prop="packing"
              label="包装完成日期"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cardIds"
              label="生产随行卡id"
              width="120">
          </el-table-column>

        </el-table>
      </div>
      <div style="background-color: #c0c4cc;padding: 10px 10px">冷轧工序工序详细信息</div>
      <div style="background-color: white;padding: 10px 10px">
        <el-table
            :data="lenzhagongxuData"
            style="width: 100%"
            height="250">
          <el-table-column
              prop="planId"
              label="计划id"
              width="150">
          </el-table-column>
          <el-table-column
              prop="consumerName"
              label="订货单位"
              width="120">
          </el-table-column>
          <el-table-column
              prop="reelNum"
              label="(铸轧卷号)来料卷号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="batchNum"
              label="冷轧卷号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="brand"
              label="合金牌号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="productUse"
              label="用途"
              width="120">
          </el-table-column>
          <el-table-column
              prop="blankSize"
              label="来料厚宽"
              width="120">
          </el-table-column>
          <el-table-column
              prop="blankWeight"
              label="坯料重量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="deliveryDate"
              label="预定交货日期"
              width="120">
          </el-table-column>
          <el-table-column
              prop="productThick"
              label="成品厚度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="productWidth"
              label="成品宽度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="productStatus"
              label="成品状态"
              width="120">
          </el-table-column>
          <el-table-column
              prop="annealingThick"
              label="退火厚度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="coggingTime"
              label="开坯时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="coggingGroupId"
              label="开坯班组id"
              width="120">
          </el-table-column>
          <el-table-column
              prop="coggingGroupName"
              label="开坯班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="coggingWorkShift"
              label="班次"
              width="120">
          </el-table-column>
          <el-table-column
              prop="coggingOrder"
              label="顺序"
              width="120">
          </el-table-column>
          <el-table-column
              prop="midRollTime"
              label="中轧时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="midRollGroupId"
              label="中轧班组id"
              width="150">
          </el-table-column>
          <el-table-column
              prop="midRollGroupName"
              label="中轧班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="midRollWorkShift"
              label="班次"
              width="120">
          </el-table-column>
          <el-table-column
              prop="midRollOrder"
              label="顺序"
              width="120">
          </el-table-column>
          <el-table-column
              prop="midRollWeight"
              label="中轧重量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="planishTime"
              label="精轧时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="planishGroupId"
              label="精轧班组id"
              width="120">
          </el-table-column>
          <el-table-column
              prop="planishGroupName"
              label="精轧班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="planishWorkShift"
              label="班次"
              width="120">
          </el-table-column>
          <el-table-column
              prop="planishOrder"
              label="顺序"
              width="120">
          </el-table-column>
          <el-table-column
              prop="coldProductWeight"
              label="冷轧成品重量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="plateCut"
              label="板型情况"
              width="120">
          </el-table-column>
          <el-table-column
              prop="coldTailing26"
              label="冷轧0.26尾料"
              width="120">
          </el-table-column>
          <el-table-column
              prop="coldTailing6"
              label="冷轧0.6尾料"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cutSpeed"
              label="剪切速度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cutTime"
              label="切 边时 间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cutWorkShift"
              label="班次"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cutGroupId"
              label="切边班组id"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cutGroupName"
              label="切边班组名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cutSizeH"
              label="成品切边厚度(mm)"
              width="150">
          </el-table-column>
          <el-table-column
              prop="cutSizeW"
              label="成品切边宽度(mm)"
              width="120">
          </el-table-column>
          <el-table-column
              prop="recoilingWeight"
              label="重卷成品重量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="modelDesc"
              label="版型情况"
              width="120">
          </el-table-column>
          <el-table-column
              prop="produceStatus"
              label="生产状态"
              width="120">
          </el-table-column>
          <el-table-column
              prop="storageInTime"
              label="入库时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="storageInWeight"
              label="入库重量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="reformPlanNum"
              label="改制计划号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="coldYield"
              label="冷轧成品率"
              width="120">
          </el-table-column>
          <el-table-column
              prop="rereelYield"
              label="重卷成品率"
              width="120">
          </el-table-column>
          <el-table-column
              prop="offLineYield"
              label="下线成品率"
              width="120">
          </el-table-column>
          <el-table-column
              prop="storageInYield"
              label="入库成品率"
              width="120">
          </el-table-column>
          <el-table-column
              prop="rereelHeading"
              label="重卷头料"
              width="120">
          </el-table-column>
          <el-table-column
              prop="rereelTailing"
              label="重卷尾料"
              width="120">
          </el-table-column>
          <el-table-column
              prop="heading"
              label="头料M"
              width="120">
          </el-table-column>
          <el-table-column
              prop="headingReason"
              label="甩除原因"
              width="120">
          </el-table-column>
          <el-table-column
              prop="tailing"
              label="尾料M"
              width="120">
          </el-table-column>
          <el-table-column
              prop="tailingReason"
              label="甩除原因"
              width="120">
          </el-table-column>
          <el-table-column
              prop="headingWeight"
              label="头料总重"
              width="120">
          </el-table-column>
          <el-table-column
              prop="tailingWeight"
              label="尾料总重"
              width="150">
          </el-table-column>
          <el-table-column
              prop="qcDesc"
              label="整卷质量情况"
              width="120">
          </el-table-column>
          <el-table-column
              prop="qcId"
              label="质检员ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="qcName"
              label="质检员姓名"
              width="120">
          </el-table-column>
          <el-table-column
              prop="sleeve"
              label="套筒"
              width="120">
          </el-table-column>
          <el-table-column
              prop="hotRoll"
              label="热轧卷"
              width="120">
          </el-table-column>
          <el-table-column
              prop="remark"
              label="备注"
              width="120">
          </el-table-column>
          <el-table-column
              prop="creatorId"
              label="创建人ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="creatorName"
              label="创建人名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="reviserId"
              label="修改人id"
              width="120">
          </el-table-column>
          <el-table-column
              prop="deleteFlag"
              label="逻辑删除，是否删除 :0、未删除；1、删除"
              width="120">
          </el-table-column>
          <el-table-column
              prop="createTime"
              label="创建时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="ts"
              label="修改时间"
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
              prop="ts"
              label="ts"
              width="150">
          </el-table-column>
          <el-table-column
              prop="creatorId"
              label="创建人"
              width="120">
          </el-table-column>
          <el-table-column
              prop="createTime"
              label="创建时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="batchNum"
              label="卷号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="recordDate"
              label="退火日期"
              width="120">
          </el-table-column>
          <el-table-column
              prop="furnaceNum"
              label="退火炉号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="startTime"
              label="退火开始时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="endTime"
              label="退火结束时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="totalTime"
              label="单条退火记录时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="gasTemperature1"
              label="炉气温度(℃)Ⅰ区"
              width="120">
          </el-table-column>
          <el-table-column
              prop="gasTemperature2"
              label="炉气温度(℃)Ⅱ区"
              width="120">
          </el-table-column>
          <el-table-column
              prop="gasTemperature3"
              label="炉气温度(℃)Ⅲ区"
              width="120">
          </el-table-column>
          <el-table-column
              prop="materialTemperature1"
              label="料温(℃)1"
              width="120">
          </el-table-column>
          <el-table-column
              prop="materialTemperature2"
              label="料温(℃)2"
              width="120">
          </el-table-column>
          <el-table-column
              prop="hydraulicPressure"
              label="水压MPa"
              width="120">
          </el-table-column>
          <el-table-column
              prop="gasPressure"
              label="气压MPa"
              width="120">
          </el-table-column>
          <el-table-column
              prop="intakeFanTemperature"
              label="进风风机轴承温度℃"
              width="120">
          </el-table-column>
          <el-table-column
              prop="exhaustFanTemperature"
              label="排烟风机轴承温度℃"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cycleFanTemperature1"
              label="循环风机轴承温度(℃)Ⅰ区"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cycleFanTemperature2"
              label="循环风机轴承温度(℃)Ⅱ区"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cycleFanTemperature3"
              label="循环风机轴承温度(℃)Ⅲ区"
              width="120">
          </el-table-column>
          <el-table-column
              prop="remark"
              label="备注"
              width="120">
          </el-table-column>
          <el-table-column
              prop="operator"
              label="操作手"
              width="120">
          </el-table-column>
          <el-table-column
              prop="annealingThick"
              label="退火厚度（mm）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="furnaceCardNumber"
              label="退火工艺卡编号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="brand"
              label="合金"
              width="120">
          </el-table-column>
          <el-table-column
              prop="rollNum"
              label="卷数（个）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="furnaceTotal"
              label="装炉总量（t）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="furnacePosition"
              label="装炉位置"
              width="120">
          </el-table-column>
          <el-table-column
              prop="furnaceOperator1"
              label="装炉人员"
              width="120">
          </el-table-column>
          <el-table-column
              prop="furnaceOperator2"
              label="出炉人员"
              width="120">
          </el-table-column>
          <el-table-column
              prop="tempPowerControl"
              label="料温控制/炉气控制"
              width="120">
          </el-table-column>
          <el-table-column
              prop="powerBefore"
              label="起始电量（kw.h）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="powerAfter"
              label="终止电量（kw.h）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="runningDuring"
              label="运行时长"
              width="120">
          </el-table-column>
          <el-table-column
              prop="powerLoss"
              label="本炉电耗（kw.h）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="perPowerLoss"
              label="吨电耗（kw.h/t）"
              width="120">
          </el-table-column>

        </el-table>
      </div>
      <div style="background-color: #c0c4cc;padding: 10px 10px">冷轧卷成品质检工序详细信息</div>
      <div style="background-color: white;padding: 10px 10px">
        <el-table
            :data="lenzhajuanzjData"
            style="width: 100%"
            height="250">
          <el-table-column
              prop="createTime"
              label="创建时间"
              width="150">
          </el-table-column>
          <el-table-column
              prop="ts"
              label="ts"
              width="120">
          </el-table-column>
          <el-table-column
              prop="sortOrder"
              label="创建人"
              width="120">
          </el-table-column>
          <el-table-column
              prop="rollNum"
              label="序号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="consumer"
              label="客户名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="batchNum"
              label="冷轧卷号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="thickness"
              label="厚度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="width"
              label="宽度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="rollDiameter"
              label="卷径"
              width="120">
          </el-table-column>
          <el-table-column
              prop="brand"
              label="合金牌号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="status"
              label="状态"
              width="120">
          </el-table-column>
          <el-table-column
              prop="weight"
              label="重量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="shapeQc"
              label="板形质量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="dimensionalDeviation"
              label="尺寸偏差"
              width="120">
          </el-table-column>
          <el-table-column
              prop="mechanicalProperty"
              label="力学性能"
              width="120">
          </el-table-column>
          <el-table-column
              prop="surfaceQc"
              label="表面质量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="facadeQc"
              label="外观质量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="sampleLevel"
              label="晶粒度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="executiveStandard"
              label="执行标准"
              width="120">
          </el-table-column>
          <el-table-column
              prop="judgeResult"
              label="综合判定"
              width="150">
          </el-table-column>
          <el-table-column
              prop="handleAdvice"
              label="不合格处理意见"
              width="120">
          </el-table-column>
          <el-table-column
              prop="inspector"
              label="质检员"
              width="120">
          </el-table-column>
          <el-table-column
              prop="monitor"
              label="班长"
              width="120">
          </el-table-column>
          <el-table-column
              prop="reportTime"
              label="日期时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="advise"
              label="处理意见"
              width="120">
          </el-table-column>
          <el-table-column
              prop="coldDate"
              label="冷轧日期"
              width="120">
          </el-table-column>
          <el-table-column
              prop="hydrogenContent"
              label="氢含量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="productType"
              label="产品类型"
              width="120">
          </el-table-column>
          <el-table-column
              prop="singleConvexity"
              label="中凸度%"
              width="120">
          </el-table-column>
          <el-table-column
              prop="wedgeRate"
              label="楔形率%"
              width="120">
          </el-table-column>
          <el-table-column
              prop="weighingThickness"
              label="厚度#称重法（mm）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="weighingConvexity"
              label="中凸度#称重法%"
              width="120">
          </el-table-column>
          <el-table-column
              prop="roughness"
              label="粗糙度（μm）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="shapeQcRemark"
              label="板形质量备注"
              width="120">
          </el-table-column>
          <el-table-column
              prop="dimensionalDeviationRemark"
              label="尺寸偏差备注"
              width="120">
          </el-table-column>
          <el-table-column
              prop="mechanicalPropertyRemark"
              label="力学性能备注"
              width="120">
          </el-table-column>
          <el-table-column
              prop="surfaceQcRemark"
              label="表面质量备注"
              width="120">
          </el-table-column>
          <el-table-column
              prop="facadeQcRemark"
              label="外观质量备注"
              width="120">
          </el-table-column>
          <el-table-column
              prop="sampleLevelRemark"
              label="晶粒度备注"
              width="120">
          </el-table-column>
          <el-table-column
              prop="reviewAdvice"
              label="发评审建议"
              width="120">
          </el-table-column>

        </el-table>
      </div>
      <div style="background-color: #c0c4cc;padding: 10px 10px">重卷剪切工序详细信息</div>
      <div style="background-color: white;padding: 10px 10px">
        <el-table
            :data="rewindData"
            style="width: 100%"
            height="250">
          <el-table-column
              prop="ts"
              label="ts"
              width="150">
          </el-table-column>
          <el-table-column
              prop="creatorId"
              label="创建人"
              width="120">
          </el-table-column>
          <el-table-column
              prop="mainOperator"
              label="主操手"
              width="120">
          </el-table-column>
          <el-table-column
              prop="assistantOperator"
              label="辅助工"
              width="120">
          </el-table-column>
          <el-table-column
              prop="workShift"
              label="班次"
              width="120">
          </el-table-column>
          <el-table-column
              prop="recordDate"
              label="日期"
              width="120">
          </el-table-column>
          <el-table-column
              prop="createTime"
              label="创建时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="brand"
              label="合金状态"
              width="120">
          </el-table-column>
          <el-table-column
              prop="productName"
              label="产品名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="reelNum"
              label="来料卷号(铸轧卷号)"
              width="120">
          </el-table-column>
          <el-table-column
              prop="originRegular"
              label="来料规格mm"
              width="120">
          </el-table-column>
          <el-table-column
              prop="batchNum"
              label="加工后冷轧卷号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="processedRegular"
              label="加工后规格mm"
              width="120">
          </el-table-column>
          <el-table-column
              prop="machineSpeed"
              label="运行参数#机列速度m/min"
              width="120">
          </el-table-column>
          <el-table-column
              prop="reelingTensileStress"
              label="运行参数#卷取张应力N/M2"
              width="120">
          </el-table-column>
          <el-table-column
              prop="knifeGap"
              label="运行参数#刀缝间隙MM"
              width="120">
          </el-table-column>
          <el-table-column
              prop="originWeight"
              label="金属平衡#投料量Kg"
              width="120">
          </el-table-column>
          <el-table-column
              prop="processedWeight"
              label="金属平衡#成品量Kg"
              width="150">
          </el-table-column>
          <el-table-column
              prop="wasteMaterialHead"
              label="金属平衡#废料量#头料M"
              width="120">
          </el-table-column>
          <el-table-column
              prop="wasteMaterialTail"
              label="金属平衡#废料量#尾料M"
              width="120">
          </el-table-column>
          <el-table-column
              prop="wasteMaterialElse"
              label="金属平衡#废料量#其它Kg"
              width="120">
          </el-table-column>
          <el-table-column
              prop="quality"
              label="质量状况#质量情况"
              width="120">
          </el-table-column>
          <el-table-column
              prop="result"
              label="质量状况#判定结果"
              width="120">
          </el-table-column>
          <el-table-column
              prop="confirmer"
              label="质量状况#确认人"
              width="120">
          </el-table-column>
          <el-table-column
              prop="recordNum"
              label="道次"
              width="120">
          </el-table-column>
          <el-table-column
              prop="headTailWasteMeters"
              label="头尾料甩除米数"
              width="120">
          </el-table-column>
          <el-table-column
              prop="abnormalWasteReason"
              label="异常甩除原因"
              width="120">
          </el-table-column>
          <el-table-column
              prop="surfaceQualityDesc"
              label="板面质量描述"
              width="120">
          </el-table-column>
          <el-table-column
              prop="wasteTrimmingWeight"
              label="其他废料量#切边重量kg"
              width="120">
          </el-table-column>
          <el-table-column
              prop="wasteOffLineWeight"
              label="其他废料量#下线重量kg"
              width="120">
          </el-table-column>
          <el-table-column
              prop="wasteProductWeight"
              label="其他废料量#成品重量kg"
              width="120">
          </el-table-column>
          <el-table-column
              prop="trimmingTime"
              label="切边时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="produceOrder"
              label="生产顺序"
              width="120">
          </el-table-column>
          <el-table-column
              prop="originWidth"
              label="来料宽度（mm）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="rereelerFinishedWeight"
              label="重卷成品重量（kg）"
              width="150">
          </el-table-column>
          <el-table-column
              prop="headRejectReason"
              label="头料甩除原因 字典：throw_reason"
              width="120">
          </el-table-column>
          <el-table-column
              prop="tailRejectReason"
              label="尾料甩除原因 字典：throw_reason"
              width="120">
          </el-table-column>
          <el-table-column
              prop="sleeveSpecification"
              label="套筒规格"
              width="120">
          </el-table-column>
          <el-table-column
              prop="operateType"
              label="操作类型  字典：operate_type"
              width="120">
          </el-table-column>
          <el-table-column
              prop="workGroup"
              label="班组  字典：work_group_cn"
              width="120">
          </el-table-column>
          <el-table-column
              prop="rereelerCardNumber"
              label="重卷工艺卡编号"
              width="120">
          </el-table-column>

        </el-table>
      </div>
      <div style="background-color: #c0c4cc;padding: 10px 10px">冷轧卷入库工序详细信息</div>
      <div style="background-color: white;padding: 10px 10px">
        <el-table
            :data="lenzharukuData"
            style="width: 100%"
            height="250">
          <el-table-column
              prop="area"
              label="库位区域"
              width="150">
          </el-table-column>
          <el-table-column
              prop="shelves"
              label="货架号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="mainExercise"
              label="冷轧卷号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="brand"
              label="牌号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="weight"
              label="重量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="plateCut"
              label="板型情况"
              width="120">
          </el-table-column>
          <el-table-column
              prop="productUse"
              label="用途"
              width="120">
          </el-table-column>
          <el-table-column
              prop="consumerName"
              label="客户名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="storerId"
              label="入库人"
              width="120">
          </el-table-column>
          <el-table-column
              prop="storageTime"
              label="入库时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="creatorId"
              label="创建人"
              width="120">
          </el-table-column>
          <el-table-column
              prop="createTime"
              label="创建时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="ts"
              label="ts"
              width="120">
          </el-table-column>
          <el-table-column
              prop="productType"
              label="产品类型：成品、在制品"
              width="120">
          </el-table-column>

        </el-table>
      </div>
      <div style="background-color: #c0c4cc;padding: 10px 10px">包装检验工序详细信息</div>
      <div style="background-color: white;padding: 10px 10px">
        <el-table
            :data="baozhuangData"
            style="width: 100%"
            height="250">
          <el-table-column
              fixed
              prop="createTime"
              label="创建时间"
              width="150">
          </el-table-column>
          <el-table-column
              fixed
              prop="ts"
              label="ts"
              width="120">
          </el-table-column>
          <el-table-column
              prop="creatorId"
              label="创建人"
              width="120">
          </el-table-column>
          <el-table-column
              prop="batchNum"
              label="冷轧卷号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="model"
              label="规格"
              width="120">
          </el-table-column>
          <el-table-column
              prop="alloyStatus"
              label="合金状态"
              width="120">
          </el-table-column>
          <el-table-column
              prop="rollDiameter"
              label="卷径Φ"
              width="120">
          </el-table-column>
          <el-table-column
              prop="weight"
              label="重量（t）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="sample"
              label="随卷试样"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cert"
              label="合格证"
              width="120">
          </el-table-column>
          <el-table-column
              prop="productCcie"
              label="产品证书"
              width="120">
          </el-table-column>
          <el-table-column
              prop="packageQc"
              label="包装质量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="outerLabel"
              label="外标签"
              width="120">
          </el-table-column>
          <el-table-column
              prop="packageTime"
              label="包装日期"
              width="120">
          </el-table-column>
          <el-table-column
              prop="inspectorId"
              label="质检员"
              width="120">
          </el-table-column>
          <el-table-column
              prop="reportTime"
              label="报告时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="remark"
              label="备 注"
              width="120">
          </el-table-column>

        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import CustomStep from '@/views/dashboard/CustomStep'
import { getCastPlanList } from '@/api/ImdpCastPlan'
import { getCastSmeltHoldList } from '@/api/ImdpCastSmeltHold'
import { getCastHoldingFurnaceList } from '@/api/lmdpCastHoldingFurnace'
import { getFirstConciseList } from '@/api/ImdpFirstConcise'
import { getSecondConciseList } from '@/api/ImdpSecondConcise'
import { getThirdConciseList } from '@/api/ImdpThirdConcise'
import { getFourthConciseList } from '@/api/ImdpFourthConcise'
import { getFifthConciseList } from '@/api/ImdpFifthConcise'
import { getCastProduceList } from '@/api/ImdpCastProduce'
import { getQcCastReelList } from '@/api/ImdpQcCastReel'
import { getColdPlanList } from '@/api/ImdpColdPlan'
import { getColdProduceList } from '@/api/ImdpColdProduce'
import { getColdFurnaceRecordList } from '@/api/ImdpColdFurnaceRecord'
import { getQcColdReelReportList } from '@/api/ImdpQcColdReelReport'
import { getColdRereelerRecordList } from '@/api/ImdpColdRereelerRecord'
import { getColdStoreRecordList } from '@/api/ImdpColdStoreRecord'
import { getQcPackList } from '@/api/ImdpQcPack'
export default {
  name: 'ProcessMonitor',
  components: {
    CustomStep
  },
  data() {
    return {
      // 查询参数
      queryParams: {
        produceId: ''
      },
      produceTitle: ['铸轧计划', '熔炉生产', '保温', '保温（第一次精炼）', '保温（第二次精炼）', '保温（第三次精炼）', '保温（第四次精炼）', '保温（第五次精炼）', '铸轧生产', '铸轧卷质检', '冷轧生产计划确定', '冷轧工序', '退火', '冷轧卷成品质检', '重卷中切', '冷轧卷成品入库', '包装检验'],
      nowProduct: null,
      // 显示搜索条件
      showSearch: true,
      // 个人基本信息表格数据
      informationList: [],
      input_danhao: '',
      input_rongci: '',
      input_lengzha: '',
      active: 0,
      fengxian: false,
      stepData: [{
        title: '工序1：铸轧生产计划确定'
        // description: ' ' +' ' +' '
      },
      {
        title: '工序2：熔炉生产'
        // description: '关联计划ID: ' +'熔次号: ' +'牌号: ' +'创建时间: ' +'修改时间: '
      },
      {
        title: '工序3：保温'
        // description: '熔次号：' +                '牌号：' +                '创建时间:' +                '修改时间: '
      },
      {
        title: '工序4：保温（第一次精炼）'
        // description: '开始时间: ' +                '结束时间:' +                '精炼剂#介质: ' +                '精炼剂#用量：' +                '班组名称： '
      },
      {
        title: '工序5：保温（第二次精炼）'
        // description: '开始时间: ' +                '结束时间:' +                '精炼剂#介质: ' +                '精炼剂#用量： ' +                '班组名称： '
      },
      {
        title: '工序6：保温（第三次精炼）'
        // description: '开始时间: ' +                '结束时间: ' +                '精炼剂#介质: ' +                '精炼剂#用量： ' +                '班组名称： '
      },
      {
        title: '工序7：保温（第四次精炼）'
        // description: '开始时间: ' +                '结束时间: ' +                '精炼剂#介质:' +                '精炼剂#用量：' +                '班组名称： '
      },
      {
        title: '工序8：保温（第五次精炼）'
        // description: '开始时间: ' +                '结束时间: ' +                '精炼剂#介质:' +                '精炼剂#用量：' +                '班组名称： '

      },
      {
        title: '工序9：铸轧生产'
        // description: '关联计划ID：' +                '关联熔次号：' +                '铸轧卷号： ' +                '创建时间: '
      },
      {
        title: '工序10：铸轧卷质检'
        // description: '创建时间：' +                '修改时间：' +                '批号(铸轧卷号)：   ' +                '下卷时间：  '
      },
      {
        title: '工序11：冷轧生产计划确定'
        // description: '冷轧带材计划编号：' +                '创建时间：' +                '客户名称：'
      },
      {
        title: '工序12：冷轧工序'
        // description: '计划id：' +                '(铸轧卷号)来料卷号：   ' +                '冷轧卷号：   ' +                '合金牌号：  '
      },
      {
        title: '工序13：退火'
        // description: '创建时间：  ' +                '冷轧卷号：   ' +                '退火日期：  '
      },
      {
        title: '工序14：冷轧卷成品质检'
        // description: '创建时间：' +                '修改时间：  ' +                '冷轧卷号：   ' +                '日期时间：  '
      },
      {
        title: '工序15：重卷剪切'
        // description: '创建时间： ' +                '来料卷号(铸轧卷号)：   ' +                '质量状况#判定结果：     '
      },
      {
        title: '工序16：冷轧卷成品入库'
        // description: '库位区域: ' +                '货架号：   ' +                '冷轧卷号：   ' +                '牌号：   ' +                '创建时间：  ' +                '修改时间：  '
      },
      {
        title: '工序17：包装检验'
        // description: '创建时间：  ' +                '修改时间：  ' +                '冷轧卷号：   ' +                '包装日期：  ' +                '报告时间：  '
      }],
      monitorData: [],
      zhuzhaData: [{
        planId: '',
        deleteFlag: '',
        createTime: '',
        createUser: '',
        lastmodifyTime: '',
        lastmodifyUser: '',
        produceId: ' ',
        productionUnitA: '',
        deliveredTimeA: '',
        productionUnitB: ' ',
        deliveredTimeB: ' ',
        fe: ' ',
        si: ' ',
        cu: ' ',
        ti: ' ',
        mn: ' ',
        zn: ' ',
        cr: ' ',
        mg: ' ',
        otherSingle: ' ',
        otherTotal: ' ',
        thicknessDev: ' ',
        widthDev: ' ',
        doubleDev: ' ',
        convexity: ' ',
        convexityAvg: ' ',
        infeedPoint: ' ',
        endwiseThickness: ' ',
        presentationQuality: ' ',
        insideQuality: ' ',
        qualityProject: ' ',
        otherDemand: ' ',
        planningEngineer: ' ',
        checker: '',
        drawupTime: '',
        type: '',
        client: '',
        productuse: '',
        state: '',
        specification: ' ',
        rollspecification: '',
        inside: '',
        scope: ' ',
        weight: ' ',
        count: ' ',
        allweight: ' ',
        deliveredTimeA2: ' ',
        deliveredTimeB2: ' ',
        productneedsId: ' ',
        other: ' ',
        remark: ' ',
        finished: ' ',
        sleeveWidth: ' ',
        sleevePath: ' ',
        alloyNumber: ' ',
        ni: ' ',
        dataName: ' ',
        dataId: ' ',
        castflowId: ' ',
        castflowName: ' ',
        reviewNumber: ' '
      }],
      rongluData: [{
        planId: ' ',
        smeltTimes: ' ',
        heatNum: ' ',
        brand: ' ',
        feedTime: ' ',
        feedGroupId: '',
        feedGroupName: ' ',
        gasPrepValue: ' ',
        stuffAlPig: ' ',
        stuffCastReel: ' ',
        stuffBig: ' ',
        stuffColdThick: ' ',
        stuffColdThin: ' ',
        stuffAlSlag: ' ',
        stuffSampleSlag: ' ',
        stuffTrim: '',
        stuffOtherName: ' ',
        stuffOtherWeight: ' ',
        stuffOtherName1: ' ',
        stuffOtherWeight1: ' ',
        stuffOtherName2: ' ',
        stuffOtherWeight2: ' ',
        stuffOtherName3: ' ',
        stuffOtherWeight3: ' ',
        stuffAlGroupId: ' ',
        stuffAlGroupName: '',
        stuffAlWeight: ' ',
        stuffTotalWeight: ' ',
        stuffStlRatio: ' ',
        firingTime: ' ',
        forkliftStirTime1: ' ',
        forkliftStirTime2: ' ',
        forkliftStirTime3: ' ',
        forkliftGroupId: ' ',
        forkliftGroupName: ' ',
        forkliftDriverId: '',
        forkliftDriverName: ' ',
        forkliftGroupId2: ' ',
        forkliftGroupName2: ' ',
        forkliftDriverId2: ' ',
        forkliftDriverName2: ' ',
        forkliftGroupId3: ' ',
        forkliftDriverId3: ' ',
        forkliftDriverName3: ' ',
        drossingTime: ' ',
        drossingTemp: '',
        prepSamplingTime: ' ',
        prepSamplingTemp: ' ',
        prepSamplingTimeRe: ' ',
        prepSamplingTempRe: ' ',
        alloyRefine1AddTime: ' ',
        alloyRefine1Fe: ' ',
        alloyRefine1FeWest: ' ',
        alloyRefine1Si: ' ',
        alloyRefine1AlSi: ' ',
        alloyRefine1Cu: '',
        alloyRefine1Mn: ' ',
        alloyRefine1AlTi: ' ',
        alloyRefine1OtherName: ' ',
        alloyRefine1OtherDose: ' ',
        alloyRefine1SmeltGroupId: ' ',
        alloyRefine1SmeltGroupName: ' ',
        alloyRefine1SmelterId: ' ',
        alloyRefine1SmelterName: ' ',
        mimRefine1BeginTime: ' ',
        mimRefine1EndTime: '',
        mimRefine1Temp: ' ',
        mimRefine1Medium: ' ',
        mimRefine1Dose: ' ',
        mimRefine1GroupId: ' ',
        mimRefine1GroupName: ' ',
        mimRefine1SmelterId: ' ',
        mimRefine1SmelterName: ' ',
        refine1SamplingTime: ' ',
        refine1SamplingTemp: ' ',
        refine1RatioGroupId: '',
        refine1RatioGroupName: ' ',
        refine1SamplingTimeRe: ' ',
        alloyRefine2AddTime: ' ',
        alloyRefine2Fe: ' ',
        alloyRefine2FeWest: ' ',
        alloyRefine2Si: ' ',
        alloyRefine2AlSi: ' ',
        alloyRefine2Cu: ' ',
        alloyRefine2Mn: ' ',
        alloyRefine2AlTi: '',
        alloyRefine2OtherName: ' ',
        alloyRefine2OtherDose: ' ',
        alloyRefine2GroupId: ' ',
        alloyRefine2GroupName: ' ',
        alloyRefine2SmelterId: ' ',
        alloyRefine2SmelterName: ' ',
        grainRefine1BeginTime: ' ',
        grainRefine1EndTime: ' ',
        grainRefine1Temp: ' ',
        grainRefine1Medium: '',
        grainRefine1Dose: ' ',
        grainRefine1SmeltGroupId: ' ',
        grainRefine1SmeltGroupName: ' ',
        grainRefine1SmelterId: ' ',
        grainRefine1SmelterName: ' ',
        grainRefine1OperatorId: ' ',
        grainRefine1OperatorName: ' ',
        grainRefine1DrossingGroupId: ' ',
        grainRefine1DrossingGroupName: ' ',
        grainRefine2BeginTime: '',
        grainRefine2EndTime: ' ',
        grainRefine2Temp: ' ',
        grainRefine2Medium: ' ',
        grainRefine2Dose: ' ',
        grainRefine2SmeltGroupId: ' ',
        grainRefine2SmeltGroupName: ' ',
        grainRefine2SmelterId: ' ',
        grainRefine2SmelterName: ' ',
        grainRefine2OperatorId: ' ',
        grainRefine2OperatorName: '',
        grainRefine2DrossingGroupId: ' ',
        grainRefine2DrossingGroupName: ' ',
        prepTurndownSamplingTime: ' ',
        prepTurndownSamplingTemp: ' ',
        turndownGroupId: ' ',
        turndownSmelterId: ' ',
        turndownTemp: ' ',
        turndownBeginTime: ' ',
        turndownEndTime: ' ',
        gasPostValue: '',
        turndownCleanerId: ' ',
        turndownCleanerName: ' ',
        smeltRemark: ' ',
        smeltApprove: ' ',
        creatorId: ' ',
        reviserId: ' ',
        createTime: ' ',
        ts: ' ',
        drossingTempTime: ' ',
        mimRefine1TempTime: '',
        grainRefine1TempTime: ' ',
        grainRefine2TempTime: ' ',
        turndownTempTime: ' ',
        gasUnitConsumption: ' ',
        makingSlagAgentAddAmount: ' ',
        makingPreSlagAgentAddAmount: ' ',
        singleGasConsumption: ' ',
        prepTurndownSamplingTimeRe: ' ',
        prepTurndownSamplingTempRe: ' ',
        clearGroupId: '',
        liningPotNum1: ' ',
        liningPotNum2: ' ',
        liningPotNum3: ' ',
        liningWeight1: ' ',
        liningWeight2: ' ',
        liningWeight3: ' ',
        qualityPosition1: ' ',
        qualityPosition2: ' ',
        qualityPosition3: ' ',
        castCardNumber: ''
      }],
      baowenData: [{
        smeltTimes: ' ',
        heatNum: ' ',
        brand: ' ',
        turndownBeforeBeginTime: ' ',
        turndownBeforeGroupId: ' ',
        turndownBeforeTemp: ' ',
        turndownBeforeRemainingHeight: ' ',
        turndownAfterTopTemp: ' ',
        turndownAfterTemp: ' ',
        turndownAfterEndTime: '',
        turndownType: ' ',
        turndownAfterPeriodTime: ' ',
        holdRefine1BeginTime: ' ',
        holdRefine1EndTime: ' ',
        holdRefine1Duration: ' ',
        holdRefine1Temp: ' ',
        holdRefine1Medium: ' ',
        holdRefine1Dose: ' ',
        holdRefine1ColdStuffDose: ' ',
        holdRefine1GroupId: '',
        holdRefine1GroupName: ' ',
        holdRefine1CasterId: ' ',
        holdRefine1CasterName: ' ',
        holdRefine1SmelterId: ' ',
        holdRefine1SmelterName: ' ',
        holdRefine1SamplingTime: ' ',
        holdRefine1SamplingTemp: ' ',
        holdRefine2FollowTime: ' ',
        holdRefine2BeginTime: ' ',
        holdRefine2EndTime: '',
        holdRefine2Duration: ' ',
        holdRefine2Temp: ' ',
        holdRefine2Medium: ' ',
        holdRefine2Dose: ' ',
        holdRefine2ColdStuffDose: ' ',
        holdRefine2GroupId: ' ',
        holdRefine2GroupName: ' ',
        holdRefine2CasterId: ' ',
        holdRefine2CasterName: ' ',
        holdRefine2SmelterId: '',
        holdRefine2SmelterName: ' ',
        holdRefine3FollowTime: ' ',
        holdRefine3BeginTime: ' ',
        holdRefine3EndTime: ' ',
        holdRefine3Duration: ' ',
        holdRefine3Temp: ' ',
        holdRefine3Medium: ' ',
        holdRefine3Dose: ' ',
        holdRefine3ColdStuffDose: ' ',
        holdRefine3GroupId: '',
        holdRefine3GroupName: ' ',
        holdRefine3CasterId: ' ',
        holdRefine3CasterName: ' ',
        holdRefine3SmelterId: ' ',
        holdRefine3SmelterName: ' ',
        holdRefine4FollowTime: ' ',
        holdRefine4BeginTime: ' ',
        holdRefine4EndTime: ' ',
        holdRefine4Duration: ' ',
        holdRefine4Temp: '',
        holdRefine4Medium: ' ',
        holdRefine4Dose: ' ',
        holdRefine4ColdStuffDose: ' ',
        holdRefine4GroupId: ' ',
        holdRefine4GroupName: ' ',
        holdRefine4CasterId: ' ',
        holdRefine4CasterName: ' ',
        holdRefine4SmelterId: ' ',
        holdRefine4SmelterName: ' ',
        holdRefine5FollowTime: '',
        holdRefine5BeginTime: ' ',
        holdRefine5EndTime: ' ',
        holdRefine5Duration: ' ',
        holdRefine5Temp: ' ',
        holdRefine5Medium: ' ',
        holdRefine5Dose: ' ',
        holdRefine5ColdStuffDose: ' ',
        holdRefine5GroupId: ' ',
        holdRefine5GroupName: ' ',
        holdRefine5CasterId: '',
        holdRefine5CasterName: ' ',
        holdRefine5SmelterId: ' ',
        holdRefine5SmelterName: ' ',
        holdRemark: ' ',
        holdApprove: ' ',
        deleteFlag: ' ',
        creatorId: ' ',
        creatorName: ' ',
        reviserId: ' ',
        createTime: '',
        ts: ' ',
        turndownProcessOperation: ' ',
        inspectionBroken: ' ',
        inspectionNotInstalled: ' ',
        inspectionReplace: ' ',
        turndownBeforeRemainingWeight: ' '
      }],
      baowen1Data: [{
        holdRefine1BeginTime: ' ',
        holdRefine1EndTime: ' ',
        holdRefine1Duration: ' ',
        holdRefine1Temp: ' ',
        holdRefine1Medium: ' ',
        holdRefine1Dose: ' ',
        holdRefine1ColdStuffDose: ' ',
        holdRefine1GroupId: ' ',
        holdRefine1GroupName: ' ',
        holdRefine1CasterId: '',
        holdRefine1CasterName: ' ',
        holdRefine1SmelterId: ' ',
        holdRefine1SmelterName: ' ',
        holdRefine1SamplingTime: ' ',
        holdRefine1SamplingTemp: ' '
      }],
      baowen2Data: [{
        holdRefine2BeginTime: ' ',
        holdRefine2EndTime: ' ',
        holdRefine2Duration: ' ',
        holdRefine2Temp: ' ',
        holdRefine2Medium: ' ',
        holdRefine2Dose: ' ',
        holdRefine2ColdStuffDose: ' ',
        holdRefine2GroupId: ' ',
        holdRefine2GroupName: ' ',
        holdRefine2CasterId: '',
        holdRefine2CasterName: ' ',
        holdRefine2SmelterId: ' ',
        holdRefine2SmelterName: ' ',
        holdRefine2SamplingTime: ' ',
        holdRefine2SamplingTemp: ' '
      }],
      baowen3Data: [{
        holdRefine3BeginTime: ' ',
        holdRefine3EndTime: ' ',
        holdRefine3Duration: ' ',
        holdRefine3Temp: ' ',
        holdRefine3Medium: ' ',
        holdRefine3Dose: ' ',
        holdRefine3ColdStuffDose: ' ',
        holdRefine3GroupId: ' ',
        holdRefine3GroupName: ' ',
        holdRefine3CasterId: '',
        holdRefine3CasterName: ' ',
        holdRefine3SmelterId: ' ',
        holdRefine3SmelterName: ' ',
        holdRefine3SamplingTime: ' ',
        holdRefine3SamplingTemp: ' '
      }],
      baowen4Data: [{
        holdRefine4BeginTime: ' ',
        holdRefine4EndTime: ' ',
        holdRefine4Duration: ' ',
        holdRefine4Temp: ' ',
        holdRefine4Medium: ' ',
        holdRefine4Dose: ' ',
        holdRefine4ColdStuffDose: ' ',
        holdRefine4GroupId: ' ',
        holdRefine4GroupName: ' ',
        holdRefine4CasterId: '',
        holdRefine4CasterName: ' ',
        holdRefine4SmelterId: ' ',
        holdRefine4SmelterName: ' ',
        holdRefine4SamplingTime: ' ',
        holdRefine4SamplingTemp: ' '
      }],
      baowen5Data: [{
        holdRefine5BeginTime: ' ',
        holdRefine5EndTime: ' ',
        holdRefine5Duration: ' ',
        holdRefine5Temp: ' ',
        holdRefine5Medium: ' ',
        holdRefine5Dose: ' ',
        holdRefine5ColdStuffDose: ' ',
        holdRefine5GroupId: ' ',
        holdRefine5GroupName: ' ',
        holdRefine5CasterId: '',
        holdRefine5CasterName: ' ',
        holdRefine5SmelterId: ' ',
        holdRefine5SmelterName: ' ',
        holdRefine5SamplingTime: ' ',
        holdRefine5SamplingTemp: ' '
      }],
      zhuzhascData: [{
        planId: ' ',
        smeltTimes: ' ',
        heatNum: ' ',
        reelNum: ' ',
        brand: ' ',
        customer: '',
        thick: ' ',
        width: ' ',
        orderReelNum: ' ',
        riserReelNum: ' ',
        paramDegasserGasTemp: ' ',
        paramDegasserAlTemp: ' ',
        paramDegasserArgonPress: '',
        paramDegasserFlow: ' ',
        paramDegasserRpm: ' ',
        paramDegasser: ' ',
        paramFilterAlTemp: ' ',
        paramFilterHTime: ' ',
        paramFilterHTemp: ' ',
        paramFilterHdaf: '',
        paramFrontAlTemp: ' ',
        paramFrontEnvTemp1: ' ',
        paramFrontEnvTemp2: ' ',
        paramWaterSetTemp: ' ',
        paramWaterInTemp: ' ',
        paramWaterOutTr: ' ',
        paramWaterOutLr: '',
        paramWaterSetFreq: ' ',
        paramWaterFlowTr: ' ',
        paramWaterFlowLr: ' ',
        paramWaterPressIn: ' ',
        paramWaterPressOutTr: ' ',
        paramWaterPressOutLr: ' ',
        paramCastGap: '',
        paramCastOpen: ' ',
        paramCastArea: ' ',
        paramCastSpeedHost: ' ',
        paramCastSpeedStuff: ' ',
        paramCastCurTr: ' ',
        paramCastCurLr: ' ',
        paramCastPrestressWs: '',
        paramCastPrestressDs: ' ',
        paramCastCrimpingTension: ' ',
        paramCastCur: ' ',
        paramCastThick: ' ',
        paramCastWidth: ' ',
        paramCastTiBrand: ' ',
        paramCastTiSpeed: '',
        procUpperGroupId: ' ',
        procUpperGroupName: ' ',
        procUpperCasterId: ' ',
        procUpperCasterName: ' ',
        procUpperTime: ' ',
        procUpperShiftTthick: ' ',
        procUpperShiftTweight: '',
        procBigGroupId: ' ',
        procBigGroupName: ' ',
        procBigCasterId: ' ',
        procBigCasterName: ' ',
        procBigShiftThick: ' ',
        procBigShiftWeight: ' ',
        procBigDutyWeight: '',
        procLowerGroupId: ' ',
        procLowerGroupName: ' ',
        procLowerCasterId: ' ',
        procLowerCasterName: ' ',
        procLowerLocationNum: ' ',
        procLowerDutyWeight: ' ',
        procLowerRemoveTime: '',
        procLowerRollDiameter: ' ',
        procLowerRealWeight: ' ',
        procLowerTheoryWeight: ' ',
        procLowerWeightDev: ' ',
        procBeforeStabilizerCheck: ' ',
        procMinSpeed: ' ',
        procAfterStabilizerCheck: '',
        procStabilizerStatus: ' ',
        procRemark: ' ',
        procOperationTime: ' ',
        procOperatorId: ' ',
        procOperatorName: ' ',
        processQcSolution: ' ',
        processQcDutyGroupId: '',
        processQcDutyGroupName: ' ',
        processQcScrapWeight: ' ',
        qtfhTurndownTime: ' ',
        qtfhTurndownSmeltNum: ' ',
        qtfhPrepTemp: ' ',
        qtfhChangeTime: ' ',
        qtfhLowTemp: '',
        casterRemark: ' ',
        casterCount: ' ',
        casterDuration: ' ',
        creatorId: ' ',
        creatorName: ' ',
        reviserId: ' ',
        createTime: '',
        ts: ' ',
        actualDegasserGasTemp: ' ',
        actualDegasserAlTemp: ' ',
        actualDegasserArgonPress: ' ',
        actualDegasserFlow: ' ',
        actualDegasserRpm: ' ',
        degasserTempSet: '',
        filterAlTempSet: ' '

      }],
      zhuzhajuanzjData: [{
        createTime: ' ',
        ts: ' ',
        creatorId: ' ',
        reelNum: ' ',
        model: ' ',
        brand: '',
        weight: ' ',
        wt: ' ',
        hdaf: ' ',
        lpsSize: ' ',
        sampleLevel: ' ',
        hpsSize: ' ',
        hpsPicture: '',
        shapeQc: ' ',
        thickness: ' ',
        width: ' ',
        surfaceQc: ' ',
        facadeQc: ' ',
        judgeResult: ' ',
        judgeReamrk: '',
        hostSpeed: ' ',
        tiWireBrand: ' ',
        tiWireSpeed: ' ',
        nextReelTime: ' ',
        advise: ' ',
        inspectorId: ' ',
        reportTime: '',
        sampleLevelPicture: ' ',
        lpsPicture: ' ',
        dimensionalDeviation: ' ',
        inspectMonitorCheck: ' ',
        auditor: ' ',
        reviewAdvice: ' ',
        wtRemark: '',
        hdafRemark: ' ',
        dimensionalDeviationRemark: ' ',
        lpsSizeRemark: ' ',
        hpsSizeRemark: ' ',
        shapeQcRemark: ' ',
        surfaceQcRemark: ' ',
        facadeQcRemark: ''
      }],
      lenzhascjhData: [{
        coldreductionstripId: ' ',
        coldreductionstripNum: ' ',
        planningengineer: ' ',
        checker: ' ',
        result: ' ',
        drawupTime: '',
        deleteFlag: ' ',
        createTime: ' ',
        createUser: ' ',
        lastmodifyTime: ' ',
        lastmodifyUser: ' ',
        client: ' ',
        state: '',
        productuse: ' ',
        deliveredTimeA2: ' ',
        deliveredTimeB2: ' ',
        productneedsId: ' ',
        comeSpec: ' ',
        productSpec: ' ',
        productState: '',
        productQuality: ' ',
        productArea: ' ',
        singleHeight: ' ',
        volumeTotal: ' ',
        heightTotal: ' ',
        productionUnitA: ' ',
        productionUnitB: '',
        deliveredTimeA: ' ',
        deliveredTimeB: ' ',
        tensileStrength: ' ',
        elongation: ' ',
        bendingPerformance: ' ',
        endwiseHeight: ' ',
        warpWidth: '',
        convexRate: ' ',
        appearanceReq: ' ',
        productCheck: ' ',
        type: ' ',
        finished: ' ',
        sleeveWidth: ' ',
        sleevePath: '',
        alloyNumber: '',
        flatness: ' ',
        wedge: ' ',
        same: ' ',
        roughness: ' ',
        stringLayer: ' ',
        dagoba: ' ',
        otherrequirement: '',
        dataName: ' ',
        dataId: ' ',
        packing: ' ',
        cardIds: ' '
      }],
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
      lenzhajuanzjData: [{
        createTime: ' ',
        ts: ' ',
        creatorId: ' ',
        sortOrder: ' ',
        consumer: ' ',
        batchNum: '',
        thickness: ' ',
        width: ' ',
        rollDiameter: ' ',
        brand: ' ',
        status: ' ',
        weight: ' ',
        shapeQc: '',
        dimensionalDeviation: ' ',
        mechanicalProperty: ' ',
        surfaceQc: ' ',
        facadeQc: ' ',
        sampleLevel: ' ',
        executiveStandard: ' ',
        judgeResult: '',
        handleAdvice: ' ',
        inspector: ' ',
        monitor: ' ',
        reportTime: ' ',
        advise: ' ',
        coldDate: ' ',
        hydrogenContent: '',
        productType: ' ',
        singleConvexity: ' ',
        wedgeRate: ' ',
        weighingThickness: ' ',
        weighingConvexity: ' ',
        roughness: ' ',
        shapeQcRemark: '',
        dimensionalDeviationRemark: ' ',
        mechanicalPropertyRemark: ' ',
        surfaceQcRemark: ' ',
        facadeQcRemark: '',
        sampleLevelRemark: ' ',
        reviewAdvice: ' '
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
      }],
      baozhuangData: [{
        createTime: ' ',
        ts: ' ',
        creatorId: ' ',
        batchNum: ' ',
        model: '',
        alloyStatus: ' ',
        rollDiameter: ' ',
        weight: ' ',
        sample: ' ',
        cert: ' ',
        productCcie: ' ',
        packageQc: '',
        outerLabel: ' ',
        packageTime: ' ',
        inspectorId: '',
        reportTime: ' ',
        remark: ' '
      }]
    }
  },
  watch: {},
  created() {
  },
  methods: {
    handleClose() {
    },
    /**
       * 工序查询
       * @param {Object} val
       */
    query(val) {
      console.log(val)
      this.getList()
    },
    /**
       * 获取表格数据
       */
    async getList() {
      this.monitorData = []

      // // 数据初始化
      // this.stepData[1].description = '关联计划ID: ' + '熔次号: ' + '牌号: ' + '装炉时间: ' + '喷粉精炼#开始时间: ,' + '喷粉精炼#结束时间: ' + '取样时间: ' + '配比班组id: ' + '配比班组名称:' + '精炼开始时间: ' + '精炼结束时间: ' + '倒炉作业#开始时间: ' + '倒炉作业#结束时间:' + '创建时间: ' + '修改时间: '
      // this.stepData[2].description = '熔次号：' + '牌号：' + '创建时间:' + '修改时间: '
      // this.stepData[3].description = '开始时间: ' + '结束时间:' + '精炼剂#介质: ' + '精炼剂#用量：' + '班组名称： '
      // this.stepData[4].description = '开始时间: ' + '结束时间:' + '精炼剂#介质: ' + '精炼剂#用量： ' + '班组名称： '
      // this.stepData[5].description = '开始时间: ' + '结束时间:' + '精炼剂#介质: ' + '精炼剂#用量： ' + '班组名称： '
      // this.stepData[6].description = '开始时间: ' + '结束时间:' + '精炼剂#介质: ' + '精炼剂#用量： ' + '班组名称： '
      // this.stepData[7].description = '开始时间: ' + '结束时间:' + '精炼剂#介质: ' + '精炼剂#用量： ' + '班组名称： '
      // this.stepData[8].description = '关联计划ID：' + '关联熔次号：' + '铸轧卷号： ' + '牌号： ' + '客户信息： ' + '板厚： ' + '规格宽度' + '上卷信息#上卷时间: ' + '上卷信息#交班壁厚： ' + '上卷信息#交班卷重：' + '下卷信息#库位号: ' + '下卷信息#当班卷重： ' + '下卷信息#卸卷时间: ' + '下卷信息#卷径±2mm：' + '倒炉作业#时间: ' + '倒炉作业#熔次号：' + '创建时间: '
      // this.stepData[9].description = '创建时间：' + '修改时间：' + '批号(铸轧卷号)：   ' + '规格： ' + '牌号：   ' + '重量：' + '厚度(mm)：   ' + '宽度(mm)：    ' + '表面质量：    ' + '外观质量：    ' + '评审结果:     ' + '综合判定： ' + '下卷时间：  '
      // this.stepData[10].description = '冷轧带材计划编号：' + '创建时间：' + '客户名称：' + '交货日期A2：  ' + '交货日期B：' + '来料规格：    ' + '成品规格：' + '抗拉强度ob/Mpa： ' + '延伸率： ' + '折弯性能： ' + '纵向厚度偏差mm： ' + '宽度偏差mm： ' + '凸面率%： ' + '产品外观质量及轧制要求：' + '合金牌号：   ' + '平直度： '
      // this.stepData[11].description = '计划id：' + '(铸轧卷号)来料卷号：   ' + '冷轧卷号：   ' + '合金牌号：  ' + '预定交货日期：  ' + '成品厚度：    ' + '成品宽度：  ' + '开坯时间：  ' + '中轧时间： ' + '精轧时间：  ' + '冷轧成品重量：  ' + '切边时间：' + '生产状态： ' + '入库时间：  ' + '入库重量：' + '创建时间： ' + '修改时间：  '
      // this.stepData[12].description = '创建时间：  ' + '冷轧卷号：   ' + '退火日期：  ' + '退火炉号：   ' + '退火开始时间：  ' + '退火结束时间：  ' + '炉气温度(℃)Ⅰ区：  ' + '炉气温度(℃)Ⅱ区：  ' + '炉气温度(℃)Ⅲ区：  ' + '水压MPa：   ' + '气压MPa：   '
      // this.stepData[13].description = '创建时间：' + '修改时间：  ' + '客户名称 ' + '冷轧卷号：   ' + '厚度：    ' + '宽度：    ' + '卷径：    ' + '合金牌号：   ' + '状态: ' + '重量： ' + '板形质量： ' + '尺寸偏差：    ' + '力学性能: ' + '表面质量: ' + '外观质量: ' + '晶粒度：    ' + '执行标准：   ' + '综合判定:     ' + '不合格处理意见： ' + '日期时间：  '
      // this.stepData[14].description = '创建时间： ' + '合金状态： ' + '产品名称：  ' + '来料卷号(铸轧卷号)：   ' + '来料规格mm：    ' + '加工后冷轧卷号：   ' + '加工后规格mm:    ' + '质量状况#质量情况: ' + '质量状况#判定结果：     '
      // this.stepData[15].description = '库位区域: ' + '货架号：   ' + '冷轧卷号：   ' + '牌号：   ' + '重量: ' + '板型情况: ' + '用途： ' + '客户名称： ' + '入库人： ' + '入库时间：  ' + '创建人： ' + '创建时间：  ' + '修改时间：  '
      // this.stepData[16].description = '创建时间：  ' + '修改时间：  ' + '冷轧卷号：   ' + '规格：    ' + '合金状态: ' + '卷径Φ：    ' + '重量（t）: ' + '包装日期：  ' + '报告时间：  '

      // 铸轧计划确定
      const { data: lmdpCP } = await getCastPlanList(this.queryParams)
      this.monitorData.push(lmdpCP[0])
      // this.stepData[0].description = '创建时间:' + this.monitorData[0].createTime + '最后修改时间:' + this.monitorData[0].lastmodifyTime + '厚度偏差mm:' + this.monitorData[0].thicknessDev + '宽度偏差mm:' + this.monitorData[0].widthDev + '中凸度%:' + this.monitorData[0].convexity + '平均中凸度%:' + this.monitorData[0].convexityAvg + '客户名称:' + this.monitorData[0].client + '内径/管芯材质:' + this.monitorData[0].inside + '卷径范围（mm）:' + this.monitorData[0].scope + '单卷重量（吨):' + this.monitorData[0].weight + '卷数:' + this.monitorData[0].count + '合金牌号:' + this.monitorData[0].alloyNumber
      this.zhuzhaData = lmdpCP
      this.active = 0
      this.nowProduct = this.produceTitle[0]

      // 熔炉生产
      const { data: lmdpCSH } = await getCastSmeltHoldList({ planId: lmdpCP[0].produceId })
      this.monitorData.push(lmdpCSH[0])
      // this.stepData[1].description = '关联计划ID:' + this.monitorData[1].planId + '熔次号:' + this.monitorData[1].smeltTimes + '牌号:' + this.monitorData[1].brand + '装炉时间:' + this.monitorData[1].feedTime + '喷粉精炼#开始时间: ' + this.monitorData[1].mimRefine1BeginTime + '喷粉精炼#结束时间:' + this.monitorData[1].mimRefine1EndTime + '取样时间:' + this.monitorData[1].refine1SamplingTime + '配比班组id:' + this.monitorData[1].refine1RatioGroupId + ' 配比班组名称:' + this.monitorData[1].refine1RatioGroupName + ':精炼开始时间::' + this.monitorData[1].grainRefine1BeginTime + ' 精炼结束时间:' + this.monitorData[1].grainRefine1EndTime + '倒炉作业#开始时间:' + this.monitorData[1].turndownBeginTime + '倒炉作业#结束时间:' + this.monitorData[1].turndownEndTime + '创建时间:' + this.monitorData[1].createTime + '修改时间:' + this.monitorData[1].ts
      console.log(lmdpCSH)
      this.rongluData = lmdpCSH
      this.nowProduct = this.produceTitle[1]
      this.active = 1

      // 保温
      const { data: lmdpCHF } = await getCastHoldingFurnaceList({ smeltTimes: lmdpCSH[0].planId })
      this.monitorData.push(lmdpCHF[0])
      // this.stepData[2].description = '熔次号:' + this.monitorData[2].smeltTimes + '牌号:' + this.monitorData[2].brand + '创建时间:' + this.monitorData[2].createTime + '修改时间:' + this.monitorData[2].ts
      // this.nowProduct = '保温'
      // console.log('保温数据',lmdpCHF)
      this.baowenData = lmdpCHF
      this.nowProduct = this.produceTitle[2]
      this.active = this.monitorData.length

      // 保温(第一次)
      const { data: lmdpFirstC } = await getFirstConciseList({ holdRefine1GroupName: lmdpCSH[0].smeltTimes })
      this.monitorData.push(lmdpFirstC[0])
      // this.stepData[3].description = '开始时间:' + this.monitorData[3].holdRefine1BeginTime + '结束时间:' + this.monitorData[3].holdRefine1EndTime + '精炼剂#介质:' + this.monitorData[3].holdRefine1Medium + '精炼剂#用量:' + this.monitorData[3].holdRefine1Dose + '班组名称:' + this.monitorData[3].holdRefine1GroupName
      // this.stepData[3].description = '开始时间:' + this.monitorData[3].holdRefine1BeginTime + '结束时间:' + this.monitorData[3].holdRefine1EndTime   + '班组名称:' + this.monitorData[3].holdRefine1GroupName
      this.baowen1Data = lmdpFirstC
      this.nowProduct = this.produceTitle[3]
      this.active = this.monitorData.length

      // 保温(第二次)
      const { data: lmdpSecondC } = await getSecondConciseList({ holdRefine2GroupName: lmdpFirstC[0].holdRefine1GroupName })
      this.monitorData.push(lmdpSecondC[0])
      // this.stepData[4].description = '开始时间:' + this.monitorData[4].holdRefine2BeginTime + '结束时间:' + this.monitorData[4].holdRefine2EndTime + '精炼剂#介质:' + this.monitorData[4].holdRefine2Medium + '精炼剂#用量:' + this.monitorData[4].holdRefine2Dose + '班组名称:' + this.monitorData[4].holdRefine2GroupName
      // this.stepData[4].description = '开始时间:' + this.monitorData[4].holdRefine2BeginTime + '结束时间:' + this.monitorData[4].holdRefine2EndTime +   '班组名称:' + this.monitorData[4].holdRefine2GroupName
      this.baowen2Data = lmdpSecondC
      this.nowProduct = this.produceTitle[4]
      this.active = this.monitorData.length

      // 保温(第三次)
      const { data: lmdpThirdC } = await getThirdConciseList({ holdRefine3GroupName: lmdpSecondC[0].holdRefine2GroupName })
      this.monitorData.push(lmdpThirdC[0])
      // this.stepData[5].description = '开始时间:' + this.monitorData[5].holdRefine3BeginTime + '结束时间:' + this.monitorData[5].holdRefine3EndTime + '精炼剂#介质:' + this.monitorData[5].holdRefine3Medium + '精炼剂#用量:' + this.monitorData[5].holdRefine3Dose + '班组名称:' + this.monitorData[5].holdRefine3GroupName
      // this.stepData[5].description = '开始时间:' + this.monitorData[5].holdRefine3BeginTime + '结束时间:' + this.monitorData[5].holdRefine3EndTime  + '班组名称:' + this.monitorData[5].holdRefine3GroupName
      this.baowen3Data = lmdpThirdC
      this.nowProduct = this.produceTitle[5]
      this.active = this.monitorData.length

      // 保温(第四次)
      const { data: lmdpFourthC } = await getFourthConciseList({ holdRefine4GroupName: lmdpThirdC[0].holdRefine3GroupName })
      this.monitorData.push(lmdpFourthC[0])
      // this.stepData[6].description = '开始时间:' + this.monitorData[6].holdRefine4BeginTime + '结束时间:' + this.monitorData[6].holdRefine4EndTime + '精炼剂#介质:' + this.monitorData[6].holdRefine4Medium + '精炼剂#用量:' + this.monitorData[6].holdRefine4Dose + '班组名称:' + this.monitorData[6].holdRefine4GroupName
      // this.stepData[6].description = '开始时间:' + this.monitorData[6].holdRefine4BeginTime + '结束时间:' + this.monitorData[6].holdRefine4EndTime   + '班组名称:' + this.monitorData[6].holdRefine4GroupName
      this.baowen4Data = lmdpFourthC
      this.nowProduct = this.produceTitle[6]
      this.active = this.monitorData.length

      // 保温(第五次)
      const { data: lmdpFifthC } = await getFifthConciseList({ holdRefine5GroupName: lmdpFourthC[0].holdRefine4GroupName })
      this.monitorData.push(lmdpFifthC[0])
      // this.stepData[7].description = '开始时间:' + this.monitorData[7].holdRefine5BeginTime + '结束时间:' + this.monitorData[7].holdRefine5EndTime + '精炼剂#介质:' + this.monitorData[7].holdRefine5Medium + '精炼剂#用量:' + this.monitorData[7].holdRefine5Dose + '班组名称:' + this.monitorData[7].holdRefine5GroupName
      // this.stepData[7].description = '开始时间:' + this.monitorData[7].holdRefine5BeginTime + '结束时间:' + this.monitorData[7].holdRefine5EndTime   + '班组名称:' + this.monitorData[7].holdRefine5GroupName
      this.baowen5Data = lmdpFifthC
      this.nowProduct = this.produceTitle[7]
      this.active = this.monitorData.length

      // 铸轧生产
      const { data: lmdpCastPL } = await getCastProduceList({ smeltTimes: lmdpFifthC[0].holdRefine5GroupName })
      this.monitorData.push(lmdpCastPL[0])
      // this.stepData[8].description = '关联计划ID:' + this.monitorData[8].planId + '关联熔次号:' + this.monitorData[8].smeltTimes + '铸轧卷号:' + this.monitorData[8].reelNum + ' 牌号:' + this.monitorData[8].brand + '客户信息:' + this.monitorData[8].customer + '板厚:' + this.monitorData[8].thick + '规格宽度:' + this.monitorData[8].width + '上卷信息#上卷时间:' + this.monitorData[8].procUpperTime + ' 上卷信息#交班壁厚:' + this.monitorData[8].procUpperShiftTthick + '上卷信息#交班卷重:' + this.monitorData[8].procUpperShiftTweight + '下卷信息#库位号:' + this.monitorData[8].procLowerLocationNum + '下卷信息#当班卷重:' + this.monitorData[8].procLowerDutyWeight + '下卷信息#卸卷时间:' + this.monitorData[8].procLowerRemoveTime + '下卷信息#卷径±2mm:' + this.monitorData[8].procLowerRollDiameter + '倒炉作业#时间:' + this.monitorData[8].qtfhTurndownTime + '倒炉作业#熔次号:' + this.monitorData[8].qtfhTurndownSmeltNum + '创建时间:' + this.monitorData[8].createTime
      // this.stepData[8].description = '关联计划ID:' + this.monitorData[8].planId + '关联熔次号:' + this.monitorData[8].smeltTimes + '铸轧卷号:' + this.monitorData[8].reelNum + ' 牌号:'  + '创建时间:' + this.monitorData[8].createTime
      this.zhuzhascData = lmdpCastPL
      this.nowProduct = this.produceTitle[8]
      this.active = this.monitorData.length

      // 铸轧卷质检
      const { data: lmdpQCRL } = await getQcCastReelList({ reelNum: lmdpCastPL[0].smeltTimes })
      this.monitorData.push(lmdpQCRL[0])
      // this.stepData[9].description = '创建时间:' + this.monitorData[9].createTime + '修改时间:' + this.monitorData[9].ts + '(批号)铸轧卷号:' + this.monitorData[9].reelNum + ' 牌号:' + this.monitorData[9].brand + '规格:' + this.monitorData[9].model + '重量:' + this.monitorData[9].weight + '厚度:' + this.monitorData[9].thickness + '宽度mm:' + this.monitorData[9].width + '表面质量:' + this.monitorData[9].surfaceQc + ' 外观质量:' + this.monitorData[9].facadeQc + '评审结果:' + this.monitorData[9].judgeResult + '综合判定:' + this.monitorData[9].judgeReamrk + '下卷时间:' + this.monitorData[9].nextReelTime
      // this.stepData[9].description = '创建时间:' + this.monitorData[9].createTime + '修改时间:' + this.monitorData[9].ts + '(批号)铸轧卷号:' + this.monitorData[9].reelNum + ' 牌号:' + this.monitorData[9].brand
      this.zhuzhajuanzjData = lmdpQCRL
      this.nowProduct = this.produceTitle[9]
      this.active = this.monitorData.length

      // 冷轧生产计划确定
      const { data: lmdpColdP } = await getColdPlanList({ coldreductionstripNum: lmdpQCRL[0].reelNum })
      this.monitorData.push(lmdpColdP[0])
      // this.stepData[10].description = '冷轧带材计划编号:' + this.monitorData[10].coldreductionstripNum + '创建时间:' + this.monitorData[10].createTime + '客户名称:' + this.monitorData[10].client + '交货日期A2:' + this.monitorData[10].deliveredTimeA2 + '交货日期B2:' + this.monitorData[10].deliveredTimeB2 + '来料规格:' + this.monitorData[10].comeSpec + '成品规格:' + this.monitorData[10].productSpec + '抗拉强度ob/Mpa:' + this.monitorData[10].tensileStrength + '延伸率:' + this.monitorData[10].elongation + '折弯性能:' + this.monitorData[10].bendingPerformance + '纵向厚度偏差mm:' + this.monitorData[10].warpWidth + '宽度偏差mm:' + this.monitorData[10].warpWidth + '凸面率%:' + this.monitorData[10].convexRate + '产品外观质量及轧制要求:' + this.monitorData[10].appearanceReq + '合金牌号:' + this.monitorData[10].alloyNumber + '平直度:' + this.monitorData[10].flatness
      this.lenzhascjhData = lmdpColdP
      this.nowProduct = this.produceTitle[10]
      this.active = this.monitorData.length

      // 冷轧工序
      const { data: lmdpColdProduce } = await getColdProduceList({ reelNum: lmdpColdP[0].coldreductionstripNum })
      this.monitorData.push(lmdpColdProduce[0])
      // this.stepData[11].description = '计划ID:' + this.monitorData[11].planId + '(铸轧卷号)来料卷号:' + this.monitorData[11].reelNum + '冷轧卷号:' + this.monitorData[11].batchNum + '合金牌号:' + this.monitorData[11].brand + '预定交货日期:' + this.monitorData[11].deliveryDate + '成品厚度:' + this.monitorData[11].productThick + '成品宽度:' + this.monitorData[11].productWidth + '开坯时间:' + this.monitorData[11].coggingTime + '中轧时间:' + this.monitorData[11].midRollTime + '精轧时间:' + this.monitorData[11].planishTime + '冷轧成品重量:' + this.monitorData[11].coldProductWeight + '切边时间:' + this.monitorData[11].cutTime + '生产状态:' + this.monitorData[11].produceStatus + '入库时间:' + this.monitorData[11].storageInTime + '入库重量:' + this.monitorData[11].storageInWeight + '创建时间:' + this.monitorData[11].createTime + '修改时间:' + this.monitorData[11].ts
      this.lenzhagongxuData = lmdpColdProduce
      this.nowProduct = this.produceTitle[11]
      this.active = this.monitorData.length

      // 退火
      const { data: lmdpCFRL } = await getColdFurnaceRecordList({ batchNum: lmdpColdProduce[0].reelNum })
      this.monitorData.push(lmdpCFRL[0])
      // this.stepData[12].description = '创建时间:' + this.monitorData[12].createTime + '冷轧卷号:' + this.monitorData[12].batchNum + '退火日期:' + this.monitorData[12].recordDate + '退火炉号:' + this.monitorData[12].furnaceNum + '退火开始时间:' + this.monitorData[12].startTime + '退火结束时间:' + this.monitorData[12].endTime + '炉气温度(℃)Ⅰ区:' + this.monitorData[12].gasTemperature1 + '炉气温度(℃)ⅠI区:' + this.monitorData[12].gasTemperature2 + '炉气温度(℃)ⅠII区:' + this.monitorData[12].gasTemperature3 + '水压MPa:' + this.monitorData[12].hydraulicPressure + '气压MPa:' + this.monitorData[12].gasPressure
      this.tuihuoData = lmdpCFRL
      this.nowProduct = this.produceTitle[12]
      this.active = this.monitorData.length

      // 冷轧卷成品质检
      const { data: lmdpQCCRR } = await getQcColdReelReportList({ batchNum: lmdpCFRL[0].batchNum })
      this.monitorData.push(lmdpQCCRR[0])
      // this.stepData[13].description = '创建时间:' + this.monitorData[13].createTime + '修改时间:' + this.monitorData[13].ts + '客户名称:' + this.monitorData[13].consumer + '冷轧卷号:' + this.monitorData[13].batchNum + '厚度:' + this.monitorData[13].thickness + '宽度mm:' + this.monitorData[13].width + '卷径:' + this.monitorData[13].rollDiameter + '合金牌号:' + this.monitorData[13].brand + '状态:' + this.monitorData[13].status + '重量:' + this.monitorData[13].weight + '板形质量:' + this.monitorData[13].shapeQc + '尺寸偏差:' + this.monitorData[13].dimensionalDeviation + '力学性能:' + this.monitorData[13].mechanicalProperty + '表面质量:' + this.monitorData[13].surfaceQc + '外观质量:' + this.monitorData[13].facadeQc + '晶粒度:' + this.monitorData[13].sampleLevel + '执行标准:' + this.monitorData[13].executiveStandard + '综合判定:' + this.monitorData[13].judgeResult + ' 不合格处理意见:' + this.monitorData[13].handleAdvice + '日期时间:' + this.monitorData[13].reporTtime
      this.lenzhajuanzjData = lmdpQCCRR
      this.nowProduct = this.produceTitle[13]
      this.active = this.monitorData.length

      // 重卷中切
      const { data: lmdpQRRecord } = await getColdRereelerRecordList({ reelNum: lmdpQCCRR[0].batchNum })
      this.monitorData.push(lmdpQRRecord[0])
      // this.stepData[14].description = '创建时间:' + this.monitorData[14].createTime + '合金状态:' + this.monitorData[14].brand + '产品名称:' + this.monitorData[14].productName + '来料卷号(铸轧卷号):' + this.monitorData[14].reelNum + '来料规格mm:' + this.monitorData[14].originRegular + '加工后冷轧卷号:' + this.monitorData[14].batchNum + '加工后规格mm:' + this.monitorData[14].processedRegular + '质量状况#质量情况:' + this.monitorData[14].quality + '质量状况#判定结果:' + this.monitorData[14].result
      this.rewindData = lmdpQRRecord
      this.nowProduct = this.produceTitle[14]
      this.active = this.monitorData.length

      // 冷轧卷成品入库
      const { data: lmdpCSRL } = await getColdStoreRecordList({ reelNum: lmdpQRRecord[0].reelNum })
      this.monitorData.push(lmdpCSRL[0])
      // this.stepData[15].description = '库位区域:' + this.monitorData[15].area + '货架号:' + this.monitorData[15].shelves + '冷轧卷号:' + this.monitorData[15].reelNum + ' 牌号:' + this.monitorData[15].brand + '重量:' + this.monitorData[15].weight + '板型情况:' + this.monitorData[15].plateCut + '客户名称:' + this.monitorData[15].consumerName + '入库时间:' + this.monitorData[15].storageTime + '创建时间:' + this.monitorData[15].createTime + '修改时间:' + this.monitorData[15].ts
      this.lenzharukuData = lmdpCSRL
      this.nowProduct = this.produceTitle[15]
      this.active = this.monitorData.length

      // 包装检验
      const { data: lmdpQcPack } = await getQcPackList({ batchNum: lmdpCSRL[0].reelNum })
      this.monitorData.push(lmdpQcPack[0])
      // this.stepData[16].description = '创建时间:' + this.monitorData[16].createTime + '修改时间:' + this.monitorData[16].ts + '冷轧卷号:' + this.monitorData[16].batchNum + '规格:' + this.monitorData[16].model + '合金状态:' + this.monitorData[16].alloyStatus + '卷径Φ:' + this.monitorData[16].rollDiameter + '重量（t）:' + this.monitorData[16].weight + '包装日期:' + this.monitorData[16].packageTime + '报告时间:' + this.monitorData[16].reportTime
      this.baozhuangData = lmdpQcPack
      this.nowProduct = this.produceTitle[16]
      this.active = this.monitorData.length
    },
    // 取消按钮
    cancel() {
      this.open = false
      this.reset()
    },
    // 风险流程操作
    fengxianClick(row) {
      console.log(row)
      this.fengxianVisible = true
      this.fengxianAlign = row
    },
    // 异常流程操作
    yichangClick(row) {
      console.log(row)
      this.yichangVisible = true
      this.yichangAlign = row
    },
    next() {
      if (this.active++ > 2) this.active = 0
    },
    format(percentage) {
      return percentage === 100 ? '满' : `${percentage}%`
    }
  }
}
</script>

<style scoped="sass">
	.top_card {
		flex: 2;
		margin: 1% 1%;
	}

	.bottom_card {
		margin: 1% 1%;
	}

	/deep/ .el-card__header {
		padding: 10px 20px;
	}

	.bottom_card {
		margin: 1% 1%;
	}

	/deep/ .el-card__header {
		padding: 10px 20px;
	}

	.el_progress {
		margin: 15px 0;
	}
</style>
