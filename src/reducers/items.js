import { ITEMS_ERROR, ITEMS_LOADED } from "../actions/types";

const INITIAL_STATE = {
  error: "",
  items: {},
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ITEMS_ERROR:
      return { ...state, error: action.payload, items: [] };
    case ITEMS_LOADED:
      return {
        ...state,
        error: "",
        items: { ...state.items, [action.category]: action.payload || [] },
      };
    default:
      return state;
  }
}
