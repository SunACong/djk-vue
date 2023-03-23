import request from '@/utils/request'

//一号铸轧机工艺参数
export function getListNewData(params) {
    return request({
        url: '/oneCastroll/listNewData',
        method: 'get',
        params
    })
}
export function getListSpecial(params) {
    return request({
        url: '/oneCastroll/listSpecial',
        method: 'get',
        params
    })
}

//二号铸轧机工艺参数
export function getListNewData2(params) {
    return request({
        url: '/twoCastroll/listNewData',
        method: 'get',
        params
    })
}
export function getListSpecial2(params) {
    return request({
        url: '/twoCastroll/listSpecial',
        method: 'get',
        params
    })
}

//三号铸轧机工艺参数
export function getListNewData3(params) {
    return request({
        url: '/threeCastroll/listNewData',
        method: 'get',
        params
    })
}
export function getListSpecial3(params) {
    return request({
        url: '/threeCastroll/listSpecial',
        method: 'get',
        params
    })
}

//四号铸轧机工艺参数
export function getListNewData4(params) {
    return request({
        url: '/fourCastroll/listNewData',
        method: 'get',
        params
    })
}
export function getListSpecial4(params) {
    return request({
        url: '/fourCastroll/listSpecial',
        method: 'get',
        params
    })
}

//五号铸轧机工艺参数
export function getListNewData5(params) {
    return request({
        url: '/fiveCastroll/listNewData',
        method: 'get',
        params
    })
}
export function getListSpecial5(params) {
    return request({
        url: '/fiveCastroll/listSpecial',
        method: 'get',
        params
    })
}




export let  rollingOptions =[
    {
    value: '上辊电机速度',
    lable:'上辊电机速度',
    }, {
    value: '下辊电机速度',
    lable:'下辊电机速度',
    }, {
    value: '卷取电机速度',
    lable:'卷取电机速度',
    }
]
export let rollingTableData1 = [{
    xuhao: '01',
    name: '上辊电机速度',
    value: '83',
    chartData:{
        xData: [],
        yData: [],
        minData:null,
        maxData:null
    }
}, {
    xuhao: '02',
    name: '下辊电机速度',
    value: '83',
    chartData:{
        xData: [],
        yData: [],
        minData:null,
        maxData:null
    }
}, {
    xuhao: '03',
    name: '卷曲电机速度',
    value: '83',
    chartData:{
        xData: [],
        yData: [],
        minData:null,
        maxData:null
    }
}, 
]
