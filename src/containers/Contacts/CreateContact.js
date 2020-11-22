import * as React from "react";
import Create from "../../layout/contacts/Create";
import { GlobalContext } from "../../context/Provider";
import contactCreate from "../../context/actions/contacts/contactCreate";
import clearCreateContact from "../../context/actions/contacts/clearCreateContact";
import { useHistory } from "react-router-dom";

export default function CreateContactContainer() {
  const [form, setForm] = React.useState({});

  const history = useHistory();

  const {
    contactsDispatch,
    contactsState: {
      addContact: { loading, error, data },
    },
  } = React.useContext(GlobalContext);

  React.useEffect(() => {
    if (data) {
      history.push("/");
    }
    return () => {
      clearCreateContact()(contactsDispatch);
    };
  }, [data]);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };
  const formInValid =
    !form.firstName?.length ||
    !form.lastName?.length ||
    !form.countryCode?.length ||
    !form.phoneNumber?.length;

  const onSubmit = () => {
    contactCreate(form)(contactsDispatch);
  };

  return (
    <Create
      onChange={onChange}
      form={form}
      formInValid={formInValid}
      onSubmit={onSubmit}
      loading={loading}
    />
  );
}
