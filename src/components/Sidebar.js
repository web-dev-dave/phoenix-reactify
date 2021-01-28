import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar(props) {
  return (
    <div className='menu'>
      <ul>
        <Link to='/about' className='text-link' onClick={props.changeClass}>
          <li>About Us</li>
        </Link>
        <Link
          to='/membership'
          className='text-link'
          onClick={props.changeClass}
        >
          <li>Membership</li>
        </Link>
        <Link to='/coaches' className='text-link' onClick={props.changeClass}>
          <li>Our Coaches</li>
        </Link>
        <Link to='/timetable' className='text-link' onClick={props.changeClass}>
          <li>Timetable</li>
        </Link>
        <Link to='/contact' className='text-link' onClick={props.changeClass}>
          <li>Contact Us</li>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
