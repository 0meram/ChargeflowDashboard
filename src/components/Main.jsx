import React from 'react'
import Charts from './Charts'
import Reports from './Reports'

const Main = () => {
    return (
        <main className="main">
            <h1 className='main_title'>Today</h1>
            <Charts />
            <h1 className='main_title'>Reports overview</h1>
            <div>filters</div>
            <Reports/>
        </main>
    )
}

export default Main