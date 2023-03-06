import request from '@/utils/request'

export function getListWarnNewData(params) {
    return request({
        url: '/warnTable/listWarnNewData',
        method: 'get',
        params
    })
}
export function getListWarnHistoryData(params) {
    return request({
        url: '/warnTable/listWarnHistoryData',
        method: 'get',
        params
    })
}
export function getListDuringWarnData(params) {
    return request({
        url: '/warnTable/listDuringWarnData',
        method: 'get',
        params
    })
}