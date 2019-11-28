import React from 'react';
import balloonGraphic from '../img/Balloon_target_graphic.png';

const WhatWeDo = () => (
  <div>
    <img src={balloonGraphic} />
    <h2>
      We will calculate and deduct the taxes and send it directly to the IRS.
    </h2>
    <p>
      View deposits and choose which ones need taxes withheld and leave the rest
      to us. We will calculate and deduct the taxes from your bank and send it
      directly to the IRS within a few days.
    </p>
  </div>
);

export default WhatWeDo;
