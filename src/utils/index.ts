import { User } from "../entities/User";

export const userWithoutPassword = (user: User) => {
  const { password, ...newUserData } = user;

  return newUserData;
};
