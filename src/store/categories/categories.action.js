import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { createAction } from "../../utils/firebase/reducer.utils";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const categoryArray = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoryArray));
  } catch (err) {
    dispatch(fetchCategoriesFailed(err));
  }
};
