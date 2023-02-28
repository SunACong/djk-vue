import request from '@/utils/request'

export function getCastProduceList(params) {
  return request({
    url: '/system/castProduce/list',
    method: 'get',
    params
  })
}

// * 查询铸轧生产时间
export function getZhuzhaTimeList(params) {
  return request({
    url: '/system/castProduce/selectZhuzhaTimeList',
    method: 'get',
    params
  })
}
