import {
  REMOVE_MODAL,
  ADD_MODAL,
  UPDATE_MODAL,
  ModalsActionTypes,
  IModal,
  REMOVE_MODALS,
} from '../types';

interface CategoryState {
  data: IModal;
}

const INITIAL_STATE: CategoryState = {
  data: {},
};

export default function ModalsReducer(
  state: CategoryState = INITIAL_STATE,
  action: ModalsActionTypes,
): CategoryState {
  switch (action.type) {
    case ADD_MODAL:
      let new_data =
        Object.keys(state.data).length !== 0
          ? {
              ...state?.data,
              [action.modal.category_id]: state.data?.[
                action.modal.category_id
              ]?.concat(action.modal),
            }
          : Object.assign({}, state?.data, {
              [action.modal.category_id]: [action.modal],
            });

      return {
        ...state,
        data: new_data,
      };

    case UPDATE_MODAL:
      const category_id = action.modal.category_id;

      return {
        ...state,
        data: {
          ...state.data,
          [category_id]: state.data[category_id]?.map(item => {
            if (item.id === action.modal.id) {
              return action.modal;
            }
            return item;
          }),
        },
      };

    case REMOVE_MODALS:
      const temp = state.data;
      delete temp[action.category_id];

      return {
        ...state,
        data: temp,
      };

    case REMOVE_MODAL:
      const selectItem = state.data[action.category_id];
      return {
        ...state,
        data: {
          ...state.data,
          [action.category_id]: selectItem?.filter(
            item => item.id !== action.id,
          ),
        },
      };

    default:
      return state;
  }
}
