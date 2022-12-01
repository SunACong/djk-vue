import request from '@/utils/request'

export function getFourthConciseList(params) {
  return request({
    url: '/system/fourthConcise/list',
    method: 'get',
    params
  })
}
