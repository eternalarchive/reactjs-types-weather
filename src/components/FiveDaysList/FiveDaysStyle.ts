import styled from 'styled-components';
import { Tmode } from '../../redux/modules/types';
import media from '../../libs/MediaQuery';

export const FiveDaysSection = styled.section`
  position: relative;
  background-color: rgba(255, 255, 255, 0.2);
  width: 95%;
  margin: 0 auto;
  padding: 50px 40px;
  ${media.mobile`
    padding: 40px 30px;
  `}
`;

export const FiveDaysSectionTitle = styled.h2`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  background-color: transparent;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
`;

export const CityText = styled.p`
  font-size: 7.2rem;
`;

export const NowTempText = styled.p`
  font-size: 6rem;
`;

export const NowFeelTempText = styled.p`
  font-size: 2.4rem;
  margin: 10px 0;
`;

export const NowInfoWrap = styled.div`
  margin-bottom: 40px;
  padding-left: 10px;
  border-left: 5px solid white;
`;

export const NowMaxMinTempText = styled.span`
  font-size: 1.8rem;
  & ~ & {
    margin-left: 5px;
  }
`;

export const NowHutext = styled.p`
  font-size: 1.8rem;
`;

export const DayListBox = styled.ul`
  display: flex;
  overflow-x: scroll;
`;

export const BacktoHomeIcon = styled.i`
  cursor: pointer;
  position: absolute;
  right: 30px;
  top: 30px;
`;

// DayBox
export const WeatherLi = styled.li`
  text-align: center;
  flex-basis: 20%;
  min-width: 16rem;
  background-color: ${({ mode }: Tmode) =>
    mode ? 'rgba(104, 172, 240, 0.6)' : 'rgba(34, 50, 77, 0.6)'};
  padding: 20px 30px;
  margin: 0 10px;
  backdrop-filter: blur(3px);
`;

export const DayText = styled.p`
  font-size: 2.2rem;
`;

export const WeatherIcon = styled.i`
  margin: 10px 0;
`;

export const WeatherMain = styled.p`
  padding: 5px 0;
`;

export const TempTextWrap = styled.div``;

export const TempText = styled.span`
  font-size: 1.8rem;
  & ~ & {
    margin-left: 5px;
  }
`;

export const HuWrap = styled.div`
  margin-top: 5px;
`;

export const HuIcon = styled.i`
  vertical-align: middle;
  margin-right: 2px;
`;

export const HuText = styled.span``;
