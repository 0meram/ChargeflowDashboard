import React from 'react'
import { ReactComponent as Arrow } from '../icons/arrow.svg'
import { data } from '../data/mainChartData'
import '../style/charts.css'
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const Charts = () => {
  return (
    <div className="charts">
      <div className="main_chart">
        <div className="main_chart_data">
          <div className="main_chart_time">
            <div>
              Gross volume
              <icon>
                <Arrow />
              </icon>
            </div>
            <span>€1,452.25</span>
          </div>
          <div className="main_chart_time">
            <div>
              Yesterday
              <icon>
                <Arrow />
              </icon>
            </div>
            <div className="main_chart_past">€1,253.61</div>
          </div>
        </div>
        <div>04:00</div>
        <ResponsiveContainer width="100%" height={150}>
          <LineChart
            data={data}
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
            <Line type="linear" dataKey="value" stroke="#5469D4" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="chart1">
        <div className="chart_card">
          <div className="chart_card_info">
            <div>EUR Balance</div>
            <h3>€3,582.31</h3>
            <span>Estimated future payouts</span>
          </div>
          <div className="card_view">view</div>
        </div>
      </div>
      <div className="chart2">
        <div className="chart_card">
          <div className="chart_card_info">
            <div>EUR Balance</div>
            <h3>€4,130.99</h3>
            <span>Deposited on 8 Jun</span>
          </div>
          <div className="card_view">view</div>
        </div>
      </div>
    </div>
  )
}

export default Charts
