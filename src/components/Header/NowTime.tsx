import React from 'react';
import moment from 'moment';
import * as S from './HeaderStyle';
import styled from 'styled-components';

function NowTime() {
  return (
    <div>
      <S.NowTimeText>{moment().format("MMM Do YY").slice(0, 7)}</S.NowTimeText>
      <S.NowTimeText>{moment().format('LT')}</S.NowTimeText>
    </div>
  );
};

export default NowTime;
