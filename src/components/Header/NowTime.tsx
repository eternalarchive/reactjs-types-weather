import React from 'react';
import moment from 'moment';

function NowTime() {
  return (
    <div>
      {moment().format('LLL')}
    </div>
  );
};

export default NowTime;
