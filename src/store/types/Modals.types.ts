export interface IModalObject {
  id: number;
  category_id: number;
  values: [];
}

export interface IModal {
  [x: number]: IModalObject[];
}

export const ADD_MODAL = 'ADD_MODAL';
export const REMOVE_MODAL = 'REMOVE_MODAL';
export const REMOVE_MODALS = 'REMOVE_MODALS';
export const UPDATE_MODAL = 'UPDATE_MODAL';

interface SetModalAction {
  type: typeof ADD_MODAL;
  modal: IModalObject;
}

interface UpdateModalAction {
  type: typeof UPDATE_MODAL;
  modal: IModalObject;
}

interface RemoveModalAction {
  type: typeof REMOVE_MODAL;
  id: number;
  category_id: number;
}

interface RemoveModalsAction {
  type: typeof REMOVE_MODALS;
  category_id: number;
}

export type ModalsActionTypes =
  | SetModalAction
  | RemoveModalAction
  | RemoveModalsAction
  | UpdateModalAction;
