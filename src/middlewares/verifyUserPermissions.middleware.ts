import { NextFunction, Request, Response } from "express";

const verifyUserPermissions = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { uuid } = req.params;
  const { decoded } = req;

  if (!decoded.isAdm && decoded.uuid != uuid) {
    return res.status(401).json({ message: "Missing admin permissions." });
  }

  next();
};

export default verifyUserPermissions;
