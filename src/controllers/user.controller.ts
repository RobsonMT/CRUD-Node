import { users } from "../database";
import { Request, Response } from "express";
import {
  createUserService,
  readUserProfileService,
  userLoginService,
  updateUserService,
  deleteUserService,
} from "../services";

const createUserController = async (req: Request, res: Response) => {
  const user = await createUserService(req);

  return res.status(201).json(user);
};

const readUsersController = (req: Request, res: Response) => {
  return res.status(200).json(users);
};

const readUserProfileController = (req: Request, res: Response) => {
  const user = readUserProfileService(req);

  return res.status(200).json(user);
};

const userLoginController = (req: Request, res: Response) => {
  const { status, message } = userLoginService(req.body);

  return res.status(status).json(message);
};

const updateUserController = async (req: Request, res: Response) => {
  const updatedUser = await updateUserService(req);

  return res.status(200).json(updatedUser);
};

const deleteUserController = (req: Request, res: Response) => {
  const message = deleteUserService(req);

  return res.status(200).send(message);
};

export {
  createUserController,
  readUsersController,
  readUserProfileController,
  userLoginController,
  updateUserController,
  deleteUserController,
};
