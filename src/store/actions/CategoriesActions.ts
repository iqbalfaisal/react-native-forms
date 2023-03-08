import {Dispatch} from 'redux';
import {IRootState} from '../reducers';

import {
  CategoriesActionTypes,
  ICategory,
  REMOVE_CATEGORY,
  ADD_CATEGORY,
  UPDATE_CATEGORY,
} from '../types';

export const setNewCategory = () => {
  return async function (
    dispatch: Dispatch<CategoriesActionTypes>,
    getState: () => IRootState,
  ) {
    const {
      Categories: {data},
    } = getState();

    dispatch({
      type: ADD_CATEGORY,
      category: {
        id: data.length,
        name: '',
        fields: [],
        property: null,
      },
    });
  };
};

export const updateCategory = (category: ICategory) => {
  return async function (dispatch: Dispatch<CategoriesActionTypes>) {
    dispatch({
      type: UPDATE_CATEGORY,
      category,
    });
  };
};

export const removeCategory = (id: number) => {
  return async function (dispatch: Dispatch<CategoriesActionTypes>) {
    dispatch({
      type: REMOVE_CATEGORY,
      id,
    });
  };
};
