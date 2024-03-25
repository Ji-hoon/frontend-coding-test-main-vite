import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.thecatapi.com/v1/images",
});
