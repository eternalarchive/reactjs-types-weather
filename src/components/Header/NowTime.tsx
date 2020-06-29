import React from 'react';
import moment from 'moment';
import * as S from './HeaderStyle';

function NowTime() {
  return (
    <div>
      <S.NowTimeText>{moment().format('MMM Do YY').slice(0, 8)}</S.NowTimeText>
      <S.NowTimeText>{moment().format('LT')}</S.NowTimeText>
    </div>
  );
}

export default NowTime;
