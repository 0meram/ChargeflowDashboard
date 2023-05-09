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

const Charts = () => {
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
    { name: 'N/A' },
    { name: 'N/A' },
    { name: '23:59' },
  ]

  return (
    <div className="charts">
      <div className="main_chart">
        <div className="main_chart_data">
          <div>
            <div>
              Gross volume
              <span>
                <Arrow />
              </span>
            </div>
            <div>€1,452.25</div>
          </div>
          <div>
            <div>
              Yesterday
              <span>
                <Arrow />
              </span>
            </div>
            <div>€1,253.61</div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={160}>
          <LineChart
            data={data}
            margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="0" horizontal={false} />
            <XAxis
              dataKey="name"
              interval="preserveStartEnd"
              tickLine={false}
              tick={({ x, y, payload }) =>
                payload.value === '00:00' ||
                payload.value === 'Now, 12:00' ||
                payload.value === '23:59' ? (
                  <text x={x} y={y} dy={6} textAnchor="middle">
                    {payload.value}
                  </text>
                ) : null
              }
            />
            <Tooltip />
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