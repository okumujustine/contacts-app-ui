import { LOGOUT_USER } from "../../../constants/actionTypes/types";

const logout = (history) => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT_USER,
  });

  history.push("/auth/login");
};

export default logout;
