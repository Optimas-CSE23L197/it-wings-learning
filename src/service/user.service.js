import userApi from "../api/user.api";

const userService = {
  getAllUsers: () => userApi.getAllUsers(),
  getUserById: (id) => userApi.getUserById(id),
  updatedUser: (id, data) => userApi.updatedUser(id, data),
  delete: (id) => userApi.deleteUser(id),
};

export default userService;
