import request from '@/utils/request'

// 查询整体周期计算详细
export function getCompute() {
  return request({
    url: '/system/compute/selectAVGTimeList',
    method: 'get'
  })
}

// 查询最近生产周期
export function getNewCompute() {
  return request({
    url: '/system/compute/selectNewAVGTimeList',
    method: 'get'
  })
}
