import { put, select, takeLatest } from 'redux-saga/effects';
import {
  createAction,
  createReducer,
  createAsyncAction,
  ActionType,
} from 'typesafe-actions';
import { AxiosError } from 'axios';
import { Tforecast, TWeather } from './types';

const prefix: string = 'reactjs-types-weather/view/';

const pending = `${prefix}PENDING`;
const success = `${prefix}SUCCESS`;
const fail = `${prefix}FAIL`;

type TViewSuccess = {
  mode?: boolean;
  selectedNow?: TWeather[];
  selectedDatas?: Tforecast[];
};

const getViewAction = createAsyncAction(pending, success, fail)<
  string,
  TViewSuccess,
  AxiosError
>();
type ViewAction = ActionType<typeof getViewAction>;

export const getSelectedCitySaga = createAction('GET_CITY_ID_SAGA')<number>();

function* getCityIdSaga({ payload }: ReturnType<typeof getSelectedCitySaga>) {
  const weatherDatas = yield select((state) => state.search.weatherDatas);
  const forecastDatas = yield select((state) => state.search.forecastDatas);
  const pickNowDatas = weatherDatas.filter(
    (weatherData: { id: number }) => weatherData.id === payload,
  );
  const pickForecastDatas = forecastDatas.filter(
    (forecastData: { city: { id: number } }) =>
      forecastData.city.id === payload,
  );
  try {
    yield put(getViewAction.request(''));
    yield put(
      getViewAction.success({
        selectedNow: pickNowDatas,
        selectedDatas: pickForecastDatas,
      }),
    );
  } catch (error) {
    console.log(error);
    yield put(getViewAction.failure(error));
  }
}

export const SelectModeSaga = createAction('CHANGE_MODE_SAGA')<boolean>();

function* changeModeSaga({ payload }: ReturnType<typeof SelectModeSaga>) {
  try {
    yield put(getViewAction.request(''));
    yield put(
      getViewAction.success({
        mode: payload,
      }),
    );
  } catch (error) {
    console.log(error);
    yield put(getViewAction.failure(error));
  }
}

export function* viewSaga() {
  yield takeLatest('GET_CITY_ID_SAGA', getCityIdSaga);
  yield takeLatest('CHANGE_MODE_SAGA', changeModeSaga);
}

type TinitialState = {
  mode: boolean;
  selectedNow: TWeather[];
  selectedDatas: Tforecast[];
  loading: boolean;
  error: null | {};
};

// initialState
const initialState: TinitialState = {
  mode: true,
  selectedNow: [],
  selectedDatas: [],
  loading: false,
  error: null,
};

// reducer
const view = createReducer<TinitialState, ViewAction>(initialState, {
  [pending]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [success]: (state, action) => ({
    ...state,
    ...(action.payload as TViewSuccess),
    loading: false,
    error: null,
  }),
  [fail]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
});

export default view;
