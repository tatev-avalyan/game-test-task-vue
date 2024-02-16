import instance from "./axiosInstance";

const authService = {
  login: (form) => {
    return instance.post("v2/login", form, {
      params: {
        clientId: "default",
      },
    });
  },
  refreshToken: (refreshToken) => {
    return instance.post("auth/token", null, {
      params: {
        clientId: "default",
        refreshToken: refreshToken,
      },
    });
  },
  fetchBalance: (auth) => {
    return instance.get("v2/users/me/balance", {
      params: {
        clientId: "default",
        auth,
      },
    });
  },
};

const gamesService = {
  fetchGames: () => {
    return instance.get("v2/casino/games", {
      params: {
        clientId: "default",
      },
    });
  },
  playDemo: (gameId) => {
    return instance.post(`v2/casino/games/${gameId}/session-demo`, null, {
      params: {
        clientId: "default",
      },
    });
  },
};

export { authService, gamesService };
