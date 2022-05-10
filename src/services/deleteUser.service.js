import users from "../database";

const deleteUserService = (response, id) => {
  const userIndex = users.findIndex((element) => element.id === id);

  if (userIndex === -1) {
    return response.status(404).json({ error: "User not found" });
  }

  users.splice(userIndex, 1);

  return users[userIndex];
};

export default deleteUserService;
