import * as React from "react";
import Header from "../../components/Header";
import { GlobalContext } from "../../context/Provider";

export default function ContactsContainer() {
  const context = React.useContext(GlobalContext);

  console.log(context);

  return (
    <React.Fragment>
      <Header />
      <p>dd</p>
    </React.Fragment>
  );
}
