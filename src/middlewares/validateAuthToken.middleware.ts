import { Request, Response, NextFunction } from "express";
import { User } from "../entities/User";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const validateAuthToken = (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Missing authorization headers.",
    });
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Invalid token." });
    }

    req.decoded = decoded as User;

    next();
  });
};

export default validateAuthToken;
