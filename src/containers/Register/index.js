import * as React from "react";
import RegisterUI from "../../layout/Register";
import useForm from "./useForm";

export default function RegisterContainer() {
  return (
    <div>
      <RegisterUI form={useForm()} />
    </div>
  );
}
