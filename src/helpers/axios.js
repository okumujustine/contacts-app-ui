import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL;
let headers = {};

const authToken = localStorage.getItem("x-token-contacts-c0ntact5");

if (authToken) {
  headers.Authorization = `Bearer ${authToken}`;
}

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers,
});

export default axiosInstance;
