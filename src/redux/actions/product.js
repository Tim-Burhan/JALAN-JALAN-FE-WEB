import { http } from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const getAllProduct = (token, url) => {
  if (!url) {
    return async (dispatch) => {
      const { data } = await http(token).get(`${URL}/products`);
      dispatch({
        type: "GET_ALL_PRODUCT",
        payload: { items: data.results, pagination: data.pageInfo },
      });
    };
  }
  return async (dispatch) => {
    const { data } = await http(token).get(url);
    dispatch({
      type: "GET_ALL_PRODUCT",
      payload: { items: data.results, pagination: data.pageInfo },
    });
  };
};
