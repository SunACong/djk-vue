import request from '@/utils/request'


// 查询周期计算详细
export function getCompute() {
  return request({
    url: '/system/compute/selectAVGTimeList',
    method: 'get',
  })
}
