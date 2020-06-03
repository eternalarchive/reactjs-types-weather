import { combineReducers } from 'redux';
import search from './search';

const reducer: any = () =>
  combineReducers({
    search,
  });

export default reducer;

export type rootState = ReturnType<typeof reducer>;