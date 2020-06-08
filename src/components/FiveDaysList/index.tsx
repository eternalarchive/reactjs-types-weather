import React, { useEffect } from 'react';
import DayBox from './DayBox';
import { Link } from 'react-router-dom';
import * as S from './FiveDaysStyle';
import { Tforecast, TWeather } from '../../redux/modules/types';

type FiveDaysListProps = {
  mode: boolean;
  selectedNow: TWeather[];
  selectedDatas: Tforecast[];
};

function FiveDaysList({ mode, selectedNow, selectedDatas }: FiveDaysListProps) {
  useEffect(() => {
    console.log(selectedDatas);
  }, [selectedDatas]);

  return (
    <S.FiveDaysSection>
      {selectedNow.map((selectedNowData) => (
        <>
          <S.FiveDaysSectionTitle>
            {selectedNowData.name} Weather Forecast
          </S.FiveDaysSectionTitle>
          <S.CityText>
            {selectedNowData.name}, {selectedNowData.weather[0].main}
          </S.CityText>
          <S.NowTempText>
            {Math.round(selectedNowData.main.temp)}°
          </S.NowTempText>
          <S.NowFeelTempText>
            Feels like Temp {Math.round(selectedNowData.main.feels_like)}°
          </S.NowFeelTempText>
          <S.NowInfoWrap>
            <S.NowMaxMinTempText>
              H {Math.round(selectedNowData.main.temp_max)}°
            </S.NowMaxMinTempText>
            <S.NowMaxMinTempText>
              L {Math.round(selectedNowData.main.temp_min)}°
            </S.NowMaxMinTempText>
            <S.NowHutext>Humidity {selectedNowData.main.humidity}%</S.NowHutext>
          </S.NowInfoWrap>
        </>
      ))}
      <S.DayListBox>
        <DayBox mode={mode} selectedDatas={selectedDatas} />
      </S.DayListBox>
      <Link to="/">
        <S.BacktoHomeIcon className="fas fa-arrow-left fa-2x" />
      </Link>
    </S.FiveDaysSection>
  );
}

export default FiveDaysList;
