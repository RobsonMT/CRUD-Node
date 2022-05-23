import { Request, Response, NextFunction } from "express";
import { userRepository } from "../repositories";
import dotenv from "dotenv";

dotenv.config();

const adminsOnly = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.decoded;

  const user = await userRepository.findOneBy({ id });

  if (!user?.isAdm) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};

export default adminsOnly;
