import request from '@/utils/request'

// 查询lqci列表
export function listLqci(query) {
  return request({
    url: '/lqci/list',
    method: 'get',
    params: query
  })
}

// 查询lqci详细
export function getLqci(id) {
  return request({
    url: '/lqci/' + id,
    method: 'get'
  })
}

// 新增lqci
export function addLqci(data) {
  return request({
    url: '/lqci',
    method: 'post',
    data: data
  })
}

// 修改lqci
export function updateLqci(data) {
  return request({
    url: '/lqci',
    method: 'put',
    data: data
  })
}

// 删除【请填写功能名称】
export function delLqci(id) {
  return request({
    url: '/lqci/' + id,
    method: 'delete'
  })
}
