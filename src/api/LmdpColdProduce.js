import request from "@/utils/request"

export function getColdProduceList(params) {
  return request({
    url: '/lmdpColdProduce/list',
    method: 'get',
    params
  })
}