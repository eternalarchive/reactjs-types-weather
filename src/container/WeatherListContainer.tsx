// import React, { useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import WeatherList from '../components/WeatherList';
// import { getWeatherSaga } from '../redux/modules/search';

// const WeatherListContainer = props => {
//   const weatherDatas = useSelector(state => state.search.weatherDatas);
//   const loading = useSelector(state => state.search.loading);
//   const error = useSelector(state => state.search.error);
//   const dispatch = useDispatch();

//   const getWeatherDatas = useCallback((cityName) => {
//     dispatch(getWeatherSaga({ cityName }));
//   }, [dispatch]);

//   return (
//     <WeatherList
//       weatherDatas={weatherDatas}
//       getWeatherDatas={getWeatherDatas}
//       loading={loading}
//       error={error}
//     />
//   );
// };

// export default WeatherListContainer;