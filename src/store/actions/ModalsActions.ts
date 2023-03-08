import {Dispatch} from 'redux';
import {IRootState} from '../reducers';

import {
  ModalsActionTypes,
  ADD_MODAL,
  REMOVE_MODAL,
  UPDATE_MODAL,
  IModalObject,
  REMOVE_MODALS,
} from '../types';

export const setNewModal = (category_id: number) => {
  return async function (
    dispatch: Dispatch<ModalsActionTypes>,
    getState: () => IRootState,
  ) {
    const {
      Modals: {data},
    } = getState();

    dispatch({
      type: ADD_MODAL,
      modal: {
        id: data?.[category_id]?.length ?? 0,
        category_id,
        values: [],
      },
    });
  };
};

export const updateModal = (modal: IModalObject) => {
  return async function (dispatch: Dispatch<ModalsActionTypes>) {
    dispatch({
      type: UPDATE_MODAL,
      modal,
    });
  };
};

export const removeModal = (category_id: number, id: number) => {
  return async function (dispatch: Dispatch<ModalsActionTypes>) {
    dispatch({
      type: REMOVE_MODAL,
      id,
      category_id,
    });
  };
};

export const removeModals = (category_id: number) => {
  return async function (dispatch: Dispatch<ModalsActionTypes>) {
    dispatch({
      type: REMOVE_MODALS,
      category_id,
    });
  };
};
