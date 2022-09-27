import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/rewinder/list',
    method: 'get',
    params
  })
}
