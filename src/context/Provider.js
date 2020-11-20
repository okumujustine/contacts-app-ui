import * as React from "react";
import auth from "./reducers/auth";
import { authInitialState } from "./initialStates/authInitialState";
import contacts from "./reducers/contacts";
import { contactsInitialState } from "./initialStates/contactsInitialState";

export const GlobalContext = React.createContext({});

export const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = React.useReducer(auth, authInitialState);
  const [contactsState, contactsDispatch] = React.useReducer(
    contacts,
    contactsInitialState
  );

  return (
    <GlobalContext.Provider
      value={{
        authState,
        authDispatch,
        contactsState,
        contactsDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
