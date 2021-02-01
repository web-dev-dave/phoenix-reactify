import React from 'react';
import { Link } from 'react-router-dom';

// Actions
import { setToggle } from '../actions/toggle';

// Redux
import { connect } from 'react-redux';

const Header = ({ toggle, setToggle }) => {
  const toggleClass = async () => {
    setToggle(true, '');
  };

  console.log(toggle);
  return (
    <header>
      <Link to='/' className='no-underline'>
        <h2 className='logo'>
          Phoenix CrossFit <span className='eight'>Eight</span>
        </h2>
      </Link>
      <div
        onClick={toggleClass}
        className={`toggle ${toggle}` || `toggle`}
      ></div>
    </header>
  );
};

const mapStateToProps = state => ({
  toggle: state.toggle
});

export default connect(mapStateToProps, { setToggle })(Header);
