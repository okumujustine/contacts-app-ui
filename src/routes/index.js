import RegisterContainer from "../containers/Register";
import LoginContainer from "../containers/Login";
import ContactsContainer from "../containers/Contacts";
import CreateContactContainer from "../containers/Contacts/CreateContact";

export const routes = [
  {
    path: "/auth/register",
    component: RegisterContainer,
    title: "register",
    needsAuth: false,
  },
  {
    path: "/auth/login",
    component: LoginContainer,
    title: "login",
    needsAuth: false,
  },
  {
    path: "/contact/create",
    component: CreateContactContainer,
    title: "loginc",
    needsAuth: true,
  },
  {
    path: "/",
    component: ContactsContainer,
    title: "contacts",
    needsAuth: true,
  },
];
