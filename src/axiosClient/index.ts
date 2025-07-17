import axios from "axios";

import { APP_CONFIG } from "../config";

import { errorHandler, requestHandler, responseHandler } from "./handlers";

export const axiosClient = axios.create({
  baseURL: APP_CONFIG.API_BASE_URL
});

axiosClient.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

axiosClient.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);
