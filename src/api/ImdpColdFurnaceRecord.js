import request from '@/utils/request'

export function getColdFurnaceRecordList(params) {
  return request({
    url: '/system/furnaceRecord/list',
    method: 'get',
    params
  })
}

// * 查询冷轧生产时间
export function getLenzhaTimeList(params) {
  return request({
    url: '/system/furnaceRecord/selectLenzhaTimeList',
    method: 'get',
    params
  })
}
