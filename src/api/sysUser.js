import request from '@/utils/request'

// 查询字典列表
export function getUserDictList(query) {
  return request({
    url: '/sysUser/list',
    method: 'get',
    params: query
  })
}
