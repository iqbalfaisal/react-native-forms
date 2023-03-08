import {combineReducers} from 'redux';
import {ThunkDispatch} from 'redux-thunk';

import ModalsReducer from './ModalsReducer';
import {CategoriesActionTypes, ModalsActionTypes} from '../types';
import CategoriesReducer from './CategoriesReducer';

export const rootReducer = combineReducers({
  Categories: CategoriesReducer,
  Modals: ModalsReducer,
});

export default rootReducer;

export type IRootState = ReturnType<typeof rootReducer>;

export type TDispatch = ThunkDispatch<
  IRootState,
  {},
  CategoriesActionTypes | ModalsActionTypes
>;
