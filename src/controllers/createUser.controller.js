import createUserService from "../services/createUser.service";

const createUserController = (request, response) => {
  const { email, name, birthDate } = request.body;

  const user = createUserService(response, email, name, birthDate);

  return response.status(201).json(user);
};

export default createUserController;
