import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='menu'>
      <ul>
        <Link to='/about' className='text-link'>
          <li>
            {/* eslint-disable-next-line */}
            <a href='#'>About Us</a>
          </li>
        </Link>
        <Link to='/membership' className='text-link'>
          <li>
            {/* eslint-disable-next-line */}
            <a href='#'>Membership</a>
          </li>
        </Link>
        <Link to='/coaches' className='text-link'>
          <li>
            {/* eslint-disable-next-line */}
            <a href='#'>Our Coaches</a>
          </li>
        </Link>
        <Link to='/timetable' className='text-link'>
          <li>
            {/* eslint-disable-next-line */}
            <a href='#'>Timetable</a>
          </li>
        </Link>
        <Link to='/contact' className='text-link'>
          <li>
            {/* eslint-disable-next-line */}
            <a href='#'>Contact Us</a>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
