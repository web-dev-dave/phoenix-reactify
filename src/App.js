import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

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

const App = ({ toggle }) => {
  return (
    <Router>
      <div className='App'>
        <section className={`showcase ${toggle}` || 'showcase'}>
          <Header />
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
};

const mapStateToProps = state => ({
  toggle: state.toggle
});

export default connect(mapStateToProps)(App);
