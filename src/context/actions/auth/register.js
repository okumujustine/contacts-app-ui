import axiosInstance from "../../../helpers/axios";
import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "../../../constants/actionTypes/types";

export const register = ({
  username,
  firstName: first_name,
  lastName: last_name,
  email,
  password,
}) => (dispatch) => {
  dispatch({ type: REGISTER_LOADING });
  axiosInstance
    .post("/auth/register/", {
      username,
      first_name,
      last_name,
      email,
      password,
    })
    .then((res) => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({
        type: REGISTER_ERROR,
        payload: error.response
          ? error.response.data
          : "Server error try again later!",
      });
    });
};
