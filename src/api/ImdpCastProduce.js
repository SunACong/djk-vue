import request from '@/utils/request'

export function getCastProduceList(params) {
  return request({
    url: '/system/castProduce/list',
    method: 'get',
    params
  })
}
