import { Router } from "express";

import UserRouter from "./users";

const Routes = Router()

Routes.use("/users", UserRouter)

export default Routes