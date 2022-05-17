import { IUser, users } from "../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { userWithoutPassword } from "../utils";

dotenv.config();

const createUserService = async ({ body }) => {
  body.password = await bcrypt.hash(body.password, 10);

  const newUser: IUser = {
    uuid: uuidv4(),
    name: body.name,
    email: body.email,
    password: body.password,
    isAdm: body.isAdm ?? false,
    createdOn: new Date(),
    updatedOn: new Date(),
  };

  users.push(newUser);

  return userWithoutPassword(newUser);
};

const readUserProfileService = ({ decoded }) => {
  const user = users.find((element) => element.uuid === decoded.uuid);

  return userWithoutPassword(user);
};

const userLoginService = ({ email, password }) => {
  const user = users.find((element) => element.email === email);

  if (!user) {
    return { status: 401, message: { message: "Wrong email/password." } };
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return { status: 401, message: { message: "Wrong email/password." } };
  }

  const token = jwt.sign(user, process.env.SECRET_KEY, {
    expiresIn: process.env.EXPIRES_IN,
  });

  return { status: 200, message: { token } };
};

const updateUserService = async ({ user, body }) => {
  if (body.password) {
    body.password = await bcrypt.hash(body.password, 10);
  }

  body.updatedOn = new Date();

  Object.assign(user, body);

  return userWithoutPassword(user);
};

const deleteUserService = ({ user }) => {
  const userIndex = users.findIndex((element) => element === user);

  users.splice(userIndex, 1);

  return { message: "User deleted with success" };
};

export {
  createUserService,
  readUserProfileService,
  userLoginService,
  updateUserService,
  deleteUserService,
};
