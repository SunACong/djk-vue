import request from '@/utils/request'

export function getColdRereelerRecordList(params) {
  return request({
    url: '/system/rerRecord/list',
    method: 'get',
    params
  })
}
