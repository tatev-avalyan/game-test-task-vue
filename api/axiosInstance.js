import axios from "axios";
import headers from "./ApiHeaders";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 30000,
});

instance.interceptors.request.use((config) => {
  config.headers = headers();
  return config;
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.message === "Unauthorized") {
      this.$store.commit("USER_LOGOUT");
      this.$router.push("/login");
    }
    throw error;
  }
);
export default instance;
