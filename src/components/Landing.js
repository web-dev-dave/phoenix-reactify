import React from 'react';
import { Link } from 'react-router-dom';
import videoSource from '../assets/video/phoenix720.mov';

const Landing = () => {
  return (
    <>
      <video src={videoSource} playsInline muted loop autoPlay></video>

      <div className='text'>
        <h2>Never Stop</h2>
        <h3>Believing In Yourself</h3>
        <p>
          Our mission is to train individuals in constantly varied, functional
          movements, at a high intensity in order for them to become their best
          both physically and mentally. Preparing them for both the unknown and
          the unknowable.
        </p>
        <Link to='/trial' className='trial-link'>
          Click Here For A Free Trial
        </Link>
      </div>
    </>
  );
};

export default Landing;
