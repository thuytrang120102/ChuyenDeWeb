import axios from "axios";

const AxiosClient = axios.create({
  baseURL:
    "https://cinestar.com.vn/_next/data/k5FG7BO4DqMDEfCOuIX5o/index.json",
  headers: {
    "Content-Type": "application/json",
  },
});
export default AxiosClient;
