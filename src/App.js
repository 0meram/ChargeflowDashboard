import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [asideActive, setAsideActive] = useState(false);

  const toggleAside = () => {
    setAsideActive(!asideActive);
  };

  return (
    <div className={`grid-container ${asideActive ? 'aside-active' : ''}`}>
      <div className="menu-icon" onClick={toggleAside}>
        <strong> &#9776;</strong>
      </div>
      <header className="header">
        <div className="header_search"> icon Search</div>
        <div className="header_icons">
          <div className="header_icon">icon</div>
          <div className="header_icon">icon</div>
          <div className="header_icon">icon</div>
        </div>
      </header>
      <aside className={`aside ${asideActive ? 'active' : ''}`}>
        <div className="aside_close-icon" onClick={toggleAside}>
          <strong>&times;</strong>
          <div>hwloooooooooo</div>
        </div>
        <ul className="aside_list">
          <li className="aside_list-item">Menu item1</li>
          <li className="aside_list-item">Menu item2</li>
          <li className="aside_list-item">Menu item3</li>
          <li className="aside_list-item">Menu item4</li>
          <li className="aside_list-item">Menu item5</li>
        </ul>
      </aside>
      <main className="main">
        <div className="main_overview">
          <div className="overview_card">
            <div className="overview_card-info">Overview</div>
            <div className="overview_card-icon">Card</div>
          </div>
          <div className="overview_card">
            <div className="overview_card-info">Overview</div>
            <div className="overview_card-icon">Card</div>
          </div>
          <div className="overview_card">
            <div className="overview_card-info">Overview</div>
            <div className="overview_card-icon">Card</div>
          </div>
          <div className="overview_card">
            <div className="overview_card-info">Overview</div>
            <div className="overview_card-icon">Card</div>
          </div>
        </div>
        <div className="main_cards">
          <div className="card">Card</div>
          <div className="card">Card</div>
          <div className="card">Card</div>
        </div>
      </main>
    </div>
  );
};

export default App;
