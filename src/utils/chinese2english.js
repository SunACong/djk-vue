
const entityMap = {
  //铸轧机
  '上辊电机电流' : 'upRollMontorA',
  '下辊电机电流':'downRollMontorA',
  '主水泵电机电流':'pumpA',
  '卷取电机电流':'rollA',
  '上辊水压':'upRollWaterFn',
  '下辊水压':'downRollWaterFn',
  '上辊水温':'upRollWaterT',
  '下辊水温':'downRollWaterT',
  '上辊流量':'upRollFlow',
  '下辊流量':'downRollFlow',
  '操作侧预载力':'operationPreloadForce',
  '传动侧预载力':'transPreloadForce', 
  //铸轧机工艺参数
  '上辊电机速度':'upRollMontorLineV',
  '下辊电机速度':'downRollMontorLineV',
  '卷取电机速度':'rollV',

  //退火炉
  '炉冷却水':'coolWaterUpLimit',
  '炉压缩空气':'compressedAirOneLowPressure',
  '金属料温温度曲线':'meterialT',
  '1区炉气温度曲线':'zoneOneT',
  '2区炉气温度曲线':'zoneTwoT',
  '3区炉气温度曲线':'zoneThreeT',
  '炉气设定温度':'setT',
  //重卷机工艺参数
  '机列速度':'machineColsV',
  '卷取卷径':'rollWindD',
  '实际张力':'actualTension',
  '带材长度':'stripL',
  //重卷机设备参数
  '开卷机电流曲线':'openRollA',
  '卷取机电流曲线':'rollWindA', 
};

export default entityMap;