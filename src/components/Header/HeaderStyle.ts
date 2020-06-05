import styled from 'styled-components';

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
export const ModeText = styled.span`
  display: inline-block;
  margin-right: 5px;
`;

export const ModeButtonBg = styled.div`
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.6);
  position: relative;
  width: 30px;
  height: 15px;
  border-radius: 15px;
`;

export const ChangeModeButton = styled.button`
  position: absolute;
  left: 0;
  top: 0;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: white;
`;