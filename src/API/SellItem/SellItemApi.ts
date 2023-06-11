import axios from "axios";

export const SellItemApi = axios.create({
  baseURL: "http://localhost:5184/sellItem",
});

export const SellItemBaseAPi = axios.create({
  baseURL: "http://localhost:5184",
})
