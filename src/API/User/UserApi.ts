import axios from "axios";

export const UserClient = axios.create({
  baseURL: "http://localhost:5257/api/user",
});
