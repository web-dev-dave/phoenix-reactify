import React from 'react';

const Membership = () => {
  return (
    <>
      <div className='container'>
        <div className='box'>
          <h3>3 x Classes Per Week</h3>
          <p>Attend any 3 classes in a week period (Mon - Sun)</p>
          <div className='price-wrap'>
            <h1>
              $50<span>pw</span>{' '}
            </h1>
          </div>
        </div>
        <div className='box'>
          <h3>Unlimited Classes</h3>
          <p>Attend any class at anytime</p>
          <div className='price-wrap'>
            <h1>
              $60<span>pw</span>
            </h1>
          </div>
        </div>
        <div className='box'>
          <h3>Onboarding Program</h3>
          <p>
            2 x classes of indepth coaching to get you up to speed, feeling
            comforatable and ready to smash it out
          </p>
          <div className='price-wrap'>
            <h1>
              $100<span> one off</span>
            </h1>
          </div>
        </div>
        <div className='box'>
          <h3>First Responders Service</h3>
          <p>
            20% Discount off Unlimited, applies to Fire Service, Police
            Officers, Emergency Services, Sworn in Airforce, Navy & Army
            Personnel
          </p>
          <div className='price-wrap'>
            <h1>
              $48<span>pw</span>
            </h1>
          </div>
        </div>
        <div className='box'>
          <h3>Guests</h3>
          <p>
            Experienced guests are ALWAYS welcome - please call us to book in
            prior
          </p>
          <div className='price-wrap'>
            <h1>
              $20<span> drop in</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Membership;
