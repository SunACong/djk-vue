import request from '@/utils/request'


//获取工艺参数
export function getTec(params) {
    return request({
        url: '/warnTable/getTec',
        method: 'get',
        params
    })
}
//获取设备参数
export function getDevice(params) {
    return request({
        url: '/warnTable/getDevice',
        method: 'get',
        params
    })
}

//添加是否已读标签
export function addRead(params) {
    return request({
        url: '/warnTable/addRead',
        method: 'get',
        params
    })
}

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