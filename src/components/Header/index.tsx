import React from 'react';
import styled from 'styled-components';
import NowTime from './NowTime';
import LightDarkMode from './LightDartMode';
import * as S from './HeaderStyle';

const StyledHeader = styled.header`
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

function Header() {
  return (
    <StyledHeader>
      <span>BlueWeather</span>
      <NowTime />
      <LightDarkMode />
    </StyledHeader>
  );
};

export default Header;
