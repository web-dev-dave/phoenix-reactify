import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar(props) {
  console.log(props);
  return (
    <div className='menu'>
      <ul>
        <Link to='/about' className='text-link'>
          <li>About Us</li>
        </Link>
        <Link to='/membership' className='text-link'>
          <li>Membership</li>
        </Link>
        <Link to='/coaches' className='text-link'>
          <li>Our Coaches</li>
        </Link>
        <Link to='/timetable' className='text-link'>
          <li>Timetable</li>
        </Link>
        <Link to='/contact' className='text-link'>
          <li>Contact Us</li>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
