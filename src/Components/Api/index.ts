import axios from "axios";
import { API_BASE_URL } from "../Config";
import { requestInterceptor, responseInterceptor } from "./interceptors";
import { removeLocalStorageItem } from "../Services/localStorage";

const apiInstance = axios.create({
  baseURL: API_BASE_URL,
});
apiInstance.interceptors.request.use(requestInterceptor);
apiInstance.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => {
    const accessToken = localStorage.getItem("AUTH_TOKEN");
    if (error.response.status === 401 && accessToken) {
      removeLocalStorageItem("AUTH_TOKEN");
      window.location.replace("/");
    } else {
      console.error(error);
    }
    return Promise.reject(error);
  }
);
export default apiInstance;
