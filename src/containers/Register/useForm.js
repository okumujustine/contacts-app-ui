import * as React from "react";
import { register } from "../../context/actions/auth/register";
import { GlobalContext } from "../../context/Provider";
import { useHistory } from "react-router-dom";

const useForm = () => {
  const [form, setForm] = React.useState({});
  const [fieldErrors, setFieldErrors] = React.useState({});

  const history = useHistory();

  const {
    authDispatch,
    authState: {
      auth: { loading, data, error },
    },
  } = React.useContext(GlobalContext);

  React.useEffect(() => {
    if (error) {
      for (const item in error) {
        setFieldErrors({ ...fieldErrors, [item]: error[item][0] });
      }
    }
  }, [error]);

  React.useEffect(() => {
    if (data) {
      history.push("/auth/login");
    }
  }, [data]);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const registerValidForm =
    !form.username?.length ||
    !form.firstName?.length ||
    !form.lastName?.length ||
    !form.email?.length;

  const onSubmit = () => {
    setFieldErrors({});
    register(form)(authDispatch);
  };
  return { form, onChange, loading, fieldErrors, registerValidForm, onSubmit };
};

export default useForm;
