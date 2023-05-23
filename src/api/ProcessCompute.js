import request from '@/utils/request'

//历史异常查询
export function gethistoryException() {
  return request({
    url: '/processCaculate/historyException',
    method: 'get'
  })
}

// 查询整体周期计算详细
export function getProcessComputeTime() {
  return request({
    url: '/processCompute/computeTime',
    method: 'get'
  })
}

// 更新手动设定时间
export function updateProcessTime(params) {
  return request({
    url: '/processCaculate/update',
    method: 'put',
    params
  })
}

// 设定生产周期天数
export function getSetProcessTime() {
  return request({
    url: '/processCaculate/processCaculates',
    method: 'get'
  })
}
