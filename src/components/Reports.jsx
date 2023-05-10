import React from 'react'
import { ReactComponent as Arrow } from '../icons/arrow.svg'
import { ReactComponent as SmallInfo } from '../icons/smallInfo.svg'
import { reportsData } from '../data/reportsData'
import '../style/reports.css'
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'


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
