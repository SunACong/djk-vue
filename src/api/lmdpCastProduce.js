import request from '@/utils/request'

// 查询铸轧列表
export function getCastProduceList(params) {
  return request({
    url: '/system/castProduce/list',
    method: 'get',
    params
  })
}
