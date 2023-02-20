import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/rewinder/list',
    method: 'get',
    params
  })
}
export function getListTen(params) {
  return request({
    url: '/rewinder/listTen',
    method: 'get',
    params
  })
}
export function getListSpecial(params) {
  return request({
    url: '/rewinder/listSpecial',
    method: 'get',
    params
  })
}
