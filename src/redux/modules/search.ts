import { put, call, select, takeLatest } from 'redux-saga/effects';
import { createAction, createReducer, createAsyncAction, ActionType } from 'typesafe-actions';
import SearchService from '../../services/SearchService';
import { AxiosError } from 'axios';

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
    yield put(getWeatherAction.success([...weatherDatas, res.data]));
  } catch (error) {
    console.log(error);
    yield put(getWeatherAction.failure(error));
  }
}

export function* searchSaga() {
  yield takeLatest('GET_WEATHER_SAGA', loadWeatherSaga);
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
    weatherDatas: action.payload.weatherDatas,
    loading: false,
    error: null,
  }),
  [fail]: (state, action) => ({
    ...state,
    weatherDatas: [],
    loading: false,
    error: action.payload,
  }),
});

export default search;