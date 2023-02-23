import request from '@/utils/request'

export function getQcComplaintDetailList(params) {
  return request({
    url: '/qcComplaintDetail/list',
    method: 'get',
    params
  })
}
