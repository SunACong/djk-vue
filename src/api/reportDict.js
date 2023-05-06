import request from '@/utils/request'

// 查询字典列表
export function getDictList(query) {
  return request({
    url: '/reportDict/list',
    method: 'get',
    params: query
  })
}

