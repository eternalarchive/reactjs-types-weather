import React from 'react';
import styled from 'styled-components';
import Header from '../Header/index';
import { useSelector } from 'react-redux';
import { rootState } from '../../redux/modules/reducer';
import { Tmode } from '../../redux/modules/types';
import media from '../../libs/MediaQuery';

type LayoutProps = {
  children: React.ReactNode;
};

const StyledBg = styled.div`
  ${({ mode }: Tmode) =>
    mode === 'light'
      ? `background-image: url('/images/light-mode.jpg')`
      : `background-image: url('/images/dark-mode.jpg')`};
  background-color: rgb(77, 157, 239);
  height: 100vh;
  padding: 20px 50px;
  overflow: auto;
  ${media.mobile`
    padding: 10px 30px;
    min-height: 100vh;
    height: auto;
    overflow-x: hidden;
  `}
`;

const StyledArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

function Layout({ children }: LayoutProps) {
  const mode: string = useSelector((state: rootState) => state.view.mode);

  return (
    <StyledBg mode={mode}>
      <Header />
      <StyledArea>{children}</StyledArea>
    </StyledBg>
  );
}

export default Layout;
