/*
 * @Description:
 * @Author: 孙少聪
 * @Date: 2023-01-05 14:45:02
 * @LastEditTime: 2023-01-05 20:59:07
 * @LastEditors: 孙少聪
 */
import request from '@/utils/request'

// 查询列表
export function listStandard(query) {
  return request({
    url: '/processStandard/pageList',
    method: 'get',
    params: query
  })
}

// id查询
export function getStandard(id) {
  return request({
    url: '/processStandard/' + id,
    method: 'get'
  })
}

// 新增
export function addStandard(data) {
  return request({
    url: '/processStandard',
    method: 'post',
    data: data
  })
}

// 修改
export function updateStandard(data) {
  return request({
    url: '/processStandard',
    method: 'put',
    data: data
  })
}

// 删除
export function delStandard(id) {
  return request({
    url: '/processStandard' + id,
    method: 'delete'
  })
}
