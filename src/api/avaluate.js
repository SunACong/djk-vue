import request from '@/utils/request'

// 查询值域列表
export function getAvaluateList(params) {
    return request({
        url: '/avaluate/list',
        method: 'get',
        params
    })
}
// 查询值域列表（分页）
export function getpageVOList(params){
    return request({
        url:'/avaluate/pageVOList',
        method: 'get',
        params
    })
}
// 查询值域详细
export function getAvaluate(id) {
    return request({
        url: '/avaluate/' + id,
        method: 'get'
    })
}

// 新增值域
export function addAvaluate(data) {
    return request({
        url: '/avaluate',
        method: 'post',
        data: data
    })
}

// 修改值域
export function updateAvaluate(data) {
    return request({
        url: '/avaluate',
        method: 'put',
        data: data
    })
}

// 删除值域
export function delAvaluate(id) {
    return request({
        url: '/avaluate/' + id,
        method: 'delete'
    })
}