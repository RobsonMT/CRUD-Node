import { Router } from "express";
import { userController } from "../controllers";
import {
  getUserByIdOr404,
  adminsOnly,
  validateEmailAvailability,
  validateAuthToken,
  validateUserPermissions,
  validateUserCreate,
  validateUserUpdate,
} from "../middlewares";

const router = Router();

router.post(
  "/users",
  validateUserCreate,
  validateEmailAvailability,
  userController.insertUserController
);
router.post("/login", userController.loginController);
router.get(
  "/users",
  validateAuthToken,
  adminsOnly,
  userController.getAllUserController
);
router.get(
  "/users/:id",
  validateAuthToken,
  getUserByIdOr404,
  validateUserPermissions,
  userController.getUserByIdController
);
router.patch(
  "/users/:id",
  validateAuthToken,
  getUserByIdOr404,
  validateUserPermissions,
  validateUserUpdate,
  validateEmailAvailability,
  userController.updateUserController
);
router.delete(
  "/users/:id",
  validateAuthToken,
  getUserByIdOr404,
  validateUserPermissions,
  userController.deleteUserController
);

export default router;
