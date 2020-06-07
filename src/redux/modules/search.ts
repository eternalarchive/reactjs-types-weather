import { put, call, select, takeLatest } from 'redux-saga/effects';
import { createAction, createReducer, createAsyncAction, ActionType } from 'typesafe-actions';
import SearchService from '../../services/SearchService';
import { AxiosError } from 'axios';
import { TWeather, Tforecast } from './types';

const prefix: string = 'reactjs-types-weather/search/';

const pending = `${prefix}PENDING`;
const success = `${prefix}SUCCESS`;
const fail = `${prefix}FAIL`;

type TSearchSuccess = {
  weatherDatas: TWeather[],
  forecastDatas: Tforecast[],
};

const getWeatherAction = createAsyncAction(pending, success, fail)<string, TSearchSuccess, AxiosError>();
type SearchAction = ActionType<typeof getWeatherAction>;

export const getWeatherSaga = createAction('GET_WEATHER_SAGA')<string>();

function* loadWeatherSaga({ payload }: ReturnType<typeof getWeatherSaga>) {
  const weatherDatas = yield select(state => state.search.weatherDatas);
  const forecastDatas = yield select(state => state.search.forecastDatas);
  try {
    yield put(getWeatherAction.request(''));
    const oneRes = yield call(SearchService.getWeatherDatas, payload);
    if (weatherDatas.map((weatherData: { id: number; }) => weatherData.id === oneRes.data.id).includes(true)) return alert('중복 도시가 존재합니다.');
    const forecastRes = yield call(SearchService.getForecastDatas, payload);
    yield put(getWeatherAction.success({
      weatherDatas: [...weatherDatas, oneRes.data],
      forecastDatas: [...forecastDatas, forecastRes.data]
    }));
  } catch (error) {
    console.log(error);
    yield put(getWeatherAction.failure(error));
    alert('잘못된 도시정보입니다.');
  }
}

export const deleteWeatherSaga = createAction('DELETE_WEATHER_SAGA')<number>();

function* clearWeatherSaga({ payload }: ReturnType<typeof deleteWeatherSaga>) {
  const weatherDatas = yield select(state => state.search.weatherDatas);
  const forecastDatas = yield select(state => state.search.forecastDatas);
  console.log(weatherDatas);
  console.log(forecastDatas);
  const completedWDatas = [...weatherDatas.filter((weatherData: { id: number }) => weatherData.id !== payload)];
  const completedFDatas = [...forecastDatas.filter((forecastData: { city: { id: number; }; }) => forecastData.city.id !== payload)];
  try {
    yield put(getWeatherAction.request(''));
    yield put(getWeatherAction.success({
      weatherDatas: completedWDatas.length === 0 ? [] : completedWDatas,
      forecastDatas: completedFDatas.length === 0 ? [] : completedFDatas,
    }));
  } catch (error) {
    console.log(error);
    yield put(getWeatherAction.failure(error));
  }
}

export function* searchSaga() {
  yield takeLatest('GET_WEATHER_SAGA', loadWeatherSaga);
  yield takeLatest('DELETE_WEATHER_SAGA', clearWeatherSaga);
}

type TinitialState = {
  weatherDatas: TWeather[];
  forecastDatas: Tforecast[];
  loading: boolean;
  error: null | {};
}

// initialState
const initialState: TinitialState = {
  weatherDatas: [],
  forecastDatas: [],
  loading: false,
  error: null,
};

// reducer
const search = createReducer<TinitialState, SearchAction>(initialState, {
  [pending]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [success]: (state, action) => ({
    ...state,
    ...action.payload as TSearchSuccess,
    loading: false,
    error: null,
  }),
  [fail]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
});

export default search;