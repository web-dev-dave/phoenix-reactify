import React from 'react';
import { Link } from 'react-router-dom';

// Actions
import { setToggle } from '../actions/toggle';

// Redux
import { connect } from 'react-redux';

const Sidebar = ({ setToggle }) => {
  const toggleClass = async e => {
    e.preventDefault();
    setToggle(true, '');
  };

  return (
    <div className='menu'>
      <ul>
        <Link to='/about' className='text-link' onClick={toggleClass}>
          <li>About Us</li>
        </Link>
        <Link to='/membership' className='text-link' onClick={toggleClass}>
          <li>Membership</li>
        </Link>
        <Link to='/coaches' className='text-link' onClick={toggleClass}>
          <li>Our Coaches</li>
        </Link>
        <Link to='/timetable' className='text-link' onClick={toggleClass}>
          <li>Timetable</li>
        </Link>
        <Link to='/contact' className='text-link' onClick={toggleClass}>
          <li>Contact Us</li>
        </Link>
      </ul>
    </div>
  );
};

export default connect(null, { setToggle })(Sidebar);
