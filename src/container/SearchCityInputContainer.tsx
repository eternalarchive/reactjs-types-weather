import React, { useCallback } from 'react';
import SearchCityInput from '../components/common/SearchCityInput';
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../redux/modules/reducer';
import { getWeatherSaga } from '../redux/modules/search';

function SearchCityInputContainer(props: any) {
  const loading: boolean = useSelector((state: rootState) => state.search.loading);
  const error: null | {} = useSelector((state: rootState) => state.search.error);
  const dispatch = useDispatch();

  const getWeather = useCallback((cityName: string) => {
    dispatch(getWeatherSaga(cityName));
  }, [dispatch])

  return (
    <SearchCityInput
      getWeather={getWeather}
      loading={loading}
      error={error}
    />
  );
};

export default SearchCityInputContainer;
