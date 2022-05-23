import { NextFunction, Request, Response } from "express";
import { IUserCreate } from "../interfaces";
import { capitalizeFirstLetter } from "../utils";
import * as yup from "yup";

const userUpdateSchema: yup.SchemaOf<Partial<IUserCreate>> = yup
  .object()
  .shape({
    name: yup.string(),
    email: yup.string().email(),
    password: yup.string(),
    isAdm: yup.boolean(),
  });

const validateUserUpdate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;

    const validatedData = await userUpdateSchema.validate(data, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (validatedData.name) {
      validatedData.name = capitalizeFirstLetter(validatedData.name);
    }

    req.body = validatedData;

    next();
  } catch (err: any) {
    return res.status(400).json({
      error: err.errors?.join(", "),
    });
  }
};

export default validateUserUpdate;
