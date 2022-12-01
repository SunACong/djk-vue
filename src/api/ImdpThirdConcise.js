import request from '@/utils/request'

export function getThirdConciseList(params) {
  return request({
    url: '/system/thirdConcise/list',
    method: 'get',
    params
  })
}
