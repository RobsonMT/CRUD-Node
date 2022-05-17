import { IUser } from "../database";

declare global {
  namespace Express {
    interface Request {
      user: IUser;
      decoded: IUser;
    }
  }
}
