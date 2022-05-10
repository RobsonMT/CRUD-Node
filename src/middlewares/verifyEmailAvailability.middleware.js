import users from "../database";

const verifyEmailAvailability = (request, response, next) => {
  const { email } = request.body;

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    return response
      .status(409)
      .json({ error: "This email adress is already being used" });
  }

  next();
};

export default verifyEmailAvailability;
