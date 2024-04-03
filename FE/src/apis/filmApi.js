import axiosClient from "./AxiosClient";

const filmApi = {
  getAll: (params) => {
    const url = "";
    return axiosClient.get(url, { params });
  },
  get() {
    const url = "";
    return axiosClient.get(url);
  },
};
export default filmApi;
