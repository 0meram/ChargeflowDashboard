import React from 'react'
import { ReactComponent as Arrow } from '../icons/arrow.svg'
import { ReactComponent as SmallInfo } from '../icons/smallInfo.svg'
import { ReactComponent as Per } from '../icons/payments.svg'
import { data1 } from '../data/data1'
import { data2 } from '../data/data2'
import { data3 } from '../data/data3'
import { data4 } from '../data/data4'
import { data5 } from '../data/data5'
import { data6 } from '../data/data6'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'

const reportsData = [
    {
        id: 1,
        title: 'Gross volume',
        percent: 3.2,
        view: 'view',
        bigNum: '€4,130.99',
        smallNum: '€1,253.92',
        chartData: data1,
    },
    {
        id: 2,
        title: 'Connect gross volume',
        percent: 0.0,
        view: 'view',
        bigNum: '€4,130.99',
        smallNum: '€1,253.92',
        chartData: data2,
    },
    {
        id: 3,
        title: 'Net volume from sales',
        percent: -60.3,
        view: 'view',
        bigNum: '€4,130.99',
        smallNum: '€1,253.92',
        chartData: data3,
    },
    {
        id: 4,
        title: 'New customers',
        percent: 0.0,
        view: 'view',
        bigNum: '€4,130.99',
        smallNum: '€1,253.92',
        chartData: data4,
    },
    {
        id: 5,
        title: 'New connected accounts',
        percent: 10.1,
        view: 'view',
        bigNum: '€4,130.99',
        smallNum: '€1,253.92',
        chartData: data5,
    },
    {
        id: 6,
        title: 'Successful payments',
        percent: 23.4,
        view: 'view',
        bigNum: '€4,130.99',
        smallNum: '€1,253.92',
        chartData: data6,
    },
]

const Reports = () => {
    return (
        <div className="reports">
            {reportsData.map((report) => (
                <div key={report.id} className={`report card${report.id}`}>
                    <div className="report_chart_data">
                        <div className="report_chart_time">
                            <div>
                                <span className='report_title'>
                                    {report.title}
                                </span>
                                <icon>
                                    <Arrow />
                                </icon>
                                <icon>
                                    <SmallInfo />
                                </icon>
                                <span
                                    className={`percent_span ${report.percent > 0
                                        ? 'positive'
                                        : report.percent === 0
                                            ? 'zero'
                                            : 'negative'
                                        }`}
                                >
                                    {report.percent === 0 ? '0.0' : report.percent}%
                                </span>
                            </div>
                            <span>{report.bigNum}</span>
                        </div>
                        <div className="report_chart_time_view">
                            <div className="card_view">view</div>
                            <div className="report_chart_past">{report.smallNum}</div>
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height={180}>
                        <LineChart
                            data={report.chartData}
                            margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
                        >
                            <CartesianGrid
                                strokeDasharray="0"
                                horizontal={false}
                                vertical={false}
                                stroke="#E3E8EE"
                            />
                            <XAxis
                                dataKey="name"
                                interval="preserveStartEnd"
                                tickLine={false}
                                tick={({ x, y, payload }) =>
                                    payload.value === 'Aug 2020' ||
                                        payload.value === 'Jul 2021' ? (
                                        <text x={x} y={y} dy={6} textAnchor="middle" fontSize={12}>
                                            {payload.value}
                                        </text>
                                    ) : null
                                }
                            />
                            <Tooltip
                                labelFormatter={(value) => `Time: ${value}`}
                                enabled={false}
                            />
                            <Line
                                type="linear"
                                dataKey="value"
                                stroke="#5469D4"
                                dot={false}
                            />
                            <Line
                                type="linear"
                                dataKey="anotherValue"
                                stroke="#A3ACB9"
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            ))}
        </div>
    )
}

export default Reports
