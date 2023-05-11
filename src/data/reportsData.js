import { data1 } from '../data/data1'
import { data2 } from '../data/data2'
import { data3 } from '../data/data3'
import { data4 } from '../data/data4'
import { data5 } from '../data/data5'
import { data6 } from '../data/data6'

export const reportsData = [
    {
        id: 1,
        title: 'Gross volume',
        percent: 3.2,
        bigNum: '€4,130.99',
        smallNum: '€1,253.92',
        chartData: data1,
    },
    {
        id: 2,
        title: 'Connect gross volume',
        percent: 0.0,
        bigNum: '€3,731.18',
        smallNum: '€2,831.14',
        chartData: data2,
    },
    {
        id: 3,
        title: 'Net volume from sales',
        percent: -60.3,
        bigNum: '€4,130.99',
        smallNum: '€1,253.92',
        chartData: data3,
    },
    {
        id: 4,
        title: 'New customers',
        percent: 0.0,
        bigNum: '23',
        smallNum: '12',
        chartData: data4,
    },
    {
        id: 5,
        title: 'New connected accounts',
        percent: 10.1,
        bigNum: '41',
        smallNum: '37',
        chartData: data5,
    },
    {
        id: 6,
        title: 'Successful payments',
        percent: 23.4,
        bigNum: '312',
        smallNum: '0',
        chartData: data6,
    },
]