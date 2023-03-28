import request from '@/utils/request'

export function getQcPackList(params) {
  return request({
    url: '/system/pack/list',
    method: 'get',
    params
  })
}
