import React from 'react';
import * as S from './HeaderStyle';
import NowTime from './NowTime';
import ModeContainer from '../../containers/ModeContainer';

function Header() {
  return (
    <S.HeaderBox>
      <S.HeaderTitle>Blue Weather</S.HeaderTitle>
      <NowTime />
      <ModeContainer />
    </S.HeaderBox>
  );
};

export default Header;
