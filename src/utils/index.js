const userWithoutPassword = (user) => {
  const { password, ...newUserData } = user;

  return newUserData;
};

export { userWithoutPassword };
