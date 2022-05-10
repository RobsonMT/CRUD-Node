import users from "../database";
import { v4 as uuidv4 } from "uuid";

const createUserService = (response, email, name, birthDate) => {
  const userArealdyExists = users.find((user) => user.email === email);

  if (userArealdyExists) {
    return response
      .status(404)
      .json({ error: "This email address is already being used" });
  }

  const newUser = {
    email,
    name,
    birthDate,
    id: uuidv4(),
  };

  users.push(newUser);

  return newUser;
};

export default createUserService;
