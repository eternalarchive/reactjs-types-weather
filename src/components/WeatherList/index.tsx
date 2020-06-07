import React, { useEffect } from 'react';
import * as S from './WeatherListStyle';
import { TWeather } from '../../redux/modules/types';
import WeatherBox from './WeatherBox';

type WeatherListProps = {
  weatherDatas: TWeather[];
  loading: boolean;
  error: null | {};
  mode: boolean;
  selectCity: (cityId:number) => void;
  deleteWeather: (id: number) => void;
}

function WeatherList({
  weatherDatas,
  loading,
  error,
  mode,
  selectCity,
  deleteWeather,
}: WeatherListProps) {

  useEffect(() => {
    console.log(weatherDatas);
  }, [weatherDatas]);

  return (
    <S.WeatherSection>
      <S.WeatherTitle>Weather List</S.WeatherTitle>
      <S.ListBox>
        <WeatherBox weatherDatas={weatherDatas} mode={mode} selectCity={selectCity} deleteWeather={deleteWeather}/>
      </S.ListBox>
    </S.WeatherSection>
  );
};

export default WeatherList;
