import { useReducer } from "react";
import { createContext, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES_MAP: "SET_CATEGORIES_MAP"
}

const INITIAL_STATE = {
  categoriesMap: {}
}

const categoriesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return {
        categoriesMap: {...payload}
      }      
  
    default:
      throw new Error(`unhandled type ${type} in categories reducer`)
  }
}

export const CategoriesProvider = ({ children }) => {
  // const [categoriesMap, setCategoriesMap] = useState({});

  const [{categoriesMap}, dispatch] = useReducer(categoriesReducer, INITIAL_STATE)

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      // setCategoriesMap(categoryMap);
      dispatch({type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, payload: categoryMap})
    };

    getCategoriesMap();
  }, []);
  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
