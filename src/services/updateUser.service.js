import users from "../database";

const updateUserService = (response, id, email, name, birthDate) => {
  const updatedUser = {
    id,
    email,
    name,
    birthDate,
  };

  const userIndex = users.findIndex((element) => element.id === id);

  if (userIndex === -1) {
    return response.status(404).json({ error: "user not found" });
  }

  users[userIndex] = { ...users[userIndex], ...updatedUser };

  return users[userIndex];
};

export default updateUserService;
