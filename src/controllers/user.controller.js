import {
  createUserService,
  userLoginService,
  readUsersService,
  readUserByIdService,
  updateUserService,
  deleteUserService,
} from "../services";

const createUser = async (request, response) => {
  const { email, name, password } = request.body;

  const user = await createUserService(email, name, password);

  return response.status(201).json(user);
};

const readUsers = (request, response) => {
  const users = readUsersService();

  return response.json(users);
};

const readUserById = (request, response) => {
  const { id } = request.params;

  const user = readUserByIdService(id);

  return response.json(user);
};

const userLogin = (request, response) => {
  const { email, password } = request.body;

  const userLogin = userLoginService(email, password);

  return response.json(userLogin);
};

const updateUser = async (request, response) => {
  const { id } = request.params;

  const { email, name, password } = request.body;

  const updatedUser = await updateUserService(id, name, email, password);

  return response.json(updatedUser);
};

const deleteUser = (request, response) => {
  const { id } = request.params;

  const deletedUser = deleteUserService(id);

  return response.json(deletedUser);
};

export {
  createUser,
  readUsers,
  readUserById,
  userLogin,
  updateUser,
  deleteUser,
};
