import axios from "axios";

const url =
  process.env.NODE_ENV === "development"
    ? "http://192.168.0.100:3333"
    : "https://backend-sysc4d.herokuapp.com";
const api = axios.create({
  baseURL: url,
});

export default api;
