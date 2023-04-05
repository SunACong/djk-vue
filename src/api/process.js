import request from '@/utils/request'

// 查询异常流程显示详细
export function getProcess() {
  return request({
    url: '/system/process/list',
    method: 'get'
  })
}
