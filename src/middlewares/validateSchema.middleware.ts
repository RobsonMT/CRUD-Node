import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";

const validadeSchema =
  (shape: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = await shape.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });

      req.body = validatedData;

      return next();
    } catch (err: any) {
      return res.status(400).json({
        error: err.errors?.join(", "),
      });
    }
  };

export default validadeSchema;
