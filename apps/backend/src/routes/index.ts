import { Router } from "express";
import { SocialRoutes } from "./social-network";

const Routes = Router()

Routes.use("/social-network", SocialRoutes)

export default Routes