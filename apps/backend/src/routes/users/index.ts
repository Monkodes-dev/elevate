import { Router } from "express";
import { UserController } from "../../http/controllers/users/users.controller";
import UserValidator from "../../http/schemas/user/user.schemas"

const UserRouter = Router()
const controller = new UserController()
const validator = new UserValidator()

UserRouter.get("/:id", controller.getById)
UserRouter.get("/", controller.getAll)
UserRouter.post("/", /*validator.validateCreateUserRequest,*/ controller.create)
UserRouter.put("/:id", controller.update)
UserRouter.delete("/:id", controller.delete)

export default UserRouter