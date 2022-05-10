import deleteUserService from "../services/deleteUser.service";
import users from "../database";

const deleteUserController = (request, response) => {
  const { id } = request.body; // id está sendo pego do body e nao do params

  const userIndex = users.findIndex((element) => element.id === id);

  if (userIndex === -1) {
    return response.status(404).json("User not found");
  }

  users.splice(userIndex, 1);

  return response.json("Usuário excluido");
};

export default deleteUserController;

// Lógica está sendo toda feita no controller
