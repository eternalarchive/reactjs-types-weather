import React from 'react';
import * as S from './WeatherListStyle';
import { TWeather } from '../../redux/modules/types';
import WeatherBox from './WeatherBox';

type WeatherListProps = {
  weatherDatas: TWeather[];
  mode: string;
  selectCity: (cityId: number) => void;
  deleteWeather: (id: number) => void;
};

function WeatherList({
  weatherDatas,
  mode,
  selectCity,
  deleteWeather,
}: WeatherListProps) {
  return (
    <S.WeatherSection>
      <S.WeatherTitle>Weather List</S.WeatherTitle>
      <WeatherBox
        weatherDatas={weatherDatas}
        mode={mode}
        selectCity={selectCity}
        deleteWeather={deleteWeather}
      />
    </S.WeatherSection>
  );
}

export default WeatherList;
