import React, { useEffect } from 'react';
import * as S from './WeatherListStyle';

type WeatherListProps = {
  weatherDatas: [];
  getWeatherDatas: (cityName: string) => void;
  loading: boolean;
  error: null | {};
}

function WeatherList({
  weatherDatas,
  getWeatherDatas,
  loading,
  error,
}: WeatherListProps) {

  useEffect(() => {
    console.log(weatherDatas);
  }, [weatherDatas]);

  return (
    <div>
    </div>
  );
};

export default WeatherList;
