import {createSelector} from 'reselect';

import {IRootState} from '../reducers';

export const modalsSelector = (state: IRootState) => state.Modals.data;

export const selectModals = createSelector(
  [modalsSelector, (state, id) => id],
  (modals, id) => modals?.[id],
);
