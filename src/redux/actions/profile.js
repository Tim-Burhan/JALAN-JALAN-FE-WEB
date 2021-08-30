import { http } from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const getProfile = (token) => async (dispatch) => {
  try {
    const { data } = await http(token).get(`${URL}/profile/detailUserAndCard`);
    dispatch({
      type: "GET_PROFILE",
      payload: data.results,
    });
  } catch (err) {
    dispatch({
      type: "GET_PROFILE_FAILED",
      payload: err.response.data.message,
    });
  }
};

export const editProfile = (data, token) => {
  return async (dispatch) => {
    const form = new FormData()
    for (let i in data) {
        if (data[i] !== "") {
          form.append(i, data[i]);
        }
      }
      const {data : userData} = await http(token).put(`${URL}/profile/editprofile`, form)
      dispatch({
        type: 'UPDATE_PROFILE',
        payload: {
          user: userData.results,
          message: userData.Message
        }
      })
  }
}