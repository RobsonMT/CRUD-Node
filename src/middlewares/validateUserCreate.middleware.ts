import { NextFunction, Request, Response } from "express";
import { IUserCreate } from "../interfaces";
import { capitalizeFirstLetter } from "../utils";
import * as yup from "yup";

const userCreateSchema: yup.SchemaOf<IUserCreate> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  isAdm: yup.boolean(),
});

const validateUserCreate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;

    const validatedData = await userCreateSchema.validate(data, {
      abortEarly: false,
      stripUnknown: true,
    });

    validatedData.name = capitalizeFirstLetter(validatedData.name);

    req.body = validatedData;

    next();
  } catch (err: any) {
    return res.status(400).json({
      error: err.errors?.join(", "),
    });
  }
};

export default validateUserCreate;
