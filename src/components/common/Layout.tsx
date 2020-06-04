import React from 'react';
import styled from 'styled-components';
import Header from '../Header/index';

type LayoutProps = {
  children: React.ReactNode,
}

const StyledBg = styled.div`
  background-image: url('/images/light-mode.jpg');
  background-color: white;
  height: 100vh;
  padding: 20px 50px;
`;
function Layout({ children }: LayoutProps) {
  return (
    <StyledBg>
      <Header />
      {children}
    </StyledBg>
  );
};

export default Layout;
