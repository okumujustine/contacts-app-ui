const { default: RegisterContainer } = require("../containers/Register");
const { default: LoginContainer } = require("../containers/Login");
const { default: ContactsContainer } = require("../containers/Contacts");
const {
  default: CreateContactContainer,
} = require("../containers/Contacts/CreateContact");

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
    path: "/",
    component: ContactsContainer,
    title: "contacts",
    needsAuth: true,
  },
  {
    path: "/contact/create",
    component: CreateContactContainer,
    title: "createcontact",
    needsAuth: true,
  },
];
