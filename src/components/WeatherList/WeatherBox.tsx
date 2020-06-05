import React from 'react';
import * as S from './WeatherListStyle';
import styled from 'styled-components';
import { TWeather } from '../../redux/modules/types';

type WeatherBoxProps = {
  weatherData: TWeather;
};

function WeatherBox({ weatherData }: WeatherBoxProps) {
  const deleteCity = () => {

  };

  return (
    <S.WeatherLi key={weatherData.id}>
      <S.NowMainInfoWrap>
        <S.NowTempText>{Math.round(weatherData.main.temp)}°</S.NowTempText>
        <S.NowMainWeatherText>{weatherData.weather[0].main}</S.NowMainWeatherText>
      </S.NowMainInfoWrap>
      <S.InfoWrap>
        <S.SelectedCity>
          {weatherData.name}
          <S.WeatherIcon className="far fa-snowflake fa-xs" />
        </S.SelectedCity>
        <S.MaxMinTempWrap>
          <S.MaxMinTempText>H {Math.round(weatherData.main.temp_max)}°</S.MaxMinTempText>
          <S.MaxMinTempText>L {Math.round(weatherData.main.temp_min)}°</S.MaxMinTempText>
        </S.MaxMinTempWrap>
      </S.InfoWrap>
      <S.ViewMore>View More</S.ViewMore>
      <S.DeleteButton onClick={deleteCity}>
        <i className="fas fa-times"></i>
      </S.DeleteButton>
    </S.WeatherLi>
  );
};

export default WeatherBox;
