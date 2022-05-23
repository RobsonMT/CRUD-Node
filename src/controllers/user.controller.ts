import { Request, Response } from "express";
import { userWithoutPassword } from "../utils";
import userService from "../services/user.service";

class UserController {
  insertUserController = async (req: Request, res: Response) => {
    const user = await userService.insertUserService(req);
    return res.status(201).json(user);
  };

  loginController = async (req: Request, res: Response) => {
    const { status, message } = await userService.loginService(req);
    return res.status(status).json(message);
  };

  getAllUserController = async (req: Request, res: Response) => {
    const users = await userService.getAllUsersService();
    return res.status(200).json({ users: users });
  };

  getUserByIdController = (req: Request, res: Response) => {
    return res.status(200).json(userWithoutPassword(req.user));
  };

  updateUserController = async (req: Request, res: Response) => {
    const updatedUser = await userService.updateUserService(req);
    return res.status(200).json(updatedUser);
  };

  deleteUserController = async (req: Request, res: Response) => {
    const deletedUser = await userService.deleteUserService(req);
    return res.status(200).json(deletedUser);
  };
}

export default new UserController();
