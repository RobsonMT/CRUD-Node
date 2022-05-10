import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import readUsersController from "../controllers/readUsers.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import updateUserController from "../controllers/updateUser.controller";

const router = Router();

router.post("", createUserController);
router.get("", readUsersController);
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);

export default router;
