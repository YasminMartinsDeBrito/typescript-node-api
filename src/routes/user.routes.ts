import { Router } from "express";

const routes = Router()

import userCreateController from "../controllers/users/userCreate.controller";
import userListController from "../controllers/users/userList.controller";
import userListOneController from "../controllers/users/userListOne.controller";
import userLoginController from "../controllers/users/userLogin.controller"

routes.post("/users", userCreateController)
routes.post("/users/login", userLoginController)
routes.get("/users", userListController)
routes.get("/users/me", userListOneController)
export default routes