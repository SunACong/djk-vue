import request from '@/utils/request'

export function getCastHoldingFurnaceList(params) {
  return request({
    url: '/system/furnace/list',
    method: 'get',
    params
  })
}
