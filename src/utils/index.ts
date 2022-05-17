import { IUser } from "../database";

const userWithoutPassword = (user: IUser) => {
  const { password, ...newUserData } = user;

  return newUserData;
};

export { userWithoutPassword };
