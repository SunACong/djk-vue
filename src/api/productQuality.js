import request from '@/utils/request'

export function getProductQualityList(params) {
  return request({
    url: '/productQuality/pageList',
    method: 'get',
    params
  })
}
