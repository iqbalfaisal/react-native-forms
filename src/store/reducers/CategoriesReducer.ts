import {
  ADD_CATEGORY,
  CategoriesActionTypes,
  ICategory,
  REMOVE_CATEGORY,
  UPDATE_CATEGORY,
} from '../types';

interface CategoriesState {
  data: ICategory[];
}

const INITIAL_STATE: CategoriesState = {
  data: [],
};

export default function CategoriesReducer(
  state: CategoriesState = INITIAL_STATE,
  action: CategoriesActionTypes,
): CategoriesState {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        data: state.data.concat(action.category),

        // data: [...state.data, action.category],
      };

    case UPDATE_CATEGORY:
      return {
        ...state,
        data: state.data.map(item => {
          if (item.id === action.category.id) {
            return action.category;
          }
          return item;
        }),
      };

    case REMOVE_CATEGORY:
      return {
        ...state,
        data: state.data.filter(item => item.id !== action.id),
      };

    default:
      return state;
  }
}
