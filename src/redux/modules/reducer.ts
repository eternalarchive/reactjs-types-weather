import { combineReducers } from 'redux';
import search from './search';
import view from './view';

const reducer: any = () =>
  combineReducers({
    search,
    view,
  });

export default reducer;

export type rootState = ReturnType<typeof reducer>;
