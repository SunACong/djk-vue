import request from '@/utils/request'

export function getCastSmeltHoldList(params) {
  return request({
    url: '/system/hold/list',
    method: 'get',
    params
  })
}
