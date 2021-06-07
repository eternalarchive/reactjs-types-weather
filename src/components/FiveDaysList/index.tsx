import React from 'react';
import DayBox from './DayBox';
import { Link } from 'react-router-dom';
import * as S from './FiveDaysStyle';
import { Tforecast, TWeather } from '../../redux/modules/types';

type FiveDaysListProps = {
  mode: string;
  selectedNow: TWeather[];
  selectedDatas: Tforecast[];
};

function FiveDaysList({ mode, selectedNow, selectedDatas }: FiveDaysListProps) {
  return (
    <S.FiveDaysSection>
      <S.FiveDaysSectionTitle>
        {selectedNow[0].name} Weather Forecast
      </S.FiveDaysSectionTitle>
      <S.CityText>
        {selectedNow[0].name}, {selectedNow[0].weather[0].main}
      </S.CityText>
      <S.NowTempText>{Math.round(selectedNow[0].main.temp)}°</S.NowTempText>
      <S.NowFeelTempText>
        Feels like Temp {Math.round(selectedNow[0].main.feels_like)}°
      </S.NowFeelTempText>
      <S.NowInfoWrap>
        <S.NowMaxMinTempText>
          H {Math.round(selectedNow[0].main.temp_max)}°
        </S.NowMaxMinTempText>
        <S.NowMaxMinTempText>
          L {Math.round(selectedNow[0].main.temp_min)}°
        </S.NowMaxMinTempText>
        <S.NowHutext>Humidity {selectedNow[0].main.humidity}%</S.NowHutext>
      </S.NowInfoWrap>
      <DayBox mode={mode} selectedDatas={selectedDatas} />
      <Link to="/">
        <S.BacktoHomeIcon className="fas fa-arrow-left fa-2x" />
      </Link>
    </S.FiveDaysSection>
  );
}

export default FiveDaysList;
