import React, { useEffect } from 'react';

interface WeatherListProps {
  weatherDatas: [];
  getWeatherDatas: () => void;
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
