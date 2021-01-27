import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import styling
import './App.css';

// Import components -- Always shown
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Social from './components/Social';

// Import components -- link between
import Landing from './components/Landing';
import About from './components/About';
import Membership from './components/Membership';
import Coaches from './components/Coaches';
import Timetable from './components/Timetable';
import Contact from './components/Contact';

function App() {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <Router>
      <div className='App'>
        <section className={`showcase ${!isActive ? 'active' : ''}`}>
          <Header changeClass={handleToggle} />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/about' component={About} />
            <Route path='/membership' component={Membership} />
            <Route path='/coaches' component={Coaches} />
            <Route path='/timetable' component={Timetable} />
            <Route path='/contact' component={Contact} />
          </Switch>
          <Social />
        </section>
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;
