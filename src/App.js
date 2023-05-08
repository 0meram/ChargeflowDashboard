import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [asideActive, setAsideActive] = useState(false);

  const toggleAside = () => {
    setAsideActive(!asideActive);
  };

  return (
    <div className={`grid-container ${asideActive ? 'aside-active' : ''}`}>
      <header className="header">
        <div className="header_search">icon Search</div>
        <div className="header_icons">
          <div className="header_icon">icon</div>
          <div className="header_icon">icon</div>
          <div className="header_icon">icon</div>
        </div>
      </header>
      <aside className={`aside ${asideActive ? 'active' : ''}`}>
        <h2 className="aside_title">store name</h2>
        <ul className="aside_list">
          <li><icon>icon</icon>Payments</li>
          <li><icon>icon</icon>Balances</li>
          <li><icon>icon</icon>Customers</li>
          <li><icon>icon</icon>Products</li>
          <li><icon>icon</icon>Reports</li>
          <br></br>
          <li><icon>icon</icon>Developers</li>
          <li><icon>icon</icon>View test data</li>
          <li><icon>icon</icon>Settings
          </li>
        </ul>
      </aside>
      <main className="main">
        <h1 className='main_title'>Today</h1>
        <div className="charts">
          <div className="main_chart">Chart</div>
          <div className="chart1">Card</div>
          <div className="chart2">Card</div>
        </div>
        <h1 className='main_title'>Reports overview</h1>
        <div>filters</div>
        <div className="reports">
          <div className="card1">Chart</div>
          <div className="card2">Card</div>
          <div className="card3">Card</div>
          <div className="card4">Card</div>
          <div className="card5">Card</div>
          <div className="card6">Card</div>
        </div>
      </main>
    </div>
  );
};

export default App;
