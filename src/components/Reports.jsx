import React from 'react'
import { ReactComponent as Arrow } from '../icons/arrow.svg'
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

const data = [
    { name: '00:00', value: 100 },
    { name: 'N/A', value: 110 },
    { name: 'N/A', value: 130 },
    { name: 'N/A', value: 210 },
    { name: 'N/A', value: 230 },
    { name: 'N/A', value: 300 },
    { name: 'N/A', value: 130 },
    { name: 'N/A', value: 80 },
    { name: 'N/A', value: 210 },
    { name: 'N/A', value: 210 },
    { name: 'N/A', value: 230 },
    { name: 'N/A', value: 300 },
    { name: 'N/A', value: 130 },
    { name: 'Now, 12:00', value: 180 },
    { name: 'Now, 12:00', value: 180 },
    { name: 'N/A' },
    { name: 'N/A' },
    { name: 'N/A' },
    { name: 'N/A' },
    { name: 'N/A' },
    { name: 'N/A' },
    { name: 'N/A' },
    { name: 'N/A' },
    { name: 'N/A' },
    { name: 'N/A' },
    { name: 'N/A' },
    { name: 'N/A' },
    { name: 'N/A' },
    { name: '23:59' },
]

const reportsData = [
    {
        id: 1,
        title: 'Chart333',
        icon: 'icon',
        present: '%',
        view: 'view',
        bigNum: '€4,130.99',
        smallNum: '€1,253.92',
        chartData: data,
    },
    {
        id: 2,
        title: 'Chart333',
        icon: 'icon',
        present: '%',
        view: 'view',
        bigNum: '€4,130.99',
        smallNum: '€1,253.92',
        chartData: data,
    },
    {
        id: 3,
        title: 'Chart333',
        icon: 'icon',
        present: '%',
        view: 'view',
        bigNum: '€4,130.99',
        smallNum: '€1,253.92',
        chartData: data,
    },
    {
        id: 4,
        title: 'Chart333',
        icon: 'icon',
        present: '%',
        view: 'view',
        bigNum: '€4,130.99',
        smallNum: '€1,253.92',
        chartData: data,
    },
    {
        id: 5,
        title: 'Chart333',
        icon: 'icon',
        present: '%',
        view: 'view',
        bigNum: '€4,130.99',
        smallNum: '€1,253.92',
        chartData: data,
    },
    {
        id: 6,
        title: 'Chart333',
        icon: 'icon',
        present: '%',
        view: 'view',
        bigNum: '€4,130.99',
        smallNum: '€1,253.92',
        chartData: data,
    },
]

const Reports = () => {
    return (
        <div className="reports">
            {reportsData.map((report) => (
                <div key={report.id} className={`report card${report.id}`}>
                    <div className="report">
                        <div className="main_chart_data">
                            <div className="main_chart_time">
                                <div>
                                    {report.title}
                                    <icon>
                                        <Arrow />
                                    </icon>
                                </div>
                                <span>{report.bigNum}</span>
                            </div>
                            <div className="main_chart_time">
                                <div className="card_view">view</div>
                                <div className="main_chart_past">{report.smallNum}</div>
                            </div>
                        </div>
                        <ResponsiveContainer width="100%" height={150}>
                            <LineChart
                                data={report.chartData}
                                margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
                            >
                                <CartesianGrid
                                    strokeDasharray="0"
                                    horizontal={false}
                                    stroke="#E3E8EE"
                                />
                                <XAxis
                                    dataKey="name"
                                    interval="preserveStartEnd"
                                    tickLine={false}
                                    tick={({ x, y, payload }) =>
                                        payload.value === '00:00' ||
                                            payload.value === 'Now, 12:00' ||
                                            payload.value === '23:59' ? (
                                            <text
                                                x={x}
                                                y={y}
                                                dy={6}
                                                textAnchor="middle"
                                                fontSize={12}
                                            >
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
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Reports
