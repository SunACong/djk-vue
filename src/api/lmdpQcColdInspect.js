import request from '@/utils/request'

export function getQcColdInspectList(params) {
  return request({
    url: '/lmdpQcColdInspect/list',
    method: 'get',
    params
  })
}
