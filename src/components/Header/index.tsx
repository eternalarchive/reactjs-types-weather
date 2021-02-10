import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './HeaderStyle';
import NowTime from './NowTime';
import ModeContainer from '../../containers/ModeContainer';

function Header() {
  return (
    <S.HeaderBox>
      <Link to="/">
        <S.HeaderTitle>Blue Weather</S.HeaderTitle>
      </Link>
      <NowTime />
      <ModeContainer />
    </S.HeaderBox>
  );
}

export default Header;
