import React from "react";
import { Menu, Image, Button, Icon } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/images/logo.svg";

export default function Header() {
  const { pathname } = useLocation();
  return (
    <Menu>
      <Image src={logo} width={60} />
      <Menu.Item as={Link} to="/">
        ContactsMGT
      </Menu.Item>
      {pathname === "/" && (
        <React.Fragment>
          <Menu.Item position="right">
            <Button as={Link} to="/contact/create" primary basic icon>
              <Icon name="add"></Icon>
              Create Contact
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button position="right" color="red" basic icon>
              <Icon name="log out"></Icon>
              Logout
            </Button>
          </Menu.Item>
        </React.Fragment>
      )}
    </Menu>
  );
}
