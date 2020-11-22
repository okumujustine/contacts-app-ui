import * as React from "react";
import { login } from "../../context/actions/auth/login";
import { GlobalContext } from "../../context/Provider";
import { useHistory } from "react-router-dom";

const useForm = () => {
  const [form, setForm] = React.useState({});

  const history = useHistory();

  const {
    authDispatch,
    authState: {
      auth: { loading, error, data },
    },
  } = React.useContext(GlobalContext);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const loginValidForm = !form.username?.length || !form.password?.length;

  const onSubmit = () => {
    login(form)(authDispatch);
  };

  console.log("data", data);
  React.useEffect(() => {
    if (data && data.user) {
      history.push("/");
    }
  }, [data]);
  return { form, onChange, loading, loginValidForm, error, onSubmit };
};

export default useForm;
