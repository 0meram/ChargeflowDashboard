import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import SideMenu from './components/SideMenu';
import Main from './components/Main';

const App = () => {
  const [asideActive, setAsideActive] = useState(false);

  const toggleAside = () => {
    setAsideActive(!asideActive);
  };

  const styles = `
  .recharts-cartesian-axis-line {
    stroke: #C2C7CF;
    stroke-width: 1;
  }
`;

  return (
    <div className={`grid-container ${asideActive ? 'aside-active' : ''}`}>
      <style>{styles}</style>
      <Header/>
      <SideMenu/>
      <Main/>
    </div>
  );
};

export default App;
