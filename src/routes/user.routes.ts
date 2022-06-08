import { Router } from "express";

import { authUser } from "../middlewares/authUser.middleware";
import { userCreateSchema } from "../middlewares/validateUserCreate.middleware";
import { validateUserCreate } from "../middlewares/validateUserCreate.middleware";

import userCreateController from "../controllers/users/userCreate.controller";
import userListController from "../controllers/users/userList.controller";
import userListOneController from "../controllers/users/userListOne.controller";
import userLoginController from "../controllers/users/userLogin.controller"
import userDeleteController from "../controllers/users/userDelete.controller"
import userUpdateController from "../controllers/users/userUpdate.controller";

const routes = Router()

export const userRoutes = () => {
    routes.post("/", validateUserCreate(userCreateSchema), userCreateController)
    routes.post("/login", userLoginController)

    routes.get("/", authUser, userListController)
    routes.get("/me",authUser, userListOneController)
    
    routes.delete("/me", authUser, userDeleteController)
    routes.patch("/me/update", authUser, userUpdateController)

    return routes
}
