import listUsersService from "../services/listUsers.service";
import users from "../database"; // o users está sendo importado direto do database, fazendo o service inutil

const listUsersController = (request, response) => {
  const usersList = listUsersService();

  return response.json(users);
};

export default listUsersController;
