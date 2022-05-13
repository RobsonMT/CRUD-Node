import { Router } from "express";
import {
  createUserController,
  readUsersController,
  readUserProfileController,
  updateUserController,
  userLoginController,
  deleteUserController,
} from "../controllers/user.controller";
import {
  getUserByIdOr404,
  adminsOnly,
  verifyAuthToken,
  verifyEmailAvailability,
  verifyUserPermissions,
} from "../middlewares";

const router = Router();

router.post("/users", verifyEmailAvailability, createUserController);
router.post("/login", userLoginController);
router.get("/users", verifyAuthToken, adminsOnly, readUsersController);
router.get("/users/profile", verifyAuthToken, readUserProfileController);
router.patch(
  "/users/:uuid",
  verifyAuthToken,
  getUserByIdOr404,
  verifyUserPermissions,
  updateUserController
);
router.delete(
  "/users/:uuid",
  verifyAuthToken,
  getUserByIdOr404,
  verifyUserPermissions,
  deleteUserController
);

export default router;
