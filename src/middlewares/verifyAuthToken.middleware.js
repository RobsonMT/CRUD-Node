import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const verifyAuthToken = (request, response, next) => {
  let token = request.headers.authorization;

  if (!token) {
    return response.status(401).json({
      message: "Missing authorization headers.",
    });
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      return response.status(401).json({ message: "Invalid token." });
    }

    request.decoded = decoded;

    next();
  });
};

export default verifyAuthToken;
