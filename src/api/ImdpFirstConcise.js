import request from '@/utils/request'

export function getFirstConciseList(params) {
  return request({
    url: '/system/firstConcise/list',
    method: 'get',
    params
  })
}
