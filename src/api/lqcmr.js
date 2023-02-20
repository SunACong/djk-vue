import request from '@/utils/request'

// 查询【请填写功能名称】列表
export function listLqcmr(query) {
  return request({
    url: '/lqcmr/list',
    method: 'get',
    params: query
  })
}

// 查询【请填写功能名称】详细
export function getLqcmr(id) {
  return request({
    url: '/lqcmr/' + id,
    method: 'get'
  })
}

// 新增【请填写功能名称】
export function addLqcmr(data) {
  return request({
    url: '/lqcmr',
    method: 'post',
    data: data
  })
}

// 修改【请填写功能名称】
export function updateLqcmr(data) {
  return request({
    url: '/lqcmr',
    method: 'put',
    data: data
  })
}

// 删除【请填写功能名称】
export function delLqcmr(id) {
  return request({
    url: '/lqcmr/' + id,
    method: 'delete'
  })
}
