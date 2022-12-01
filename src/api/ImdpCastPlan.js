import request from '@/utils/request'

export function getCastPlanList(params) {
  return request({
    url: '/system/plan/list',
    method: 'get',
    params
  })
}
