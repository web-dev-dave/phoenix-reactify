import React from 'react';
import { Link } from 'react-router-dom';

// Actions
import { setToggle } from '../actions/toggle';

// Redux
import { connect } from 'react-redux';

const Sidebar = ({ changeClass }) => {
  return (
    <div className='menu'>
      <ul>
        <Link to='/about' className='text-link' onClick={changeClass}>
          <li>About Us</li>
        </Link>
        <Link to='/membership' className='text-link' onClick={changeClass}>
          <li>Membership</li>
        </Link>
        <Link to='/coaches' className='text-link' onClick={changeClass}>
          <li>Our Coaches</li>
        </Link>
        <Link to='/timetable' className='text-link' onClick={changeClass}>
          <li>Timetable</li>
        </Link>
        <Link to='/contact' className='text-link' onClick={changeClass}>
          <li>Contact Us</li>
        </Link>
      </ul>
    </div>
  );
};

export default connect(null, { setToggle })(Sidebar);
