import { authService } from "../../api/services";
import store from "@/store";

export const refreshToken = async () => {
  try {
    const refreshToken = store.state.refreshToken;
    const response = await authService.refreshToken(refreshToken);
    const newAccessToken = response.data[0].attributes.token;
    store.commit("USER_LOGIN", newAccessToken);
  } catch (error) {
    store.commit("SET_ERROR", error);
  }
};
