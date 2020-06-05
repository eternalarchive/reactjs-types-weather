import styled from 'styled-components';

export const WeatherSection = styled.section`
  width: 40rem;
  min-width: 29rem;
  height: 70vh;
  background-color: transparent;
  overflow: scroll;
`;

export const WeatherTitle = styled.h2`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  background-color: transparent;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
`;

export const ListBox = styled.ul`

`;

// weatherBox
export const WeatherLi = styled.li`
  display: flex;
  position: relative;
  width: 95%;
  padding: 20px 30px;
  margin-bottom: 20px;
  :nth-last-child() {
    margin-bottom: 0;
  }
  background-color: rgba(255, 255, 255, 0.2);
  :hover {
    box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.5);
  }
`;

export const NowMainInfoWrap = styled.div`

`;

export const NowTempText = styled.p`
  font-size: 7.2rem;
`;

export const NowMainWeatherText = styled.p`
  text-align: center;
  padding-right: 10px;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

export const SelectedCity = styled.h3`
  font-size: 3.2rem;
`;

export const WeatherIcon = styled.i`
  margin-left: 10px;
  vertical-align: middle;
`;

export const MaxMinTempWrap = styled.div`

`;

export const MaxMinTempText = styled.span`
  & ~ & {
    margin-left: 5px;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const ViewMore = styled.span`
  text-decoration: underline;
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
`;