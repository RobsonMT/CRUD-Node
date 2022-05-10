import deleteUserService from "../services/deleteUser.service";

const deleteUserController = (request, response) => {
  const { id } = request.params;

  const deletedUser = deleteUserService(response, id);

  return response.json(deletedUser);
};

export default deleteUserController;
