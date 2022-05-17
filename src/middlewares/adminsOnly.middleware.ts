import { users } from "../database";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

const adminsOnly = (req: Request, res: Response, next: NextFunction) => {
  const user = users.find((element) => element.uuid === req.decoded.uuid);

  if (!user.isAdm) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};

export default adminsOnly;
