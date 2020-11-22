import { CLEAR_ADD_CONTACT } from "../../../constants/actionTypes/types";

const clearCreateContact = () => (dispatch) => {
  dispatch({
    type: CLEAR_ADD_CONTACT,
  });
};

export default clearCreateContact;
