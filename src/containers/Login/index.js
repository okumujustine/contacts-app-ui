import * as React from "react";
import useForm from "./useForm";
import LoginUI from "../../layout/Login";

export default function LoginContainer() {
  return (
    <div>
      <LoginUI form={useForm()} />
    </div>
  );
}
