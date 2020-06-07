import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../redux/modules/reducer';
import { TWeather } from '../redux/modules/types';
import WeatherList from '../components/WeatherList';
import { getSelectedCitySaga } from '../redux/modules/view';
import { deleteWeatherSaga } from '../redux/modules/search';

function WeatherListContainer() {
  const WeatherDatas: TWeather[] = useSelector((state: rootState) => state.search.weatherDatas);
  const loading: boolean = useSelector((state: rootState) => state.search.loading);
  const error: null | {} = useSelector((state: rootState) => state.search.error);
  const mode: boolean = useSelector((state: rootState) => state.view.mode);
  const dispatch = useDispatch();

  const selectCity = useCallback((cityId: number) => {
    dispatch(getSelectedCitySaga(cityId));
  }, [dispatch])

  const deleteWeather = useCallback((id: number) => {
    dispatch(deleteWeatherSaga(id));
  }, [dispatch])

  return (
    <WeatherList
      weatherDatas={WeatherDatas}
      loading={loading}
      error={error}
      mode={mode}
      selectCity={selectCity}
      deleteWeather={deleteWeather}
    />
  );
};

export default WeatherListContainer;
