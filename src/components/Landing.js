import React from 'react';

function Landing() {
  return (
    <>
      <video src='phoenix720.mov' playsinline muted loop autoplay></video>

      <div className='overlay'></div>

      <div className='text'>
        <h2>Never Stop</h2>
        <h3>Believing In Yourself</h3>
        <p>
          Our mission is to train individuals in constantly varied, functional
          movements, at a high intensity in order for them to become their best
          both physically and mentally. Preparing them for both the unknown and
          the unknowable.
        </p>
        <a href='#'>Click Here For A Free Trial</a>
      </div>
    </>
  );
}

export default Landing;
