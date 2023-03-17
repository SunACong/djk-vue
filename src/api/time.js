import request from '@/utils/request'

// 修改生产工序平均时间存储
export function updateTime(data) {
  return request({
    url: '/system/time',
    method: 'put',
    data: data
  })
}
