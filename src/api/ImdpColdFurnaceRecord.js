import request from '@/utils/request'

export function getColdFurnaceRecordList(params) {
  return request({
    url: '/system/furnaceRecord/list',
    method: 'get',
    params
  })
}
