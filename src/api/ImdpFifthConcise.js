import request from '@/utils/request'

export function getFifthConciseList(params) {
  return request({
    url: '/system/fifthConcise/list',
    method: 'get',
    params
  })
}
