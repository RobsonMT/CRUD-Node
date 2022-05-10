import updateUserService from "../services/updateUser.service";

const updateUserController = (request, response) => {
  const { id } = request.params;
  const { email, name, birthDate } = request.body;

  const updatedUser = updateUserService(response, id, name, email, birthDate);

  return response.json(updatedUser);
};

export default updateUserController;
