import { Request, Response, NextFunction } from "express";
import { users } from "../database";

const verifyEmailAvailability = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    return res.status(400).json({ message: "E-mail already registered" });
  }

  next();
};

export default verifyEmailAvailability;
