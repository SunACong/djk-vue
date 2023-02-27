<template xmlns:display="http://www.w3.org/1999/xhtml">
  <div>
    <div style="background-color: #46b9b9;padding: 10px 10px">模块功能说明：这是铸轧的功能模块，该模块主要查询显示铸轧工序的详细信息。在下方输入框输入对应的计划单号、熔次号或者冷轧卷号即可查询冷轧生产的流程信息。样例可输入熔次号号（5-002）</div>
    <div style="background-color: white;padding: 20px 10px">
      <el-input v-model="input" size="small" placeholder="请输入计划单号/请输入熔次号/请输入冷轧卷号" :clearable="true">
        <el-button slot="append"	style="background-color: #409EFF;color: white;line-height: 15px;" size="small">
          查询
        </el-button>
      </el-input>
      <div align="center" >
        <span style="line-height: 50px;" size="mini">当前生产流程：{{ nowProduct }} </span>
      </div>
    </div>

    <div style="background-color: white;padding: 10px 10px">
      <el-steps :active="active" align-center>
        <el-step title="熔炼工序" description=" "></el-step>
        <el-step title="保温工序" description=" "></el-step>
        <el-step title="铸轧工序" description=" "></el-step>
        <el-step title="出入库记录" description=" "></el-step>
      </el-steps>
    </div>
    <div style="background-color: #46b9b9;padding: 10px 10px">熔炼工序详细信息</div>
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
    <div style="background-color: #46b9b9;padding: 10px 10px">保温工序详细信息</div>
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
    <div style="background-color: white;padding: 10px 10px">
      <el-steps :active="2" align-center>
        <el-step title="冷轧" description="订货单位：生产批号：合金牌号：坯料重量:" />
        <el-step title="退火" description="退火日期：合金：卷数：装炉炉号：" />
        <el-step title="冷轧" description="订货单位：生产批号：合金牌号：坯料重量:" />
        <el-step title="退火" description="退火日期：合金：卷数：装炉炉号：" />
        <el-step title="重卷剪切" description="生产批号：切边时间：主操：" />
      </el-steps>
    </div>
    <div style="background-color: #46b9b9;padding: 10px 10px">铸轧工序详细信息</div>
    <div style="background-color: white;padding: 10px 10px">
      <el-table
        :data="lenzhaData"
        style="width: 100%"
        height="250"
      >
        <el-table-column
          fixed
          prop="orderUnit"
          label="订货单位"
          width="150"
        />
        <el-table-column
          fixed
          prop="productNum"
          label="生产批号"
          width="120"
        />
        <el-table-column
          fixed
          prop="alloyNum"
          label="合金牌号"
          width="120"
        />
        <el-table-column
          prop="blankWeight"
          label="坯料重量"
          width="120"
        />
        <el-table-column
          prop="mainExercise"
          label="主操"
          width="120"
        />
        <el-table-column
          prop="shift"
          label="班次"
          width="120"
        />
        <el-table-column
          prop="productNumber"
          label="生产顺序"
          width="120"
        />
        <el-table-column
          prop="inletThickness"
          label="入口厚度"
          width="120"
        />
        <el-table-column
          prop="outThickness"
          label="出口厚度"
          width="120"
        />
        <el-table-column
          prop="width"
          label="宽度"
          width="120"
        />
        <el-table-column
          prop="unwinding"
          label="开卷张力"
          width="120"
        />
        <el-table-column
          prop="coiling"
          label="卷取张力"
          width="120"
        />
        <el-table-column
          prop="zhazhiSpeed"
          label="轧制速度"
          width="120"
        />
        <el-table-column
          prop="zhazhiTemperature"
          label="轧制油温度"
          width="120"
        />
        <el-table-column
          prop="zhazhiFlow"
          label="轧制油流量"
          width="120"
        />
        <el-table-column
          prop="airTemperature"
          label="压缩空气温度"
          width="120"
        />
        <el-table-column
          prop="pressure"
          label="气源压力"
          width="120"
        />
        <el-table-column
          prop="AFC"
          label="AFC曲线"
          width="120"
        />
        <el-table-column
          prop="rolling"
          label="轧制力"
          width="120"
        />
        <el-table-column
          prop="inletWeight"
          label="入口重量"
          width="120"
        />
        <el-table-column
          prop="outWeight"
          label="出口重量"
          width="120"
        />
        <el-table-column
          prop="zhaNum"
          label="轧辊辊号"
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
    <div style="background-color: #46b9b9;padding: 10px 10px">出入库记录详细信息</div>
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
import ECharts from 'echarts'
import { getCastSmeltHoldList } from '@/api/ImdpCastSmeltHold'
import { getCastHoldingFurnaceList } from '@/api/lmdpCastHoldingFurnace'
import { getCastProduceList } from '@/api/ImdpCastProduce'
import { getCastReelStoreRecordList } from '@/api/lmdpCastReelStoreRecord'
// 折线图
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
        smeltTimes: ''
      },
      nowProduct: null,
      produceTitle: ['熔炼工序', '保温工序', '铸轧工序', '出入库记录'],
      monitorData: [],
      // 料温温度折线图
      doubleLineOption: lineDefaultOpt,
      selectGatheringTime: [],
      input: '',
      lineData: [679],
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

      // 熔炼工序
      const { data: lmdpCSH } = await getCastSmeltHoldList(this.queryParams)
      console.log('熔炼生产的数据', lmdpCSH)
      this.monitorData.push(lmdpCSH[0])
      this.rongluData = lmdpCSH
      this.nowProduct = this.produceTitle[0]
      this.active = 0

      // 保温
      const { data: lmdpCHF } = await getCastHoldingFurnaceList({ smeltTimes: lmdpCSH[0].smeltTimes })
      this.monitorData.push(lmdpCHF[0])
      this.baowenData = lmdpCHF
      this.nowProduct = this.produceTitle[1]
      this.active = 1

      // 铸轧生产
      const { data: lmdpCastPL } = await getCastProduceList({ smeltTimes: lmdpCHF[0].smeltTimes })
      this.monitorData.push(lmdpCastPL[0])
      this.zhuzhascData = lmdpCastPL
      this.nowProduct = this.produceTitle[2]
      this.active = 2

      // 出入库记录（铸轧）
      const { data: lmdpCRSR } = await getCastReelStoreRecordList({ reelNum: lmdpCastPL[0].smeltTimes })
      this.monitorData.push(lmdpCRSR[0])
      this.zhuzhaChuRu = lmdpCRSR
      this.nowProduct = this.produceTitle[3]
      this.active = 4
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
