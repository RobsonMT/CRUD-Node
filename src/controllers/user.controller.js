import users from "../database";
import {
  createUserService,
  readUserProfileService,
  userLoginService,
  updateUserService,
  deleteUserService,
} from "../services";

const createUserController = async (request, response) => {
  const user = await createUserService(request);

  return response.status(201).json(user);
};

const readUsersController = (request, response) => {
  return response.status(200).json(users);
};

const readUserProfileController = (request, response) => {
  const user = readUserProfileService(request);

  return response.status(200).json(user);
};

const userLoginController = (request, response) => {
  const { status, message } = userLoginService(request.body);

  return response.status(status).json(message);
};

const updateUserController = async (request, response) => {
  const updatedUser = await updateUserService(request);

  return response.status(200).json(updatedUser);
};

const deleteUserController = (request, response) => {
  const message = deleteUserService(request);

  return response.status(200).send(message);
};

export {
  createUserController,
  readUsersController,
  readUserProfileController,
  userLoginController,
  updateUserController,
  deleteUserController,
};
