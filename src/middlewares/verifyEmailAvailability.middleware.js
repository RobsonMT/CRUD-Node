import users from "../database";

const verifyEmailAvailability = (request, response, next) => {
  const { email } = request.body;

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    return response.status(400).json({ message: "E-mail already registered" });
  }

  next();
};

export default verifyEmailAvailability;
