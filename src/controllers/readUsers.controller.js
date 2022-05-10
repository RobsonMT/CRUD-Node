import readUsersService from "../services/readUsers.service";

const readUsersController = (request, response) => {
  const users = readUsersService();

  return response.json(users);
};

export default readUsersController;
