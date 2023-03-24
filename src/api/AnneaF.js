import request from '@/utils/request'

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

//一号退火炉刷新的数据
export function getListNewData1(params) {
    return request({
        url: '/anneaf1/list',
        method: 'get',
        params
    })
}
//一号退火炉拉取范围内的警报数据
export function getListSpecial1(params) {
    return request({
        url: '/anneaf1/listSpecial',
        method: 'get',
        params
    })
}

//二号退火炉刷新的数据
export function getListNewData2(params) {
    return request({
        url: '/anneaf2/list',
        method: 'get',
        params
    })
}
//二号退火炉拉取范围内的警报数据
export function getListSpecial2(params) {
    return request({
        url: '/anneaf2/listSpecial',
        method: 'get',
        params
    })
}

//三号退火炉刷新的数据
export function getListNewData3(params) {
    return request({
        url: '/anneaf3/list',
        method: 'get',
        params
    })
}
//三号退火炉拉取范围内的警报数据
export function getListSpecial3(params) {
    return request({
        url: '/anneaf3/listSpecial',
        method: 'get',
        params
    })
}

//四号退火炉刷新的数据
export function getListNewData4(params) {
    return request({
        url: '/anneaf4/list',
        method: 'get',
        params
    })
}
//四号退火炉拉取范围内的警报数据
export function getListSpecial4(params) {
    return request({
        url: '/anneaf4/listSpecial',
        method: 'get',
        params
    })
}

//五号退火炉刷新的数据
export function getListNewData5(params) {
    return request({
        url: '/anneaf5/list',
        method: 'get',
        params
    })
}
//五号退火炉拉取范围内的警报数据
export function getListSpecial5(params) {
    return request({
        url: '/anneaf5/listSpecial',
        method: 'get',
        params
    })
}

//六号退火炉刷新的数据
export function getListNewData6(params) {
    return request({
        url: '/anneaf6/list',
        method: 'get',
        params
    })
}
//六号退火炉拉取范围内的警报数据
export function getListSpecial6(params) {
    return request({
        url: '/anneaf6/listSpecial',
        method: 'get',
        params
    })
}

//七号退火炉刷新的数据
export function getListNewData7(params) {
    return request({
        url: '/anneaf7/list',
        method: 'get',
        params
    })
}
//七号退火炉拉取范围内的警报数据
export function getListSpecial7(params) {
    return request({
        url: '/anneaf7/listSpecial',
        method: 'get',
        params
    })
}



export let rollingOptions = [
    {
        value: '炉冷却水',
        lable: '炉冷却水',
    }, {
        value: '炉压缩空气',
        lable: '炉压缩空气',
    }, {
        value: '金属料温温度曲线',
        lable: '金属料温温度曲线',
    }, {
        value: '1区炉气温度曲线',
        lable: '1区炉气温度曲线',
    }, {
        value: '2区炉气温度曲线',
        lable: '2区炉气温度曲线',
    }, {
        value: '3区炉气温度曲线',
        lable: '3区炉气温度曲线',
    }, {
        value: '炉气设定温度',
        lable: '炉气设定温度',
    },
]
export let rollingTableData1 = [{
    xuhao: '01',
    name: '炉冷却水',
    value: '83',
    chartData: {
        xData: [],
        yData: [],
        minData: null,
        maxData: null
    }
}, {
    xuhao: '02',
    name: '炉压缩空气',
    value: '83',
    chartData: {
        xData: [],
        yData: [],
        minData: null,
        maxData: null
    }
}, {
    xuhao: '03',
    name: '金属料温温度曲线',
    value: '83',
    chartData: {
        xData: [],
        yData: [],
        minData: null,
        maxData: null
    }
}, {
    xuhao: '04',
    name: '1区炉气温度曲线',
    value: '83',
    chartData: {
        xData: [],
        yData: [],
        minData: null,
        maxData: null
    }
}, {
    xuhao: '05',
    name: '2区炉气温度曲线',
    value: '83',
    chartData: {
        xData: [],
        yData: [],
        minData: null,
        maxData: null
    }
}, {
    xuhao: '06',
    name: '3区炉气温度曲线',
    value: '83',
    chartData: {
        xData: [],
        yData: [],
        minData: null,
        maxData: null
    }
}, {
    xuhao: '07',
    name: '炉气设定温度',
    value: '83',
    chartData: {
        xData: [],
        yData: [],
        minData: null,
        maxData: null
    }
},
]