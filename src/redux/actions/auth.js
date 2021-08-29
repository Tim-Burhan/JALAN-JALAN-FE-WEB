import { http } from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const toggleAuth = () => {
  return {
    type: "AUTH_TOGGLE",
  };
};

export const openNavbar = () => {
  return {
    type: "AUTH_TOGGLE_FALSE",
  };
};

export const authLogin = (email, password) => {
  return async (dispatch) => {
    const form = new URLSearchParams();
    form.append("email", email);
    form.append("password", password);
    try {
      const { data } = await http().post(`${URL}/auth/login`, form.toString());
      dispatch({
        type: "AUTH_LOGIN",
        payload: {
          token: data.results.token,
          message: data.message 
        },
      });
    } catch (err) {
      console.log("ini eror kenapa", err);
      dispatch({
        type: "AUTH_LOGIN_FAILED",
        payload: err.response.data.message,
      });
    }
  };
};

export const authRegister = (name, email, password) => {
  return async (dispatch) => {
    const form = new URLSearchParams();
    form.append("name", name);
    form.append("email", email);
    form.append("password", password);
    try {
      const { data } = await http().post(
        `${URL}/auth/register`,
        form.toString()
      );
      dispatch({
        type: "AUTH_REGISTER",
        payload: data.message,
      });
    } catch (err) {
      dispatch({
        type: "AUTH_REGISTER_FAILED",
        payload: err.response.data.message,
      });
    }
  };
};

export const resetMessage = () => ({
  type: "RESET_MESSAGE",
});

export const authLogOut = () => ({
  type: "AUTH_LOGOUT",
});
