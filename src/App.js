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

  return (
    <div className={`grid-container ${asideActive ? 'aside-active' : ''}`}>
      <Header/>
      <SideMenu/>
      <Main/>
    </div>
  );
};

export default App;
