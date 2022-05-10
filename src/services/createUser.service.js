import users from "../database";
import { v4 as uuidv4 } from "uuid";

const createUserService = (email, name, birthDate) => {
  const userArealdyExists = users.find((user) => user.email === email);

  if (userArealdyExists) {
    return "This email address is already being used";
  }

  const newUser = {
    email,
    name,
    birthDate,
    // não está criando o id
  };

  users.push(newUser);

  // não esta retornando o user
};

export default createUserService;
