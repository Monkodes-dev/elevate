import { Router } from "express";
import { postRoutes } from "./posts.routes";

export const SocialRoutes =  Router();

SocialRoutes.use("/post", postRoutes);