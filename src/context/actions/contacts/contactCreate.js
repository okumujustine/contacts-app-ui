import {
  ADD_CONTACT_LOADING,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_ERROR,
} from "../../../constants/actionTypes/types";
import axiosInstance from "../../../helpers/axiosInstance";
import { CONECTION_ERROR } from "../../../constants/api";

const contactCreate = ({
  firstName: first_name,
  lastName: last_name,
  phoneNumber: phone_number,
  countryCode: country_code,
}) => (dispatch) => {
  dispatch({
    type: ADD_CONTACT_LOADING,
  });
  axiosInstance()
    .post("/contacts/", { first_name, last_name, phone_number, country_code })
    .then((res) => {
      dispatch({
        type: ADD_CONTACT_SUCCESS,
        payload: res.data,
      });
      console.log(res);
    })
    .catch((error) => {
      dispatch({
        type: ADD_CONTACT_ERROR,
        payload: error.response ? error.response.data : CONECTION_ERROR,
      });
      console.log(error);
    });
};

export default contactCreate;
