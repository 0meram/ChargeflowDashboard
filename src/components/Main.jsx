import React from 'react'
import Charts from './Charts'
import Reports from './Reports'
import '../style/main.css'

const Main = () => {
    return (
        <main className="main">
            <div className='charts_wrapper'>
                <h1>Today</h1>
                <Charts />
            </div>
            <div className='reports_wrapper'>
                <h1>Reports overview</h1>
                <div className='filters'>filters</div>
                <div className="clear_line"></div>
                <Reports />
            </div>
        </main>
    )
}

export default Main