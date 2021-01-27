import React, { useState } from 'react';

function Header(props) {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    props.changeClass();
    setActive(!isActive);
  };

  return (
    <header>
      <h2 className='logo'>
        Phoenix CrossFit <span className='eight'>Eight</span>
      </h2>
      <div
        onClick={handleToggle}
        className={`toggle ${!isActive ? 'active' : ''}`}
      ></div>
    </header>
  );
}

export default Header;
