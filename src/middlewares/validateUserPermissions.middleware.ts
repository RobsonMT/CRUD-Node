import { NextFunction, Request, Response } from "express";

const validateUserPermissions = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.decoded.isAdm && req.decoded.id != req.params.id) {
    return res.status(401).json({ message: "Missing admin permissions." });
  }

  next();
};

export default validateUserPermissions;
