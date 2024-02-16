import { createStore } from "vuex";
import { authService, gamesService } from "../../api/services";
import createPersistedState from "vuex-persistedstate";
import router from "@/router";

export default createStore({
  state() {
    return {
      accessToken: null,
      balance: 0,
      games: [],
      error: null,
      loading: false,
    };
  },
  mutations: {
    USER_LOGIN(state, accessToken) {
      state.accessToken = accessToken;
    },
    USER_LOGOUT(state) {
      state.accessToken = null;
    },
    SET_BALANCE(state, balance) {
      state.balance = balance;
    },
    SET_GAMES(state, games) {
      state.games = games;
    },
    SET_ERROR(state, error) {
      state.error = error;
      setTimeout(() => {
        state.error = null;
      }, 5000);
    },
    CLEAR_ERROR(state) {
      state.error = null;
    },
    SET_LOADING(state, status) {
      state.loading = status;
    },
  },
  actions: {
    async login({ commit }, data) {
      try {
        const res = await authService.login(data);
        commit("USER_LOGIN", res.data[0].attributes.token);
        commit("CLEAR_ERROR");
        router.push("/home");
      } catch (error) {
        commit(
          "SET_ERROR",
          "Login failed. Please check your credentials and try again."
        );
      }
    },
    async logOut({ commit }) {
      try {
        commit("USER_LOGOUT");
        router.push("/login");
      } catch {
        commit("SET_ERROR", "Something went wrong.");
      }
    },
    async fetchBalance({ commit, state }) {
      try {
        const balance = await authService.fetchBalance(state.accessToken);
        commit("SET_BALANCE", balance.data[0].attributes.available);
        commit("CLEAR_ERROR");
      } catch (error) {
        commit("SET_ERROR", error.message);
      }
    },
    async fetchGames({ commit }) {
      try {
        await commit("SET_LOADING", true);
        const games = await gamesService.fetchGames();
        commit("SET_GAMES", games.data);
        await commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_ERROR", error.message);
      }
    },
    async playDemo({ commit }, gameId) {
      try {
        const response = await gamesService.playDemo(gameId);
        const gameUrl =
          response.data[0].attributes["launch-options"]["game-url"];
        window.open(gameUrl, "_blank");
        commit("CLEAR_ERROR");
      } catch (error) {
        commit("SET_ERROR", "Error playing demo: " + error.message);
      }
    },
  },
  getters: {
    accessToken: (state) => state.accessToken,
    balance: (state) => state.balance,
    games: (state) => state.games,
    error: (state) => state.error,
  },
  plugins: [createPersistedState()],
});
