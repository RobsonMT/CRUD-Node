import Router from "express"; // importação errada

import createUserController from "../controllers/createUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import deleteUserController from "../controllers/deleteUser.controller";

// Router não instanciado

Router.post("", createUserController);
Router.get("", listUsersController);
Router.delete("/id", deleteUserController); // A utilização do route params está errada

export default Router;
