import { NextFunction, Request, Response } from "express";
import { userRepository } from "../repositories";

const validateEmailAvailability = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.email) {
    const foundUser = await userRepository.findOneBy({
      email: req.body.email.toLowerCase(),
    });

    if (foundUser) {
      return res.status(409).json({ error: "E-mail already registered" });
    }
  }

  next();
};

export default validateEmailAvailability;
