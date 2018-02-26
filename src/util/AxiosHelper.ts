import axios, { AxiosInstance } from "axios";
import { Config } from "./ConstantManager";

export const AxiosHelper  = {
  getInstance: function(): AxiosInstance {
    return axios.create({
      baseURL: Config.API_URL,
      headers: {
        Authorization: 'JWT 1234567890'
      }
    });
  }
}
