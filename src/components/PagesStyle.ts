import styled from 'styled-components';
import media from '../libs/MediaQuery';

// Home
export const HomeTitle = styled.h2`
  font-size: 7.2rem;
  ${media.mobile`
    font-size: 6.0rem;
  `}
`;

export const HomeLayout = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 30px 0px;
  height: 100%;
  ${media.tablet`
    display: block;
    margin: 0 auto;
  `}
  ${media.mobile`
    display: block;
    margin: 0 auto;
  `}
`;

export const TitleArea = styled.div``;
