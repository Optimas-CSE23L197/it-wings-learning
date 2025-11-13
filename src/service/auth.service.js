import authApi from "../api/auth.api";
import storage from "./storage.service";

const authService = {
  login: async (credentials) => {
    const response = await authApi.login(credentials);

    storage.set("token", response.token);
    storage.set("user", response.user);

    return response;
  },

  logout: async () => {
    try {
      await authApi.logout();
    } catch (_) {
      storage.remove("token");
      storage.remove("user");
    }
  },

  getProfile: () => authApi.getProfile(),
};

export default authService;