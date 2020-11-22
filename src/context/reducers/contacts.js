import {
  CONTACTS_LOADING,
  CONTACTS_LOADING_SUCCESS,
  LOGOUT_USER,
  ADD_CONTACT_LOADING,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_ERROR,
  CLEAR_ADD_CONTACT,
} from "../../constants/actionTypes/types";
import { CONECTION_ERROR } from "../../constants/api";
import { contactsInitialState } from "../initialStates/contactsInitialState";

const contacts = (state, { payload, type }) => {
  switch (type) {
    case CONTACTS_LOADING:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: true,
        },
      };
    case CONTACTS_LOADING_SUCCESS:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          data: payload,
        },
      };
    case CONECTION_ERROR:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          error: payload,
        },
      };
    case LOGOUT_USER:
      return {
        ...state,
        contactsInitialState,
      };
    case ADD_CONTACT_LOADING:
      return {
        ...state,
        addContact: {
          ...state.addContact,
          error: null,
          loading: true,
        },
      };

    case ADD_CONTACT_SUCCESS:
      return {
        ...state,
        addContact: {
          ...state.addContact,
          loading: false,
          data: payload,
        },
        contacts: {
          ...state.contacts,
          loading: false,
          data: [payload, ...state.contacts.data],
        },
      };
    case ADD_CONTACT_ERROR:
      return {
        ...state,
        addContact: {
          ...state.addContact,
          loading: false,
        },
      };
    case CLEAR_ADD_CONTACT:
      return {
        ...state,
        addContact: {
          ...state.addContact,
          error: null,
          data: null,
          loading: false,
        },
      };
    default:
      return state;
  }
};

export default contacts;
