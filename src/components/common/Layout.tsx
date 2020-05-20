import React from 'react';
import styled from 'styled-components';
import Header from '../Header/index';

interface LayoutProps {
  children: React.ReactNode,
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;