import { users } from "../database";
import { Request, Response, NextFunction } from "express";

const getUserByIdOr404 = (req: Request, res: Response, next: NextFunction) => {
  const { uuid } = req.params;

  const user = users.find((user) => user.uuid === uuid);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  req.user = user;

  next();
};

export default getUserByIdOr404;
