import request from '@/utils/request'

export function getColdStoreRecordList(params) {
  return request({
    url: '/system/coldRecord/list',
    method: 'get',
    params
  })
}
