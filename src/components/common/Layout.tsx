import React from 'react';
import styled from 'styled-components';
import Header from '../Header/index';
import { useSelector } from 'react-redux';
import { rootState } from '../../redux/modules/reducer';
import { Tmode } from '../../redux/modules/types';
import media from '../../libs/MediaQuery';

type LayoutProps = {
  children: React.ReactNode;
}

const StyledBg = styled.div`
  background-image: url(${({ mode }: Tmode) => mode ? '/images/light-mode.jpg' : '/images/dark-mode.jpg'});
  background-color: white;
  height: 100vh;
  padding: 20px 50px;
  overflow: hidden;
  ${media.tablet`
    overflow: auto;
  `}
  ${media.mobile`
    overflow: auto;
    padding: 20px 20px;
  `}
`;

const StyledArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 90%;
  ${media.mobile`
  `}
`;

function Layout({ children }: LayoutProps) {
  const mode: boolean = useSelector((state: rootState) => state.view.mode);

  return (
    <StyledBg mode={mode}>
      <Header />
      <StyledArea>
        {children}
      </StyledArea>
    </StyledBg>
  );
};

export default Layout;
