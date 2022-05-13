const verifyUserPermissions = (request, response, next) => {
  const { uuid } = request.params;
  const { decoded } = request;

  if (!decoded.isAdm && decoded.uuid != uuid) {
    return response.status(401).json({ message: "Missing admin permissions." });
  }

  next();
};

export default verifyUserPermissions;
