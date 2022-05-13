import users from "../database";

const getUserByIdOr404 = (request, response, next) => {
  const { uuid } = request.params;

  const user = users.find((user) => user.uuid === uuid);

  if (!user) {
    return response.status(404).json({ error: "User not found" });
  }

  request.user = user;

  next();
};

export default getUserByIdOr404;
