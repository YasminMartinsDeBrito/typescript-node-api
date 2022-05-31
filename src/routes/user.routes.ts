import { Router } from "express";

const routes = Router()

import { authUser } from "../middlewares/authUser.middleware";
import { userCreateSchema } from "../middlewares/validateUserCreate.middleware";
import { validateUserCreate } from "../middlewares/validateUserCreate.middleware";

import userCreateController from "../controllers/users/userCreate.controller";
import userListController from "../controllers/users/userList.controller";
import userListOneController from "../controllers/users/userListOne.controller";
import userLoginController from "../controllers/users/userLogin.controller"
import userDeleteController from "../controllers/users/userDelete.controller"
import userUpdateController from "../controllers/users/userUpdate.controller";

routes.post("/users", validateUserCreate(userCreateSchema), userCreateController)
routes.post("/users/login", userLoginController)
routes.get("/users", authUser, userListController)
routes.get("/users/me",authUser, userListOneController)
routes.delete("/users/me", authUser, userDeleteController)
routes.patch("/users/me/update", authUser, userUpdateController)

export default routes