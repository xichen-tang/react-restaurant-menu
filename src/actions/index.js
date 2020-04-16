import axios from "axios";
import {
  CATEGORIES_LOADED,
  CATEGORIES_ERROR,
  ITEMS_LOADED,
  ITEMS_ERROR,
} from "./types";

const API_BASE_URL = "http://stream-restaurant-menu-svc.herokuapp.com";

export const fetchCategories = () => async (dispatch) => {
  try {
    let config = {
      headers: { "Access-Control-Allow-Origin": "*" },
    };
    const response = await axios.get(`${API_BASE_URL}/category`, config);
    dispatch({ type: CATEGORIES_LOADED, payload: response.data });
  } catch (e) {
    dispatch({
      type: CATEGORIES_ERROR,
      payload: "There was an error when loading categories.",
    });
  }
};

export const fetchItems = (category) => async (dispatch) => {
  try {
    let config = {
      headers: { "Access-Control-Allow-Origin": "*" },
    };
    const response = await axios.get(
      `${API_BASE_URL}/item/?category=${category}`,
      config
    );
    dispatch({
      type: ITEMS_LOADED,
      category: category,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: ITEMS_ERROR,
      payload: "There was an error when loading categories.",
    });
  }
};
