import request from '@/utils/request'

export function getListNewData(params) {
    return request({
        url: '/fourCastroll/listNewData',
        method: 'get',
        params
    })
}
export function getListSpecial(params) {
    return request({
        url: '/fourCastroll/listSpecial',
        method: 'get',
        params
    })
}
export let rollingOptions = [
    {
        value: '上辊电机电流',
        lable: '上辊电机电流',
    }, {
        value: '下辊电机电流',
        lable: '下辊电机电流',
    }, {
        value: '主水泵电机电流',
        lable: '主水泵电机电流',
    },
    {
        value: '卷取电机电流',
        lable: '卷取电机电流',
    }, {
        value: '上辊水压',
        lable: '上辊水压',
    }, {
        value: '下辊水压',
        lable: '下辊水压',
    }, {
        value: '上辊水温',
        lable: '上辊水温',
    }, {
        value: '下辊水温',
        lable: '上辊水温',
    }, {
        value: '上辊流量',
        lable: '上辊流量',
    }, {
        value: '下辊流量',
        lable: '下辊流量',
    }, {
        value: '操作侧预载力',
        lable: '操作侧预载力',
    },
    {
        value: '传动侧预载力',
        lable: '传动侧预载力',
    }

]




export let rollingTableData4 = [{
    xuhao: '01',
    name: '上辊电机电流',
    value: '83',
    chartData: {
        xData: [],
        yData: [],
        minData: null,
        maxData: null
    }
}, {
    xuhao: '02',
    name: '下辊电机电流',
    value: '83',
    chartData: {
        xData: [],
        yData: [],
        minData: null,
        maxData: null
    }
}, {
    xuhao: '03',
    name: '主水泵电机电流',
    value: '83',
    chartData: {
        xData: [],
        yData: [],
        minData: null,
        maxData: null
    }
},
{
    xuhao: '04',
    name: '卷取电机电流',
    value: '83',
    chartData: {
        xData: [],
        yData: [],
        minData: null,
        maxData: null
    }
},
{
    xuhao: '05',
    name: '上辊水压',
    value: '83',
    chartData: {
        xData: [],
        yData: [],
        minData: null,
        maxData: null
    }
}, {
    xuhao: '06',
    name: '下辊水压',
    value: '83',
    chartData: {
        xData: [],
        yData: [],
        minData: null,
        maxData: null
    }
}, {
    xuhao: '07',
    name: '上辊水温',
    value: '83',
    chartData: {
        xData: [],
        yData: [],
        minData: null,
        maxData: null
    }
}, {
    xuhao: '08',
    name: '下辊水温',
    value: '83',
    chartData: {
        xData: [],
        yData: [],
        minData: null,
        maxData: null
    }
}, {
    xuhao: '09',
    name: '上辊流量',
    value: '83',
    chartData: {
        xData: [],
        yData: [],
        minData: null,
        maxData: null
    }
}, {
    xuhao: '10',
    name: '下辊流量',
    value: '83',
    chartData: {
        xData: [],
        yData: [],
        minData: null,
        maxData: null
    }
}, {
    xuhao: '11',
    name: '操作侧预载力',
    value: '83',
    chartData: {
        xData: [],
        yData: [],
        minData: null,
        maxData: null
    }
}, {
    xuhao: '12',
    name: '传动侧预载力',
    value: '83',
    chartData: {
        xData: [],
        yData: [],
        minData: null,
        maxData: null
    }
},
]

