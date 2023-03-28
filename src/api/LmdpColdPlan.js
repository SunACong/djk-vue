import request from '@/utils/request'

export function getColdPlanList(params) {
  return request({
    url: '/system/coldPlan/list',
    method: 'get',
    params
  })
}
