import styled from 'styled-components';
import media from '../libs/MediaQuery';

// Home
export const HomeTitle = styled.h2`
  font-size: 7.2rem;
`;

export const HomeLayout = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 30px 0px;
  ${media.mobile`
    display: block;
  `}
`;

export const TitleArea = styled.div`
`;