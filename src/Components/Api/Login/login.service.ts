/* eslint-disable class-methods-use-this */
/* eslint-disable no-return-await */
import apiInstance from "..";

class Login_api {
  handleLogin = async (payload: any) => {
    return await apiInstance.post<any>(`/login`, payload);
  };
}

export default new Login_api();
