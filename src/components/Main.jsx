import React from 'react'
import Charts from './Charts'
import Reports from './Reports'
import { ReactComponent as Arrow } from '../icons/arrow.svg'
import { ReactComponent as Schedule } from '../icons/schedule.svg'
import { ReactComponent as Settings } from '../icons/settings.svg'
import '../style/main.css'

const Main = () => {
    return (
        <main className="main">
            <div className="charts_wrapper">
                <h1>Today</h1>
                <div className="clear_line_charts"></div>
                <Charts />
            </div>
            <div className="reports_wrapper">
                <h1>Reports overview</h1>
                <div className="filters">
                    <div className="compare_buttons_group">
                        <div className="flex">
                            <div className="compare_buttons_past">
                                Last 12 months <Arrow className="icon_right" />
                            </div>
                            <div className="compare_buttons_month">
                                <Schedule className="icon_left" />1 Aug 2020-7 Jul
                            </div>
                        </div>
                        <div className="flex">
                            <div className="compare_to">compared to</div>
                            <div className="compare_buttons">
                                Previous period
                                <Arrow className="icon_right" />
                            </div>
                        </div>
                    </div>
                    <div className="compare_buttons_settings">
                        <div className="compare_buttons_monthly">
                            Monthly <Arrow className="icon_right" />
                        </div>
                        <div className="compare_buttons">
                            <Settings className="icon_left" />
                            Edit charts
                        </div>
                    </div>
                </div>
                <div className="clear_line"></div>
                <Reports />
            </div>
        </main>
    )
}

export default Main
