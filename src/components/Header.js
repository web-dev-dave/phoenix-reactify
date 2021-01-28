import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    props.changeClass();
    setActive(!isActive);
  };

  return (
    <header>
      <Link to='/' className='no-underline'>
        <h2 className='logo'>
          Phoenix CrossFit <span className='eight'>Eight</span>
        </h2>
      </Link>
      <div
        onClick={handleToggle}
        className={`toggle ${!isActive ? 'active' : ''}`}
      ></div>
    </header>
  );
}

export default Header;
