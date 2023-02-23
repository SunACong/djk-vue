<template xmlns:display="http://www.w3.org/1999/xhtml">
  <div >
    <div style="background-color: #46b9b9;padding: 10px 10px">
      模块功能说明：这是冷轧工序的功能模块，该模块主要查询显示冷轧退火的详细信息。在下方输入框输入对应的计划单号、熔次号或者冷轧卷号即可查询冷轧生产的流程信息。样例可输入冷轧卷号（4002D122、1002A122）
    </div>
    <div style="background-color: white;padding: 20px 10px">
      <el-input v-model="queryParams.batchNum" size="small" placeholder="请输入计划单号/请输入熔次号/请输入冷轧卷号" :clearable="true" >
        <el-button slot="append"	style="background-color: #409EFF;color: white;line-height: 15px;" size="small" @click="query(queryParams.batchNum)">
          查询
        </el-button>
      </el-input>
      <div align="center" >
        <span style="line-height: 50px;" size="mini">当前生产流程：{{ nowProduct }} </span>
      </div>

    </div>

    <div style="background-color: white;padding: 10px 10px">
      <el-steps :active="active" align-center>
        <el-step title="冷轧工序" description=" "></el-step>
        <el-step title="退火工序" description=" "></el-step>
        <el-step title="重卷工序" description=" "></el-step>
        <el-step title="出入库记录" description=" "></el-step>
      </el-steps>
    </div>
    <div style="background-color: #c0c4cc;padding: 10px 10px">冷轧工序详细信息</div>
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
    <div style="background-color: #c0c4cc;padding: 10px 10px">重卷工序详细信息</div>
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
    <div style="background-color: #c0c4cc;padding: 10px 10px">出入库记录详细信息</div>
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
import { getPredict } from '@/api/predict'
import { getColdProduceList } from '@/api/ImdpColdProduce'
import { getCastPlanList } from '@/api/ImdpCastPlan'
import { getColdFurnaceRecordList } from '@/api/ImdpColdFurnaceRecord'
import { getColdRereelerRecordList } from '@/api/ImdpColdRereelerRecord'
import { getColdStoreRecordList } from '@/api/ImdpColdStoreRecord'

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
