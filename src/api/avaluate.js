import request from '@/utils/request'

export function getAvaluateList(params) {
    return request({
        url: '/avaluate/list',
        method: 'get',
        params
    })
}