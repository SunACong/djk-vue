import request from '@/utils/request'

export function getColdProduceList(params) {
  return request({
    url: '/system/coldProduce/list',
    method: 'get',
    params
  })
}
