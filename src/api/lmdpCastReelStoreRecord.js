import request from '@/utils/request'

// 查询周期计算详细
export function getCastReelStoreRecordList(params) {
  return request({
    url: '/system/castReelStoreRecord/list',
    method: 'get',
    params
  })
}
