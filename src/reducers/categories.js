import { CATEGORIES_ERROR, CATEGORIES_LOADED } from "../actions/types";

const INITIAL_STATE = {
  error: "",
  categories: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CATEGORIES_ERROR:
      return { ...state, error: action.payload, categories: [] };
    case CATEGORIES_LOADED:
      return { ...state, error: "", categories: action.payload || [] };
    default:
      return state;
  }
}
