import createUserService from "../services/createUser.service";

const createUserController = (request, response) => {
  const { email, name, birthDate } = request.body;

  const user = createUserService(email, name); // birthDate não está sendo passado pro service

  return response.send(user); // response.send() no lugar de response.json()
};

// falta a exportação
