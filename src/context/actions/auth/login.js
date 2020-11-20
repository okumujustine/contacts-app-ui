import axiosInstance from "../../../helpers/axios";
import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "../../../constants/actionTypes/types";

export const login = ({ username, password }) => (dispatch) => {
  console.log("login", { username, password });
  dispatch({ type: LOGIN_LOADING });
  axiosInstance
    .post("/auth/login/", {
      username,
      password,
    })
    .then((res) => {
      localStorage.token = res.data.token;
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response
          ? error.response.data
          : "Server error try again later!",
      });
    });
};
