import { User } from "../entities/User";

export const userWithoutPassword = (user: User) => {
  const { password, ...newUserData } = user;

  return newUserData;
};

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
