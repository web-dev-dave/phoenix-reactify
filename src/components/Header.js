import React, { useState } from 'react';

function Header(props) {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
  };

  console.log(props);
  return (
    <header>
      <h2 class='logo'>
        Phoenix CrossFit <span class='eight'>Eight</span>
      </h2>
      <div
        onClick={props.changeClass}
        className={`toggle ${!isActive ? 'active' : ''}`}
      ></div>
    </header>
  );
}

export default Header;
