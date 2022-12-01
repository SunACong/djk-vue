import request from '@/utils/request'

export function getSecondConciseList(params) {
  return request({
    url: '/system/secondConcise/list',
    method: 'get',
    params
  })
}
