import request from '@/utils/request'

export function getQcColdReelReportList(params) {
  return request({
    url: '/system/report/list',
    method: 'get',
    params
  })
}
