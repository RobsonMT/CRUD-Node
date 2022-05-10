import { Router } from "express";
import {
  createUser,
  readUserById,
  readUsers,
  updateUser,
  userLogin,
  deleteUser,
} from "../controllers";
import {
  verifyAuthToken,
  verifyEmailAvailability,
  verifyUserIdExists,
} from "../middlewares";

const router = Router();

router.post("/signup", verifyEmailAvailability, createUser);
router.post("/signin", userLogin);
router.get("", readUsers);
router.get("/:id", verifyUserIdExists, readUserById);
router.put("/:id", verifyAuthToken, verifyUserIdExists, updateUser);
router.delete("/:id", verifyAuthToken, verifyUserIdExists, deleteUser);

export default router;
