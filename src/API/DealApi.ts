import axios from "axios";

export const DealApi = axios.create({
    baseURL: "http://localhost:5184/deal",
  });
  