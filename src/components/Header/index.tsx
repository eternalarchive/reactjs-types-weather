import React from 'react';
import styled from 'styled-components';
import * as S from './HeaderStyle';
import NowTime from './NowTime';
import LightDartModeButton from './LightDarkModeButton';

function Header() {
  return (
    <S.HeaderBox>
      <S.HeaderTitle>Blue Weather</S.HeaderTitle>
      <NowTime />
      <LightDartModeButton />
    </S.HeaderBox>
  );
};

export default Header;
