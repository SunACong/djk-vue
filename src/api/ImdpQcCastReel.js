import request from '@/utils/request'

export function getQcCastReelList(params) {
  return request({
    url: '/system/reel/list',
    method: 'get',
    params
  })
}
