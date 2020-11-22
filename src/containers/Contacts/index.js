import * as React from "react";
import Header from "../../components/Header";
import { GlobalContext } from "../../context/Provider";
import getContacts from "../../context/actions/contacts/getContacts";
import { useHistory } from "react-router-dom";
import ContactsListUI from "../../layout/contacts/ContactsListUI";

export default function ContactsContainer() {
  const { contactsDispatch, contactsState } = React.useContext(GlobalContext);

  const history = useHistory();

  React.useEffect(() => {
    getContacts(history)(contactsDispatch);
  }, []);

  return <ContactsListUI contacts={contactsState} />;
}
