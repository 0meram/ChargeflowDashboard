import React from 'react';
import Header from './components/Header';
import './style/main.css'
import SideMenu from './components/SideMenu';
import Main from './components/Main';

const App = () => {

  const styles = `
  .recharts-cartesian-axis-line {
    stroke: #C2C7CF;
    stroke-width: 1;
  }
`;

  return (
    <div className='grid-container'>
      <style>{styles}</style>
      <>
        <SideMenu />
      </>
      <Header />
      <Main />
    </div>
  );
};

export default App;
