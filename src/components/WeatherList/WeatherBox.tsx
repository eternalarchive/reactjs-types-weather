import React from 'react';
import * as S from './WeatherListStyle';
import { TWeather } from '../../redux/modules/types';
import { Link } from 'react-router-dom';
import { getIcon } from '../common/Icons';

type WeatherBoxProps = {
  weatherDatas: TWeather[];
  mode: boolean;
  selectCity: (cityId: number) => void;
  deleteWeather: (id: number) => void;
};

function WeatherBox({
  weatherDatas,
  mode,
  selectCity,
  deleteWeather,
}: WeatherBoxProps) {
  const deleteCity = (id: number) => {
    deleteWeather(id);
  };

  const openWeatherForecast = (cityId: number) => {
    selectCity(cityId);
  };

  return (
    <>
      {weatherDatas.map((weatherData) => (
        <S.WeatherLi
          key={weatherData.id}
          onClick={() => openWeatherForecast(weatherData.id)}
          mode={mode}
        >
          <S.NowMainInfoWrap>
            <S.NowTempText>{Math.round(weatherData.main.temp)}°</S.NowTempText>
            <S.NowMainWeatherText>
              {weatherData.weather[0].main}
            </S.NowMainWeatherText>
          </S.NowMainInfoWrap>
          <S.InfoWrap>
            <S.SelectedCity>
              {weatherData.name}
              <S.WeatherIcon
                className={`${getIcon(weatherData.weather[0].main)} fa-xs`}
              />
            </S.SelectedCity>
            <S.MaxMinTempWrap>
              <S.MaxMinTempText>
                H {Math.round(weatherData.main.temp_max)}°
              </S.MaxMinTempText>
              <S.MaxMinTempText>
                L {Math.round(weatherData.main.temp_min)}°
              </S.MaxMinTempText>
            </S.MaxMinTempWrap>
          </S.InfoWrap>
          <Link to="/weather/forecast">
            <S.ViewMore>View More</S.ViewMore>
          </Link>
          <S.DeleteButton onClick={() => deleteCity(weatherData.id)}>
            <i className="fas fa-times" />
          </S.DeleteButton>
        </S.WeatherLi>
      ))}
    </>
  );
}

export default WeatherBox;
