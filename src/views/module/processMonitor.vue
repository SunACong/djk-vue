<template>
  <div class="app-container" style="background-color: white">
    <div style="background-color: #409EFF;padding: 10px 10px">
      模块功能说明：这是整体生产流程功能模块，该模块主要查询整个生产流程步骤的状态，流程步骤下方是每个流程的详细信息，在下方输入框输入计划单号/熔次号/冷轧卷号可以查询整个生产流程的状态。样例可输入冷轧卷号（ZZ2205-005）
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
      <div style="background-color: #409EFF;padding: 10px 10px" >铸轧生产计划详细信息</div>
      <div style="background-color: white;padding: 10px 10px">
        <el-table
            :data="zhuzhaData"
            style="width: 100%"
            height="350"
        >
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
      <div style="background-color: #409EFF;padding: 10px 10px">熔炼工序详细信息</div>
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
      <div style="background-color: #409EFF;padding: 10px 10px">保温工序详细信息</div>
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
      <div style="background-color: #409EFF;padding: 10px 10px">铸轧工序详细信息</div>
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
      <div style="background-color: #409EFF;padding: 10px 10px">出入库记录（铸轧）工序详细信息</div>
      <div style="background-color: white;padding: 10px 10px">
        <el-table
            :data="zhuzhaChuRu"
            style="width: 100%"
            height="250">
          <el-table-column
              prop="area"
              label="区域"
              width="150">
          </el-table-column>
          <el-table-column
              prop="shelves"
              label="货架号"
              width="150">
          </el-table-column>
          <el-table-column
              prop="status"
              label="状态，字典：转入、转出"
              width="120">
          </el-table-column>
          <el-table-column
              prop="reelNum"
              label="卷号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="brand"
              label="牌号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="model"
              label="规格"
              width="120">
          </el-table-column>
          <el-table-column
              prop="rollDiameter"
              label="卷径"
              width="120">
          </el-table-column>
          <el-table-column
              prop="productUse"
              label="用途"
              width="120">
          </el-table-column>
          <el-table-column
              prop="storerId"
              label="入库人ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="storerName"
              label="入库人姓名"
              width="120">
          </el-table-column>
          <el-table-column
              prop="storageTime"
              label="入库时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="deliveryId"
              label="出库人ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="deliveryName"
              label="出库人名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="deliveryTime"
              label="出库时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="consumerName"
              label="客户名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="deleteFlag"
              label="逻辑删除，是否删除 :0、未删除；1、删除"
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
              label="修改人id"
              width="120">
          </el-table-column>
          <el-table-column
              prop="createTime"
              label="创建时间"
              width="150">
          </el-table-column>
          <el-table-column
              prop="ts"
              label="修改时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="transferTime"
              label="转运时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="inspectionDecisionInformation"
              label="质检判定信息"
              width="120">
          </el-table-column>

        </el-table>
      </div>
      <div style="background-color: #409EFF;padding: 10px 10px">铸轧卷质检报告序详细信息</div>
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
      <div style="background-color: #409EFF;padding: 10px 10px">冷轧生产计划工序详细信息</div>
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
      <div style="background-color: #409EFF;padding: 10px 10px">冷轧工序详细信息</div>
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
      <div style="background-color: #409EFF;padding: 10px 10px">退火工序详细信息</div>
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
      <div style="background-color: #409EFF;padding: 10px 10px">重卷工序详细信息</div>
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
      <div style="background-color: #409EFF;padding: 10px 10px">出入库记录（冷轧）工序详细信息</div>
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
              width="150">
          </el-table-column>
          <el-table-column
              prop="reelNum"
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
      <div style="background-color: #409EFF;padding: 10px 10px">冷轧工序质量巡检详细信息</div>
      <div style="background-color: white;padding: 10px 10px">
        <el-table
            :data="lenzhaxunjuanData"
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
              prop="planNum"
              label="计划编号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="consumer"
              label="客户名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="batchNum"
              label="批号（冷轧卷号）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="brand"
              label="合金牌号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="status"
              label="成品状态"
              width="120">
          </el-table-column>
          <el-table-column
              prop="model"
              label="成品规格"
              width="120">
          </el-table-column>
          <el-table-column
              prop="rollDiameter"
              label="成品卷径"
              width="120">
          </el-table-column>
          <el-table-column
              prop="splitFlag"
              label="是否剖分卷（废弃）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold1ThickIn"
              label="入口厚度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold1ThickOut"
              label="出口厚度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold1Remark"
              label="备注"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold1Picture"
              label="抽查照片"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold1Inspector"
              label="质检员"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold1Time"
              label="轧制时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold2ThickIn"
              label="入口厚度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold2ThickOut"
              label="出口厚度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold2Remark"
              label="备注"
              width="150">
          </el-table-column>
          <el-table-column
              prop="cold2Picture"
              label="抽查照片"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold2Inspector"
              label="质检员"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold2Time"
              label="轧制时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold3ThickIn"
              label="入口厚度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold3ThickOut"
              label="出口厚度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold3Remark"
              label="备注"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold3Picture"
              label="抽查照片"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold3Inspector"
              label="质检员"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold3Time"
              label="轧制时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold4ThickIn"
              label="入口厚度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold4ThickOut"
              label="出口厚度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold4Remark"
              label="备注"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold4Picture"
              label="抽查照片"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold4Inspector"
              label="质检员"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold4Time"
              label="轧制时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold5ThickIn"
              label="入口厚度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold5ThickOut"
              label="出口厚度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold5Remark"
              label="备注"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold5Picture"
              label="抽查照片"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold5Inspector"
              label="质检员"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold5Time"
              label="轧制时间"
              width="150">
          </el-table-column>
          <el-table-column
              prop="annealing1Workmanship"
              label="第1次退火#工艺符合性"
              width="120">
          </el-table-column>
          <el-table-column
              prop="annealing2Workmanship"
              label="第2次退火#工艺符合性"
              width="120">
          </el-table-column>
          <el-table-column
              prop="annealing3Workmanship"
              label="第3次退火#工艺符合性"
              width="120">
          </el-table-column>
          <el-table-column
              prop="reelNum"
              label="来料信息#卷号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="thickness"
              label="第1次切边#厚度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="originWidth"
              label="第1次切边#来料宽度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="width"
              label="第1次切边#切后宽度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="headStock"
              label="第1次切边#头料"
              width="120">
          </el-table-column>
          <el-table-column
              prop="headRejectReason"
              label="第1次切边#甩除原因"
              width="120">
          </el-table-column>
          <el-table-column
              prop="tailStock"
              label="第1次切边#尾料"
              width="120">
          </el-table-column>
          <el-table-column
              prop="tailRejectReason"
              label="第1次切边#甩除原因"
              width="120">
          </el-table-column>
          <el-table-column
              prop="outerRemove"
              label="第1次切边#外圈扒除"
              width="120">
          </el-table-column>
          <el-table-column
              prop="removeReason"
              label="第1次切边#扒除原因"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cutWeight"
              label="第1次切边#切后重量（废弃）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="transverseThickness"
              label="第1次切边#横向厚度（废弃）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cutInspector"
              label="第1次切边#纵向厚度（废弃）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cutTime"
              label="第1次切边#时间（废弃）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cutPicture"
              label="第1次切边#观察照片（废弃）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="singleHeight"
              label="单项质检记录#厚度（mm)"
              width="150">
          </el-table-column>
          <el-table-column
              prop="singleWidth"
              label="单项质检记录#宽度（mm)"
              width="120">
          </el-table-column>
          <el-table-column
              prop="singleMediumConvexity"
              label="单项质检记录#中凸度(%)"
              width="120">
          </el-table-column>
          <el-table-column
              prop="singleStraightness"
              label="单项质检记录#平直度(I)"
              width="120">
          </el-table-column>
          <el-table-column
              prop="singleStrength"
              label="单项质检记录#抗拉强度(Rm/MPa)"
              width="120">
          </el-table-column>
          <el-table-column
              prop="singleExtension"
              label="单项质检记录#延伸率(%)"
              width="120">
          </el-table-column>
          <el-table-column
              prop="singleGrainSize"
              label="单项质检记录#晶粒度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="singleRoughness"
              label="单项质检记录#粗糙度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="surfaceQuality"
              label="单项质检记录#表面质量是否合格"
              width="120">
          </el-table-column>
          <el-table-column
              prop="surfaceQualityRemark"
              label="单项质检记录#表面质量描述"
              width="120">
          </el-table-column>
          <el-table-column
              prop="appearanceQuality"
              label="单项质检记录#外观质量是否合格"
              width="120">
          </el-table-column>
          <el-table-column
              prop="appearanceQualityRemark"
              label="单项质检记录#外观质量描述"
              width="120">
          </el-table-column>
          <el-table-column
              prop="accountOriginThickness"
              label="记事#坯料厚度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="accountOriginWidth"
              label="记事#坯料宽度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="accountOriginWeight"
              label="记事#坯料重量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="finishedThickness"
              label="冷轧成品#厚度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="finishedWidth"
              label="冷轧成品#宽度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="finishedRollDiameter"
              label="冷轧成品#卷径"
              width="120">
          </el-table-column>
          <el-table-column
              prop="finishedWeight"
              label="冷轧成品#重量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="finishedOuterRemove"
              label="冷轧成品#外圈扒除"
              width="120">
          </el-table-column>
          <el-table-column
              prop="finishedRemoveReason"
              label="冷轧成品#扒除原因"
              width="120">
          </el-table-column>
          <el-table-column
              prop="finishedTransverseThickness"
              label="冷轧成品#横向厚度"
              width="150">
          </el-table-column>
          <el-table-column
              prop="finishedLongitudinalThickness"
              label="冷轧成品#纵向厚度"
              width="120">
          </el-table-column>
          <el-table-column
              prop="finishedThicknessDifference"
              label="冷轧成品#厚差记录"
              width="120">
          </el-table-column>
          <el-table-column
              prop="endwiseHeight"
              label="冷轧计划厚度(mm)（废弃）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="warpWidth"
              label="冷轧计划宽度(mm)（废弃）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="convexRate"
              label="冷轧计划中凸度（废弃）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="flatness"
              label="冷轧计划平直度（废弃）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="tensileStrength"
              label="冷轧计划抗拉强度ob/Mpa（废弃）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="elongation"
              label="冷轧计划延伸率（废弃）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="grain"
              label="冷轧计划晶粒度（废弃）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="roughness"
              label="冷轧计划坯料表面粗糙度（废弃）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="finishedThicknessDifferencePicture"
              label="冷轧成品#厚差曲线图"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold6ThickIn"
              label="入口厚度（mm）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold6ThickOut"
              label="出口厚度（mm）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold6Remark"
              label="备注"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold6Picture"
              label="抽查照片"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold6Inspector"
              label="质检员"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold6Time"
              label="轧制时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="castAbnormalInfo"
              label="铸坯异常信息（废弃）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="rollPlan"
              label="后续轧制工作安排（废弃）"
              width="150">
          </el-table-column>
          <el-table-column
              prop="cold1DailyQcSituation"
              label="每日生产和质量异常#第一道冷轧工序"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold2DailyQcSituation"
              label="每日生产和质量异常#第二道冷轧工序"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold3DailyQcSituation"
              label="每日生产和质量异常#第三道冷轧工序"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold4DailyQcSituation"
              label="每日生产和质量异常#第四道冷轧工序"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold5DailyQcSituation"
              label="每日生产和质量异常#第五道冷轧工序"
              width="120">
          </el-table-column>
          <el-table-column
              prop="cold6DailyQcSituation"
              label="每日生产和质量异常#第六道冷轧工序"
              width="120">
          </el-table-column>
          <el-table-column
              prop="furnace1DailyQcSituation"
              label="每日生产和质量异常#第一次退火工序"
              width="120">
          </el-table-column>
          <el-table-column
              prop="furnace2DailyQcSituation"
              label="每日生产和质量异常#第二次退火工序"
              width="120">
          </el-table-column>
          <el-table-column
              prop="furnace3DailyQcSituation"
              label="每日生产和质量异常#第三次退火工序"
              width="120">
          </el-table-column>
          <el-table-column
              prop="reelerDailyQcSituation"
              label="每日生产和质量异常#重卷工序（废弃）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="annealing1Inspector"
              label="第1次退火#质检员"
              width="120">
          </el-table-column>
          <el-table-column
              prop="annealing2Inspector"
              label="第2次退火#质检员"
              width="120">
          </el-table-column>
          <el-table-column
              prop="annealing3Inspector"
              label="第3次退火#质检员"
              width="120">
          </el-table-column>
          <el-table-column
              prop="annealing1Thick"
              label="第1次退火#退火厚度（mm）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="annealing2Thick"
              label="第2次退火#退火厚度（mm）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="annealing3Thick"
              label="第3次退火#退火厚度（mm）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="furnaceNum"
              label="退火炉号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="rollweightRequirements"
              label="卷重要求"
              width="120">
          </el-table-column>
          <el-table-column
              prop="originRollDiameter"
              label="来料信息#卷径（mm）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="originAbnormalInformation"
              label="来料信息#异常信息"
              width="120">
          </el-table-column>
          <el-table-column
              prop="originDisposalRequirements"
              label="来料信息#处置要求"
              width="150">
          </el-table-column>
          <el-table-column
              prop="annealing1Entrytime"
              label="第1次退火#入炉时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="annealing1Exittime"
              label="第1次退火#出炉时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="annealing2Entrytime"
              label="第2次退火#入炉时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="annealing2Exittime"
              label="第2次退火#出炉时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="annealing3Entrytime"
              label="第3次退火#入炉时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="annealing3Exittime"
              label="第3次退火#出炉时间"
              width="120">
          </el-table-column>
          <el-table-column
              prop="accountUnqualifiedFact"
              label="记事#不合格事实描述"
              width="120">
          </el-table-column>
          <el-table-column
              prop="accountUnqualifiedReview"
              label="记事#不合格评审意见"
              width="120">
          </el-table-column>
          <el-table-column
              prop="finishedFullbandLength"
              label="冷轧成品#全带长（m）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="singleRollDiameter"
              label="单项质检记录#卷径"
              width="120">
          </el-table-column>
          <el-table-column
              prop="singleRollWeight"
              label="单项质检记录#卷重"
              width="120">
          </el-table-column>
          <el-table-column
              prop="singleWedgeRatio"
              label="单项质检记录#楔形率"
              width="120">
          </el-table-column>
          <el-table-column
              prop="stripType"
              label="力学测定#带材种类  字典：带材种类"
              width="120">
          </el-table-column>
          <el-table-column
              prop="singleStrengthRe"
              label="力学测定#抗拉强度复检（Rm/MPa）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="singleExtensionRe"
              label="力学测定#延伸率复检（%）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="bendingPerformanceRequirements"
              label="力学测定#90°折弯性能要求  字典：bending_requirements"
              width="120">
          </el-table-column>
          <el-table-column
              prop="bendingPerformanceRe"
              label="力学测定#90°折弯性能复检  字典：bending_requirements"
              width="120">
          </el-table-column>
          <el-table-column
              prop="mechanicalMeasureReview"
              label="力学测定#评审意见"
              width="120">
          </el-table-column>
          <el-table-column
              prop="headAbnormalRejectPicture"
              label="重卷工序#头料异常甩除照片"
              width="150">
          </el-table-column>
          <el-table-column
              prop="headAbnormalRejectVedio"
              label="重卷工序#头料异常甩除视频"
              width="120">
          </el-table-column>
          <el-table-column
              prop="tailAbnormalRejectPicture"
              label="重卷工序#尾料异常甩除照片"
              width="120">
          </el-table-column>
          <el-table-column
              prop="tailAbnormalRejectVedio"
              label="重卷工序#尾料异常甩除视频"
              width="120">
          </el-table-column>
          <el-table-column
              prop="outerAbnormalRejectPicture"
              label="重卷工序#外圈扒除异常甩除照片"
              width="120">
          </el-table-column>
          <el-table-column
              prop="weighingThickness"
              label="优箔信息#厚度（mm）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="weighingConvexity"
              label="优箔信息#中凸度（%）"
              width="120">
          </el-table-column>

        </el-table>
      </div>
      <div style="background-color: #409EFF;padding: 10px 10px">冷轧卷质检报告工序详细信息</div>
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
      <div style="background-color: #409EFF;padding: 10px 10px">投诉及处理信息详细信息</div>
      <div style="background-color: white;padding: 10px 10px">
        <el-table
            :data="complaintData"
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
              prop="complaintTime"
              label="投诉日期"
              width="120">
          </el-table-column>
          <el-table-column
              prop="batchNum"
              label="投诉卷号"
              width="120">
          </el-table-column>
          <el-table-column
              prop="castDate"
              label="铸轧日期"
              width="120">
          </el-table-column>
          <el-table-column
              prop="coldDate"
              label="冷轧日期"
              width="120">
          </el-table-column>
          <el-table-column
              prop="castModel"
              label="铸轧规格"
              width="120">
          </el-table-column>
          <el-table-column
              prop="coldModel"
              label="冷轧规格"
              width="120">
          </el-table-column>
          <el-table-column
              prop="brand"
              label="合金"
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
              prop="hydrogenContent"
              label="氢含量"
              width="120">
          </el-table-column>
          <el-table-column
              prop="productType"
              label="产品类别"
              width="120">
          </el-table-column>
          <el-table-column
              prop="complaintDesc"
              label="投诉问题"
              width="120">
          </el-table-column>
          <el-table-column
              prop="scrapWeight"
              label="投诉重量（kg）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="demotionWeight"
              label="降级重量（kg）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="scrapWeight"
              label="报废重量（kg）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="castWeight"
              label="铸轧责任重量（kg）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="coldWeight"
              label="冷轧责任重量（kg）"
              width="150">
          </el-table-column>
          <el-table-column
              prop="alPrice"
              label="当时铝价（元）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="managerId"
              label="管理人员id"
              width="120">
          </el-table-column>
          <el-table-column
              prop="managerName"
              label="管理人员姓名"
              width="120">
          </el-table-column>
          <el-table-column
              prop="chargeId"
              label="分管负责人id"
              width="120">
          </el-table-column>
          <el-table-column
              prop="chargeName"
              label="分管负责人姓名"
              width="120">
          </el-table-column>
          <el-table-column
              prop="directorId"
              label="主管负责人id"
              width="120">
          </el-table-column>
          <el-table-column
              prop="directorName"
              label="主管负责人姓名"
              width="120">
          </el-table-column>
          <el-table-column
              prop="totalLossAmount"
              label="总损失金额（元）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="managerPunishAmount"
              label="管理人员处罚金额（元）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="chargePunishAmount"
              label="分管负责人处罚金额（元）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="directorPunishAmount"
              label="主管负责人处罚金额（元）"
              width="120">
          </el-table-column>
          <el-table-column
              prop="complaintReport"
              label="投诉报告"
              width="120">
          </el-table-column>
          <el-table-column
              prop="castInspectDescription"
              label="铸轧卷质检说明"
              width="120">
          </el-table-column>
          <el-table-column
              prop="coldInspectDescription"
              label="冷轧卷质检说明"
              width="120">
          </el-table-column>
          <el-table-column
              prop="customer"
              label="客户名称"
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
import { getCastProduceList } from '@/api/ImdpCastProduce'
import { getQcCastReelList } from '@/api/ImdpQcCastReel'
import { getColdPlanList } from '@/api/ImdpColdPlan'
import { getColdProduceList } from '@/api/ImdpColdProduce'
import { getColdFurnaceRecordList } from '@/api/ImdpColdFurnaceRecord'
import { getQcColdReelReportList } from '@/api/ImdpQcColdReelReport'
import { getColdRereelerRecordList } from '@/api/ImdpColdRereelerRecord'
import { getColdStoreRecordList } from '@/api/ImdpColdStoreRecord'
import { getCastReelStoreRecordList } from '@/api/lmdpCastReelStoreRecord'
import { getQcColdInspectList } from '@/api/lmdpQcColdInspect'
import { getQcComplaintDetailList } from '@/api/lmdpQcComplaintDetail'
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
      produceTitle: ['铸轧生产计划', '熔炼工序', '保温工序', '铸轧工序', '出入库记录（铸轧）', '铸轧卷质检报告', '冷轧生产计划', '冷轧工序', '退火工序', '重卷工序', '出入库记录', '冷轧工序质量巡检', '冷轧卷质检报告', '投诉及处理信息'],
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
        title: '工序1：铸轧生产计划'
        // description: ' ' +' ' +' '
      },
      {
        title: '工序2：熔炼工序'
        // description: '关联计划ID: ' +'熔次号: ' +'牌号: ' +'创建时间: ' +'修改时间: '
      },
      {
        title: '工序3：保温工序'
        // description: '熔次号：' +                '牌号：' +                '创建时间:' +                '修改时间: '
      },
      {
        title: '工序4：铸轧工序'
        // description: '开始时间: ' +                '结束时间:' +                '精炼剂#介质: ' +                '精炼剂#用量：' +                '班组名称： '
      },
      {
        title: '工序5：出入库记录（铸轧）'
        // description: '开始时间: ' +                '结束时间:' +                '精炼剂#介质: ' +                '精炼剂#用量： ' +                '班组名称： '
      },
      // {
      //   title: '工序6：铸轧质检记录'
      //   // description: '开始时间: ' +                '结束时间: ' +                '精炼剂#介质: ' +                '精炼剂#用量： ' +                '班组名称： '
      // },
      {
        title: '工序6：铸轧卷质检报告'
        // description: '开始时间: ' +                '结束时间: ' +                '精炼剂#介质:' +                '精炼剂#用量：' +                '班组名称： '
      },
      {
        title: '工序7：冷轧生产计划'
        // description: '开始时间: ' +                '结束时间: ' +                '精炼剂#介质:' +                '精炼剂#用量：' +                '班组名称： '

      },
      {
        title: '工序8：冷轧工序'
        // description: '关联计划ID：' +                '关联熔次号：' +                '铸轧卷号： ' +                '创建时间: '
      },
      {
        title: '工序9：退火工序'
        // description: '创建时间：' +                '修改时间：' +                '批号(铸轧卷号)：   ' +                '下卷时间：  '
      },
      {
        title: '工序10：重卷工序'
        // description: '冷轧带材计划编号：' +                '创建时间：' +                '客户名称：'
      },
      {
        title: '工序11：出入库记录'
        // description: '计划id：' +                '(铸轧卷号)来料卷号：   ' +                '冷轧卷号：   ' +                '合金牌号：  '
      },
      {
        title: '工序12：冷轧工序质量巡检'
        // description: '创建时间：  ' +                '冷轧卷号：   ' +                '退火日期：  '
      },
      {
        title: '工序13：冷轧卷质检报告'
        // description: '创建时间：' +                '修改时间：  ' +                '冷轧卷号：   ' +                '日期时间：  '
      },
      {
        title: '工序14：投诉及处理信息'
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
      zhuzhaChuRu: [{
        area: ' ',
        shelves: ' ',
        status: ' ',
        reelNum: ' ',
        brand: ' ',
        model: ' ',
        rollDiameter: ' ',
        productUse: ' ',
        storerId: ' ',
        storerName: '',
        storageTime: ' ',
        deliveryId: ' ',
        deliveryName: ' ',
        deliveryTime: ' ',
        consumerName: ' ',
        deleteFlag: ' ',
        creatorId: ' ',
        creatorName: ' ',
        reviserId: ' ',
        createTime: ' ',
        ts: '',
        transferTime: ' ',
        inspectionDecisionInformation: ' '
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
      lenzhaxunjuanData: [{
        createTime: ' ',
        ts: ' ',
        creatorId: ' ',
        planNum: ' ',
        consumer: ' ',
        productUse: ' ',
        batchNum: ' ',
        brand: ' ',
        status: ' ',
        model: '',
        rollDiameter: ' ',
        splitFlag: ' ',
        cold1ThickIn: ' ',
        cold1ThickOut: ' ',
        cold1Remark: ' ',
        cold1Picture: ' ',
        cold1Inspector: ' ',
        cold1Time: ' ',
        cold2ThickIn: ' ',
        cold2ThickOut: ' ',
        cold2Remark: ' ',
        cold2Picture: ' ',
        cold2Inspector: ' ',
        cold2Time: ' ',
        cold3ThickIn: '',
        cold3ThickOut: ' ',
        cold3Remark: ' ',
        cold3Picture: ' ',
        cold3Inspector: ' ',
        cold3Time: ' ',
        cold4ThickIn: '',
        cold4ThickOut: ' ',
        cold4Remark: ' ',
        cold4Picture: ' ',
        cold4Inspector: ' ',
        cold4Time: ' ',
        cold5ThickIn: '',
        cold5ThickOut: ' ',
        cold5Remark: ' ',
        cold5Picture: ' ',
        cold5Inspector: ' ',
        cold5Time: ' ',
        annealing1Workmanship: ' ',
        annealing2Workmanship: ' ',
        annealing3Workmanship: ' ',
        reelNum: ' ',
        thickness: ' ',
        originWidth: ' ',
        width: ' ',
        headStock: ' ',
        headRejectReason: ' ',
        tailStock: '',
        tailRejectReason: ' ',
        outerRemove: ' ',
        removeReason: ' ',
        cutWeight: ' ',
        transverseThickness: ' ',
        longitudinalThickness: ' ',
        cutInspector: ' ',
        cutTime: ' ',
        cutPicture: ' ',
        singleHeight: ' ',
        singleWidth: ' ',
        singleMediumConvexity: ' ',
        singleStraightness: ' ',
        singleStrength: ' ',
        singleExtension: '',
        singleGrainSize: ' ',
        singleRoughness: ' ',
        surfaceQuality: ' ',
        surfaceQualityRemark: ' ',
        appearanceQuality: ' ',
        appearanceQualityRemark: '',
        accountOriginThickness: ' ',
        accountOriginWidth: ' ',
        accountOriginWeight: ' ',
        finishedThickness: ' ',
        finishedWidth: ' ',
        finishedRollDiameter: '',
        finishedWeight: ' ',
        finishedOuterRemove: ' ',
        finishedRemoveReason: ' ',
        finishedTransverseThickness: ' ',
        finishedLongitudinalThickness: ' ',
        finishedThicknessDifference: ' ',
        endwiseHeight: ' ',
        warpWidth: ' ',
        convexRate: ' ',
        flatness: ' ',
        tensileStrength: ' ',
        elongation: ' ',
        grain: ' ',
        roughness: ' ',
        finishedThicknessDifferencePicture: '',
        cold6ThickIn: ' ',
        cold6ThickOut: ' ',
        cold6Remark: ' ',
        cold6Picture: ' ',
        cold6Inspector: ' ',
        cold6Time: ' ',
        castAbnormalInfo: ' ',
        rollPlan: ' ',
        cold1DailyQcSituation: ' ',
        cold2DailyQcSituation: ' ',
        cold3DailyQcSituation: ' ',
        cold4DailyQcSituation: ' ',
        cold5DailyQcSituation: ' ',
        cold6DailyQcSituation: ' ',
        furnace1DailyQcSituation: '',
        furnace2DailyQcSituation: ' ',
        furnace3DailyQcSituation: ' ',
        reelerDailyQcSituation: ' ',
        annealing1Inspector: ' ',
        annealing2Inspector: ' ',
        annealing3Inspector: '',
        annealing1Thick: ' ',
        annealing2Thick: ' ',
        annealing3Thick: ' ',
        furnaceNum: ' ',
        rollweightRequirements: ' ',
        originRollDiameter: ' ',
        originAbnormalInformation: ' ',
        originDisposalRequirements: '',
        annealing1Entrytime: ' ',
        annealing1Exittime: ' ',
        annealing2Entrytime: ' ',
        annealing2Exittime: ' ',
        annealing3Entrytime: ' ',
        annealing3Exittime: ' ',
        accountUnqualifiedFact: ' ',
        accountUnqualifiedReview: ' ',
        finishedFullbandLength: ' ',
        singleRollDiameter: ' ',
        singleRollWeight: ' ',
        singleWedgeRatio: ' ',
        stripType: ' ',
        singleStrengthRe: ' ',
        singleExtensionRe: '',
        bendingPerformanceRequirements: ' ',
        bendingPerformanceRe: ' ',
        mechanicalMeasureReview: ' ',
        headAbnormalRejectPicture: ' ',
        headAbnormalRejectVedio: ' ',
        tailAbnormalRejectPicture: ' ',
        tailAbnormalRejectVedio: ' ',
        outerAbnormalRejectPicture: ' ',
        weighingThickness: ' ',
        weighingConvexity: ' '
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
      complaintData: [{
        createTime: ' ',
        ts: ' ',
        creatorId: ' ',
        complaintTime: ' ',
        batchNum: '',
        castDate: ' ',
        coldDate: ' ',
        castModel: ' ',
        coldModel: ' ',
        brand: ' ',
        status: ' ',
        weight: '',
        hydrogenContent: ' ',
        productType: ' ',
        complaintDesc: '',
        complaintWeight: ' ',
        scrapWeight: ' ',
        demotionWeight: ' ',
        castWeight: ' ',
        coldWeight: ' ',
        alPrice: ' ',
        managerId: '',
        managerName: ' ',
        chargeId: ' ',
        chargeName: ' ',
        directorId: ' ',
        directorName: ' ',
        totalLossAmount: ' ',
        managerPunishAmount: '',
        chargePunishAmount: ' ',
        directorPunishAmount: ' ',
        complaintReport: '',
        castInspectDescription: ' ',
        coldInspectDescription: ' ',
        customer: ''
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

      // 铸轧生产计划
      const { data: lmdpCP } = await getCastPlanList(this.queryParams)
      this.monitorData.push(lmdpCP[0])
      this.zhuzhaData = lmdpCP
      this.active = 0
      this.nowProduct = this.produceTitle[0]

      // 熔炼工序
      const { data: lmdpCSH } = await getCastSmeltHoldList({ planId: lmdpCP[0].produceId })
      this.monitorData.push(lmdpCSH[0])
      console.log(lmdpCSH)
      this.rongluData = lmdpCSH
      this.nowProduct = this.produceTitle[1]
      this.active = 1

      // 保温工序
      const { data: lmdpCHF } = await getCastHoldingFurnaceList({ smeltTimes: lmdpCSH[0].planId })
      this.monitorData.push(lmdpCHF[0])
      this.baowenData = lmdpCHF
      this.nowProduct = this.produceTitle[2]
      this.active = 2

      // 铸轧工序
      const { data: lmdpCastPL } = await getCastProduceList({ planId: lmdpCHF[0].smeltTimes })
      this.monitorData.push(lmdpCastPL[0])
      this.zhuzhascData = lmdpCastPL
      this.nowProduct = this.produceTitle[3]
      this.active = 3

      // 出入库记录（铸轧）
      const { data: lmdpCRSR } = await getCastReelStoreRecordList({ reelNum: lmdpCastPL[0].planId })
      this.monitorData.push(lmdpCRSR[0])
      this.zhuzhaChuRu = lmdpCRSR
      this.nowProduct = this.produceTitle[4]
      this.active = 4

      // 铸轧卷质检报告
      const { data: lmdpQCRL } = await getQcCastReelList({ reelNum: lmdpCRSR[0].reelNum })
      this.monitorData.push(lmdpQCRL[0])
      this.zhuzhajuanzjData = lmdpQCRL
      this.nowProduct = this.produceTitle[5]
      this.active = 5

      // 冷轧生产计划确定
      const { data: lmdpColdP } = await getColdPlanList({ coldreductionstripNum: lmdpQCRL[0].reelNum })
      this.monitorData.push(lmdpColdP[0])
      this.lenzhascjhData = lmdpColdP
      this.nowProduct = this.produceTitle[6]
      this.active = 6

      // 冷轧工序
      const { data: lmdpColdProduce } = await getColdProduceList({ batchNum: lmdpColdP[0].coldreductionstripNum })
      this.monitorData.push(lmdpColdProduce[0])
      this.lenzhagongxuData = lmdpColdProduce
      this.nowProduct = this.produceTitle[7]
      this.active = 7

      // 退火
      const { data: lmdpCFRL } = await getColdFurnaceRecordList({ batchNum: lmdpColdProduce[0].batchNum })
      this.monitorData.push(lmdpCFRL[0])
      this.tuihuoData = lmdpCFRL
      this.nowProduct = this.produceTitle[8]
      this.active = 8

      // 重卷中切
      const { data: lmdpQRRecord } = await getColdRereelerRecordList({ batchNum: lmdpCFRL[0].batchNum })
      this.monitorData.push(lmdpQRRecord[0])
      this.rewindData = lmdpQRRecord
      this.nowProduct = this.produceTitle[9]
      this.active = 9

      // 出入库记录（冷轧）
      const { data: lmdpCSRL } = await getColdStoreRecordList({ reelNum: lmdpQRRecord[0].batchNum })
      this.monitorData.push(lmdpCSRL[0])
      this.lenzharukuData = lmdpCSRL
      this.nowProduct = this.produceTitle[10]
      this.active = 10

      // 冷轧工序质量巡检
      const { data: lmdpQcInspect } = await getQcColdInspectList({ batchNum: lmdpCSRL[0].reelNum })
      this.monitorData.push(lmdpQcInspect[0])
      this.lenzhaxunjuanData = lmdpQcInspect
      this.nowProduct = this.produceTitle[11]
      this.active = 11

      // 冷轧卷质检报告
      const { data: lmdpQCCRR } = await getQcColdReelReportList({ batchNum: lmdpQcInspect[0].batchNum })
      this.monitorData.push(lmdpQCCRR[0])
      this.lenzhajuanzjData = lmdpQCCRR
      this.nowProduct = this.produceTitle[12]
      this.active = 12

      // 投诉及处理信息
      const { data: lmdpQCD } = await getQcComplaintDetailList({ batchNum: lmdpQCCRR[0].batchNum })
      this.monitorData.push(lmdpQCD[0])
      this.complaintData = lmdpQCD
      this.nowProduct = this.produceTitle[13]
      this.active = 13

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
