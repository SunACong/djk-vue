import request from '@/utils/request'

export function getListInfo(params) {
  return request({
    url: '/rollingMachine/listInfo',
    method: 'get',
    params
  })
}
export function getListWarnData(params) {
  return request({
    url: '/rollingMachine/listWarnData',
    method: 'get',
    params
  })
}
export function getListSpecial(params) {
  return request({
    url: '/rollingMachine/listSpecial',
    method: 'get',
    params
  })
}
export function getListDuringData(params) {
  return request({
    url: '/rollingMachine/listDuringData',
    method: 'get',
    params
  })
}

export const rollingTableData1 = [{
  xuhao: '01',
  name: '上辊电机电流',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '02',
  name: '下辊电机电流',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '03',
  name: '主水泵电机电流',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '04',
  name: '备用水泵电机电流',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '05',
  name: '卷取电机电流',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '06',
  name: '上辊水压',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '07',
  name: '下辊水压',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '08',
  name: '上辊水温',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '09',
  name: '下辊水温',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '10',
  name: '上辊流量',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '11',
  name: '下辊流量',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '12',
  name: '操作侧预载力',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '13',
  name: '传动侧预载力',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}]
export const rollingTableData11 = [{
  xuhao: '01',
  name: '上辊电机速度',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '02',
  name: '下辊电机速度',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '03',
  name: '主水泵电机速度',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '04',
  name: '备用水泵电机速度',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '05',
  name: '卷取电机速度',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}]
export const rollingTableData2 = [{
  xuhao: '01',
  name: '上辊电机电流',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '02',
  name: '下辊电机电流',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '03',
  name: '主水泵电机电流',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '04',
  name: '备用水泵电机电流',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '05',
  name: '卷取电机电流',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '06',
  name: '上辊水压',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '07',
  name: '下辊水压',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '08',
  name: '上辊水温',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '09',
  name: '下辊水温',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '10',
  name: '上辊流量',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '11',
  name: '下辊流量',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '12',
  name: '操作侧预载力',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '13',
  name: '传动侧预载力',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}]
export const rollingTableData22 = [{
  xuhao: '01',
  name: '上辊电机速度',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '02',
  name: '下辊电机速度',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '03',
  name: '主水泵电机速度',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '04',
  name: '备用水泵电机速度',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '05',
  name: '卷取电机速度',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}]
export const rollingTableData3 = [{
  xuhao: '01',
  name: '上辊电机电流',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '02',
  name: '下辊电机电流',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '03',
  name: '主水泵电机电流',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '04',
  name: '备用水泵电机电流',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '05',
  name: '卷取电机电流',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '06',
  name: '上辊水压',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '07',
  name: '下辊水压',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '08',
  name: '上辊水温',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '09',
  name: '下辊水温',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '10',
  name: '上辊流量',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '11',
  name: '下辊流量',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '12',
  name: '操作侧预载力',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '13',
  name: '传动侧预载力',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}]
export const rollingTableData33 = [{
  xuhao: '01',
  name: '上辊电机速度',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '02',
  name: '下辊电机速度',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '03',
  name: '主水泵电机速度',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '04',
  name: '备用水泵电机速度',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '05',
  name: '卷取电机速度',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}]
export const rollingTableData4 = [{
  xuhao: '01',
  name: '上辊电机电流',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '02',
  name: '下辊电机电流',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '03',
  name: '主水泵电机电流',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '04',
  name: '备用水泵电机电流',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '05',
  name: '卷取电机电流',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '06',
  name: '上辊水压',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '07',
  name: '下辊水压',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '08',
  name: '上辊水温',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '09',
  name: '下辊水温',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '10',
  name: '上辊流量',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '11',
  name: '下辊流量',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '12',
  name: '操作侧预载力',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '13',
  name: '传动侧预载力',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}]
export const rollingTableData44 = [{
  xuhao: '01',
  name: '上辊电机速度',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '02',
  name: '下辊电机速度',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '03',
  name: '主水泵电机速度',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '04',
  name: '备用水泵电机速度',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '05',
  name: '卷取电机速度',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}]
export const rollingTableData5 = [{
  xuhao: '01',
  name: '上辊电机电流',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '02',
  name: '下辊电机电流',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '03',
  name: '主水泵电机电流',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '04',
  name: '备用水泵电机电流',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '05',
  name: '卷取电机电流',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '06',
  name: '上辊水压',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '07',
  name: '下辊水压',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '08',
  name: '上辊水温',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '09',
  name: '下辊水温',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '10',
  name: '上辊流量',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '11',
  name: '下辊流量',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '12',
  name: '操作侧预载力',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '13',
  name: '传动侧预载力',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}]
export const rollingTableData55 = [{
  xuhao: '01',
  name: '上辊电机速度',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '02',
  name: '下辊电机速度',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '03',
  name: '主水泵电机速度',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '04',
  name: '备用水泵电机速度',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}, {
  xuhao: '05',
  name: '卷取电机速度',
  value: '83',
  chartData: {
    xData: [],
    yData: [],
    minData: null,
    maxData: null
  }
}]
export const tableData = [{
  id: '01',
  data: '2022/04/15 18:00',
  address: '上辊电机电流',
  status: '上辊电流过高'
}, {
  id: '02',
  data: '2022/04/15 18:00',
  address: '下辊电机电流',
  status: '下辊电流过高'
}, {
  id: '03',
  data: '2022/04/15 18:00',
  address: '主水泵电机电流',
  status: '主水泵电流过高'
}, {
  id: '04',
  data: '2022/04/15 18:00',
  address: '备用水泵电机电流',
  status: '备用水泵电流过高'
}, {
  id: '05',
  data: '2022/04/15 18:00',
  address: '卷取电机电流',
  status: '卷取电流过高'
}, {
  id: '06',
  data: '2022/04/15 18:00',
  address: '上辊水压',
  status: '上辊水压过高'
}, {
  id: '07',
  data: '2022/04/15 18:00',
  address: '下辊水压',
  status: '下辊水压过高'
}, {
  id: '07',
  data: '2022/04/15 18:00',
  address: '上辊水温',
  status: '上辊水温过高'
}, {
  id: '07',
  data: '2022/04/15 18:00',
  address: '下辊水温',
  status: '下辊水温过高'
}, {
  id: '07',
  data: '2022/04/15 18:00',
  address: '上辊流量',
  status: '上辊流量过高'
}, {
  id: '07',
  data: '2022/04/15 18:00',
  address: '下辊流量',
  status: '下辊流量过高'
}, {
  id: '07',
  data: '2022/04/15 18:00',
  address: '操作侧预载力',
  status: '操作侧预载力过高'
}, {
  id: '07',
  data: '2022/04/15 18:00',
  address: '传动侧预载力',
  status: '传动侧预载力过高'
}]
