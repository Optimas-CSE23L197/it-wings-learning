import axiosClient from "./axiosClient";

const authApi = {
  // login user
  login: (credentials) => {
    return axiosClient.post("/auth/login", credentials);
  },
  // register user
  register: (userData) => {
    return axiosClient.post("/auth/sign-up", userData);
  },
  //   get profile
  getProfile: () => {
    return axiosClient.get("/auth/profile");
  },
  //   refresh token
  refreshToken: () => {
    return axiosClient.post("/auth/refresh-token");
  },
  //   logout
  logout: () => {
    return axiosClient.post("/auth/logout");
  },
};

export default authApi;
