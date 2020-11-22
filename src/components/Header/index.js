import React from "react";
import { Menu, Image, Button, Icon } from "semantic-ui-react";
import { Link, useLocation, useHistory } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import logout from "../../context/actions/auth/logout";
import { GlobalContext } from "../../context/Provider";
import isAuthenticated from "../../utils/isAuthenticated";

export default function Header() {
  const { pathname } = useLocation();
  const { contactsDispatch: dispatch } = React.useContext(GlobalContext);
  const history = useHistory();

  const handleUserLogOut = () => {
    logout(history)(dispatch);
  };

  return (
    <Menu>
      <Image src={logo} width={60} />
      <Menu.Item as={Link} to="/">
        ContactsMGT
      </Menu.Item>
      {isAuthenticated() && (
        <React.Fragment>
          <Menu.Item position="right">
            <Button as={Link} to="/contact/create" primary basic icon>
              <Icon name="add"></Icon>
              Create Contact
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button
              onClick={handleUserLogOut}
              position="right"
              color="red"
              basic
              icon
            >
              <Icon name="log out"></Icon>
              Logout
            </Button>
          </Menu.Item>
        </React.Fragment>
      )}
    </Menu>
  );
}
