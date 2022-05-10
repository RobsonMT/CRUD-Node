import users from "../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createUserService = async (email, name, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    email,
    name,
    password: hashedPassword,
    id: uuidv4(),
  };

  users.push(newUser);

  return newUser;
};

const readUsersService = () => {
  return users;
};

const readUserByIdService = (id) => {
  const user = users.find((element) => element.id === id);

  return user;
};

const userLoginService = (email, password) => {
  const user = users.find((element) => element.email === email);

  if (!user) {
    return "Email or password mismatch";
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return "Email or password mismatch";
  }

  const token = jwt.sign({ email: email }, "SECRET_KEY", { expiresIn: "24h" });

  return { token: token };
};

const updateUserService = async (id, email, name, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const updatedUser = {
    email,
    name,
    password: hashedPassword,
    id,
  };

  const userIndex = users.findIndex((element) => element.id === id);

  users[userIndex] = { ...users[userIndex], ...updatedUser };

  return updatedUser;
};

const deleteUserService = (id) => {
  const userIndex = users.findIndex((element) => element.id === id);

  const deletedUser = users.splice(userIndex, 1);

  return deletedUser;
};

export {
  createUserService,
  readUsersService,
  readUserByIdService,
  userLoginService,
  updateUserService,
  deleteUserService,
};
