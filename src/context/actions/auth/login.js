import axiosInstance from "../../../helpers/axiosInstance";
import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "../../../constants/actionTypes/types";
import { CONECTION_ERROR } from "../../../constants/api";

export const login = ({ username, password }) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });

  axiosInstance()
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
        payload: error.response ? error.response.data : CONECTION_ERROR,
      });
    });
};
