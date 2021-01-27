import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Sidebar from './components/Sidebar';
import Social from './components/Social';

function App() {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className='App'>
      <section className={`showcase ${!isActive ? 'active' : ''}`}>
        <Header changeClass={handleToggle} />
        <Landing />
        <Social />
      </section>
      <Sidebar />
    </div>
  );
}

export default App;
