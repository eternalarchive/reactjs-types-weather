import styled, { css } from 'styled-components';
import { Tmode } from '../../redux/modules/types';

export const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const HeaderTitle = styled.h1`
  width: 8rem;
  font-weight: 700;
  border: 1px solid white;
  padding: 50px 5px 2px 5px;
  margin-top: -21px;
`;

// NowTime
export const NowTimeText = styled.span`
  & ~ & {
    margin-left: 8px;
  }
`;

// LightDarkMode
export const ModeIcon = styled.i`
  vertical-align: middle;
  padding: 0 5px;
`;

export const ModeButtonBg = styled.div`
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.6);
  position: relative;
  width: 35px;
  height: 20px;
  border-radius: 20px;
`;

export const ChangeModeButton = styled.button`
  position: absolute;
  ${({ mode }: Tmode) =>
    mode === 'light'
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  background-color: white;
  outline: none;
  cursor: pointer;
`;
