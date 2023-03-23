import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/planAndInspect/list',
    method: 'get',
    params
  })
}

export function getRangeDayInfo(params) {
  return request({
    url: '/planAndInspect/rangeDayInfo',
    method: 'get',
    params
  })
}

export function getEveryDayInfo(params) {
  return request({
    url: '/planAndInspect/everyDayInfo',
    method: 'get',
    params
  })
}
