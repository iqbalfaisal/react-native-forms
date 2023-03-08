export type FieldTypes = 'number' | 'checkbox' | 'text' | 'date';

export interface IField {
  id: number;
  name: string;
  fieldType: FieldTypes;
}

export interface ICategory {
  id: number;
  name: string;
  property: IField | null;
  fields: IField[];
}

export const ADD_CATEGORY = 'ADD_CATEGORY';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';

interface SetCategoryAction {
  type: typeof ADD_CATEGORY;
  category: ICategory;
}

interface UpdateCategoryAction {
  type: typeof UPDATE_CATEGORY;
  category: ICategory;
}

interface RemoveCategoryAction {
  type: typeof REMOVE_CATEGORY;
  id: number;
}

export type CategoriesActionTypes =
  | SetCategoryAction
  | RemoveCategoryAction
  | UpdateCategoryAction;
