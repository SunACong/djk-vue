import request from '@/utils/request'

export function getListInfo(params) {
    return request({
        url: '/rollingMachine/listInfo',
        method: 'get',
        params
    })
}
export function getListWarnData(params){
    return request({
        url:'/rollingMachine/listWarnData',
        method:'get',
        params
    })
}