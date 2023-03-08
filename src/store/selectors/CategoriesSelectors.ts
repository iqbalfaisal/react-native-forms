import {createSelector} from 'reselect';
import {find} from 'lodash';

import {IRootState} from '../reducers';

export const categoriesSelector = (state: IRootState) => state.Categories.data;

export const selectCategories = createSelector(
  [categoriesSelector],
  categories => categories,
);

export const selectCategory = createSelector(
  [selectCategories, (state, id) => id],
  (categories, id) => find(categories, {id}),
);
