import { User } from "../entities/User";
import { userWithoutPassword } from "../utils";
import { Request } from "express";
import { userRepository } from "../repositories";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { IStatusMesage } from "../interfaces";

dotenv.config();

class UserService {
  insertUserService = async ({ body }: Request): Promise<Partial<User>> => {
    const newUser = await userRepository.save({ ...body });
    return userWithoutPassword(newUser);
  };

  loginService = async ({ body }: Request): Promise<IStatusMesage> => {
    const foundUser = await userRepository.findOneBy({
      email: body.email.toLowerCase(),
    });

    if (!foundUser) {
      return { status: 403, message: { message: "Wrong email/password." } };
    }

    if (!(await foundUser.comparePwd(body.password))) {
      return { status: 403, message: { message: "Wrong email/password." } };
    }

    const token = jwt.sign({ ...foundUser }, process.env.SECRET_KEY as string, {
      expiresIn: process.env.EXPIRES_IN,
    });

    return { status: 200, message: { token } };
  };

  getAllUsersService = async (): Promise<Array<Partial<User>>> => {
    const users = (await userRepository.findAll()).map((user: User) =>
      userWithoutPassword(user)
    );

    return users;
  };

  updateUserService = async ({
    user,
    body,
  }: Request): Promise<Partial<User>> => {
    await userRepository.update(user.id, { ...body });
    return userWithoutPassword({ ...user, ...body });
  };

  deleteUserService = async ({ user }: Request): Promise<Partial<User>> => {
    await userRepository.delete(user.id);
    return userWithoutPassword(user);
  };
}

export default new UserService();
