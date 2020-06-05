import React, { useEffect } from 'react';
import * as S from './WeatherListStyle';
import styled from 'styled-components';
import { TWeather } from '../../redux/modules/types';
import WeatherBox from './WeatherBox';

type WeatherListProps = {
  weatherDatas: TWeather[];
  loading: boolean;
  error: null | {};
}

function WeatherList({
  weatherDatas,
  loading,
  error,
}: WeatherListProps) {

  useEffect(() => {
    console.log(weatherDatas);
  }, [weatherDatas]);

  return (
    <S.WeatherSection>
      <S.WeatherTitle>Weather List</S.WeatherTitle>
      <S.ListBox>
        {weatherDatas.map(weatherData => <WeatherBox weatherData={weatherData}/>)}
      </S.ListBox>
    </S.WeatherSection>
  );
};

export default WeatherList;
