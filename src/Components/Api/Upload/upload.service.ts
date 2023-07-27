/* eslint-disable class-methods-use-this */
/* eslint-disable no-return-await */
import apiInstance from "..";

class uploadApi {
  handleRegister = async (payload: any) => {
    return await apiInstance.post<any>(`/uploadImage`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };
}

export default new uploadApi();
