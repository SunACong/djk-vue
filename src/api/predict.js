import request from '@/utils/request'



// 查询交期风险预判详细
export function getPredict() {
  return request({
    url: '/system/predict/list',
    method: 'get',

  })


}
