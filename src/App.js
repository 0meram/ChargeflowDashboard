import React, { useState } from 'react';
import { ReactComponent as Avatar } from './icons/avatar.svg';
import { ReactComponent as Info } from './icons/info.svg';
import { ReactComponent as Bell } from './icons/bell.svg';
import { ReactComponent as Search } from './icons/search.svg';
import { ReactComponent as Payment } from './icons/payments.svg';
import { ReactComponent as Balance } from './icons/balance.svg';
import { ReactComponent as Product } from './icons/product.svg';
import { ReactComponent as Settings } from './icons/settings.svg';
import { ReactComponent as Store } from './icons/store.svg';
import { ReactComponent as Toggle } from './icons/toggle.svg';
import { ReactComponent as Account } from './icons/acounts.svg';
import { ReactComponent as Report } from './icons/report.svg';
import { ReactComponent as Developer } from './icons/developer.svg';
import { ReactComponent as Costumer } from './icons/costumers.svg';
import './App.css';

const App = () => {
  const [asideActive, setAsideActive] = useState(false);

  const toggleAside = () => {
    setAsideActive(!asideActive);
  };

  return (
    <div className={`grid-container ${asideActive ? 'aside-active' : ''}`}>
      <header className="header">
        <div className="header_search"><Search />Search</div>
        <div className="header_icons">
          <div className="header_icon"><Avatar /></div>
          <div className="header_icon"><Info /></div>
          <div className="header_icon"><Bell /></div>
        </div>
      </header>
      <aside className={`aside ${asideActive ? 'active' : ''}`}>
        <h2 className="aside_title"><div><Store /></div>store name</h2>
        <ul className="aside_list">
          <li><Payment />Payments</li>
          <li><Balance />Balances</li>
          <li><Costumer />Customers</li>
          <li><Product />Products</li>
          <li><Report />Reports</li>
          <br></br>
          <li><Payment />Developers</li>
          <li><Toggle />View test data</li>
          <li><Settings />Settings
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
