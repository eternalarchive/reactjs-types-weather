import React from 'react';
import dayjs from 'dayjs';
import * as S from './HeaderStyle';

function NowTime() {
  return (
    <div>
      <S.NowTimeText>{dayjs().format('MMM D')}th</S.NowTimeText>
      <S.NowTimeText>{dayjs().format('hh:mm A')}</S.NowTimeText>
    </div>
  );
}

export default NowTime;
