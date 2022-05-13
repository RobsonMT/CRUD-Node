import users from "../database";
import dotenv from "dotenv";

dotenv.config();

const adminsOnly = (request, response, next) => {
  const user = users.find((element) => element.uuid === request.decoded.uuid);

  if (!user.isAdm) {
    return response.status(401).json({ message: "Unauthorized" });
  }

  next();
};

export default adminsOnly;
