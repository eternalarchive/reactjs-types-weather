import { put, call, select, takeLatest } from 'redux-saga/effects';
import { createAction, createReducer, createAsyncAction, ActionType } from 'typesafe-actions';
import SearchService from '../../services/SearchService';
import { AxiosError } from 'axios';
import { TWeather } from './types';

const prefix: string = 'reactjs-types-weather/search/';

const pending = `${prefix}PENDING`;
const success = `${prefix}SUCCESS`;
const fail = `${prefix}FAIL`;

const getWeatherAction = createAsyncAction(pending, success, fail)<string, any, AxiosError>();
type SearchAction = ActionType<typeof getWeatherAction>;

export const getWeatherSaga = createAction('GET_WEATHER_SAGA')<string>();

function* loadWeatherSaga({ payload }: ReturnType<typeof getWeatherSaga>) {
  const weatherDatas = yield select(state => state.search.weatherDatas);

  try {
    yield put(getWeatherAction.request(''));
    const res = yield call(SearchService.getWeatherDatas, payload);
    if (weatherDatas.map((weatherData: { id: number; }) => weatherData.id === res.data.id).includes(true)) return alert('중복 도시가 존재합니다.');
    yield put(getWeatherAction.success([...weatherDatas, res.data]));
  } catch (error) {
    console.log(error);
    alert('잘못된 도시정보입니다.');
    yield put(getWeatherAction.failure(error));
  }
}

// export const deleteWeatherSaga = createAction('DELETE_WEATHER_SAGA')<string>();

// function* clearWeatherSaga({ payload }: ReturnType<typeof deleteWeatherSaga>) {
//   const weatherDatas = yield select(state => state.search.weatherDatas);
//   const completedDatas = [...weatherDatas.filter((weatherData: { id: number }) => weatherData.id !== payload.id)];
//   try {
//     yield put(getWeatherAction.request(''));
//     const res = yield call(SearchService.getWeatherDatas, payload);
//     yield put(getWeatherAction.success(completedDatas));
//   } catch (error) {
//     console.log(error);
//     yield put(getWeatherAction.failure(error));
//   }
// }

export function* searchSaga() {
  yield takeLatest('GET_WEATHER_SAGA', loadWeatherSaga);
  // yield takeLatest('DELETE_WEATHER_SAGA', clearWeatherSaga);
}

interface TinitialState {
  weatherDatas: [];
  loading: boolean;
  error: null | {};
}
// initialState
const initialState: TinitialState = {
  weatherDatas: [],
  loading: false,
  error: null,
};

// reducer
const search = createReducer<TinitialState, SearchAction>(initialState, {
  [pending]: (state) => ({
    ...state,
    weatherDatas: state.weatherDatas ? state.weatherDatas : [],
    loading: true,
    error: null,
  }),
  [success]: (state, action) => ({
    ...state,
    weatherDatas: action.payload,
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