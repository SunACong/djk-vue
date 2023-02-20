import request from '@/utils/request'

export function getProductStandard(id) {
  return request({
    url: '/processStandard/' + id,
    method: 'get',
  })
}