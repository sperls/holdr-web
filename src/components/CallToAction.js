import React from 'react';
import mobilePhone from '../img/mobile_phone.png';

const CallToAction = () => (
  <div>
    <img src={mobilePhone} />
    <h2>Sign Up!</h2>
    <h4>
      Join to learn more and receive a freelance checklist to assist with tax
      payments.
    </h4>
    <button>Sign Up</button>
  </div>
);

export default CallToAction;
