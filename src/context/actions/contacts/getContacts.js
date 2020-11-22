import axiosInstance from "../../../helpers/axiosInstance";
import {
  CONTACTS_LOADING_SUCCESS,
  CONTACTS_LOADING,
} from "../../../constants/actionTypes/types";
import { CONECTION_ERROR } from "../../../constants/api";

const getContacts = (history) => (dispatch) => {
  dispatch({
    type: CONTACTS_LOADING,
  });
  axiosInstance(history)
    .get("/contacts/")
    .then((res) => {
      dispatch({
        type: CONTACTS_LOADING_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: CONECTION_ERROR,
        payload: error.response ? error.response.data : CONECTION_ERROR,
      });
    });
};

export default getContacts;
