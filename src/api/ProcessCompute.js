import request from '@/utils/request'

// 查询整体周期计算详细
export function getProcessComputeTime() {
  return request({
    url: '/processCompute/computeTime',
    method: 'get'
  })
}
