import { Router } from "express";

const routes = Router()

import { authUser } from "../middlewares/authUser.middleware";

import userCreateController from "../controllers/users/userCreate.controller";
import userListController from "../controllers/users/userList.controller";
import userListOneController from "../controllers/users/userListOne.controller";
import userLoginController from "../controllers/users/userLogin.controller"
import userDe

routes.post("/users", userCreateController)
routes.post("/users/login", userLoginController)
routes.get("/users", authUser, userListController)
routes.get("/users/me",authUser, userListOneController)
export default routes