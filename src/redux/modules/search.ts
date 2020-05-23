import { put, call, select, takeLatest } from 'redux-saga/effects';
// import { createAction, createReducer } from 'typesafe-actions';
import { createAction, createActions, handleActions } from 'redux-actions';
import SearchService from '../../services/SearchService';

const options = {
  prefix: 'blueweather/search',
  namespace: '/',
};

const { success, pending, fail } = createActions(
  {
    SUCCESS: search => ({ search }),
  },
  'PENDING',
  'FAIL',
  options,
);

export const getWeatherSaga = createAction('GET_WEATHER_SAGA');

function* loadWeatherSaga({ payload }: any) {
  const weatherDatas = yield select(state => state.search.weatherDatas);
  try {
    yield put(pending());
    const res = yield call(SearchService.getWeatherDatas, payload)
    yield put(success([...weatherDatas, res.data]));
  } catch (error) {
    console.log(error);
    yield put(fail(error));
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
const search = handleActions(
  {
    [PENDING]: (state, action) => ({
      weatherDatas: state.weatherDatas ? state.weatherDatas : [],
      loading: true,
      error: null,
    }),
    [SUCCESS]: (state, action) => ({
      weatherDatas: action.payload.weatherDatas,
      loading: false,
      error: null,
    }),
    [FAIL]: (state, action) => ({
      weatherDatas: [],
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  options,
);

export default search;