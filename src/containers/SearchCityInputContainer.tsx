import React, { useCallback } from 'react';
import SearchCityInput from '../components/common/SearchCityInput';
import { useDispatch } from 'react-redux';
import { getWeatherSaga } from '../redux/modules/search';

function SearchCityInputContainer() {
  const dispatch = useDispatch();

  const getWeather = useCallback(
    (cityName: string) => {
      dispatch(getWeatherSaga(cityName));
    },
    [dispatch],
  );

  return <SearchCityInput getWeather={getWeather} />;
}

export default SearchCityInputContainer;
