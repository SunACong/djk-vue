import request from '@/utils/request'

export function getProductQualityList(params) {
  return request({
    url: '/productQuality/pageList',
    method: 'get',
    params
  })
}

export function getProductQualityVoList(params) {
  return request({
    url: '/productQuality/pageVOList',
    method: 'get',
    params
  })
}

