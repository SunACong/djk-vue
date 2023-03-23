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

//1号重卷机设备参数
export function getListNewDataCjj1(params) {
    return request({
        url: '/rewindRoll/list',
        method: 'get',
        params
    })
}
export function getListSpecialCjj1(params) {
    return request({
        url: '/rewindRoll/listSpecial',
        method: 'get',
        params
    })
}

export let rollingOptions = [
    {
        value: '机列速度',
        lable: '机列速度',
    }
    , {
        value: '卷取卷径',
        lable: '卷取卷径',
    }
    , {
        value: '实际张力',
        lable: '实际张力',
    }

    , {
        value: '带材长度',
        lable: '带材长度',
    }


]
export let rollingTableData1 = [{
    xuhao: '01',
    name: '机列速度',
    value: '83',
    chartData: {
        xData: [],
        yData: [],
        minData: null,
        maxData: null
    }
}
    , {
    xuhao: '02',
    name: '卷取卷径',
    value: '83',
    chartData: {
        xData: [],
        yData: [],
        minData: null,
        maxData: null
    }
}
    , {
    xuhao: '03',
    name: '实际张力',
    value: '83',
    chartData: {
        xData: [],
        yData: [],
        minData: null,
        maxData: null
    }
}
    , {
    xuhao: '04',
    name: '带材长度',
    value: '83',
    chartData: {
        xData: [],
        yData: [],
        minData: null,
        maxData: null
    }
}
]
