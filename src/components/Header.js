import React from 'react';
import { Link } from 'react-router-dom';

// Actions
import { setToggle, removeToggle } from '../actions/toggle';

// Redux
import { connect } from 'react-redux';

const Header = ({ toggle, setToggle, removeToggle }) => {
  // Handle class toggle
  const toggleClass = async e => {
    if (e.target.className.length === 7) {
      setToggle(true);
    }

    if (e.target.className.length > 7) {
      removeToggle();
    }
  };

  return (
    <header className='sticky'>
      <Link to='/' className='no-underline'>
        <h2 className='logo'>
          Phoenix CrossFit <span className='eight'>Eight</span>
        </h2>
      </Link>
      <div onClick={toggleClass} className={`toggle ${toggle}`}></div>
    </header>
  );
};

const mapStateToProps = state => ({
  toggle: state.toggle
});

export default connect(mapStateToProps, { setToggle, removeToggle })(Header);
